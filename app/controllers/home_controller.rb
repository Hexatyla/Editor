class HomeController < ApplicationController

  class InformationsMenu
    def initialize(name, img, link = "#")
      @name = name
      @img = img
      @link = link
    end

    def getName()
      return (@name)
    end

    def getImage()
      return ("icons_menu/#{@img}.png")
    end

    def getNewImage()
      return ("icons_menu/#{@img}_new.png")
    end

    def getLink()
      return (@link);
    end
  end

  def index
    @link_menu = Array.new()
    @link_menu.push(InformationsMenu.new("Ameliorations",  "ameliorations"))
    @link_menu.push(InformationsMenu.new("Buildings",      "buildings"))
    @link_menu.push(InformationsMenu.new("Capacities",     "capacities"))
    @link_menu.push(InformationsMenu.new("Depandancies",   "depandancies"))
    @link_menu.push(InformationsMenu.new("Effects",        "effects"))
    @link_menu.push(InformationsMenu.new("Evenements",     "evenements"))
    @link_menu.push(InformationsMenu.new("Objects",        "objects"))
    @link_menu.push(InformationsMenu.new("Projectiles",    "projectiles"))
    @link_menu.push(InformationsMenu.new("Spells",         "spells"))
    @link_menu.push(InformationsMenu.new("Units",          "units"))
  end
end
