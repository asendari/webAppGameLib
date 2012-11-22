(function(){
	var root = this;

	var isoEngine = root.isoEngine = _iso = {};

	var Projection = _iso.Projection = function(coord3d){
		var _2d = {};
		_2d.x = Math.sqrt(2)/2 * (coord3d.x - coord3d.y);
		_2d.y = (Math.sqrt(2/3) * coord3d.z - 1/Math.sqrt(6)*(coord3d.x + coord3d.y)) *-1;
		return _2d;
	};

	var createScene = _iso.createScene = function(el, w, h){
		var c = document.createElement("canvas");
		c.height = h;
		c.width = w;
		el.appendChild(c);

		return c.getContext("2d");
	};

	var ISOObject = _iso.ISOObject = {};

	ISOObject.cube = function(edge){
		var c = [
			{x:0,y:0,z:edge},
			{x:0,y:edge,z:edge},
			{x:edge,y:edge,z:edge},
			{x:edge,y:0,z:edge},
			{x:0,y:0,z:edge},
			{x:0,y:0,z:0},
			{x:0,y:edge,z:0},
			{x:edge,y:edge,z:0},
			{x:edge,y:0,z:0},
			{x:0,y:0,z:0}
			];
		return c;
	};




})(document, this);