// Get nic caged
chrome.tabs.onUpdated.addListener(function(id, info, tab) { 
	if (info.status == "complete") {
		chrome.tabs.executeScript(null, {code: "var images = document.getElementsByTagName('img'); console.log(images.length); for (var i; i < images.length; ++i) {images[i].src = 'https://www.bing.com/th?id=OIP.DReqiBMZK8qGMB284azyAAHaJY&pid=Api&rs=1'}"})
	}	
})
