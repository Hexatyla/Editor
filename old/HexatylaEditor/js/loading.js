$(document).ready(function() {
	
    var load_elements = function(_data) {
        for (var i = 0; i < _data.length; i++)
        {
            element = ptrBis[_data[i].type]();
            /* General */
            element.name = _data[i].name;
            element.description = _data[i].description;
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
            element.elem_type_ress = _data[i].elem_type_ress;
            element.elem_life_act = _data[i].elem_life_act;
            element.elem_ress = _data[i].elem_ress;
            /* Graphique */
            element.voice = _data[i].voice;
            element.voice_die = _data[i].voice_die;
            element.voice_birth = _data[i].voice_birth;
            element.icon = _data[i].icon;
            element.model = _data[i].model;
            /*elements*/
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
      //  $("#contentInfo").html('Generation : <span class="progressBar height"><span class="contentBar" style="width:100%"></span></span>100%');
    };

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
                load_elements(_data.Elements);
                load_map(_data.Map);
                majInfoMap();
            })
          .fail(function( msg )
          {
                $("#contentInfo").html("Load_file : Error request");
                  ending_value = 1;
            });
        return (ending_value);
    };

});