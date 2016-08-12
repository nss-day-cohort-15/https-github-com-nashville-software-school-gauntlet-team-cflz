  /*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.GuildHall = {};

/*
  Base function for a player, or enemy, class (profession)
 */
Gauntlet.GuildHall.PlayerClass = function() {
  this.name = "";
  this.healthBonus = 0;
  this.strengthBonus = 0;
  this.intelligenceBonus = 0;
  this.evasiveBonus = 0;
  this.accuracyBonus = 0;
  this.magical = false;

  this.toString = function() {
    return this.name;
  }
};

/*
    FIGHTER CLASSES
      - Warrior
      - Valkyrie
      - Berserker
      - Monk
 */
Gauntlet.GuildHall.Fighter = function() {
  this.healthBonus = 30;
  this.strengthBonus = 50;
  this.intelligenceBonus = 10;
  this.evasiveBonus = 10;
  this.accuracyBonus = 40;
};
Gauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.Warrior = function() {
  this.name = "Warrior";
  this.healthBonus = this.healthBonus + 5;
  this.accuracyBonus = this.accuracyBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
  this.evasiveBonus = this.evasiveBonus + 5
};
Gauntlet.GuildHall.Warrior.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Valkyrie = function() {
  this.name = "Valkyrie";
  this.healthBonus = this.healthBonus -5;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 25;
  this.evasiveBonus = this.evasiveBonus +25;
};
Gauntlet.GuildHall.Valkyrie.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Berserker = function() {
  this.name = "Berserker";
  this.healthBonus = this.healthBonus + 15;
  this.strengthBonus = this.strengthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus - 9;
  this.evasiveBonus = this.evasiveBonus + 24;

};
Gauntlet.GuildHall.Berserker.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Monk = function() {
  this.name = "Monk";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 30;
  this.evasiveBonus = this.evasiveBonus + 10;
  this.accuracyBonus = this.accuracyBonus - 10;
};
Gauntlet.GuildHall.Monk.prototype = new Gauntlet.GuildHall.Fighter();


/*
    MAGICAL CLASSES
      - Shaman
      - Wizard
      - Conujurer
      - Sorcerer
 */


Gauntlet.GuildHall.Mage = function() {
  this.magical = true;
  this.healthBonus = 10;
  this.strengthBonus = 40;
  this.intelligenceBonus = 40;
  this.evasiveBonus = 30;
  this.accuracyBonus = 40;
};
Gauntlet.GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();



Gauntlet.GuildHall.Wizard = function() {
  this.name = "wizard";
  this.healthBonus = this.healthBonus + 5;
  this.strengthBonus = this.strengthBonus - 5;
  this.intelligenceBonus = this.intelligenceBonus + 10;
  this.evasiveBonus = this.evasiveBonus -10;

};
Gauntlet.GuildHall.Wizard.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Conjurer = function() {
  this.name = "conjurer";
  this.healthBonus = this.healthBonus + 10;
  this.evasiveBonus = this.evasiveBonus - 5;
  this.accuracyBonus = this.accuracyBonus - 5;
};
Gauntlet.GuildHall.Conjurer.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Sorcerer = function() {
  this.name = "sorcerer";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 30;
};
Gauntlet.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.Mage();


/*
    STEALTH CLASSES
      - Thief
      - Ninja
      - Assassin
 */
Gauntlet.GuildHall.Stealth = function() {
  this.healthBonus = 20;
  this.strengthBonus = 30;
  this.intelligenceBonus = 40;
  this.evasiveBonus = 50;
  this.accuracyBonus = 40;
};
Gauntlet.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.PlayerClass();

Gauntlet.GuildHall.Ninja = function() {
  this.name = "ninja";
  this.accuracyBonus = this.accuracyBonus - 5;
  this.strengthBonus = this.strengthBonus  - 5;
  this.intelligenceBonus = this.intelligenceBonus - 5;
};
Gauntlet.GuildHall.Ninja.prototype = new Gauntlet.GuildHall.Stealth();

Gauntlet.GuildHall.Thief = function() {
  this.name = "thief";
  this.accuracyBonus = this.accuracyBonus - 10;
  this.strengthBonus = this.strengthBonus - 5;
};
Gauntlet.GuildHall.Thief.prototype = new Gauntlet.GuildHall.Stealth();

Gauntlet.GuildHall.Assassin = function() {
  this.name = "assassin";
  this.evasiveBonus = this.evasiveBonus - 10;
  this.strengthBonus = this.strengthBonus -5;
};
Gauntlet.GuildHall.Assassin.prototype = new Gauntlet.GuildHall.Stealth();
