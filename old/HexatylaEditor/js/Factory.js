var Manager = function()
{
	var list_race = ["all", "neutral"];
	this.list_race = list_race;
	
	var list_unit = [];
	var list_building = [];
	var list_heros = [];;
	var list_object = [];
	var list_projectile = [];
	var list_capacity = [];
	var list_spell = [];
	var list_amelioration = [];
	var list_effect = [];
	var list_event = [];
	var list_map = [];
	var map = [];
	var xMap = 0;
	var yMap = 0;
	var mapRessValue = {};
	var typeByName = {};

	this.getRacesToString = function()
	{
		var _data = "";
		var init = false;
		var i = 0;
		while (i < list_race.length) {
			if (list_race[i] != "all")
			{
				if (init == false)
				{
					init = true;
				}
				else {
					_data += ",";
				}
				_data += '"'+ list_race[i] +'"';
			}
			i += 1;
		}
		return (_data);
	}

	var findElement = function(_table, _value)
	{
		for (var i = 0; i < _table.length; i++)
		{
			if (_table[i].name == _value) {
				return (true);
			}
		}
		return (false);
	}

	var findElementByIndex = function(_table, _value)
	{
		for (var i = 0; i < _table.length; i++)
		{
			if (_table[i].name == _value) {
				return (i);
			}
		}
		return (-1);
	}

	var getObjectTable = function(_table)
	{
		var _e = [];
		for (var i = 0; i < _table.length; i++){
			_e.push(_table[i].name);
		}
		return (_e);
	}


	this.exist = function(name)
	{
		if (findElement(list_unit, name))
			return (1);
		if (findElement(list_building, name))
			return (2);
		if (findElement(list_heros, name))
			return (3);
		if (findElement(list_object, name))
			return (4);
		if (findElement(list_projectile, name))
			return (5);
		if (findElement(list_capacity, name))
			return (6);
		if (findElement(list_spell, name))
			return (7);
		if (findElement(list_amelioration, name))
			return (8);
		if (findElement(list_effect, name))
			return (9);
		return (0);
	}

	var exist = this.exist;

	this.findAnElement = function(_name) {
		var i = findElementByIndex(list_unit, _name);
		if (i >= 0) {
			return (list_unit[i].getInstance());
		}
		i = findElementByIndex(list_heros, _name);
		if (i >= 0) {
			return (list_heros[i].getInstance());
		}
		i = findElementByIndex(list_building, _name);
		if (i >= 0) {
			return (list_building[i].getInstance());
		}
		i = findElementByIndex(list_capacity, _name);
		if (i >= 0) {
			return (list_capacity[i].getInstance());
		}
		i = findElementByIndex(list_amelioration, _name);
		if (i >= 0) {
			return (list_amelioration[i].getInstance());
		}
		i = findElementByIndex(list_object, _name);
		if (i >= 0) {
			return (list_object[i].getInstance());
		}
		i = findElementByIndex(list_spell, _name);
		if (i >= 0) {
			return (list_spell[i].getInstance());
		}
		return (null);
	};

	this.add_string_to_requirement = function(_list)
    {
        var i = 0;
        var j = 0;
        while (i < _list.length)
        {
            j = 0;
            var e = _list[i];
            while (j < e.reqTMP.length)
            {
                var capa = this.findAnElement(e.reqTMP[j]);
                if (capa){
                    e.requirements.push(capa);
    			}
                j++;
            }
            i++;
        }
    };

	this.add_string_to_element = function(_list)
    {
        var i = 0;
        var j = 0;
        while (i < _list.length)
        {
            j = 0;
            var e = _list[i];
            while (j < e.elemTMP.length)
            {
                var capa = this.findAnElement(e.elemTMP[j]);
                if (capa){
                	console.log("new capa !!")
                    e.elements.push(capa);
    			}
    			else{
    				console.log("not found");
    			}
                j++;
            }
            i++;
        }
    };

    this.convert_string_to_requirement = function()
    {
        var i = 0;
        this.add_string_to_requirement(list_unit);
        this.add_string_to_requirement(list_building);
        this.add_string_to_requirement(list_heros);
        this.add_string_to_requirement(list_object);
        this.add_string_to_requirement(list_projectile);
        this.add_string_to_requirement(list_capacity);
        this.add_string_to_requirement(list_spell);
        this.add_string_to_requirement(list_amelioration);
        this.add_string_to_requirement(list_effect);
    };

    this.convert_string_to_element = function()
    {
        var i = 0;
        this.add_string_to_element(list_unit);
        this.add_string_to_element(list_building);
        this.add_string_to_element(list_heros);
        this.add_string_to_element(list_object);
        this.add_string_to_element(list_projectile);
        this.add_string_to_element(list_capacity);
        this.add_string_to_element(list_spell);
        this.add_string_to_element(list_amelioration);
        this.add_string_to_element(list_effect);
    };

	/*
	** UNIT ==============================================================
	*/

	this.newUnit = function(_name)
	{
		var elem = exist(_name)
		if (elem != 0) {
			return (elem);
		}
		var unit = new ObjectHexatyla("Unit", _name);
		list_unit.push(unit);
		typeByName[unit] = "Units";
		return (unit);
	}

	this.deleteUnit = function(_name)
	{
		var i = findElementByIndex(list_unit, _name);
		if (i >= 0) {
			delete typeByName[list_unit[i]];
			list_unit.splice(i, 1);
			return (true);
		}
		return (false);
	}

	this.getUnit = function(_name)
	{
		var i = findElementByIndex(list_unit, _name);
		if (i >= 0) {
			return (list_unit[i].getInstance());
		}
		return (null);
	}

	this.getUnits = function()
	{
		return (getObjectTable(list_unit));
	}

	this.sizeUnits = function()
	{
		return (list_unit.length);
	}

	/*
	** BUILDING ==============================================================
	*/

	this.newBuilding = function(_name)
	{
		var elem = exist(_name);
		if (elem != 0) {
			return (elem);
		}
		var building = new ObjectHexatyla("Building", _name);
		list_building.push(building);
		typeByName[building] = "Buildings";
		return (building);
	}

	this.deleteBuilding = function(_name)
	{
		var i = findElementByIndex(list_building, _name);
		if (i >= 0) {
			delete typeByName[list_building[i]];
			list_building.splice(i, 1);
			return (true);
		}
		return (false);
	}

	this.getBuilding = function(_name)
	{
		var i = findElementByIndex(list_building, _name);
		if (i >= 0) {
			return (list_building[i].getInstance());
		}
		return (null);
	}

	this.getBuildings = function()
	{
		return (getObjectTable(list_building));
	}

	this.sizeBuildings = function()
	{
		return (list_building.length);
	}

	/*
	** HEROS ==============================================================
	*/

	this.newHero = function(_name)
	{
		var elem = exist(_name)
		if (elem != 0) {
			return (elem);
		}
		var hero = new ObjectHexatyla("Heros", _name);
		list_heros.push(hero);
		typeByName[hero] = "Heros";
		return (hero);
	}

	this.deleteHero = function(_name)
	{
		var i = findElementByIndex(list_heros, _name);
		if (i >= 0) {
			delete typeByName[list_heros[i]];
			list_heros.splice(i, 1);
			return (true);
		}
		return (false);
	}

	this.getHero = function(_name)
	{
		var i = findElementByIndex(list_heros, _name);
		if (i >= 0) {
			return (list_heros[i].getInstance());
		}
		return (null);
	}

	this.getHeros = function()
	{
		return (getObjectTable(list_heros));
	}

	this.sizeHeros = function()
	{
		return (list_heros.length);
	}

	/*
	** OBJECT ==============================================================
	*/

	this.newObject = function(_name)
	{
		var elem = exist(_name)
		if (elem != 0)
			return (elem);
		var object = new ObjectHexatyla("Object", _name);
		list_object.push(object);
		typeByName[object] = "Objects";
		return (object);
	}

	this.deleteObject = function(_name)
	{
		var i = findElementByIndex(list_object, _name);
		if (i >= 0) {
			list_object.splice(i, 1);
			delete typeByName[list_object[i]];
			return (true);
		}
		return (false);
	}

	this.getObject = function(_name)
	{
		var i = findElementByIndex(list_object, _name);
		if (i >= 0) {
			return (list_object[i].getInstance());
		}
		return (null);
	}

	this.getObjects = function()
	{
		return (getObjectTable(list_object));
	}

	this.sizeObjects = function()
	{
		return (list_object.length);
	}

	/*
	** PROJECTILE ==============================================================
	*/

	this.newProjectile = function(_name)
	{
		var elem = exist(_name)
		if (elem != 0) {
			return (elem);
		}
		var projectile = new ObjectHexatyla("Projectile", _name);
		list_projectile.push(projectile);
		typeByName[projectile] = "Projectiles";
		return (projectile);
	}

	this.deleteProjectile = function(_name)
	{
		var i = findElementByIndex(list_projectile, _name);
		if (i >= 0) {
			delete typeByName[list_projectile[i]];
			list_projectile.splice(i, 1);
			return (true);
		}
		return (false);
	}

	this.getProjectile = function(_name)
	{
		var i = findElementByIndex(list_projectile, _name);
		if (i >= 0){
			return (list_projectile[i].getInstance());
		}
		return (null);
	}

	this.getProjectiles = function()
	{
		return (getObjectTable(list_projectile));
	}

	this.sizeProjectiles = function()
	{
		return (list_projectile.length);
	}

	/*
	** CAPACITY ==============================================================
	*/

	this.newCapacity = function(_name)
	{
		var elem = exist(_name)
		if (elem != 0){
			return (elem);
		}
		var capacity = new ObjectHexatyla("Capacity", _name);
		list_capacity.push(capacity);
		typeByName[capacity] = "Capacitys";
		return (capacity);
	}

	this.deleteCapacity = function(_name)
	{
		var i = findElementByIndex(list_capacity, _name);
		if (i >= 0){
			delete typeByName[list_capacity[i]];
			list_capacity.splice(i, 1);
			return (true);
		}
		return (false);
	}

	this.getCapacity = function(_name)
	{
		var i = findElementByIndex(list_capacity, _name);
		if (i >= 0) {
			return (list_capacity[i].getInstance());
		}
		return (null);
	}

	this.getCapacitys = function()
	{
		return (getObjectTable(list_capacity));
	}

	this.sizeCapacitys = function()
	{
		return (list_capacity.length);
	}

	/*
	** SPELL ==============================================================
	*/

	this.newSpell = function(_name)
	{
		var elem = exist(_name)
		if (elem != 0){
			return (elem);
		}
		var spell = new ObjectHexatyla("Spell", _name);
		list_spell.push(spell);
		typeByName[spell] = "Spells";
		return (spell);
	}

	this.deleteSpell = function(_name)
	{
		var i = findElementByIndex(list_spell, _name);
		if (i >= 0){
			delete typeByName[list_spell[i]];
			list_spell.splice(i, 1);
			return (true);
		}
		return (false);
	}

	this.getSpell = function(_name)
	{
		var i = findElementByIndex(list_spell, _name);
		if (i >= 0) {
			return (list_spell[i].getInstance());
		}
		return (null);
	}

	this.getSpells = function()
	{
		return (getObjectTable(list_spell));
	}


	this.sizeSpells = function()
	{
		return (list_spell.length);
	}
	/*
	** EMELIORATION ==============================================================
	*/

	this.newAmelioration = function(_name)
	{
		var elem = exist(_name)
		if (elem != 0) {
			return (elem);
		}
		amelioration = new ObjectHexatyla("Amelioration", _name);
		list_amelioration.push(amelioration);
		typeByName[amelioration] = "Ameliorations";
		return (amelioration);
	}

	this.deleteAmelioration = function(_name)
	{
		var i = findElementByIndex(list_amelioration, _name);
		if (i >= 0) {
			delete typeByName[list_amelioration[i]];
			list_amelioration.splice(i, 1);
			return (true)
		}
		return (false);
	}

	this.getAmelioration = function(_name)
	{
		var i = findElementByIndex(list_amelioration, _name);
		if (i >= 0) {
			return (list_amelioration[i].getInstance());
		}
		return (null);
	}

	this.getAmeliorations = function()
	{
		return (getObjectTable(list_amelioration));
	}

	this.sizeAmeliorations = function()
	{
		return (list_amelioration.length);
	}

	/*
	** EFFECT ==============================================================
	*/

	this.newEffect = function(_name)
	{
		var elem = exist(_name)
		if (elem != 0) {
			return (elem);
		}
		var effect = new ObjectHexatyla("Effect", _name);
		list_effect.push(effect);
		typeByName[effect] = "Effect";
		return (effect);
	}

	this.deleteEffect = function(_name)
	{
		var i = findElementByIndex(list_effect, _name);
		if (i >= 0) {
			delete typeByName[list_effect[i]];
			list_effect.splice(i, 1);
			return (true);
		}
		return (false);
	}

	this.getEffect = function(_name)
	{
		var i = findElementByIndex(list_effect, _name);
		if (i >= 0) {
			return (list_effect[i].getInstance());
		}
		return (null);
	}

	this.getEffects = function()
	{
		return (getObjectTable(list_effect));
	}

	this.sizeEffects = function()
	{
		return (list_effect.length);
	}

	/*
	** EVENT ==============================================================
	*/

	this.newEvent = function()
	{
	}

	/*
	** MAP ==============================================================
	*/

	this.newMap = function()
	{
	}

    this.sizeRaces = function() {
    	return (0);
    };

    this.sizeMapY = function() {
    	return (yMap);
    };
    
    this.sizeMapX = function() {
    	return (xMap);
    };

    this.setMap = function(_x, _y, _val) {
    	xMap = _x;
    	yMap = _y;
    	var x = 0;
    	var y = 0;
    	var nb = 0;
    	while (y < yMap) {
    		map[y] = [];
    		x = 0;
    		while (x < xMap) {
    			map[y][x] = _val;
    			nb += 1;
    			x += 1;
    		}
    		y += 1;
    	}
    	//alert('x:'+x+';xMap:'+xMap+'<>y:'+y+';yMap:'+yMap+'<>Map:'+map+';iteration:'+nb);
    };

    this.upMap = function(_y, _x, _val) {
    //	alert('y:'+_y+'..x:'+_x);
    	map[_y][_x] = _val;
    };

    this.getMapStr = function() {
    	var _data = "";
    	_data += '"x":' + xMap + ',"y":' + yMap + ',"z": [';
    	var y = 0;
    	var x = 0;
    	while (y < yMap)
    	{
    		x = 0;
    		while (x < xMap)
    		{
    			if (x != 0 || y != 0) {
    				_data += ',' + map[y][x];
    			}
    			else {
    				_data += map[y][x];
    			}
    			x += 1;
    		}
    		y += 1;
    	}
    	_data += '], "ressource":[';
       	var key = '';
       	var first = true;
      	for (key in mapRessValue)
       	{
       		if (first == false) {
       			_data += ',';
       		}
       		// EST UN INT ?
        	if (mapRessValue[key].type == "wood") {
            	_data += '{"typex":"wood","x":'+mapRessValue[key].x+',"y":'+mapRessValue[key].y+',"value":'+mapRessValue[key].value+'}';
        	}
        	else {
            	_data += '{"typex":"gold","x":'+mapRessValue[key].x+',"y":'+mapRessValue[key].y+',"value":'+mapRessValue[key].value+'}';
        	}
        	first = false;
        }
    	_data += ']';
    	return (_data);
    };

    this.loadMapStr = function(_sizeY, _sizeX, _map) {
    	yMap = _sizeY;
    	xMap = _sizeX;
    	var i = 0;
    	while (i < yMap ) {
    		map[i] = [];
    		i += 1;
    	}
    	i = 0;
    	while (i < _map.length)
    	{
    		map[Math.floor(i / xMap)][i % xMap] = _map[i];
    		i += 1;
    	}
    };

    var getKeys = function(mapValue) {
    	var _data = [];
       	var key = '';

      	for (key in mapValue)
       	{
        	_data.push(key);
        }
        return(_data);
    };


    this.giveAllRessource = function(index) {
    	var _data = '';
       	var key = '';

      	for (key in mapRessValue)
       	{
        	var x_ = mapRessValue[key].x*25+4;
        	var y_ = mapRessValue[key].y*28+9+(13*(mapRessValue[key].x % 2));
        	if (mapRessValue[key].type == "wood") {
            	_data += '<div class="hex little wood" x='+mapRessValue[key].x+' y='+mapRessValue[key].y+' depth="seven" style="position:absolute;left;margin-left:'+x_+'px;margin-top:'+y_+'px"></div>';
        	}
        	else {
        		_data += '<div class="hex little gold" x='+mapRessValue[key].x+' y='+mapRessValue[key].y+' depth="seven" style="position:absolute;margin-left:'+x_+'px;margin-top:'+y_+'px"></div>';
        	}
        }
        return (_data);
    };

    this.getValueRessource = function(index) {
		value = getKeys(mapRessValue);
		var i = 0;
		while (i < value.length)
		{
			if (index == value[i]) {
				return (mapRessValue[value[i]]);
			}
			i += 1;
		}
		return (null);
    };

    this.loadMapRess = function(_x, _y, _ress)
    {
    	console.log('MAP.x('+_x+') MAP.y('+_y+') this.sizeMapX('+this.sizeMapX()+') this.sizeMapY('+this.sizeMapY()+')');
    	var key = 0;
    	while (key < _ress.length) {
        	var i = (parseInt(_ress[key].x) + parseInt(_ress[key].y) * parseInt(this.sizeMapX()));
        	console.log("i:"+i);
        	i = i.toString();
        	this.setValueRessource(i, _ress[key].type, _ress[key].value, _ress[key].x, _ress[key].y);
        	console.log('new ressource : [i:'+i+'] [type:'+_ress[key].type+'] [value:'+_ress[key].value+'] [x:'+_ress[key].x+'] [y:'+_ress[key].y+']');
        	key++;
        }
    };

    this.setValueRessource = function(index, type, _value, _x, _y) {
		value = getKeys(mapRessValue);
		r = null;
		var i = 0;
		if (_value == "" || typeof(_value) != "number") {
			_value = 0;
		}
		while (r == null && i < value.length)
		{
			if (index == value[i]) {
				r = value[i];
			}
			i += 1;
		}
		if (r == null) {
			mapRessValue[index] = {};
			getKeys(mapRessValue);
		}
		mapRessValue[index]["type"] = type;
		mapRessValue[index]["value"] = _value;
		mapRessValue[index]["x"] = _x;
		mapRessValue[index]["y"] = _y;
    };

    this.deleteValueRessource = function(index) {
		delete mapRessValue[index];
    };

    var findACapa = function(newCapa) {
		var i = 0;
		console.log("new capa :" + newCapa)
		console.log("Units :" + list_unit);
		while (list_unit.length > i) {
			if (list_unit[i].name == newCapa) {
				return (["Units", list_unit[i]]);
			}
			i += 1;
		}
		i = 0;
		console.log("Buildings :" + list_building);
		while (list_building.length > i) {
			if (list_building[i].name == newCapa) {
				return (["Buildings", list_building[i]]);
			}
			i += 1;
		}
		i = 0;
		//console.log("Heros :" + list_heros);
		while (list_heros.length > i) {
			if (list_heros[i].name == newCapa) {
				return (["Heros", list_heros[i]]);
			}
			i += 1;
		}
		i = 0;
		//console.log("Objects :" + list_object);
		while (list_object.length > i) {
			if (list_object[i].name == newCapa) {
				return (["Objects", list_object[i]]);
			}
			i += 1;
		}
		i = 0;
		console.log("Projectiles :" + list_projectile);
		while (list_projectile.length > i) {
			if (list_projectile[i].name == newCapa) {
				return (["Projectiles", list_projectile[i]]);
			}
			i += 1;
		}
		i = 0;
		console.log("Capacitys :" + list_capacity);
		while (list_capacity.length > i) {
			if (list_capacity[i].name == newCapa) {
				return (["Capacitys", list_capacity[i]]);
			}
			i += 1;
		}
		i = 0;
		console.log("Spells :" + list_spell);
		while (list_spell.length > i) {
			if (list_spell[i].name == newCapa) {
				return (["Spells", list_spell[i]]);
			}
			i += 1;
		}
		i = 0;
		console.log("Ameliorations :" + list_amelioration);
		while (list_amelioration.length > i) {
			if (list_amelioration[i].name == newCapa) {
				return (["Ameliorations", list_amelioration[i]]);
			}
			i += 1;
		}
		i = 0;
		//console.log("Effects :" + list_effect);
		while (list_effect.length > i) {
			if (list_effect[i].name == newCapa) {
				return (["Effects", list_effect[i]]);
			}
			i += 1;
		}
    	return (null);
    };

    var existTable = function(str, table) {
    	var i = 0;
    	while (i < table.length) {
    		if (table[i] == str) {
    			return (true);
    		}
    		i += 1;
    	}
    	return (false);
    };


    this.addCapacityToElement = function(_elem, newCapa, actif) {
    	var e = findACapa(newCapa);
    	if (e == null) {
    		return (-1);
    	}
    	var typeCapa = e[0];
    	var elem = e[1];
    	if (existTable(newCapa, _elem.elements) == true) {
    		return (-2);
    	}
    	var bigTable = {};
    	bigTable["Units"] 			= ["Projectiles", "Capacitys", "Ameliorations"];
    	bigTable["Heros"] 			= ["Projectiles", "Capacitys", "Ameliorations", "Spells", "Objects"];
    	bigTable["Buildings"] 		= ["Projectiles", "Capacitys", "Ameliorations", "Units", "Heros"];
    	bigTable["Objects"] 		= ["Effects", "Capacitys"];
    	bigTable["Projectiles"] 	= ["Capacitys"];
    	bigTable["Capacitys"] 		= ["Effects", "Projectiles"];
    	bigTable["Spells"] 			= ["Capacitys"];
    	bigTable["Ameliorations"] 	= [];
    	bigTable["Effects"] 		= ["Effects"];
    	console.log('TC:'+typeCapa+'  // table: ' + bigTable[actif]);
    	if (existTable(typeCapa, bigTable[actif]) == false || _elem.name == newCapa) {
    		return (-3);
    	}
    	_elem.elements.push(elem);
    	return (0);
    };

    this.delCapacityToElement = function(_elem, newCapa, actif) {
    	// A FAIRE
    };

    this.getCapacityToElement = function(_elem) {
    	var table = _elem.elements;
    	var i = 0;
    	var typeCapa = "";
    	_data = "";
    	while (table.length > i) {
    		typeCapa = findACapa(table[i].name);
    		if (typeCapa)
    			_data += '<div  class="button-1 '+ table[i].type +'_bg">'+ table[i].name +'</div>';
    		i += 1;
    	}
    	return (_data);
    };


    this.addRaces = function(_str) {
    	var i = 0;
    	while (list_race.length > i) {
    		if (list_race[i] == _str) {
    			return (false);
    		}
    		i += 1;
    	}
    	list_race.push(_str);
    	return (true);
    };

    this.existRaces = function(_str) {
    	var i = 0;
    	while (list_race.length > i) {
    		if (list_race[i] == _str) {
    			return (true);
    		}
    		i += 1;
    	}
    	return (false);
    };

    this.getRaces = function(_str) {
    	var i = 0;
    	_data = "";
    	while (list_race.length > i) {
    		if (_str == list_race[i]) {
    			_data += '<a href="#" class="raceElement selected">'+list_race[i]+'</a>';
    		}
    		else {
    			_data += '<a href="#" class="raceElement">'+list_race[i]+'</a>';
    		}
    		i += 1;
    	}
    	return (_data);
    };

    this.getRacesWOAll = function(_str) {
    	var i = 0;
    	_data = "";
    	while (list_race.length > i) {
    		if (list_race[i] != "all")
    		{
	    		if (_str == list_race[i]) {
	    			_data += '<a href="#" class="eventElement selected">'+list_race[i]+'</a>';
	    		}
	    		else {
	    			_data += '<a href="#" class="eventElement">'+list_race[i]+'</a>';
	    		}
	    	}
    		i += 1;
    	}
    	return (_data);
    };

    this.delRaces = function(_str) {
    	if (_str == "all" || _str == "neutral")
    		return (false);
		var i = 0;
		//console.log("Units :" + list_unit);
		while (list_unit.length > i) {
			if (list_unit[i].race == _str) {
				list_unit[i].race = "neutral";
			}
			i += 1;
		}
		i = 0;
		//console.log("Buildings :" + list_building);
		while (list_building.length > i) {
			if (list_building[i].race == _str) {
				list_buidling[i].race = "neutral";
			}
			i += 1;
		}
		i = 0;
		//console.log("Heros :" + list_heros);
		while (list_heros.length > i) {
			if (list_heros[i].race == _str) {
				list_heros[i].race = "neutral";
			}
			i += 1;
		}
		i = 0;
		//console.log("Capacitys :" + list_capacity);
		while (list_capacity.length > i) {
			if (list_capacity[i].race == _str) {
				list_capacity[i].race = "neutral";
			}
			i += 1;
		}
		i = 0;
		//console.log("Ameliorations :" + list_amelioration);
		while (list_amelioration.length > i) {
			if (list_amelioration[i].race == _str) {
				list_amelioration[i].race = "neutral";
			}
			i += 1;
		}
		i = 0;
    	while (list_race.length > i) {
    		if (list_race[i] == _str) {
				list_race.splice(i, 1);
    			return (true);
    		}
    		i += 1;
    	}
    	return (false);
    };

    this.getElementsByRace = function(_races, _selected) {
    	var _data_buildings = "";
    	var _data_units = "";
    	var _data_heros = "";
    	var _data_ameliorations = "";
    	var _data_capacitys = "";
    	var i = 0;
    	while (list_unit.length > i) {
			if (list_unit[i].race == _races || _races == "all") {
				if (_selected == list_unit[i].name) {
					_data_units += '<div class="raceElementInContainer selected" ref="Units">'+list_unit[i].name+'</div>';
				}
				else {
					_data_units += '<div class="raceElementInContainer" ref="Units">'+list_unit[i].name+'</div>';
				}
			}
			i += 1;
		}
		i = 0;
		while (list_building.length > i) {
			if (list_building[i].race == _races || _races == "all") {
				if (_selected == list_building[i].name) {
					_data_buildings += '<div class="raceElementInContainer selected" ref="Buildings">'+list_building[i].name+'</div>';
				}
				else {
					_data_buildings += '<div class="raceElementInContainer" ref="Buildings">'+list_building[i].name+'</div>';
				}
			}
			i += 1;
		}
		i = 0;
		while (list_heros.length > i) {
			if (list_heros[i].race == _races || _races == "all") {
				if (_selected == list_heros[i].name) {
					_data_heros += '<div class="raceElementInContainer selected" ref="Heros">'+list_heros[i].name+'</div>';
				}
				else {
					_data_heros += '<div class="raceElementInContainer" ref="Heros">'+list_heros[i].name+'</div>';
				}
			}
			i += 1;
		}
		i = 0;
		while (list_capacity.length > i) {
			if (list_capacity[i].race == _races || _races == "all") {
				if (_selected == list_capacity[i].name) {
					_data_capacitys += '<div class="raceElementInContainer selected" ref="Capacitys">'+list_capacity[i].name+'</div>';
				}
				else {
					_data_capacitys += '<div class="raceElementInContainer" ref="Capacitys">'+list_capacity[i].name+'</div>';
				}
			}
			i += 1;
		}
		i = 0;
		while (list_amelioration.length > i) {
			if (list_amelioration[i].race == _races || _races == "all") {
				if (_selected == list_amelioration[i].name) {
					_data_ameliorations += '<div class="raceElementInContainer selected" ref="Ameliorations">'+list_amelioration[i].name+'</div>';
				}
				else {
					_data_ameliorations += '<div class="raceElementInContainer" ref="Ameliorations">'+list_amelioration[i].name+'</div>';
				}
			}
			i += 1;
		}
    	var _data = {"Buildings": _data_buildings, "Units": _data_units, "Heros": _data_heros, "Ameliorations": _data_ameliorations, "Capacitys": _data_capacitys};
    	return (_data);
    };
}