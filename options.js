// Saves options to chrome.storage
function run()
{
	chrome.tabs.create({url:"https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=12&ct=1402772161&rver=6.0.5286.0&wp=MBI&wreply=http:%2F%2Fwww.bing.com%2FPassport.aspx%3Frequrl%3Dhttp%253a%252f%252fwww.bing.com%252frewards%252fredeem%252fall%253fmeru%253d%2525252f&lc=1033&id=264960", active:false},function(tab)
	{
		window.onload = function() {
			console.log("hi");
			document.getElementById('i0116').value = "kdsjfaksd";
			document.getElementById('i0118').value = "hi";
		}
	});
}

//document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('run').addEventListener('click',
    run);