var p = String.prototype;

// normalize always returns the string in spinal-case
function normalize(str) {
	var arr = str.split(/[\s-_.]/);

	if(arr.length < 2) {
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

// Converts spinal-case, snake_case or space case to camelCase
p.toCamelCase = function(pascalCase) {
	var arr = normalize(this);

	for(var i = pascalCase ? 0 : 1; i < arr.length; i++) {
		arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
	}

	return arr.join('');
};

// Converts spinal-case, snake_case or space case to PascalCase
p.toPascalCase = function() {
	return this.toCamelCase(true);
};

// converts camelCase or PascalCase to spinal-case/
p.toSpinalCase = function() {
	return normalize(this).join('-');
};

p.toDotCase = function() {
	return normalize(this).join('.');
};

// converts camelCase or PascalCase to snake_case/
p.toSnakeCase = function() {
	return normalize(this).join('_');
};

p.toSpaceCase = function(capitals, divider) {
	return normalize(this).map(function(part) {
		return capitals ? part.charAt(0).toUpperCase() + part.slice(1) : part;
	}).join(' ');
};
