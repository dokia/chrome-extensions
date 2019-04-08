console.log("popup")

document.getElementById("time").addEventListener("input", function(){
	var v = document.getElementById("time").value;
	console.log(v);

	chrome.storage.sync.set({time:v}, function(){
		console.log("Finish storage!");
	});
});

document.getElementById("notify_button").addEventListener("click", function(){
	console.log("click button");
	if (window.Notification) {
		var notify = new Notification('hello button!',{
			
		});
	} else {
		alert("Your browser doesn't support desk notification!");
	}
});