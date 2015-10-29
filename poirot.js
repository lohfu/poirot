// normalize always returns the string in spinal-case
function normalize(str) {
	// TODO trim
	var arr = str.split(/[\s-_.]/);

	if(arr.length < 2) {
		// TODO allow other characters eg ÅÄÖ
		var matches = str.match(/([A-Z])/g);
		arr = str.split(/[A-Z]/).map(function(part, index) {
			if(index > 0) part = matches[index - 1] + part;
			
			return part.toLowerCase();
		});
		if(!arr[0]) arr.shift();
	} else
		arr = arr.map(function(part) { return part.toLowerCase(); });

	return arr;
}

function camelCase(str) {
	var arr = normalize(str);

	for(var i = 1; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	return arr.join('');
}

function pascalCase(str) {
	var arr = normalize(str);

	for(var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	return arr.join('');
}

function spinalCase(str) {
	return normalize(str).join('-');
}

function dotCase(str) {
	return normalize(str).join('.');
}

function snakeCase(str) {
	return normalize(str).join('_');
}

function spaceCase(str, capitals, divider) {
	return normalize(str).map(function(part) {
		return capitals ? part.charAt(0).toUpperCase() + part.slice(1) : part;
	}).join(' ');
}

function capitalSpaceCase(str, divider) {
	return spaceCase(str, true, divider);
}


module.exports = {
	camelCase: camelCase,
	dotCase: dotCase,
	pascalCase: pascalCase,
	spinalCase: spinalCase,
	kebabCase: spinalCase,
	snakeCase: snakeCase,
	spaceCase: spaceCase,
	capitalSpaceCase: capitalSpaceCase
};

