console.log("background!");

chrome.storage.onChanged.addListener(function(changes, namespace) {
	var timestamp = Date.parse(changes.time.newValue);
	console.log(timestamp, changes.time.newValue, Date.now());
	var timeout = timestamp - Date.now();
	if (timeout > 0) {
		console.log(timeout)
		setTimeout(notify, timeout)
	}	
});

function notify() {
	if (window.Notification) {
		var notify = new Notification('hello button!',{});
	}
}