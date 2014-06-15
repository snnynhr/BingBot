var URL = "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=12&ct=1402772161&rver=6.0.5286.0&wp=MBI&wreply=http:%2F%2Fwww.bing.com%2FPassport.aspx%3Frequrl%3Dhttp%253a%252f%252fwww.bing.com%252frewards%252fredeem%252fall%253fmeru%253d%2525252f&lc=1033&id=264960"
function run()
{
	chrome.tabs.create({url:URL},function(tab)
	{
		
	});
}
document.getElementById('run').addEventListener('click',
    run);