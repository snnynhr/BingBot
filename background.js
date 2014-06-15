chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "remove")
      chrome.cookies.getAll({url: "https://www.bing.com/"},function(e){
      	console.log("hi");
		e.forEach(function(a){
			console.log(a.domain+":"+a.path+":"+a.name+":"+a.storeId+":"+a.value);
			chrome.cookies.remove({url:"http"+(a.secure?"s":"")+"://"+a.domain+a.path,name:a.name,storeId:a.storeId},function(d)
			{
				console.log("REMOVED: "+d.url+" "+d.name);
			})
		});
		//a&&a();
		//setTimeout(function(){f()},2E3)
	});
      sendResponse({farewell: "goodbye"});
  });