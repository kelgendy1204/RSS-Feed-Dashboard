// using localstorage for data persistence

// feeds key name in localstorage
let feedsName = 'rss-feeds';

function getFeeds() {
	let feeds;
	try {
		// catch json parse error
		feeds = JSON.parse(localStorage.getItem(feedsName));
		if(feeds == null){
			localStorage.setItem(feedsName, '[]');
			feeds = JSON.parse(localStorage.getItem(feedsName));
		}
	}
	catch(err) {
		localStorage.setItem(feedsName, '[]');
		feeds = JSON.parse(localStorage.getItem(feedsName));
	}
	return feeds;
}

function saveFeed(feed) {
	let feeds = getFeeds();
	feeds.push(feed);
	localStorage.setItem(feedsName, JSON.stringify(feeds));
	return feeds;
}

function deleteFeed(feed) {
	let newFeeds = getFeeds().filter((elem) => {
		return elem.id != feed.id;
	});
	localStorage.setItem(feedsName, JSON.stringify(newFeeds));
	return newFeeds;
}

// generate unique id for every feed
function generateUniqueId() {
	function s4() {
		return Math.floor((1 + Math.random()) * 100000);
	}
	let timestamp = new Date().getTime();
	return Number(s4().toString() + timestamp.toString());
}

export default {
	generateUniqueId,
	getFeeds,
	deleteFeed,
	saveFeed
};