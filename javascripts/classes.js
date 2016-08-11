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
  this.healthBonus = 20;
  this.strengthBonus = 10;
};
Gauntlet.GuildHall.Fighter.prototype = new Gauntlet.GuildHall.PlayerClass();


Gauntlet.GuildHall.Warrior = function() {
  this.name = "warrior";
  this.healthBonus = this.healthBonus + 25;
  this.strengthBonus = this.strengthBonus + 30;
};
Gauntlet.GuildHall.Warrior.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Valkyrie = function() {
  this.name = "valkyrie";
  this.healthBonus = this.healthBonus + 20;
  this.strengthBonus = this.strengthBonus + 10;
};
Gauntlet.GuildHall.Valkyrie.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Berserker = function() {
  this.name = "berserker";
  this.healthBonus = this.healthBonus + 35;
  this.strengthBonus = this.strengthBonus + 20;
};
Gauntlet.GuildHall.Berserker.prototype = new Gauntlet.GuildHall.Fighter();


Gauntlet.GuildHall.Monk = function() {
  this.name = "monk";
  this.healthBonus = this.healthBonus + 10;
  this.strengthBonus = this.strengthBonus + 40;
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
  // this.name = "Mage";
  this.magical = true;
  this.healthBonus = this.healthBonus - 10;
  this.strengthBonus = this.strengthBonus - 20;
  this.intelligenceBonus = this.intelligenceBonus + 20;
};
Gauntlet.GuildHall.Mage.prototype = new Gauntlet.GuildHall.PlayerClass();



Gauntlet.GuildHall.Wizard = function() {
  this.name = "wizard";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus - 25;
  this.intelligenceBonus = this.intelligenceBonus + 40;
};
Gauntlet.GuildHall.Wizard.prototype = new Gauntlet.GuildHall.Mage();


Gauntlet.GuildHall.Conjurer = function() {
  this.name = "conjurer";
  this.strengthBonus = this.strengthBonus - 10;
  this.intelligenceBonus = this.intelligenceBonus + 10;
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
  this.name = "Stealth";
  this.healthBonus = 25;
  this.strengthBonus = 10;
  this.intelligenceBonus = 5;
};
Gauntlet.GuildHall.Sorcerer.prototype = new Gauntlet.GuildHall.PlayerClass();

Gauntlet.GuildHall.Ninja = function() {
  this.name = "Ninja";
  this.healthBonus = this.healthBonus - 5;
  this.strengthBonus = this.strengthBonus + 10;
  this.intelligenceBonus = this.intelligenceBonus + 15;
};
Gauntlet.GuildHall.Ninja.prototype = new Gauntlet.GuildHall.Stealth();

Gauntlet.GuildHall.Thief = function() {
  this.name = "Thief";
  this.healthBonus = this.healthBonus + 15;
  this.strengthBonus = this.strengthBonus - 5;
  this.intelligenceBonus = this.intelligenceBonus - 10;
};
Gauntlet.GuildHall.Thief.prototype = new Gauntlet.GuildHall.Stealth();

Gauntlet.GuildHall.Assassin = function() {
  this.name = "Assassin";
  this.healthBonus = this.healthBonus - 15;
  this.strengthBonus = this.strengthBonus + 35;
  this.intelligenceBonus = this.intelligenceBonus + 5;
};
Gauntlet.GuildHall.Assassin.prototype = new Gauntlet.GuildHall.Stealth();
