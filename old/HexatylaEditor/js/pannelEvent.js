var ObjectRaceCreation = function(_nb, _name, _race)
{
	this.nb 	= _nb;
	this.name 	= _name;
	this.race 	= _race;
}

var ContainerObjectRaceCreation = function()
{
	var List_ObjectRaceCreation = [];

	this.add = function(_nb, _name, _race)
	{
		var i = 0;
		while (i < List_ObjectRaceCreation.length)
		{
			if (List_ObjectRaceCreation[i].name == _name && List_ObjectRaceCreation[i].race == _race) {
				List_ObjectRaceCreation[i].nb += _nb;
				return;
			}
			i++;
		}
		List_ObjectRaceCreation.push(new ObjectRaceCreation(_nb, _name, _race));
	}

	this.min = function(_nb, _name, _race)
	{
		var i = 0;
		while (i < List_ObjectRaceCreation.length)
		{
			if (List_ObjectRaceCreation[i].name == _name && List_ObjectRaceCreation[i].race == _race) {
				List_ObjectRaceCreation[i].nb -= _nb;
				// SUPPRESION SI - OU = A 0
				if (List_ObjectRaceCreation[i].nb <= 0) {
					List_ObjectRaceCreation.splice(i, 1);
				}
				return;
			}
			i++;
		}
	}

	this.HTML = function()
	{
		var i = 0;
		var _data = "";

		while (i < List_ObjectRaceCreation.length)
		{
			_data += '<span style="color:#444">'+ List_ObjectRaceCreation[i].name +'{'+ List_ObjectRaceCreation[i].race +'}['+List_ObjectRaceCreation[i].nb+']</span>';
			i++;
		}
		return (_data);
	}

	this.JSON = function()
	{
		var i = 0;
		var _data = "[";
		var first = true;

		while (i < List_ObjectRaceCreation.length)
		{
			if (!first)
				_data += ',';
			_data += '{"name":"'+ List_ObjectRaceCreation[i].name +'","race":"'+ List_ObjectRaceCreation[i].race +'","nb":'+List_ObjectRaceCreation[i].nb+'}';
			first = false;
			i++;
		}
		_data += "]";
		return (_data);
	}
}

var ObjectOnMap = function(_nb, _name, _x, _y)
{
	this.nb 	= _nb;
	this.name 	= _name;
	this.x 		= _x;
	this.y 		= _y;
}

var ContainerObjectOnMap = function()
{
	var List_ObjectOnMap = [];

	this.add = function(_nb, _name, _x, _y)
	{
		var i = 0;
		while (i < List_ObjectOnMap.length)
		{
			if (List_ObjectOnMap[i].name == _name && List_ObjectOnMap[i].x == _x && List_ObjectOnMap[i].y == _y) {
				List_ObjectOnMap[i].nb += _nb;
				return;
			}
			i++;
		}
		List_ObjectOnMap.push(new ObjectOnMap(_nb, _name, _x, _y));
	}

	this.min = function(_nb, _name, _x, _y)
	{
		var i = 0;
		while (i < List_ObjectOnMap.length)
		{
			if (List_ObjectOnMap[i].name == _name && List_ObjectOnMap[i].x == _x && List_ObjectOnMap[i].y == _y) {
				List_ObjectOnMap[i].nb -= _nb;
				// SUPPRESION SI - OU = A 0
				if (List_ObjectOnMap[i].nb <= 0) {
					List_ObjectOnMap.splice(i, 1);
				}
				return;
			}
			i++;
		}
	}

	this.HTML = function()
	{
		var i = 0;
		var _data = "";

		while (i < List_ObjectOnMap.length)
		{
			_data += '<span style="color:#444">['+ List_ObjectOnMap[i].x +':'+List_ObjectOnMap[i].y+']'+ List_ObjectOnMap[i].name +'{'+List_ObjectOnMap[i].nb+'}</span>';
			i++;
		}
		return (_data);
	}

	this.JSON = function()
	{
		var i = 0;
		var _data = "[";
		var first = true;

		while (i < List_ObjectOnMap.length)
		{
			if (!first)
				_data += ',';
			_data += '{"name":"'+ List_ObjectOnMap[i].name +'","nb":'+List_ObjectOnMap[i].nb+',"x":'+List_ObjectOnMap[i].x+',"y":'+List_ObjectOnMap[i].y+'}';
			first = false;
			i++;
		}
		_data += "]";
		return (_data);
	}
}

var ObjectBeginingPosition = function(_x, _y)
{
	this.x 		= _x;
	this.y 		= _y;
}

var ContainerObjectBeginingPosition = function()
{
	var List_ObjectBeginingPosition = []

	this.add = function(_x, _y)
	{
		var i = 0;
		while (i < List_ObjectBeginingPosition.length)
		{
			if (List_ObjectBeginingPosition[i].x == _x && List_ObjectBeginingPosition[i].y == _y) {
				return;
			}
			i++;
		}
		List_ObjectBeginingPosition.push(new ObjectBeginingPosition(_x, _y));
	}

	this.min = function(_x, _y)
	{
		var i = 0;
		while (i < List_ObjectBeginingPosition.length)
		{
			if (List_ObjectBeginingPosition[i].x == _x && List_ObjectBeginingPosition[i].y == _y) {
				// SUPPRESION SI - OU = A 0
				List_ObjectBeginingPosition.splice(i, 1);
				return;
			}
			i++;
		}
	}

	this.HTML = function()
	{
		var i = 0;
		var _data = "";

		while (i < List_ObjectBeginingPosition.length)
		{
			_data += '<span style="color:#444">['+ List_ObjectBeginingPosition[i].x +':'+List_ObjectBeginingPosition[i].y+']</span>';
			i++;
		}
		return (_data);
	}

	this.JSON = function()
	{
		var i = 0;
		var _data = "[";
		var first = true;

		while (i < List_ObjectBeginingPosition.length)
		{
			if (!first)
				_data += ',';
			_data += '{"x":'+List_ObjectBeginingPosition[i].x+',"y":'+List_ObjectBeginingPosition[i].y+'}';
			first = false;
			i++;
		}
		_data += "]";
		return (_data);
	}
}
