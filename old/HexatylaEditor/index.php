<!DOCTYPE html>
<html>
   <head>
		<title>Hexatyla - Editeur de Map</title>
        <meta charset="utf-8" />
		<link rel="stylesheet" type="text/css" href="css/grid.css">
		<link rel="stylesheet" type="text/css" href="css/typography.css">
		<link rel="stylesheet" type="text/css" href="css/forms.css">
		<link rel="stylesheet" type="text/css" href="css/style.css">
        <script src="js/jquery.min.js"></script>
        <script src="js/pannelEvent.js"></script>
        <script src="js/Object.js"></script>
        <script src="js/Factory.js"></script>
        <script src="js/custom.js"></script>
        <script>
        $(document).ready(function() {
            var a = new ObjectHexatyla("Unit");
            //alert(JSON.parse('{'+a.toString()+'}'));
        });
        </script>
    </head>
    <body>

        <div id="homePage">
            <!-- LOGO ****************************************************** -->
            <div class="container" id="prez">
                <button id="continueHomePage" class="blue_icecream little" style="display:none">&rarr;</button>
                <div class="span-24">
                    <img src="">
                    <img src="img/logoHome.png" id="newHome" style="cursor:pointer">
                </div>
            </div>
            <!-- FILE CHOICE ****************************************************** -->
            <div class="container">
                <div id="champsPrez" class="span-24">
                    <div id="file_on_server">
                        <?php 
                        $dirname = 'hxtl/';
                        $dir = opendir($dirname);
                        while($file = readdir($dir)) {
                            if ($file != '.' && $file != '..') {
                            ?><a href="#" class="file_on" ref="<?php echo $file ?>"><?php echo $file ?></a><?php
                            }
                        }
                        ?>
                    </div>
                    <span id="create_new_file">
                        <input id="create_input" class="blue_icecream" type="text" style="width:275px"/>
                        <input class="blue_icecream lock" type="text" value=".hxtl" disabled="true"/>
                    </span>
                </div>
            </div>
        </div>
        <div id="coordonneeInfoMap" style="display:none">
            <span class="champs">x : <span id="xMouseOverMap"></span></span>
            <span class="champs">y : <span id="yMouseOverMap"></span></span>
            <span class="champs">depth : <span id="dMouseOverMap"></span></span>
        </div>
            <!-- LEFT MENU ****************************************************** -->
    	<div id="LeftMenu">
        <div id="subLeftMenu">
            <!-- MAP MENU ****************************************************** -->
            <div id="MenuMap" style="width:280px">
            </div>
            <!-- UNIT LEFT MENU ****************************************************** -->
            <div id="structLeftMenu" style="width:280px;display:none">
    		<div id="informationLeftMenu">
    			<span id="TitleLeftMenu">Map</span>
    		</div>
    		<div id="elementsMenu">
    		</div>
                <div class="map" style="position:absolute;bottom:0;margin-bottom:15px">
                    <input id="xMap" class="guiFlat little silver" placeholder="x"/>
                    <input id="yMap" class="guiFlat little silver"placeholder="y"/>
                    <button class="buttonMenuMap button-1 little" ref="generate">Generate</button>
                </div>
                <div class="map levelMap">
                    <div id="map_menu_level" class="padding20" style="display:block">
                        <button class="buttonMenuMap selected button-1 green no-padding push-30" ref="max"><img src="img/up.png"/></button>
                        <button class="buttonMenuMap button-1 green no-padding" ref="seven"><img src="img/up_big.png"/></button>
                        <button class="buttonMenuMap button-1 green no-padding" ref="min"><img src="img/down.png"/></button>
                        <button class="buttonMenuMap button-1 green no-padding" ref="none"><img src="img/down_big.png"/></button>
                    </div>
                </div>
                <div class="map levelMap">
                    <div id="map_menu_ressource" class="padding20">
                        <p>
                            <input id="RessXMap" class="guiFlat little silver" style="width:34px" placeholder="x"/>
                            <input id="RessYMap" class="guiFlat little silver" style="width:38px"placeholder="y"/>
                            <input id="valueRessourceMap" class="guiFlat little silver" style="width:34px" placeholder="val"/>
                        </p>
                        <p>
                            <button id="woodMenuMap" class="buttonMenuMap push button-1 green" ref="wood"><img src="img/wood_icon.png"/></button>
                            <button id="goldMenuMap" class="buttonMenuMap button-1 yellow" ref="gold"><img src="img/gold_icon.png"/></button>
                            <button class="buttonMenuMap ress button-1 red" ref="removes"><img src="img/remove.png"></button>
                        </p>
                    </div>
                </div>
                <div class="map levelMap">
                    <div id="map_menu_teleport" class="padding20 center">
                        <p>
                            <input id="xMap" class="guiFlat little silver " placeholder="x"/>
                            <input id="yMap" class="guiFlat little silver " placeholder="y"/>
                            <img class="button-1 no-padding" style="vertical-align:bottom" src="img/portal_right.png">
                        </p>
                        <p>
                            <img class="button-1 no-padding" style="vertical-align:bottom" src="img/portal_right.png">
                            <input id="yMap" class="guiFlat little silver "placeholder="y"/>
                            <input id="xMap" class="guiFlat little silver " placeholder="x"/>
                        </p>
                        <p>
                            <button class="buttonMenuMap button-1 green no-padding" ref="registerTp"><img src="img/check.png"></button>
                            <button class="buttonMenuMap button-1 red no-padding" ref="removeTp"><img src="img/remove.png"></button>
                        </p>
                    </div>
                </div>
            </div>
    	</div>
        </div>
            <!-- MENU DE DROITE MENU CHOIX ****************************************************** -->
            <!-- INFORMATION GAME ****************************************************** -->
    	<div id="RightMenu">
    		<div id="Title">
    			Hexatyla Editor<br />
    		</div>
    		<div id="information"><!--
    			<p>
    				<span class="label">File:</span><span id="File">unknown</span>
    			</p>-->
                    <a href="#" class="menuItemInfo" ref="home">       <img src="img/depandancies.png" class="old"/><img src="img/depandancies_new.png" class="new"/>Dependance               <span class="informationMenuItem" id="races_info">NaN</span></a>
                    <a href="#" class="menuItemInfo" ref="building">   <img src="img/buildings.png"  class="old"/><img src="img/buildings_new.png" class="new"/>Batiments                <span class="informationMenuItem" id="buidling_info">NaN</span></a>
                    <a href="#" class="menuItemInfo" ref="unit">       <img src="img/units.png"  class="old"/><img src="img/units_new.png" class="new"/>Unites                   <span class="informationMenuItem" id="units_info">NaN</span></a>
                    <a href="#" class="menuItemInfo" ref="hero">       <img src="img/heros.png"  class="old"/><img src="img/heros_new.png" class="new"/>Heros                    <span class="informationMenuItem" id="heros_info">NaN</span></a>
                    <a href="#" class="menuItemInfo" ref="object">     <img src="img/objects.png"  class="old"/><img src="img/objects_new.png" class="new"/>Objets                   <span class="informationMenuItem" id="object_info">NaN</span></a>
                    <a href="#" class="menuItemInfo" ref="projectile"> <img src="img/projectiles.png"  class="old"/><img src="img/projectiles_new.png" class="new"/>Projectiles              <span class="informationMenuItem" id="projectiles_info">NaN</span></a>
                    <a href="#" class="menuItemInfo" ref="capacity">   <img src="img/capacities.png"  class="old"/><img src="img/capacities_new.png" class="new"/>Capacites                <span class="informationMenuItem" id="capacity_info">NaN</span></a>
                    <a href="#" class="menuItemInfo" ref="spell">      <img src="img/spells.png"  class="old"/><img src="img/spells_new.png" class="new"/>Sorts                    <span class="informationMenuItem" id="spell_info">NaN</span></a>
                    <a href="#" class="menuItemInfo" ref="amelioration"><img src="img/ameliorations.png"  class="old"/><img src="img/ameliorations_new.png" class="new"/>Ameliorations           <span class="informationMenuItem" id="ameliorations_info">NaN</td></a>
                    <a href="#" class="menuItemInfo" ref="effect">     <img src="img/effects.png"  class="old"/><img src="img/effects_new.png" class="new"/>Effets                   <span class="informationMenuItem" id="effects_info">NaN</span></a>
                    <a href="#" class="menuItemInfo" ref="event">      <img src="img/evenements.png"  class="old"/><img src="img/evenements_new.png" class="new"/>Evenements               <span class="informationMenuItem" id="evenements_info">none</span></a>
                    <a href="#" class="menuItemInfo" ref="map">        <img src="img/map.png"  class="old"/><img src="img/map_new.png" class="new"/>Carte                    <span class="informationMenuItem" id="map_info">NaN:NaN</span></a>
    		</div>
    	</div>
        <div id="topMenu">
            <a id="" class="left firstTopMenu mapMenu" ref="map_menu_level" style="display:none"><img src="img/levelTerrain.png" alt=""/></a>
            <a id="" class="left mapMenu" ref="map_menu_ressource" style="display:none"><img src="img/resources.png" alt=""/></a>
            <a id="" class="left mapMenu" ref="map_menu_teleport" style="display:none"><img src="img/teleport.png" alt=""/></a>
            <a id="" class="left firstTopMenu pannelEventChoiceType" style="display:none" ref="race"><img src="img/heros.png" alt=""/></a>
            <a id="" class="left pannelEventChoiceType" ref="start" style="display:none"><img src="img/effects.png" alt=""/></a>
            <div id="inputTopMenu" class="left firstTopMenu" style="display:none">
                <input id="input_race" type="text" placeholder="informations..." class="guiFlat left"/>
                <button id="add_race" class="right button-1 left">ajout</button>
            </div>
            <a id="save" class="right"><img src="img/download.png" alt="save"/></a>
            <div class="right"><b><span id="File">unknown</span></b></div>
        </div>
        <!-- MAIN -->
        <div id="main">
            <!-- DATA MAP ****************************************************** -->
            <div class="boxContent" id="eventPannel" style="display:none">
                    <div class="boxIcecream raceContent w225 left">
                        <div class="boxIcecreamTitle noMargin button-1 Building_bg little p90"><img src="img/buildings.png" style="vertical-align:middle"/> Races Creation</div>
                        <div style="text-align:center;margin-top:5px">
                            <button id="rm_element_to_race"            class=" button-1 minus" style="margin-left:3px;">-</button>
                            <input  id="input_element_to_race_nb"       type="text" class="guiFlat silver minus" style="width:20px;"/>
                            <input  id="input_element_to_race_name"     type="text" placeholder="name" class="guiFlat silver minus" style="width:90px;"/>
                            <button id="add_element_to_race"             class=" button-1 minus" style="margin-left:3px;">+</button>
                        </div>
                        <div id="container_raceCreation" class="content">
                        </div>
                    </div>
                    <div class="boxIcecream raceContent w300 left" style="">
                        <div class="boxIcecreamTitle noMargin button-1 Building_bg little p90"><img src="img/buildings.png" style="vertical-align:middle"/> Element on Map</div>
                        <div style="text-align:center;margin-top:5px">
                            <button id="rm_element_to_onMap"            class="button-1 red minus" style="margin-left:3px;">-</button>
                            <input  id="input_element_to_onMap_nb"       type="text" placeholder="nb.." class="guiFlat silver minus" style="width:20px;"/>
                            <input  id="input_element_to_onMap_name"     type="text" placeholder="name" class="guiFlat silver minus" style="width:90px;"/>
                            <input  id="input_element_to_onMap_x"        type="text" placeholder="x..." class="guiFlat silver minus" style="width:20px;"/>
                            <input  id="input_element_to_onMap_y"        type="text" placeholder="y..." class="guiFlat silver minus" style="width:20px;"/>
                            <button id="add_element_to_onMap"             class=" button-1 green minus" style="margin-left:3px;">+</button>
                        </div>
                        <div id="container_elementMap" class="content">
                        </div>
                    </div>
                    <div class="boxIcecream raceContent w225 left">
                        <div class="boxIcecreamTitle noMargin button-1 Building_bg little p90"><img src="img/buildings.png" style="vertical-align:middle"/> Position de depart</div>
                        <div style="text-align:center;margin-top:5px">
                            <button id="rm_element_to_map"            class="button-1 red minus" style="margin-left:3px;">-</button>
                            <input  id="input_element_to_map_x"        type="text" placeholder="x..." class="guiFlat silver minus" style="width:20px;"/>
                            <input  id="input_element_to_map_y"        type="text" placeholder="y..." class="guiFlat silver minus" style="width:20px;"/>
                            <button id="add_element_to_map"             class=" button-1 green minus" style="margin-left:3px;">+</button>
                        </div>
                        <div id="container_positionMap" class="content">
                        </div>
                    </div>
            </div>
            <div class="boxContent" id="DataRequierements" style="display:none">
                <div>
                    <div class="boxIcecream raceContent w200">
                        <div class="boxIcecreamTitle noMargin button-1 Building_bg little p90"><img src="img/buildings.png" style="vertical-align:middle"/> Buildings</div>
                        <div id="raceBuildings" class="content">s
                        </div>
                    </div>
                    <div class="boxIcecream raceContent w200">
                        <div class="boxIcecreamTitle button-1 little Unit_bg p90"><img src="img/units.png" style="vertical-align:middle"/> Units</div>
                        <div id="raceUnits" class="content">
                        </div>
                    </div>
                    <div class="boxIcecream raceContent w200">
                        <div class="boxIcecreamTitle noMargin button-1 little Heros_bg p90"><img src="img/heros.png" style="vertical-align:middle"/> Heros</div>
                        <div id="raceHeros" class="content">
                        </div>
                    </div>
                    <div class="boxIcecream raceContent w200">
                        <div class="boxIcecreamTitle noMargin button-1 little Amelioration_bg p90"><img src="img/ameliorations.png" style="vertical-align:middle"/> Amelioration</div>
                        <div id="raceAmeliorations" class="content">
                        </div>
                    </div>
                    <div class="boxIcecream raceContent w200">
                        <div class="boxIcecreamTitle noMargin button-1 little Capacitys_bg p90"><img src="img/capacities.png" style="vertical-align:middle"/> Capacities</div>
                        <div id="raceCapacitys" class="content">
                        </div>
                    </div>
                </div>
                <div id="informationsElementHome" class="boxIcecream" style="display:none;margin-left:260px;margin-top:330px;padding-top:15px;padding-bottom:4px;margin-right:10px">
                    <div class="boxIcecreamTitle noMargin button-1 little p100" style="margin-bottom:20px"><img src="img/ICON/selected.png" style="width:16px;vertical-align:middle"/> Element</div>
                    <div style="float:right;margin-right:15px">
                        <span class="elem">Races</span>
                        <form id="formChoiseRace">
                            <label><input class="forChoiseRace" type="radio" name="sex" value="male">Male</label><br />
                            <label><input class="forChoiseRace" type="radio" name="sex" value="female">Female</label>
                        </form>
                    </div>
                    <p style="margin-left:20px">
                            <label>
                                <span class="title mSize">Name</span>
                                <input type="text" id="nameElements" class="guiFlat silver resize" placeholder="Nom..." readonly="readonly"/>
                                <span id="batElementInRace" class="title mSize" style="float:left;position:absolute;bottom:0;right:0;margin-right:5px">
                                    <img src="img/buildings.png"/>
                                </span>
                            </label><br />
                        <!--<span id="raceElements">
                            <b>Name</b> : -<br />
                            <b>Type</b> : -<br />
                        </span>-->
                    <div class="boxIcecreamTitle"><img src="img/ICON/link.png" style="width:16px;vertical-align:bottom"/> Requierements</div>
                        <label>
                            <span class="title mSize">Requierements</span>
                            <input id="input_erace" type="text" placeholder="name" class="guiFlat silver resize"/>
                        <button id="add_erace" class="button-1 green little">+</button>
                        <button id="del_erace" class="button-1 red little">-</button>
                        </label>
                            <div id="requierementsList">
                                <!--<div>Element1 (Batiment)</div>
                                <div>Element2 (Unite)</div>-->
                            </div>
                        </p>
                    </p>
                </div>
            </div>

            <div class="boxContent" id="DataMap" style="display:none">
                <div id="ressourceMap" style="width:0px;height:0px;display:none">
                </div>
                <div id="contentMap" style="width:0px;height:0px">
                </div>
            </div>

            <div id="EffectMenu" style="display:none">
            </div>
        	<div class="boxContent" id="DataCenter" style="display:none">
            <div style="float:left;">
                <div class="boxIcecream">
                    <div class="boxIcecreamTitle"><img src="img/ICON/profil.png" style="width:36px;vertical-align:bottom"/> PROFILE</div>
                    <!--<div id="effectMenuButton" style="display:none;height:40px;text-align:center">
                        <button id="buttonEffect" class="" style="margin-right:10px">EFFECT</button>
                    </div>-->
                    <label>
                        <span class="title" style="display:none">Description</span>
                        <textarea type="text" id="descriptionElements" class="guiFlat silver resize" style="width:280px;height:80px">
                        </textarea>
                    </label><br />
                    <label>
                        <span class="title mSize">Name</span>
                        <input type="text" id="nameElements" class="guiFlat silver resize" placeholder="Nom..."/>
                    </label><br />
                    <label>
                        <span class="title mSize">Voice unit</span>
                        <input type="text" id="input_voice" class="guiFlat silver resize" placeholder="voix..."/>
                    </label><br />
                    <!--    <td class="type_data value_voice">Voix</td>
                        <td class="type_data"><input type='file' name='' value="Download" id="input_voice"/></td> -->
                    <label>
                        <span class="title mSize">Graphic model</span>
                        <input type="text" id="input_graphic_model" class="guiFlat silver resize" placeholder="model 3D..."/>
                    </label><br />
                     <!--   <td class="type_data value_graphic_model">Graphique model</td>
                        <td class=""><input type='file' name='' value="Download" id="input_graphic_model"/></td> -->
                    <label>
                        <span class="title mSize">Attack sound</span>
                        <input type="text" id="input_voice_attack" class="guiFlat silver  resize" placeholder="attaque son..."/>
                    </label><br />
                    <!--    <td class="type_data value_voice_attack">Son attaque</td>
                        <td class="type_data"><input type='file' name='' value="Download" id="input_voice_attack"/></td> -->
                    <label>
                        <span class="title mSize">Icon</span>
                        <input type="text" id="input_icon" class="guiFlat silver resize" placeholder="icone..."/>
                    </label><br />
                    <!--    <td class="type_data value_icon">Icone</td>
                        <td class="type_data"><input type='file' name='' value="Download" id="input_icon"/></td> -->
                    <label>
                        <span class="title mSize">Die sound</span>
                        <input type="text" id="input_voice_die" class="guiFlat silver resize" placeholder="son de mort..."/>
                    </label><br />
                    <!--    <td class="type_data value_voice_die">Voix mort</td>
                        <td class="type_data"><input type='file' name='' value="Download" id="input_voice_die"/></td> -->
                    <label>
                        <span class="title mSize">Creation sound</span>
                        <input type="text" id="input_voice_creation" class="guiFlat silver resize" placeholder="son de creation..."/>
                    </label>
                    <!--    <td class="type_data value_voice_creation">Voix creation</td>
                        <td class="type_data"><input type='file' name='' value="Download" id="input_voice_creation"/></td> -->
                </div>
            </div>

                    <div class="boxIcecream left">
                        <div class="boxIcecreamTitle"><img src="img/ICON/link.png" style="width:22px;vertical-align:bottom"/> CAPACITES</div>
                        <div id="capacityBox">
                            <div style="margin-left:17px">
                                <button id="del_element" class=" button-1 minus" style="margin-left:3px;">-</button>
                                <input id="input_element" type="text" placeholder="name" class="guiFlat silver resize" style="width:130px;"/>
                                <button id="add_element" class=" button-1 minus" style="margin-left:3px;">+</button>
                            </div>
                            <div id="ErrorAddCapacity"></div>
                            <div id="elementsCapacityList" class="elementsCapacity">
                            </div>
                        </div>
                    </div>

                <div style="float:left;width:260px">
                <div class="boxIcecream w200">
                    <div class="boxIcecreamTitle"><img src="img/ICON/stats.png" style="width:22px;vertical-align:bottom"/> INFORMATIONS</div>
                    <table class="tableInfoElement">
                    <tr>
                        <td class="type_data value_hitbox">Hitbox</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_hitbox"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_passthrought">Passthrought</td>
                        <td class="type_data"><input type="checkbox" id="input_passthrought"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_attack">Attaque</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_attack"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_hp">HP</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_hp"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_regen_hp">Regen HP</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_regen_hp"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_type_ress">Type Ressource</td>
                        <td class="type_data">
                        <select name="data_type_ress" id="input_type_ress">
                           <option value="0">None</option>
                           <option value="1">Mana</option>
                           <option value="2">Rage</option>
                           <option value="3">Energy</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td class="type_data value_ressource">Ressource</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_ressource"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_regen_ress">Regen Ressource</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_regen_ress"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_attack_speed">Attaque Speed</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_attack_speed"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_critick">Critique</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_critick"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_speed">Speed</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_speed"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_defense">Defense</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_defense"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_vision_night">Vision Night</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_vision_night"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_vision_day">Vision Day</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_vision_day"/></td>
                    </tr>
                    <tr>
                        <td class="type_data value_range">range</td>
                        <td class="type_data"><input type="text" class="guiFlat silver minus" id="input_range"/></td>
                    </tr>
                </table>
                </div>

                <div class="boxIcecream w200">
                    <div class="boxIcecreamTitle"><img src="img/ICON/gold.png" style="width:22px;vertical-align:bottom"/> RESSOURCE</div>
                        <table class="tableInfoElement">
                        <tr>
                            <td class="type_type_act value_type_ress_act">Type Ressource</td>
                            <td class="type_type_act">
                            <select name="data_type_ress" id="input_type_ress_act">
                               <option value="0">None</option>
                               <option value="1">Mana</option>
                               <option value="2">Rage</option>
                               <option value="3">Energy</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td class="type_type_act value_life_act">Life Act</td>
                            <td class="type_type_act"><input type="text" class="guiFlat silver minus" id="input_life_act"/></td>
                        </tr>
                        <tr>
                            <td class="type_type_act value_ressource_act">Ressource Act</td>
                            <td class="type_type_act"><input type="text" class="guiFlat silver minus" id="input_ressource_act"/></td>
                        </tr>
                    </table>
                </div>
                </div>
            <div style="float:left;width:235px">
                <div class="boxIcecream w175 left">
                    <div class="boxIcecreamTitle"><img src="img/ICON/cost.png" style="width:22px;vertical-align:bottom"/> COUT</div>
                    <table class="tableInfoElement">
                        <tr>
                            <td class="type_cost value_cost_life">Life</td>
                            <td class="type_cost"><input type="text" class="guiFlat silver minus" id="input_cost_life"/></td>
                        </tr>
                        <tr>
                            <td class="type_cost value_cost_gold">Gold</td>
                            <td class="type_cost"><input type="text" class="guiFlat silver minus" id="input_cost_gold"/></td>
                        </tr>
                        <tr>
                            <td class="type_cost value_cost_wood">Wood</td>
                            <td class="type_cost"><input type="text" class="guiFlat silver minus" id="input_cost_wood"/></td>
                        </tr>
                        <tr>
                            <td class="type_cost value_cost_food">Food</td>
                            <td class="type_cost"><input type="text" class="guiFlat silver minus" id="input_cost_food"/></td>
                        </tr>
                        <tr>
                            <td class="type_cost value_cost_type_ress">Type Ress</td>
                            <td class="type_cost">
                            <select name="data_type_ress" id="input_cost_type_ress">
                               <option value="0">None</option>
                               <option value="1">Mana</option>
                               <option value="2">Rage</option>
                               <option value="3">Energy</option>
                            </select></td>
                        </tr>
                        <tr>
                            <td class="type_cost value_cost_ressource">Ressource</td>
                            <td class="type_cost"><input type="text" class="guiFlat silver minus" id="input_cost_ressource"/></td>
                        </tr>
                    </table>
                </div>

                <div class="boxIcecream w175  left">
                    <div class="boxIcecreamTitle"><img src="img/ICON/time.png" style="width:22px;vertical-align:bottom"/> TEMPS</div>
                        <table class="tableInfoElement">
                            <td class="type_timer value_enum_canalisation">enum Canalisation</td>
                            <td class="type_timer">
                            <select name="data_type_ress" id="input_enum_canalisation">
                               <option value="0">None</option>
                               <option value="1">Begining</option>
                               <option value="2">Pending</option>
                               <option value="3">Ending</option>
                            </select></td>
                        </tr>
                        </tr>
                            <td class="type_timer value_canalisation">Canalisation</td>
                            <td class="type_timer"><input type="text" id="input_canalisation" class="guiFlat silver minus"/></td>
                        </tr>
                            <td class="type_timer value_cooldown">Cooldown</td>
                            <td class="type_timer"><input type="text" class="guiFlat silver minus" id="input_cooldown"/></td>
                        </tr>
                            <td class="type_timer value_creation">Creation</td>
                            <td class="type_timer"><input type="text" class="guiFlat silver minus" id="input_creation"/></td>
                        </tr>
                            <td class="type_timer value_duration">Duration</td>
                            <td class="type_timer"><input type="text" class="guiFlat silver minus" id="input_duration"/></td>
                        </tr>
                    </table>
                </div>

                <div class="boxIcecream w175 left">
                    <div class="boxIcecreamTitle"><img src="img/ICON/objets.png" style="width:22px;vertical-align:bottom"/> CAPACITES VALUE</div>
                        <table class="tableInfoElement">
                        <tr>
                            <td class="type_capacity_data value_can_auto">can_auto</td>
                            <td class="type_capacity_data"><input type="checkbox" id="input_can_auto"/></td>
                        </tr>
                        <tr>
                            <td class="type_capacity_data value_is_auto">is_auto</td>
                            <td class="type_capacity_data"><input type="checkbox" id="input_is_auto"/></td>
                        </tr>
                    </table>
                </div>

                <div class="boxIcecream w175 left">
                    <div class="boxIcecreamTitle"><img src="img/ICON/objets.png" style="width:22px;vertical-align:bottom"/> HEROS</div>
                        <table class="tableInfoElement">
                            <tr>
                                <td class="type_heros value_level">Level</td>
                                <td class="type_heros"><input type="text" class="guiFlat silver minus" id="input_level"/></td>
                            </tr>
                            <tr>
                                <td class="type_heros value_xp">XP</td>
                                <td class="type_heros"><input type="text" class="guiFlat silver minus" id="input_xp"/></td>
                            </tr>
                		</table>
                </div>
            </div>

                    <div class="boxIcecream left" id="EffectBox" style="width:150px;display:none">
                            <div class="boxIcecreamTitle"><img src="img/ICON/effets.png" style="width:22px;height:22px;vertical-align:bottom"/> EFFECTS</div>
                            <div>
                                Type<br />
                                <label style="color:#555"><input id="type_effect_none"      class="choiceTypeEffect"    type="radio" name="type_effect" value="none" checked="checked" >none</label><br />
                                <label style="color:#555"><input id="type_effect_transform" class="choiceTypeEffect"    type="radio" name="type_effect" value="transform">Transfrom</label><br />
                                <label style="color:#555"><input id="type_effect_invoke"    class="choiceTypeEffect"    type="radio" name="type_effect" value="invoke">Invoke</label><br />
                                <label style="color:#555"><input id="type_effect_teleporting"class="choiceTypeEffect"   type="radio" name="type_effect" value="teleporting">Teleporting</label><br />
                                <label style="color:#555"><input id="type_effect_stun"      class="choiceTypeEffect"    type="radio" name="type_effect" value="stun">Stun</label><br />
                                <label style="color:#555"><input id="type_effect_dot"       class="choiceTypeEffect"    type="radio" name="type_effect" value="dot">Dot</label><br />
                                <label style="color:#555"><input id="type_effect_aura"      class="choiceTypeEffect"    type="radio" name="type_effect" value="aura">Aura</label><br />
                                <label style="color:#555"><input id="type_effect_dispell"   class="choiceTypeEffect"    type="radio" name="type_effect" value="dispell">Dispell</label><br />
                                <label style="color:#555"><input id="type_effect_die"       class="choiceTypeEffect"    type="radio" name="type_effect" value="die">Die</label>
                            </div>
                            <div>
                                Type Cible<br />
                                <label style="color:#555"><input id="type_cible_effect_all"         class="choiceTypeEffect" type="radio" name="type_cible_effect" value="all" checked="checked">All</label><br />
                                <label style="color:#555"><input id="type_cible_effect_building"    class="choiceTypeEffect" type="radio" name="type_cible_effect" value="building">Building</label><br />
                                <label style="color:#555"><input id="type_cible_effect_hero"        class="choiceTypeEffect" type="radio" name="type_cible_effect" value="hero">hero</label><br />
                                <label style="color:#555"><input id="type_cible_effect_object"      class="choiceTypeEffect" type="radio" name="type_cible_effect" value="object">Object</label><br />
                                <label style="color:#555"><input id="type_cible_effect_projectile"  class="choiceTypeEffect" type="radio" name="type_cible_effect" value="projectile">Projectile</label><br />
                                <label style="color:#555"><input id="type_cible_effect_unit"        class="choiceTypeEffect" type="radio" name="type_cible_effect" value="unit">Unit</label><br />
                            </div>
                            <div>
                                Camp de la Cible<br />
                                <label style="color:#555"><input id="type_camp_effect_all"      class="choiceTypeEffect" type="radio" name="type_camp_effect" value="all" checked="checked" >All</label><br />
                                <label style="color:#555"><input id="type_camp_effect_ally"     class="choiceTypeEffect" type="radio" name="type_camp_effect" value="ally">Ally</label><br />
                                <label style="color:#555"><input id="type_camp_effect_ennemy"   class="choiceTypeEffect" type="radio" name="type_camp_effect" value="ennemy">Ennemy</label>
                            </div>
                            <br />
                                <input type="text" class="guiFlat silver minus" id="invokeType" placeholder="File link"/>
                    </div>
                     <div class="boxIcecream left" id="CapacityCibleBox" style="width:150px;display:none">
                            <div class="boxIcecreamTitle"><img src="img/ICON/effets.png" style="width:22px;height:22px;vertical-align:bottom"/> CIBLE CAPACITY</div>
                            <div>
                                Type de la cible<br />
                                <label style="color:#555"><input id="cible_capa_type_self"   class="choiceCibleCapa" type="radio" name="cible_capa_type" value="self" checked="checked">Self</label><br />
                                <label style="color:#555"><input id="cible_capa_type_item"   class="choiceCibleCapa" type="radio" name="cible_capa_type" value="item">Item</label><br />
                                <label style="color:#555"><input id="cible_capa_type_zone"   class="choiceCibleCapa" type="radio" name="cible_capa_type" value="zone">Zone</label>
                            </div>
                    </div>

            </div>
        	</div>
        </div>
        <div id="informationWeb" style="display:none">
            <div id="contentInfo">
            </div>
        </div>
   </body>
</html>