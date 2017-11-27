var request = require('request'),
	cheerio = require('cheerio')
	URI = require('uri-js')

var GmeMusicDefiner = function (url) {
	this.url = url;
}
GmeMusicDefiner.prototype.getDesc = function () {
	var me = this
	return new Promise(function (respond,reject) {
		var parsedUrlHost = URI.parse(me.url).host
		var desc = {}
		if(parsedUrlHost.match("youtu")){

			me.metaFetch().then(function (final) {
				desc.description = finall
				respond(desc)
			})
		} else if (parsedUrlHost.match("soundcloud")){
			urlArray = me.url.split('/')
			var descString = "Song: " + urlArray.pop() + " ||| by: " + urlArray.pop()
			desc.description = descString;
			respond(desc)
		}	else {
			desc.description = "no idea"
			respond(desc)
		}
	})
}

GmeMusicDefiner.prototype.metaFetch = function () {
	var me = this
	return new Promise(function (res,rej) {
		var options = {uri: me.url, 
			gzip : true, 
			headers: {'Content-Type': 'application/json'}}

			request(options,function (req,response,body) {
				var doc = cheerio.load(body);
				var title = doc('head > title').text();
				res(title)
			},function (err) {
				rej(err)
			}
			) 
		})
}	

module.exports = GmeMusicDefiner
