$(document).ready(function() {
    var file = "";
    var manager = new Manager();
    var actif = "";
    var valueAct = 0;
    var valueMax = 0;
    var listData = [];
    var elementActif = "";
    var visibleMain = false;
    var actifHome = "";
    var actifHomeElement = "";
    var _ContainerObjectRaceCreation         = new ContainerObjectRaceCreation();
    var _ContainerObjectOnMap                = new ContainerObjectOnMap();
    var _ContainerObjectBeginningPosition    = new ContainerObjectBeginingPosition();
    var typeFile = 0; /* 0 : none init ; 1 : new ; 2 : existing*/

    var listNbElement = [];
    listNbElement['Races']          = manager.sizeRaces;
    listNbElement['Buildings']      = manager.sizeBuildings;
    listNbElement['Units']          = manager.sizeUnits;
    listNbElement['Heros']          = manager.sizeHeros;
    listNbElement['Objects']        = manager.sizeObjects;
    listNbElement['Projectiles']    = manager.sizeProjectiles;
    listNbElement['Capacitys']      = manager.sizeCapacitys;
    listNbElement['Spells']         = manager.sizeSpells;
    listNbElement['Ameliorations']  = manager.sizeAmeliorations;
    listNbElement['Effects']        = manager.sizeEffects;
    listNbElement['MapX']           = manager.sizeMapX;
    listNbElement['MapY']           = manager.sizeMapY;
    var getter = [];
    getter["Effects"]               = manager.getEffects;
    getter["Ameliorations"]         = manager.getAmeliorations;
    getter["Spells"]                = manager.getSpells;
    getter["Capacitys"]             = manager.getCapacitys;
    getter["Projectiles"]           = manager.getProjectiles;
    getter["Objects"]               = manager.getObjects;
    getter["Heros"]                 = manager.getHeros;
    getter["Buildings"]             = manager.getBuildings;
    getter["Units"]                 = manager.getUnits;
    var getElements = [];
    getElements["Effects"]          = manager.getEffect;
    getElements["Ameliorations"]    = manager.getAmelioration;
    getElements["Spells"]           = manager.getSpell;
    getElements["Capacitys"]        = manager.getCapacity;
    getElements["Projectiles"]      = manager.getProjectile;
    getElements["Objects"]          = manager.getObject;
    getElements["Heros"]            = manager.getHero;
    getElements["Buildings"]        = manager.getBuilding;
    getElements["Units"]            = manager.getUnit;
    var ptr = [];
    ptr["Map"]              = false;
    ptr["Event"]            = false;
    ptr["Effects"]          = true;
    ptr["Ameliorations"]    = true;
    ptr["Spells"]           = true;
    ptr["Capacitys"]        = true;
    ptr["Projectiles"]      = true;
    ptr["Objects"]          = true;
    ptr["Heros"]            = true;
    ptr["Buildings"]        = true;
    ptr["Units"]            = true;
    var ptrBis = [];
    ptrBis["Effects"]           = manager.newEffect;
    ptrBis["Ameliorations"]     = manager.newAmelioration;
    ptrBis["Spells"]            = manager.newSpell;
    ptrBis["Capacitys"]         = manager.newCapacity;
    ptrBis["Projectiles"]       = manager.newProjectile;
    ptrBis["Objects"]           = manager.newObject;
    ptrBis["Heros"]             = manager.newHero;
    ptrBis["Buildings"]         = manager.newBuilding;
    ptrBis["Units"]             = manager.newUnit;
    ptrBis["Effect"]            = manager.newEffect;
    ptrBis["Amelioration"]      = manager.newAmelioration;
    ptrBis["Spell"]             = manager.newSpell;
    ptrBis["Capacity"]          = manager.newCapacity;
    ptrBis["Projectile"]        = manager.newProjectile;
    ptrBis["Object"]            = manager.newObject;
    ptrBis["Hero"]              = manager.newHero;
    ptrBis["Building"]          = manager.newBuilding;
    ptrBis["Unit"]              = manager.newUnit;
    var debug = [];
    debug[1] = "Units";
    debug[2] = "Buildings";
    debug[3] = "Heros";
    debug[4] = "Objects";
    debug[5] = "Projectiles";
    debug[6] = "Capacitys";
    debug[7] = "Spells";
    debug[8] = "Ameliorations";
    debug[9] = "Effects";

    var load_elements = function(_data) {
        for (var i = 0; i < _data.length; i++)
        {
            element = ptrBis[_data[i].type]();
            /* General */
            element.name = _data[i].name;
            element.description = _data[i].description;
            element.race = _data[i].race;
            /* Data */
            element.hitbox = _data[i].hitbox;
            element.passThrought = _data[i].passThrought;
            element.attack = _data[i].attack;
            element.hp = _data[i].hp;
            element.regenHp = _data[i].regenHp;
            element.typeRessource = _data[i].typeRessource;
            element.Ressource = _data[i].Ressource;
            element.regenRessource = _data[i].regenRessource;
            element.attackSpeed = _data[i].attackSpeed;
            element.critick = _data[i].critick;
            element.speed = _data[i].speed;
            element.vision_night = _data[i].vision_night;
            element.vision_day = _data[i].vision_day;
            element.defense = _data[i].defense;
            /* Cost */
            element.cost_gold = _data[i].cost_gold;
            element.cost_wood = _data[i].cost_wood;
            element.cost_food = _data[i].cost_food;
            element.cost_life = _data[i].cost_life;
            element.cost_type_ress = _data[i].cost_type_ress;
            element.cost_ress = _data[i].cost_ress;
            /* Capacity Data */
            element.can_auto = _data[i].can_auto;
            element.is_auto = _data[i].is_auto;
            /* Timer */
            element.enum_canalisation = _data[i].enum_canalisation;
            element.canalisation = _data[i].canalisation;
            element.cooldown = _data[i].cooldown;
            element.creation = _data[i].creation;
            element.duration = _data[i].duration;
            /* ElementRessource */
            element.elem_type_ress  = _data[i].elem_type_ress;
            element.elem_life_act   = _data[i].elem_life_act;
            element.elem_ress       = _data[i].elem_ress;
            /* Graphique */
            element.voice       = _data[i].voice;
            element.voice_die   = _data[i].voice_die;
            element.voice_attack= _data[i].voice_attack;
            element.voice_birth = _data[i].voice_birth;
            element.icon        = _data[i].icon;
            element.model       = _data[i].model;
            /*elements*/
            r = 0;
            while (_data[i].elements.Units.length > r)
            {
                element.elemTMP.push(_data[i].elements.Units[r]);
                r++;
            }
            r = 0;
            while (_data[i].elements.Buildings.length > r)
            {
                element.elemTMP.push(_data[i].elements.Buildings[r]);
                r++;
            }
            r = 0;
            while (_data[i].elements.Heros.length > r)
            {
                element.elemTMP.push(_data[i].elements.Heros[r]);
                r++;
            }
            r = 0;
            while (_data[i].elements.Ameliorations.length > r)
            {
                element.elemTMP.push(_data[i].elements.Ameliorations[r]);
                r++;
            }
            r = 0;
            while (_data[i].elements.Spells.length > r)
            {
                element.elemTMP.push(_data[i].elements.Spells[r]);
                r++;
            }
            r = 0;
            while (_data[i].elements.Capacity.length > r)
            {
                element.elemTMP.push(_data[i].elements.Capacity[r]);
                r++;
            }
            //"Units":[],"Building":[],"Heros":[],"Objects":[],"Projectiles":[],"Ameliorations":[],"Spells":[],"Capacity":[]}
            r = 0;
            /*while (_data[i].requirements.Units.length > r)
            {
                element.reqTMP.push(_data[i].requirements.Units[r]);
                r++;
            }
            r = 0;*/
            while (_data[i].requirements.Buildings.length > r)
            {
                element.reqTMP.push(_data[i].requirements.Buildings[r]);
                r++;
            }
            /*r = 0;
            while (_data[i].requirements.Heros.length > r)
            {
                element.reqTMP.push(_data[i].requirements.Heros[r]);
                r++;
            }*/
            r = 0;
            while (_data[i].requirements.Objects.length > r)
            {
                element.reqTMP.push(_data[i].requirements.Objects[r]);
                r++;
            }
            r = 0;
            /*while (_data[i].requirements.Projectiles.length > r)
            {
                element.reqTMP.push(_data[i].requirements.Projectiles[r]);
                r++;
            }*/
            r = 0;
            while (_data[i].requirements.Ameliorations.length > r)
            {
                element.reqTMP.push(_data[i].requirements.Ameliorations[r]);
                r++;
            }
            /*r = 0;
            while (_data[i].requirements.Spells.length > r)
            {
                element.reqTMP.push(_data[i].requirements.Spells[r]);
                r++;
            }
            r = 0;
            while (_data[i].requirements.Capacity.length > r)
            {
                element.reqTMP.push(_data[i].requirements.Capacity[r]);
                r++;
            }*/
        }
    };

    var load_map = function(MAP) {
        manager.loadMapStr(MAP.y, MAP.x, MAP.z);
        manager.loadMapRess(MAP.y, MAP.x, MAP.ressource);
        var x = 0;
        var y = 0;
        var _data = "";
        var convert = [];
        convert[0]    = "none";
        convert[1]    = "one";
        convert[2]    = "two";
        convert[3]    = "three";
        convert[4]    = "four";
        convert[5]    = "five";
        convert[6]    = "six";
        convert[7]    = "seven";
        var first = true;
        $("#contentMap").css('width', ''+ MAP.x * 27+'');
        $("#contentMap").css('height', ''+ MAP.y * 30+'');
        while (x < MAP.x) {
            if (first) {
                _data += '<div class="lineMap">';
                first = false;
            }
            else if (x % 2 == 0) {
                _data += '<div class="lineMap tierce">';
            }
            else {
                _data += '<div class="lineMap bottom">';
            }
            first = false;
            y = 0;
            var pourcent = Math.round(MAP.y / (MAP.y - y) * 100);
           // $("#contentInfo").html('Generation : <span class="progressBar height"><span class="contentBar" style="width:'+pourcent+'%"></span></span>'+pourcent+'%');
            while (y < MAP.y) {
              //  console.log(convert[(MAP.z)[y * MAP.x + x]] +'<>'+(MAP.z)[y * MAP.x + x]);
                _data += '<div class="hex little '+convert[(MAP.z)[y * MAP.x + x]]+'" x="'+x+'" y="'+y+'" depth="'+convert[(MAP.z)[y * MAP.x + x]]+'"></div>';
                y += 1;
            }
            _data += '</div>';
            x += 1;
        }
        $("#contentMap").html(_data);
        $("#ressourceMap").html(manager.giveAllRessource());
      //  $("#contentInfo").html('Generation : <span class="progressBar height"><span class="contentBar" style="width:100%"></span></span>100%');
    };

    var load_race = function(_info)
    {
        var i = 0;
        while (i < _info.length)
        {
            manager.addRaces(_info[i]);
            i++;
        }
    }

    var convert_string_to_requirement = function()
    {
        manager.convert_string_to_requirement();
    }

    var convert_string_to_element = function()
    {
        manager.convert_string_to_element();
    }

    var load_file = function(_name) {
        var ending_value = 0;
        $.ajax({
             type: "POST",
              url: "script/take_file.php",
              data: { name: _name}
              })
           .done(function( msg )
           {
                _data = $.parseJSON(msg);
                ending_value = 0;
                load_race(_data.Races);
                load_elements(_data.Elements);
                load_map(_data.Map);
                load_positionMap_pannel(_data.Start);
                load_raceCreation_pannel(_data.RaceCreation);
                load_elementMap_pannel(_data.UnitOnMap);
                convert_string_to_requirement();
                convert_string_to_element();
                majInfoMap();
            })
          .fail(function( msg )
          {
                $("#contentInfo").html("Load_file : Error request");
                  ending_value = 1;
            });
        return (ending_value);
    };

    var save_file = function(_name) {
        var _object;
        var _data = "";
        var _data_elements = "";
        var _data_sources = "";
        var _data_evenements = "";
        var _data_map = "";
        var _data_dependancies = "";
        var first = true;
        // Element calculs
        for (var i = 1; i < debug.length; i++)
        {
            _table = getter[debug[i]]();
            for (var n = 0; n < _table.length; n++)
            {
		var str = (getElements[debug[i]](_table[n])).toString();;
		if (str != "") {
                    if (!first) {
			_data_elements += ', ';
                    }
                    first = false;
                    _data_elements += str;
		}
            }
        }
        //(manager.getMapStr());
        var _data_races = '"Races" : [' + manager.getRacesToString() + ']';
        _data_elements = '"Elements" : [' + _data_elements + ']';
        _data_dependancies = '"Dependancies" : []';
        _data_sources   =   '"RaceCreation":'   + _ContainerObjectRaceCreation.JSON() + ',';
        _data_sources   +=  '"UnitOnMap":'      + _ContainerObjectOnMap.JSON() + ',';
        _data_sources   +=  '"Start":'          + _ContainerObjectBeginningPosition.JSON();
        _data_map = '"Map" : {'+manager.getMapStr()+'}';
        _data_evenements = '"Evenements" : []';
        _data = '{' + _data_races + ',';
        _data += _data_elements+',';
        _data += _data_sources+',';
        _data += _data_dependancies+',';
        _data += _data_map+',';
        _data += _data_evenements+'}';
        $.ajax({
             type: "POST",
              url: "script/save_file.php",
              data: { name: _name, content: _data}
              })
           .done(function( msg )
           {
                $("#contentInfo").html(file + ' sauvegarde');
                  ending_value = 0;
            })
          .fail(function( msg )
          {
                $("#contentInfo").html("Load_file : Error request");
                  ending_value = 1;
            });
        console.log("SAVEGARDE : " + _data);
    };

    var majInfoMap = function() { 
        $("#File").html(file);
        $("#races_info").html(manager.sizeRaces());
        $("#buidling_info").html(manager.sizeBuildings());
        $("#units_info").html(manager.sizeUnits());
        $("#heros_info").html(manager.sizeHeros());
        $("#object_info").html(manager.sizeObjects());
        $("#projectiles_info").html(manager.sizeProjectiles());
        $("#capacity_info").html(manager.sizeCapacitys());
        $("#spell_info").html(manager.sizeSpells());
        $("#ameliorations_info").html(manager.sizeAmeliorations());
        $("#effects_info").html(manager.sizeEffects());
        $("#map_info").html('['+manager.sizeMapX()+':'+manager.sizeMapY()+']');
    };

    var sourceForms = function(values) {
    	var info = [];
    	info[0] = "voice";
    	info[1] = "graphic_model";
    	info[2] = "voice_attack";
    	info[3] = "icon";
    	info[4] = "voice_die";
    	info[5] = "voice_creation";
    	info[6] = "hitbox";
    	info[7] = "passthrought";
    	info[8] = "attack";
    	info[9] = "hp";
    	info[10] = "regen_hp";
    	info[11] = "type_ress";
    	info[12] = "ressource";
    	info[13] = "regen_ress";
    	info[14] = "attack_speed";
    	info[15] = "critick";
    	info[16] = "speed";
        info[17] = "defense";
        info[18] = "vision_night";
        info[19] = "vision_day";
        info[20] = "range";
        info[21] = "cost_life";
    	info[22] = "cost_gold";
    	info[23] = "cost_wood";
    	info[24] = "cost_food";
    	info[25] = "cost_type_ress";
    	info[26] = "cost_ressource";
    	info[27] = "level";
    	info[28] = "xp";
    	info[29] = "can_auto";
    	info[30] = "is_auto";
        info[31] = "enum_canalisation";
    	info[32] = "canalisation";
    	info[33] = "cooldown";
    	info[34] = "creation";
    	info[35] = "duration";
    	info[36] = "type_ress_act";
    	info[37] = "life_act";
    	info[38] = "ressource_act";
    	if (values.length < 38) {
    		alert("launch_home ARG < 38 : length:"+values.length);
    		return;
    	}
    	for (var i = 0; i < 39; i++) 
    	{
	    	if (values[i] == 1)
	    	{
	    		$('.value_' + info[i]).css("background-color", "none" );
	    		$('.value_' + info[i]).css("color", "#555" );
	    		$('#input_' + info[i]).parent('td').css( "background-color", "none" );
	    		$('#input_' + info[i]).parent('td').css( "color", "#555" );
                $('#input_' + info[i]).prop('disabled', false);
	    	}
	    	else
	    	{
	    		$('.value_' + info[i]).css( "background-color", "#eee" );
	    		$('.value_' + info[i]).css( "color", "silver" );
	    		$('#input_' + info[i]).parent('td').css( "background-color", "#eee" );
	    		$('#input_' + info[i]).parent('td').css("color", "silver" );
                $('#input_' + info[i]).prop('disabled', true);
	    	}
    	}
    };

    var upInfoTree = function() {
        var _data = manager.getElementsByRace(actifHome, actifHomeElement);
        $("#raceBuildings").html(_data.Buildings);
        $("#raceUnits").html(_data.Units);
        $("#raceHeros").html(_data.Heros);
        $("#raceAmeliorations").html(_data.Ameliorations);
        $("#raceCapacitys").html(_data.Capacitys);
    };


    var actifEffect = false;
    $("#buttonEffect").click(function(){
        if (actifEffect == true) {
            actifEffect = false;
            $("#EffectMenu").css('display', 'none');
        }
        else {
            actifEffect = true;
            $("#EffectMenu").css('display', 'block');
        }
    });

    var modRightMenu = function(_name, _img, _modification)
    {
        if (!(actif == _name && actif == "Effects")) {
            $("#EffectMenu").css('display', 'none');
        }
        if (_name == "Effects") {
            $("#EffectBox").css('display', 'block');
        }
        else {
            $("#EffectBox").css('display', 'none');
        }
        $("#CapacityCibleBox").css('display', 'none');
        if (_name == "false")
        {

            actif = _img;
            $("#DataCenter").css('display', 'none');
            $("#elementsMenu").css('display', 'none');
            $("#TitleLeftMenu").html('<img src="img/'+_img+'.png" class="menuItem"> Map');
            return;
        }
        else if (_name == "Event")
        {
            if (actif == _name)
                return;
            $("#elementsMenu").css('display', 'block');
            actif = _name;
            $("#TitleLeftMenu").html('<img src="img/'+_img+'.png" class="menuItem"> Event');
            $("#DataCenter").slideUp(160);
            $("#structLeftMenu").animate(
            {
                opacity: 0
            }, 150, function()
            {
                $("#DataCenter").css('display', 'none');
                visibleMain = false;
                elementActif = "";
                $("#structLeftMenu").css('display', 'block');
                $("#TitleLeftMenu").html('<img src="img/'+_img+'.png" class="menuItem"> Event');
                $("#eventPannel").css('display', 'block');
               // cleanData();
               // initButtonMenu();
                listData = [];
               // gestion_home(false);
                $("#DataRequierements").css('display', 'none');

                $("#structLeftMenu").delay(10).animate({
                    opacity: 100
                    }, 150, function() {
                });
            });
        }
        else if (_name == "Home") {
            if (actif == _name)
                return;
            $("#elementsMenu").css('display', 'block');
            actif = _name;
            actifHome = "all";
            actifHomeElement = "";
            $("#DataCenter").slideUp(160);
            $("#structLeftMenu").animate(
            {
                opacity: 0
            }, 150, function()
            {
                $("#DataCenter").css('display', 'none');
                visibleMain = false;
                elementActif = "";
                $("#structLeftMenu").css('display', 'block');
                $("#TitleLeftMenu").html('<img src="img/'+_img+'.png" class="menuItem"> Depandancies');
                cleanData();
                initButtonMenu();
                listData = [];
                gestion_home(true);
                upInfoTree();
                $("#DataRequierements").css('display', 'block');

                $("#structLeftMenu").delay(10).animate({
                    opacity: 100
                    }, 150, function() {
                });
            });
        }
        else {
        	if (actif == _name)
        		return;
            $("#elementsMenu").css('display', 'block');
        	actif = _name;
            $("#DataCenter").slideUp(160);
        	$("#structLeftMenu").animate(
            {
        		opacity: 0
      		}, 150, function()
            {
                $("#DataCenter").css('display', 'none');
                visibleMain = false;
                elementActif = "";
                $("#structLeftMenu").css('display', 'block');
        		$("#TitleLeftMenu").html('<img src="img/'+_img+'.png" class="menuItem">' + _name);
        		sourceForms(_modification);
                cleanData();
                initButtonMenu();
                if (actif == "Capacitys")
                    $("#CapacityCibleBox").css('display', 'block');
                if (ptr[actif] == true) {
                    listData = getter[actif]();
                }
                else {
                    listData = [];
                }
                if (listData.length > 0)
                    selectElement(listData[0]);
                    setLeftMenuElements(elementActif);
                    majButtonMenu(valueMax, valueAct);

    	    	$("#structLeftMenu").delay(10).animate({
    	    		opacity: 100
    	  			}, 150, function() {
      		    });
            });
        }
    };

    var initButtonMenu = function() {
    	valueAct = 0;
    	valueMax = 0;
    }

    var cleanData = function() {
        $("#elementsMenu").html("");
    }

    var majButtonMenu = function(_max, _act) {
    	if ($("#undo").hasClass('overLock') == true && _act > 0)
    		$("#undo").removeClass("overLock");
    	else if ($("#undo").hasClass('overLock') == false && _act == 0)
    		$("#undo").addClass("overLock");
    	if ($("#redo").hasClass('overLock') == true && _act >= _max)
    		$("#redo").removeClass("overLock");
    	else if ($("#redo").hasClass('overLock') == false && _act < _max)
    		$("#redo").addClass("overLock");
    };

    var setLeftMenuElements = function(_value)
    {
        _value = typeof _value !== 'undefined' ? _value : null;
        if (_value != null && _value == "") {
            _value = null;
        }
        $("#elementsMenu").html('');
    	var createStr = function(_name){
            if (_value != null && _value == _name) {
              $("#elementsMenu").append('<a href="#' + _name + '" class="linkElement selected" ref="' + _name + '">' + _name + '</a>');
            }
            else {
              $("#elementsMenu").append('<a href="#' + _name + '" class="linkElement" ref="' + _name + '">' + _name + '</a>');
            }
    	}
    	var value = "";
        valueMax = listData.length;
    	for (var i = 0; i < listData.length; i++)
    	{
    		value += createStr(listData[i]);
    	}
    };

    var get_race = function() {
        $("#elementsMenu").html(manager.getRaces(actifHome));
    };


    $(document).on("click", ".raceElement", function(){
        actifHome = $(this).text();
        clearElementSelectedHome(false);
        actifHomeElement = "";
        get_race();
        upInfoTree();
    });
    
    var requierementToStr = function(_elem) {
        var _data = "";
        if (_elem == null)
            return (_data);
        var i = 0;
        while (_elem.requirements.length > i) {
            _data += '<div class="requierementElement">'+_elem.requirements[i].name+'</div>';
            i += 1;
        }
    };

    var printRaceInfo = function(_race) {
        var _data = "";
        var i = 0;
        while (i < manager.list_race.length)
        {
            if (manager.list_race[i] != "all" && manager.list_race[i] == _race) {
                _data += '<label><input class="forChoiseRace" checked="checked" type="radio" name="raceChoice" value="'+manager.list_race[i]+'">'+manager.list_race[i]+'</label><br />';
            }
            else if (manager.list_race[i] != "all") {
                _data += '<label><input class="forChoiseRace" type="radio" name="raceChoice" value="'+manager.list_race[i]+'">'+manager.list_race[i]+'</label><br />';
            }
            i += 1;
        }
        $("#formChoiseRace").html(_data);
    };

    var clearElementSelectedHome = function(_value)
    {
        if (_value)
        {
            $("#informationsElementHome").css("display", "block");
        }
        else {
            $("#informationsElementHome").css("display", "none");
        }
    };

    $(document).on("click", ".forChoiseRace", function() {
        var _elem = manager.findAnElement(actifHomeElement);
        if (_elem != null) {
         //   console.log("Race modified : " + _elem.race + '->' + $(this).attr("value"));
            _elem.race = $(this).attr("value");
            get_race();
            upInfoTree();
            upInfoUnitSelected();
        }
    });

    var upInfoUnitSelected = function() {
        var _elem = manager.findAnElement(actifHomeElement);
        if (_elem == null) {
            $("#raceElements").html('<span id="raceElements"><b>Name</b> : <i>Null</i><br /><b>Type</b> : <i>Null</i><br />');
        }
        else {
            if (_elem.type == "Building")
                $("#batElementInRace").html('<img src="img/buildings.png"\>');
            else if (_elem.type == "Unit")
                $("#batElementInRace").html('<img src="img/units.png"\>');
            else if (_elem.type == "Heros")
                $("#batElementInRace").html('<img src="img/heros.png"\>');
            else if (_elem.type == "Amelioration")
                $("#batElementInRace").html('<img src="img/ameliorations.png"\>');
            else if (_elem.type == "Capacity")
                $("#batElementInRace").html('<img src="img/capacities.png"\>');
            $("#nameElements").val(_elem.name);
            printRaceInfo(_elem.race);
            var i = 0;
            var _data = "";
            while (i < _elem.requirements.length) {
                _data += '<span class="button-1 minus '+_elem.type+'_bg ">' + _elem.requirements[i].name + "</span>";
                i += 1;
            }
            $("#requierementsList").html(_data);
        }
    };

    $(document).on("click", ".eventElement", function() {
        actifEvent = $(this).text();
        load_eventPannel();
    });

    $(document).on("click", ".raceElementInContainer", function(){
        actifHomeElement = $(this).text();
        clearElementSelectedHome(true);
        upInfoTree();
        upInfoUnitSelected();
    });

    $("#add_erace").click(function () {
        var act = manager.findAnElement(actifHomeElement);
        var _elem = manager.findAnElement($("#input_erace").val());
        if (_elem == null || act == null){
     //       console.log('_elem :' + _elem + ' ;; act :' +act);
            return (false);
        }
        else {
            var i = 0;
            var find = false;
            while (i < act.requirements.length) {
                if (_elem.name == act.requirements[i])
                {
            //        console.log("Existe deja");
                    return (false);
                }
                i += 1;
            }
            act.requirements.push(_elem);
            upInfoUnitSelected();
        }
        return (true);
    });

    $("#del_erace").click(function () {
        var act = manager.findAnElement(actifHomeElement);
        var i = 0;
        while (i < act.requirements.length) {
            if ($("#input_erace").val() == act.requirements[i].name)
            {
       //         console.log('suppresion');
                act.requirements.splice(i, 1);
                upInfoUnitSelected();
                return (true);
            }
            i += 1;
        }
   //     console.log("fail delete");
        return (false);
    });

    var gestion_home = function(_bool) {
        if (_bool) {
            $("#gestion_race").css('display', 'block');
            $("#MenuLeftAction").css('display', 'none');
            get_race();
        }
        else {
            $("#gestion_race").css('display', 'none');
            $("#MenuLeftAction").css('display', 'block');
            $("#DataRequierements").css('display', 'none');
        }
    };

    $("#add_race").click(function () {
        var _info = $("#input_race").val();
        if (actif == "Home")
        {
            if (_info.length <= 0) {
                return (false);
            }
            manager.addRaces(_info);
            get_race();
            upInfoUnitSelected();
            $('#input_race').val("");
        }
    });

    $("#del_race").click(function () {
        var _info = $("#input_race").val();
        if (_info.length <= 0) {
        //    console.log("length : 0");
            return (false);
        }
        manager.delRaces(_info);
        get_race();
        upInfoUnitSelected();
    });

    var launch_home = function() {
    		  //        |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1,  0, 0,   0, 0,   1, 1, 1, 1, 1,  1, 1, 1 ];
        aff_event(false);
        aff_map("false");
        showInput(true);
    	modRightMenu("Home", "depandancies", modification);
    };
    var launch_building = function() {
    		  //        |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  0, 0,   0, 0,   0, 0, 0, 0, 0,  0, 0, 0 ];
        aff_map("false");
        aff_event(false);
        clearElementSelectedHome(false);
        gestion_home(false);
        showInput(true);
    	modRightMenu("Buildings", "buildings", modification);
    };

    var launch_unit = function() {
    		  //        |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1,  0, 0,   0, 0,   1, 1, 1, 1, 1,  0, 0, 0 ];
        aff_map("false");
        aff_event(false);
        gestion_home(false);
        showInput(true);
    	modRightMenu("Units", "units", modification);
    };

    var launch_hero = function() {
    		  //        |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1,   0, 0,   1, 1, 1, 1, 1,  1, 1, 1 ];
        aff_map("false");
        aff_event(false);
        gestion_home(false);
        showInput(true);
    	modRightMenu("Heros", "heros", modification);
    };

    var launch_object = function() {
    		  //        |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,  0, 0,   0, 0,   0, 0, 0, 0, 0,  0, 0, 0 ];
        aff_map("false");
        aff_event(false);
        gestion_home(false);
        showInput(true);
    	modRightMenu("Objects", "objects", modification);
    };

    var launch_projectile = function() {
    		  //        |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [1, 1, 1, 1, 1, 1,  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0,  0, 0, 0, 0, 0, 0,  0, 0,   0, 0,   0, 0, 0, 0, 0,  0, 0, 0 ];
        aff_map("false");
        aff_event(false);
        gestion_home(false);
        showInput(true);
    	modRightMenu("Projectiles", "projectiles", modification);
    };

    var launch_capacity = function() {
    		  //        |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [0, 0, 0, 1, 0, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,  0, 0,   1, 1,   1, 1, 1, 1, 1,  0, 0, 0 ];
        aff_map("false");
        aff_event(false);
        gestion_home(false);
        showInput(true);
    	modRightMenu("Capacitys", "capacities", modification);
    };

    var launch_spell = function() {
    		  //        |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [0, 0, 0, 1, 0, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  1, 1, 1, 1, 1, 1,  0, 0,   1, 1,   1, 1, 1, 1, 1,  0, 0, 0 ];
        aff_map("false");
        aff_event(false);
        gestion_home(false);
        showInput(true);
    	modRightMenu("Spells", "spells", modification);
    };

    var launch_amelioration = function() {
    		  //        |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [0, 0, 0, 1, 1, 1,  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  1, 1, 1, 1, 1, 1,  0, 0,   0, 0,   1, 1, 1, 1, 1,  0, 0, 0 ];
        aff_map("false");
        aff_event(false);
        gestion_home(false);
        showInput(true);
    	modRightMenu("Ameliorations", "ameliorations", modification);
    };

    var launch_effect = function() {
    		  //        |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1,  0, 0,   0, 0,   1, 1, 1, 1, 1,  0, 0, 0 ];
        aff_map("false");
        aff_event(false);
        gestion_home(false);
        showInput(true);
    	modRightMenu("Effects", "effects", modification);
    };

    var launch_event = function() {
    					// |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1,  0, 0,   0, 0,   1, 1, 1, 1, 1,  0, 0, 0 ];
        aff_map("false");
        gestion_home(false);
        showInput(false);
    	modRightMenu("Event", "evenements", modification);
        aff_event(true);
    };

    var launch_map = function() {
    					// |    graphics     |           data                             |      cost       | heros | CapaD |    Timer      |   Elem  |
    	var modification = [1, 1, 1, 1, 1, 1,  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,  0, 0,   0, 0,   1, 1, 1, 1, 1,  0, 0, 0 ];
        gestion_home(false);
        aff_event(false);
        modRightMenu("false", "map", modification);
        showInput(false);
    	aff_map("map");
    };
// PANELL FUNCTION -------------------------------------------------------------------
    pannelEventType = "race";

    var draw_raceCreation_pannel = function()
    {
        _data = _ContainerObjectRaceCreation.HTML();
        $("#container_raceCreation").html(_data);
    };

    var load_raceCreation_pannel = function(_data)
    {
        var i = 0;
        while (i < _data.length)
        {
            add_raceCreation_pannel(_data[i].nb, _data[i].name, _data[i].race);
            i++;
        }
    };

    var add_raceCreation_pannel = function(_nb, _name, _race)
    {
        _ContainerObjectRaceCreation.add(_nb, _name, _race);
    };

    var rm_raceCreation_pannel = function(_nb, _name, _race)
    {
        _ContainerObjectRaceCreation.min(_nb, _name, _race);
    };

    $("#add_element_to_race").click(function() {
        if ($("#input_element_to_race_nb").val().length <= 0) {
            return;
        }
        _nb = parseInt($("#input_element_to_race_nb").val());
        _race = actifEvent;
        _name = $("#input_element_to_race_name").val();
        
        add_raceCreation_pannel(_nb, _name, _race);
        draw_raceCreation_pannel();
    });

    $("#rm_element_to_race").click(function() {
        if ($("#input_element_to_race_nb").val().length <= 0)
            return;
        _nb = parseInt($("#input_element_to_race_nb").val());
        _race = actifEvent;
        _name = $("#input_element_to_race_name").val();
        
        rm_raceCreation_pannel(_nb, _name, _race);
        draw_raceCreation_pannel();
    });

    // DRAW _ ELEMENT MAP _ PANNEL
    var draw_elementMap_pannel = function()
    {
        _data = _ContainerObjectOnMap.HTML();
        $("#container_elementMap").html(_data);
    };

    var load_elementMap_pannel = function(_data)
    {
        var i = 0;
        while (i < _data.length)
        {
            add_raceOnMap_pannel(_data[i].nb, _data[i].name, _data[i].x, _data[i].y);
            i++;
        }
    }

    var add_raceOnMap_pannel = function(_nb, _name, _x, _y)
    {
        _ContainerObjectOnMap.add(_nb, _name, _x, _y);
    };

    var rm_raceOnMap_pannel = function(_nb, _name, _x, _y)
    {
        _ContainerObjectOnMap.min(_nb, _name, _x, _y);
    };

    $("#add_element_to_onMap").click(function() {
        if ($("#input_element_to_onMap_x").val().length <= 0 || $("#input_element_to_onMap_y").val().length <= 0 || $("#input_element_to_onMap_nb").val().length <= 0
            || $("#input_element_to_onMap_name").val().length <= 0)
            return;
        _x = parseInt($("#input_element_to_onMap_x").val());
        _y = parseInt($("#input_element_to_onMap_y").val());
        _nb = parseInt($("#input_element_to_onMap_nb").val());
        _name = $("#input_element_to_onMap_name").val();

        add_raceOnMap_pannel(_nb, _name, _x, _y);
        draw_elementMap_pannel();
    });

    $("#rm_element_to_onMap").click(function() {
        if ($("#input_element_to_onMap_x").val().length <= 0 || $("#input_element_to_onMap_y").val().length <= 0 || $("#input_element_to_onMap_nb").val().length <= 0
            || $("#input_element_to_onMap_name").val().length <= 0)
            return;
        _x = parseInt($("#input_element_to_onMap_x").val());
        _y = parseInt($("#input_element_to_map_y").val());
        _nb = parseInt($("#input_element_to_onMap_nb").val());
        _name = $("#input_element_to_onMap_name").val();

        rm_raceOnMap_pannel(_nb, _name, _x, _y);
        draw_elementMap_pannel();
    });

    // DRAW _ POSITION _ MAP _ PANNEL
    var draw_positionMap_pannel = function()
    {
        _data = _ContainerObjectBeginningPosition.HTML();
        $("#container_positionMap").html(_data);
    };

    var load_positionMap_pannel = function(_data)
    {
        i = 0;
        while (i < _data.length)
        {
            add_positionMap_pannel(_data[i].x, _data[i].y);
            i++;
        }
    };

    var add_positionMap_pannel = function(_x, _y)
    {
        _ContainerObjectBeginningPosition.add(_x, _y);
    };

    var rm_positionMap_pannel = function(_x, _y)
    {
        _ContainerObjectBeginningPosition.min(_x, _y);
    };

    $("#add_element_to_map").click(function() {
        if ($("#input_element_to_map_x").val().length <= 0 || $("#input_element_to_map_y").val().length <= 0)
            return;
        _x = parseInt($("#input_element_to_map_x").val());
        _y = parseInt($("#input_element_to_map_y").val());
        add_positionMap_pannel(_x, _y);
        draw_positionMap_pannel();
    });

    $("#rm_element_to_map").click(function() {
        if ($("#input_element_to_map_x").val().length <= 0 || $("#input_element_to_map_y").val().length <= 0)
            return;
        _x = parseInt($("#input_element_to_map_x").val());
        _y = parseInt($("#input_element_to_map_y").val());
        rm_positionMap_pannel(_x, _y);
        draw_positionMap_pannel();
    });

    var load_eventPannel = function(_aff)
    {
        $("#elementsMenu").html(manager.getRacesWOAll(actifEvent));
        draw_raceCreation_pannel();
        draw_elementMap_pannel();
        draw_positionMap_pannel();
    };

    var actifEvent = "neutral"
    var aff_event = function(_aff)
    {
        if (_aff)
        {
            actifEvent = "neutral";
            load_eventPannel();
            $("#elementsMenu").css("display", "block");
            $("#eventPannel").css("display", "block");
        }
        else
        {
            $("#eventPannel").css("display", "none");
        }
    }
// PANNELL END00-------------------------

    var showInput = function(_aff)
    {
        if (_aff)
        {
            $("#inputTopMenu").css("display", 'block');
        }
        else
        {
            $("#inputTopMenu").css("display", 'none');
        }
    };

    var aff_map = function(_name) {
        if (_name == "false") {
            $("#DataMap").hide(0).css("display", "none");
            $("#MenuMap").hide(0).css("display", "none");
            $(".mapMenu").css("display", 'none');
            $(".map").css("display", 'none');
            $("#coordonneeInfoMap").css('display', 'none');
           // drawSubMenu();
            return;
        }
        else {
            $("#DataMap").show(0).css("display", "block");
            $("#MenuMap").show(0).css("display", "block");
            $(".mapMenu").css("display", 'block');
            $(".map").css("display", 'block');
            $("#coordonneeInfoMap").css('display', 'block');
            drawSubMenu();
        }
    };

    var putInfo = function(_element) {
        if (_element == null)
            return;
        //console.log('hitbox:'+_element.hitbox);
        $('#input_hitbox').val(_element.hitbox);
        //console.log('attack:'+_element.attack);
        $('#input_attack').val(_element.attack);
        //console.log('hp:'+_element.hp);
        $('#input_hp').val(_element.hp);
        //console.log('regen_hp:'+_element.regenHp);
        $('#input_regen_hp').val(_element.regenHp);
        //console.log('typeRessource:'+_element.typeRessource);
        $('#input_type_ress').val(_element.typeRessource);
        //console.log('ressource:'+_element.Ressource);
        $('#input_ressource').val(_element.Ressource);
        //console.log('regenRessource:'+_element.regenRessource);
        $('#input_regen_ress').val(_element.regenRessource);
        //console.log('attack_speed:'+_element.attack_speed);
        $('#input_attack_speed').val(_element.attackSpeed);
        //console.log('critick:'+_element.critick);
        $('#input_critick').val(_element.critick);
        //console.log('speed:'+_element.speed);
        $('#input_speed').val(_element.speed);
        //console.log('defense:'+_element.defense);
        $('#input_defense').val(_element.defense);
        //console.log('vision_night:'+_element.vision_night);
        $('#input_vision_night').val(_element.vision_night);
        //console.log('vision_day:'+_element.vision_day);
        $('#input_vision_day').val(_element.vision_day);
        //console.log('range:'+_element.range);
        $('#input_range').val(_element.range);

        //console.log('cost_life:'+_element.cost_life);
        $('#input_cost_life').val(_element.cost_life);
        //console.log('cost_gold:'+_element.cost_gold);
        $('#input_cost_gold').val(_element.cost_gold);
        //console.log('cost_wood:'+_element.cost_wood);
        $('#input_cost_wood').val(_element.cost_wood);
        //console.log('cost_food:'+_element.cost_food);
        $('#input_cost_food').val(_element.cost_food);
        //console.log('cost_type_ress:'+_element.cost_type_ress);
        $('#input_cost_type_ress').val(_element.cost_type_ress);
        //console.log('cost_type_ress:'+_element.cost_ress);
        $('#input_cost_ressource').val(_element.cost_ress);

        $('#input_can_auto').val(_element.can_auto);
        //console.log('can_auto:'+_element.can_auto);
        $('#input_is_auto').val(_element.is_auto);
        //console.log('is_auto:'+_element.is_auto);

        $('#input_enum_canalisation').val(_element.enum_canalisation);
        //console.log('enum_canalisation:'+_element.enum_canalisation);
        $('#input_canalisation').val(_element.canalisation);
        //console.log('canalisation:'+_element.canalisation);
        $('#input_cooldown').val(_element.cooldown);
        //console.log('cooldown:'+_element.cooldown);
        $('#input_creation').val(_element.creation);
        //console.log('creation:'+_element.creation);
        $('#input_duration').val(_element.duration);
        //console.log('duration:'+_element.duration);

        $('#input_type_ress_act').val(_element.elem_type_ress);
        //console.log('elem_type_ress:'+_element.elem_type_ress);
        $('#input_life_act').val(_element.elem_life_act);
        //console.log('elem_life_act:'+_element.elem_life_act);
        $('#input_ressource_act').val(_element.elem_ress);
        //console.log('elem_ress:'+_element.elem_ress);
        $('#nameElements').val(_element.name);
        //console.log('name:'+_element.name);
        $('#descriptionElements').val(_element.description);
        //console.log('description:'+_element.description);

        $('#input_xp').val(_element.xp);
       // console.log('xp:'+_element.xp);
        $('#input_level').val(_element.level);
        $("#input_element").val("");
        $("#elementsCapacityList").html(manager.getCapacityToElement(_element));
     //   console.log('level:'+_element.level);
        $('#input_voice').val(_element.voice);
        $('#input_graphic_model').val(_element.model);
        $('#input_voice_attack').val(_element.voice_attack);
        $('#input_icon').val(_element.icon);
        $('#input_voice_creation').val(_element.voice_birth);
        $('#input_voice_die').val(_element.voice_die);
      //  console.log('OOO:'+ $('input[type=radio][name=type_effect]:checked').attr('value'));
        $('input[type=radio][name=type_effect]').attr('checked', false);
        $('#type_effect_'+_element.effect_type).prop('checked', true);
        $('input[type=radio][name=type_cible_effect]').attr('checked', false);
        $('#type_cible_effect_'+_element.effect_cible).prop('checked', true);
        $('input[type=radio][name=type_camp_effect]').attr('checked', false);
        $('#type_camp_effect_'+_element.effect_equip).prop('checked', true);
        $('input[type=radio][name=cible_capa_type]').attr('checked', false);
        $('#cible_capa_type_'+_element.cible_type).prop('checked', true);
        $('#invokeType').val(_element.effect_link);
    };


    var savInfo = function(_element, _new)
    {
        _value = typeof _value !== 'undefined' ? _value : false;
        if (actif == "map") {
        }
        var sav = 0;
        if (_element == null)
        {
            return;
        }
        if (_element.hitbox         != $('#input_hitbox').val()) {
            sav++;
            _element.hitbox         = $('#input_hitbox').val();
        }
        if (_element.attack         != $('#input_attack').val()) {
            sav++;
            _element.attack         = $('#input_attack').val();
        }
        if (_element.hp             != $('#input_hp').val()) {
            sav++;
            _element.hp             = $('#input_hp').val();
        }
        if (_element.regenHp        != $('#input_regen_hp').val()) {
            sav++;
            _element.regenHp        = $('#input_regen_hp').val();
        }
        if (_element.typeRessource  != $('#input_type_ress').val()) {
            sav++;
            _element.typeRessource  = $('#input_type_ress').val();
        }
        if (_element.Ressource      != $('#input_ressource').val()){
            sav++;
            _element.Ressource      = $('#input_ressource').val();
        }
        if (_element.regenRessource != $('#input_regen_ress').val()){
            sav++;
            _element.regenRessource = $('#input_regen_ress').val();
        }
        if (_element.attackSpeed    != $('#input_attack_speed').val()){
            sav++;
            _element.attackSpeed    = $('#input_attack_speed').val();
        }
        if (_element.critick        != $('#input_critick').val()){
            sav++;
            _element.critick        = $('#input_critick').val();
        }
        if (_element.speed          != $('#input_speed').val()){
            sav++;
            _element.speed          = $('#input_speed').val();
        }
        if (_element.defense        != $('#input_defense').val()){
            sav++;
            _element.defense        = $('#input_defense').val();
        }
        if (_element.vision_night   != $('#input_vision_night').val()){
            sav++;
            _element.vision_night   = $('#input_vision_night').val();
        }
        if (_element.vision_day     != $('#input_vision_day').val()){
            sav++;
            _element.vision_day     = $('#input_vision_day').val();
        }
        if (_element.range          != $('#input_range').val()){
            sav++;
            _element.range          = $('#input_range').val();
        }
        if (_element.cost_life      != $('#input_cost_life').val()){
            sav++;
            _element.cost_life      = $('#input_cost_life').val();
        }
        if (_element.cost_gold      != $('#input_cost_gold').val()){
            sav++;
            _element.cost_gold      = $('#input_cost_gold').val();
        }
        if (_element.cost_wood      != $('#input_cost_wood').val()){
            sav++;
            _element.cost_wood      = $('#input_cost_wood').val();
        }
        if (_element.cost_food      != $('#input_cost_food').val()){
            sav++;
            _element.cost_food      = $('#input_cost_food').val();
        }
        if (_element.cost_type_ress != $('#input_cost_type_ress').val()){
            sav++;
             _element.cost_type_ress = $('#input_cost_type_ress').val();
        }
        if (_element.cost_ress      != $('#input_cost_ressource').val()){
            sav++;
            _element.cost_ress      = $('#input_cost_ressource').val();
        }
        if (_element.can_auto       != $('#input_can_auto').val()){
            sav++;
            _element.can_auto       = $('#input_can_auto').val();
        }
        if (_element.is_auto        != $('#input_is_auto').val()){
            sav++;
            _element.is_auto        = $('#input_is_auto').val();
        }
        if (_element.enum_canalisation != $('#input_enum_canalisation').val()){
            sav++;
            _element.enum_canalisation = $('#input_enum_canalisation').val();
        }
        if (_element.canalisation   != $('#input_canalisation').val()){
            sav++;
            _element.canalisation   = $('#input_canalisation').val();
        }
        if (_element.cooldown       != $('#input_cooldown').val()){
            sav++;
            _element.cooldown       = $('#input_cooldown').val();
        }
        if (_element.creation       != $('#input_creation').val()){
            sav++;
            _element.creation       = $('#input_creation').val();
        }
        if (_element.duration       != $('#input_duration').val()){
            sav++;
            _element.duration       = $('#input_duration').val();
        }
        if (_element.elem_type_ress != $('#input_type_ress_act').val()){
            sav++;
            _element.elem_type_ress = $('#input_type_ress_act').val();
        }
        if (_element.elem_life_act  != $('#input_life_act').val()){
            sav++;
            _element.elem_life_act  = $('#input_life_act').val();
        }
        if (_element.elem_ress      != $('#input_ressource_act').val()){
            sav++;
            _element.elem_ress      = $('#input_ressource_act').val();
        }
        if (_element.level            != $('#input_level').val())
        {
            sav++;
            _element.level          = $('#input_level').val();
        }
        if (_element.xp            != $('#input_xp').val())
        {
            sav++;
            _element.xp             = $('#input_xp').val();
        }
        /* GRPHICAL */
        if (_element.voice         != $('#input_voice').val())
        {
            sav++;
            _element.voice          = $('#input_voice').val();
        }
        if (_element.model         != $('#input_graphic_model').val())
        {
            sav++;
            _element.model          = $('#input_graphic_model').val();
        }
        if (_element.voice_attack  != $('#input_voice_attack').val())
        {
            sav++;
            _element.voice_attack   = $('#input_voice_attack').val();
        }
        if (_element.icon         != $('#input_icon').val())
        {
            sav++;
            _element.icon          = $('#input_icon').val();
        }
        if (_element.voice_birth  != $('#input_voice_creation').val())
        {
            sav++;
            _element.voice_birth   = $('#input_voice_creation').val();
        }
        if (_element.voice_die  != $('#input_voice_die').val())
        {
            sav++;
            _element.voice_die   = $('#input_voice_die').val();
        }
        _element.effect_type    = $('input[type=radio][name=type_effect]:checked').attr('value');
        _element.effect_cible   = $('input[type=radio][name=type_cible_effect]:checked').attr('value');
        _element.effect_equip   = $('input[type=radio][name=type_camp_effect]:checked').attr('value');
        _element.effect_link    = $('#invokeType').val();
        _element.cible_type     = $('input[type=radio][name=cible_capa_type]:checked').val();
        /* END */
        if (_element.name == $('#nameElements').val() || manager.exist($('#nameElements').val()) == 0)
        {
            _element.name           = $('#nameElements').val();
            sav++;
        }
        else {
            console.log('savInfo : can\'t sav info ');
            sav = -1;
        }
        if (sav == 0) {
            $("#contentInfo").text('');
        }
        else if (sav > 0) {
            $("#contentInfo").text('Sauvegarde de '+sav+' modifications');
        }
        else {
            $("#contentInfo").text('Error sauvegarde');
        }
        _element.description    = $('#descriptionElements').val();
        listData = getter[actif]();
        setLeftMenuElements(elementActif);
     /*   
        $('#input_hp').val(_element.voice);
        $('#input_hp').val(_element.voice_die);
        $('#input_hp').val(_element.voice_birth);
        $('#input_hp').val(_element.icon);
        $('#input_hp').val(_element.model);*/
    };

    var selectEvent = function(_name) {
            $("#elementsMenu").html(manager.getRacesWOAll(actifHome));
    };

    var selectElement = function(_name) {
        if (visibleMain == false)
        {
            $("#DataCenter").css('display', 'block');
            $("#DataCenter").slideDown();
            visibleMain = true;
        }
        savInfo(getElements[actif](elementActif));
        elementActif = _name;
        setLeftMenuElements(elementActif);
        putInfo(getElements[actif](elementActif));
    };

    /* RIGHTMENU : FILE */
    $("#add_race").click(function(){
        savInfo(getElements[actif](elementActif));
        if (actif == "Home")
            return;
    	if (actif == "") {
    		alert('Error : #add_race : actif = ""');
    		return;
    	}
        _name = $('#input_race').val();
        if (_name.length <= 0) {
      //      console.log("NAME ::"+$('#input_race').val());
            _name = "Undefined";
            $('#input_race').val("");
        }
    	if (ptr[actif] == true) {
    		var value = ptrBis[actif](_name);
    		if (value > 0) {
    			alert('Deja existant dans : ' + debug[value]);
    		}
    		else {
                listNbElement[actif] += 1;
                listData = getter[actif]();
                setLeftMenuElements(_name);
                majButtonMenu(valueMax, valueAct);
                majInfoMap();
                selectElement(_name);
    		}
    	}
    });

    $("#fileMin").click(function(){
        savInfo(getElements[actif](elementActif));
        setLeftMenuElements(elementActif);
    	alert("-");
    });

    $(document).on("click", "a.linkElement", function(){

        selectElement($(this).attr("ref"));
    });

    var actifMapMenu = "map_menu_level";

    var drawSubMenu = function()
    {
        if (actifMapMenu) {
            if ("map_menu_level" != actifMapMenu) {
                $("#map_menu_level").hide(0);
            }
            else {
                $("#map_menu_level").show(0);
                $("#TitleLeftMenu").html('<img src="img/levelTerrain.png" class="menuItem"> Map level');
            }

            if ("map_menu_ressource" != actifMapMenu) {
                $("#map_menu_ressource").hide(0);
            }
            else {
                $("#map_menu_ressource").show(0);
                $("#TitleLeftMenu").html('<img src="img/resources.png" class="menuItem"> Ressource');
            }

            if ("map_menu_teleport" != actifMapMenu) {
                $("#map_menu_teleport").hide(0);
            }
            else {
                $("#map_menu_teleport").show(0);
                $("#TitleLeftMenu").html('<img src="img/teleport.png" class="menuItem"> Teleport');
            }

            if (actifMapMenu == "map_menu_ressource") {
                $("#ressourceMap").css('display', 'block');
            }
            else {
                $("#ressourceMap").css('display', 'none');
            }
        }

    }

    $(".mapMenu").click(function () {
        var ref = $(this).attr("ref");
        actifMapMenu = ref;
        drawSubMenu();
    });

    var generate_map = function() {
        var parse_value_map = function(value) {
            var match = value.match(/^[0-9]+$/);
            if (match) {
                if (parseInt(value) >= 30 && parseInt(value) <= 150) {
                    return true;
                }
            }
            return false;
        };

        if (parse_value_map($("#xMap").val()) && parse_value_map($("#yMap").val())) {
            x = parseInt($("#xMap").val());
            y = parseInt($("#yMap").val());
            var xMax = x;
            var yMax = y;
            var first = true;
            var _data = "";
            $("#contentMap").css('width', ''+xMax * 27+'');
            $("#contentMap").css('height', ''+yMax * 30+'');
            while (x > 0) {
                if (first) {
                    _data += '<div class="lineMap">';
                }
                else if (x % 2 == 0) {
                    _data += '<div class="lineMap tierce">';
                }
                else {
                    _data += '<div class="lineMap bottom">';
                }
                first = false;
                y = yMax;
                var pourcent = Math.round(yMax / (yMax - y) * 100);
                $("#contentInfo").html('Generation : <span class="progressBar height"><span class="contentBar" style="width:'+pourcent+'%"></span></span>'+pourcent+'%');
                while (y > 0) {
                    _data += '<div class="hex little one" x="'+(xMax - x)+'" y="'+(yMax - y)+'" depth="one"></div>';
                    y -= 1;
                }
                _data += '</div>';
                x -= 1;
            }
            manager.setMap(xMax, yMax, 1);
            $("#contentMap").html(_data);
            $("#contentInfo").html('Generation : <span class="progressBar height"><span class="contentBar" style="width:100%"></span></span>100%');
        }
        else {
            $("#contentInfo").text('Bad arguments : [30 <= x/y <= 150]');
            /* Mauvais parsing*/
        }
    };

    var type_hex_act = "max";
    $(".buttonMenuMap").click(function() {
        var attr = $(this).attr("ref");
            if (attr == "min") {
                $(".buttonMenuMap").removeClass('selected');
                $(this).addClass('selected');
                type_hex_act = "min";
            }
            else if (attr == "max") {
                $(".buttonMenuMap").removeClass('selected');
                $(this).addClass('selected');
                type_hex_act = "max";
            }
            else if (attr == "none") {
                $(".buttonMenuMap").removeClass('selected');
                $(this).addClass('selected');
                type_hex_act = "none";
            }
            else if (attr == "seven") {
                $(".buttonMenuMap").removeClass('selected');
                $(this).addClass('selected');
                type_hex_act = "seven";
            }
            else if (attr == "generate") {
                generate_map();
            }
            else if (attr == "wood" || attr == "gold") {
                if ($("#RessXMap").val().length <= 0 || $("#RessYMap").val().length <= 0)
                    return;
                var i = (parseInt($("#RessXMap").val()) + parseInt($("#RessYMap").val()) * parseInt(manager.sizeMapX())).toString();
                r = 0;
                if ($("#valueRessourceMap").val().length > 0)
                    r = $("#valueRessourceMap").val();
                manager.setValueRessource(i, attr, r, parseInt($("#RessXMap").val()), parseInt($("#RessYMap").val()));
                $("#ressourceMap").html(manager.giveAllRessource());
            }
            else if (attr == "removes") {
                var i = (parseInt($("#RessXMap").val()) + parseInt($("#RessYMap").val()) * parseInt(manager.sizeMapX())).toString();
                manager.deleteValueRessource(i);
                $("#ressourceMap").html(manager.giveAllRessource());
            }
    });

    var majIdMap = function(_x, _y, _depth) {
        var  convert = [];
        convert["none"]     = 0;
        convert["one"]      = 1;
        convert["two"]      = 2;
        convert["three"]    = 3;
        convert["four"]     = 4;
        convert["five"]     = 5;
        convert["six"]      = 6;
        convert["seven"]    = 7;
        $("#xMouseOverMap").text(_x);
        $("#yMouseOverMap").text(_y);
        $("#dMouseOverMap").text(convert[_depth]);
    };

    var majMapManager = function(_x, _y, _depth) {
        var  convert = [];
        convert["none"]     = 0;
        convert["one"]      = 1;
        convert["two"]      = 2;
        convert["three"]    = 3;
        convert["four"]     = 4;
        convert["five"]     = 5;
        convert["six"]      = 6;
        convert["seven"]    = 7;
        manager.upMap(_y, _x, convert[_depth]);
    };

    $(document).on("mouseover", ".hex", function(){
        majIdMap($(this).attr("x"), $(this).attr("y"), $(this).attr("depth"));
    });

    $(document).on("click", ".hex", function(){
        var max = [];
        max["none"]     = "one";
        max["one"]      = "two";
        max["two"]      = "three";
        max["three"]    = "four";
        max["four"]     = "five";
        max["five"]     = "six";
        max["six"]      = "seven";
        max["seven"]    = "seven";
        var min = [];
        min["none"]     = "none";
        min["one"]      = "none";
        min["two"]      = "one";
        min["three"]    = "two";
        min["four"]     = "three";
        min["five"]     = "four";
        min["six"]      = "five";
        min["seven"]    = "six";

        d = $(this).attr("depth");

        if (actifMapMenu == "map_menu_level")
        {
            if (type_hex_act == "min") {
                $(this).attr("depth", min[d]);
                $(this).removeClass(d);
                $(this).addClass(min[d]);
                majIdMap($(this).attr("x"), $(this).attr("y"), $(this).attr("depth"));
                majMapManager($(this).attr("x"), $(this).attr("y"), $(this).attr("depth"));
            }
            else if (type_hex_act == "max") {
                $(this).attr("depth", max[d]);
                $(this).removeClass(d);
                $(this).addClass(max[d]);
                majIdMap($(this).attr("x"), $(this).attr("y"), $(this).attr("depth"));
                majMapManager($(this).attr("x"), $(this).attr("y"), $(this).attr("depth"));
            }
            else if (type_hex_act == "seven" || type_hex_act == "none") {
                $(this).attr("depth", type_hex_act);
                $(this).removeClass(d);
                $(this).addClass(type_hex_act);
                majIdMap($(this).attr("x"), $(this).attr("y"), $(this).attr("depth"));
                majMapManager($(this).attr("x"), $(this).attr("y"), $(this).attr("depth"));
            }
        }
        else if (actifMapMenu == "map_menu_ressource")
        {
            $("#woodMenuMap").removeClass("selected");
            $("#goldMenuMap").removeClass("selected");
            $("#RessXMap").val($(this).attr("x"));
            $("#RessYMap").val($(this).attr("y"));
            var i = (parseInt($(this).attr("x")) + parseInt($(this).attr("y")) * parseInt(manager.sizeMapX())).toString();
            var v = manager.getValueRessource(i);
      //      console.log("write:"+v+"; index:"+i);
            if (v == null) {
                $("#valueRessourceMap").val("");
            }
            else {
                $("#valueRessourceMap").val(v.value);
                if (v.type == "wood") {
                    $("#woodMenuMap").addClass("selected");
                }
                else {
                    $("#goldMenuMap").addClass("selected");
                }
            }
        }
    });

    /* MENU_ICON */
    $(".menuItemInfo").click(function(){
    	var attr = $(this).attr("ref");
    	var ptr = [];
    	ptr['home'] 		= launch_home; 
    	ptr['building'] 	= launch_building;
    	ptr['unit'] 		= launch_unit; 
    	ptr['hero'] 		= launch_hero; 
    	ptr['object'] 		= launch_object; 
    	ptr['projectile'] 	= launch_projectile; 
    	ptr['capacity'] 	= launch_capacity; 
    	ptr['spell'] 		= launch_spell; 
    	ptr['amelioration'] = launch_amelioration; 
    	ptr['effect'] 		= launch_effect; 
    	ptr['event'] 		= launch_event; 
    	ptr['map'] 			= launch_map;
        $('.menuItemInfo').removeClass("selected");
        $('.menuItemInfo').children(".old").css('display', 'inline');
        $('.menuItemInfo').children(".new").css('display', 'none');
        $(this).addClass("selected");
        $(this).children(".old").css('display', 'none');
        $(this).children(".new").css('display', 'inline');
        if (elementActif != "" && actif != "") {
            if ('map' == actif) {
                /*actif*/
            }
            else {
                savInfo(getElements[actif](elementActif));
            }
        }
    	ptr[attr]();
    })

    /* KEYBOARD */
    $(document).keydown(function(e)
    {
        if (e.keyCode == 38) { 
           alert( "Up" );
           return false;
        }
        else if (e.keyCode == 187) {
            alert("+");
        }
        else if (e.keyCode == 189) {
            alert("-");
        }
        else if (e.keyCode == 40) {
            alert("Down");
        }
    });

    $("#newHome").click(function (){
        $("#prez").animate({
                'margin-top': 10
                }, 150, function() {
                    typeFile = 1;
                    $("#champsPrez").css('display', 'block');
                    $("#file_on_server").css('display', 'block');
                    $("#continueHomePage").css('display', 'block');
                    $("#champsPrez").slideDown(300);
            });
    });

    $(".file_on").click(function (){
        if (load_file($(this).attr('ref')) == 0)
        {
            file = $(this).attr('ref');
            majInfoMap();
            $("#homePage").slideUp();
        }else {
          //  $("#errorHomePage").html("File not found");
        }
    });
    /* SAV INFORMATION */
    $("#save").click(function() {
        save_file(file);
    });

    $("#add_element").click(function() {
        var elem = $("#input_element").val();
        var _act = getElements[actif](elementActif);
        if (elem.length == 0) {
            return;
        }
        var v = manager.addCapacityToElement(_act, elem, actif);
        if (v == 0) {
  //          console.log("push");
            $("#input_element").val("");
            $("#elementsCapacityList").html(manager.getCapacityToElement(_act));
        }
        else {
            if (v == -1) {
                console.log("N'existe pas");
            }
            else if (v == -2) {
                console.log("Deja dans la list");
            }
            else if (v == -3) {
                console.log("Incompatible");
            }
            else {
                console.log("Unknown");
            }
        }
    });

    $("#del_element").click(function() {
        var elem = $("#input_element").val();
        var _act = getElements[actif](elementActif);
        if (elem.length == 0) {
            return;
        }
        var v = manager.delCapacityToElement(_act, elem, actif);
    });

    $( ".menuItemInfo" ).hover(
        function() {
            $(this).children('.informationMenuItem').css("visibility", "visible");
        }, function() {
            $(this).children('.informationMenuItem').css("visibility", "hidden");
        }
    );

    $("#continueHomePage").click(function (){
        if (typeFile == 1)
        {
            if ($("#create_input").val().length < 3) {
                return;
            }
            var name_file =  $("#create_input").val() + '.hxtl';
           $.ajax({
                  type: "POST",
                  url: "script/file_exist.php",
                  data: { name: name_file}
                })
                  .done(function( msg ) {
                    if (msg == "0") {
                       // $("#errorHomePage").html("File created");
                        file = name_file;
                        majInfoMap();
                        $("#homePage").slideUp();
                    }
                    else {

                    }
                      //  $("#errorHomePage").html("File deja existant");
                  })
                  .fail(function( msg ){
                     //   $("#errorHomePage").html("Error request");
                  });
        }
    });
    majInfoMap();
    //alert(JSON.parse('{'+a.toString()+'}'));
});