var ObjectHexatyla = function(_type, _name)
  {
    var type = _type;
    this.type = type;
    this.race = "neutral";
    /* General */
    this.name = _name;
    this.description = "";
    /* Data */
    this.hitbox = 0;
    this.passThrought = 0;
    this.attack = 0;
    this.hp = 0;
    this.regenHp = 0;
    this.typeRessource = 0;
    this.Ressource = 0;
    this.regenRessource = 0;
    this.attackSpeed = 0;
    this.critick = 0;
    this.speed = 0;
    this.vision_night = 0;
    this.vision_day = 0;
    this.defense = 0;
    this.range = 0;
    /* Cost */
    this.cost_gold = 0;
    this.cost_wood = 0;
    this.cost_food = 0;
    this.cost_life = 0;
    this.cost_type_ress = 0;
    this.cost_ress = 0;
    /* Capacity Data */
    this.can_auto = false;
    this.is_auto = false;
    /* Timer */
    this.enum_canalisation = 0;
    this.canalisation = 0;
    this.cooldown = 0;
    this.creation = 0;
    this.duration = 0;
    /* ElementRessource */
    this.elem_type_ress = 0;
    this.elem_life_act = 0;
    this.elem_ress = 0;
    /* Graphique */
    this.voice = "";
    this.voice_die = "";
    this.voice_attack = "";
    this.voice_birth = "";
    this.icon = "";
    this.model = "";
    /* Level */
    this.level = 0;
    this.xp = 0;
    /* Effect ++ */
    this.effect_type  = "none";
    this.effect_cible = "all";
    this.effect_equip = "all";
    this.effect_link  = "";
    this.cible_type   = "self";
    /*elements*/
    this.elements = [];
    this.elemTMP = [];
    this.requirements = [];
    this.reqTMP = [];


    this.get_elements_string  = function() {
      var _unit           = '';
      var first_unit      = true;
      var _heros          = '';
      var first_heros     = true;
      var _building       = '';
      var first_building  = true;
      var _object         = '';
      var first_object    = true;
      var _projectile     = '';
      var first_projectile = true;
      var _amelioration   = '';
      var first_amelioration= true;
      var _spell          = '';
      var first_spell     = true;
      var _capacity       = '';
      var first_capacity  = true;
      var _data = "";
      var first_effect  = true;
      var _effect = "";
      var i = 0;

      while (this.elements.length > i)
      {
        if (this.elements[i].type == "Unit") {
          if (first_unit == true) {
            first_unit = false;
          }
          else {
            _unit += ',';
          }
          _unit += '"' + this.elements[i].name + '"';
        }
        else if (this.elements[i].type == "Building") {
          if (first_building == true) {
            first_building = false;
          }
          else {
            _building += ',';
          }
          _building += '"' + this.elements[i].name + '"';
        }
        else if (this.elements[i].type == "Heros")
        {
          if (first_heros == true) {
            first_heros = false;
          }
          else {
            _heros += ',';
          }
          _heros += '"' + this.elements[i].name + '"';
        }
        else if (this.elements[i].type == "Object")
        {
          if (first_object == true) {
            first_object = false;
          }
          else {
            _object += ',';
          }
          _object += '"' + this.elements[i].name + '"';
        }
        else if (this.elements[i].type == "Projectiles")
        {
          if (first_projectile == true) {
            first_projectile = false;
          }
          else {
            _projectile += ',';
          }
          _projectile += '"' + this.elements[i].name + '"';
        }
        else if (this.elements[i].type == "Capacity")
        {
          if (first_capacity == true) {
            first_capacity = false;
          }
          else {
            _capacity += ',';
          }
          _capacity += '"' + this.elements[i].name + '"';
        }
        else if (this.elements[i].type == "Spell")
        {
          if (first_spell == true) {
            first_spell = false;
          }
          else {
            _spell += ',';
          }
          _spell += this.elements[i].name + '"';
        }
        else if (this.elements[i].type == "Amelioration")
        {
          if (first_amelioration == true) {
            first_amelioration = false;
          }
          else {
            _amelioration += ',';
          }
          _amelioration += '"' + this.elements[i].name + '"';
        }
        else if (this.elements[i].type == "Effect")
        {
          if (first_effect == true) {
            first_effect = false;
          }
          else {
            _effect += ',';
          }
          _effect += '"' + this.elements[i].name + '"';
        }
        i += 1;
      }
      _data += '"Units":['+_unit+'],';
      _data += '"Buildings":['+ _building +'],';
      _data += '"Heros":['+_heros+'],';
      _data += '"Objects":['+_object+'],';
      _data += '"Projectiles":['+_projectile+'],';
      _data += '"Ameliorations":['+_amelioration+'],';
      _data += '"Spells":['+_spell+'],';
      _data += '"Effects":['+_effect+'],';
      _data += '"Capacity":['+_capacity+']';
      return (_data);
    };

    this.get_requierements_string = function() {
      /*var _unit           = '';
      var first_unit      = true;

      var _heros          = '';
      var first_heros     = true;*/

      var _building         = '';
      var first_building  = true;

      var _amelioration       = '';
      var first_amelioration= true;

      /*var _spell          = '';
      var first_spell     = true;
      
      var _capacity       = '';
      var first_capacity  = true;*/
      
      var first_object    = true;
      var _object         = '';
      
      /*var first_projectile = true;
      var _projectile      = '';*/
      
      var _data = "";
      var i = 0;

      while (i < this.requirements.length)
      {
        /*if (this.requirements[i].type == "Unit") {
          if (first_unit == true) {
            first_unit = false;
          }
          else {
            _unit += ',';
          }
          _unit += '"' + this.requirements[i].name + '"';
        } */
        /*else if (this.requirements[i].type == "Projectile")
        {
          if (first_projectile == true) {
            first_projectile = false;
          }
          else {
            _projectile += ',';
          }
          _projectile += '"' + this.elements[i].name + '"';
        }*/
        if (this.requirements[i].type == "Building")
        {
          if (first_building == true) {
            first_building = false;
          }
          else {
            _building += ',';
          }
          _building += '"' + this.requirements[i].name + '"';
        }/*
        else if (this.requirements[i].type == "Heros")
        {
          if (first_heros == true) {
            first_heros = false;
          }
          else {
            _heros += ',';
          }
          _heros += '"' + this.requirements[i].name + '"';
        }
        else if (this.requirements[i].type == "Capacity")
        {
          if (first_capacity == true) {
            first_capacity = false;
          }
          else {
            _capacity += ',';
          }
          _capacity += '"' + this.requirements[i].name + '"';
        }*/
        else if (this.requirements[i].type == "Object")
        {
          if (first_object == true) {
            first_object = false;
          }
          else {
            _object += ',';
          }
          _object += '"' + this.elements[i].name + '"';
        }/*
        else if (this.requirements[i].type == "Spell")
        {
          if (first_spell == true) {
            first_spell = false;
          }
          else {
            _spell += ',';
          }
          _spell += '"' + this.requirements[i].name + '"';
        }*/
        else if (this.requirements[i].type == "Amelioration")
        {
          if (first_amelioration == true) {
            first_amelioration = false;
          }
          else {
            _amelioration += ',';
          }
          _amelioration += '"' + this.requirements[i].name + '"';
        }
        i += 1;
      }
      //_data += '"Units":['+_unit+'],';
      _data += '"Buildings":['+_building+'],';
      //_data += '"Heros":['+_heros+'],';
      _data += '"Objects":['+_object+'],';
      //_data += '"Projectiles":['+_projectile+'],';
      _data += '"Ameliorations":['+_amelioration+']';
      //_data += '"Spells":['+_spell+'],';
      //_data += '"Capacity":['+_capacity+']';
      return (_data);
    };
    
    Array.prototype.unset = function(val)
    {
        var index = this.indexOf(val)
        if(index > -1){
            this.splice(index,1)
        }
    }

    this.getInstance = function()
    {
      return (this);
    }

    this.addElement = function(elementName, elementPosition)
    {
      this.elements[elementName] = new [elementPosition];
    }

    this.deleteElement = function(elementName)
    {
      this.elements.unset(elementName);
    }

    this.setBase = function(_name, _description)
    {
      this.name = _name;
      this.description = _descirption;
    }

    this.setGraphic = function(_voice, _voice_die, _voice_birth, _icon, _model)
    {
      this.voice = _voice;
      this.voice_die = _voice_die;
      this.voice_birth = _voice_birth;
      this.icon = _icon;
      this.model = _model;
    }

    this.setElementRessource = function(_elem_type_ress, _elem_life_act, _elem_ress)
    {
      this.elem_type_ress = _elem_type_ress;
      this.elem_life_act = _elem_life_act;
      this.elem_ress = _elem_ress;
    }

    this.setTimer = function(_enum_canalisation, _canalisation, _cooldown, _creation, _duration)
    {
      this.enum_canalisation = _enum_canalisation;
      this.canalisation = _canalisation;
      this.cooldown = _cooldown;
      this.creation = _creation;
      this.duration = _duration;
    }

    this.setCost = function(_cost_gold, _cost_wood, _cost_food, _cost_type_ress, _cost_ress, _cost_life)
    {
      this.cost_life = _cost_life;
      this.cost_gold = _cost_gold;
      this.cost_wood = _cost_wood;
      this.cost_food = _cost_food;
      this.cost_type_ress = _cost_type_ress;
      this.cost_ress = _cost_ress;
    }

    this.setData = function(_hitbox, _passThrought, _attack, _hp, _regenHp, _typeRessource, _Ressource, _regenRessource, _attackSpeed, _critick, _speed, _vision_night, _vision_day, _defense)
    {
        this.hitbox = _hitbox;
        this.passThrought = _passThroughtl;
        this.attack = _attack;
        this.hp = _hp;
        this.regenHp = _regenHp;
        this.typeRessource = _typeRessource;
        this.Ressource = _Ressource;
        this.regenRessource = _regenRessource;
        this.attackSpeed = _attackSpeed;
        this.critick = _critick;
        this.speed = _speed;
        this.vision_night = _vision_night;
        this.vision_day = _vision_day;
        this.defense = defense;
    }

    this.toString = function()
    {
	if (this.name == "BUILDBUILDINGCAPACITY" || this.name == "CARRYRESSOURCESCAPACITY" ||
	    this.name == "HARVESTCAPACITY" || this.name == "RECOVERGOLDCAPACITY" ||
	    this.name == "RECOVERWOODCAPACITY" || this.name == "PATROLCAPACITY") {
	    return "";
	}
      var str = '{"type": "'+type+'",';

      str +=  '"name": "' + this.name + '",' +
              '"race": "' + this.race + '", '+
              '"description": "' + this.description + '", '+
              '"hitbox": '+this.hitbox+',';
      str +=  '"passThrought": '+this.passThrought+','+
              '"attack": '+this.attack+','+
              '"hp": '+this.hp+','+
              '"regenHp":' + this.regenHp+','+
              '"typeRessource":' + this.typeRessource +','+
              '"Ressource":' + this.Ressource + ','+
              '"regenRessource":' + this.regenRessource +','+
              '"attackSpeed":' + this.attackSpeed +','+
              '"critick":'+ this.critick +','+
              '"speed":'+ this.speed +','+
              '"vision_day":'+ this.vision_day +','+
              '"vision_night":'+ this.vision_night +','+
              '"defense":'+ this.defense +','+
              '"speed":'+ this.speed +',';
      str +=  '"range":'+ this.range +','+
              '"cost_life":'+ this.cost_life +','+
              '"cost_gold":'+ this.cost_gold +','+
              '"cost_wood":' + this.cost_wood +','+
              '"cost_food":' + this.cost_food +','+
              '"cost_type_ress":' + this.cost_type_ress +','+
              '"cost_ress":' + this.cost_ress +','+
              '"can_auto":' + this.can_auto +','+
              '"is_auto":' + this.is_auto +','+
              '"enum_canalisation":' + this.enum_canalisation +','+
              '"canalisation":' + this.canalisation +','+
              '"cooldown":' + this.cooldown +','+
              '"creation":' + this.creation +','+
              '"duration":' + this.duration +','+
              '"elem_type_ress":' + this.elem_type_ress +','+
              '"elem_life_act":' + this.elem_life_act +','+
              '"elem_ress":' + this.elem_ress +',';
      if (type == "Effect") {
        str +=  '"effect_type":"' +this.effect_type+ '",';
        str +=  '"effect_equip":"' +this.effect_equip+ '",';
        str +=  '"effect_cible":"' +this.effect_cible+ '",';
        str +=  '"effect_link":"' +this.effect_cible+ '",';
      }
      if (type != "Capacity") {
        str +='"voice": "' + this.voice +'",'+
              '"voice_die": "' + this.voice_die +'",'+
              '"voice_birth": "' + this.voice_birth +'",'+
              '"voice_attack": "' + this.voice_attack+'",';
      }
      if (type == "Capacity")
      {
          str += '"cible":"'+this.cible_type+'",';
      }
      str += '"icon": "' + this.icon +'",'+
             '"model": "' + this.model +'",';
      if (type == "Heros") {
        str +='"level": "' + this.level +'",'+
             '"xp": "' + this.xp +'",';
      }
      str += '"elements":{';
      str += this.get_elements_string();
      str += '},';
      str += '"requirements":{';
      str += this.get_requierements_string();
      str += '}}';
      return (str);
    }
};