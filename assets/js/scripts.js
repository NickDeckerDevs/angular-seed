
// helper functions ========================================

function consoleObject(jsobj) {
	var json = JSON.stringify(jsobj, null, 4);
	console.log(json);
}

function stringifyParams(params) {
	var urlParams = '?';
	Object.keys(params).forEach(function(key) {
		urlParams += '&' + key + '=' + params[key];
	});
	return urlParams;
}
