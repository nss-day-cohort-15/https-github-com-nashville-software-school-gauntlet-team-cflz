/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Gauntlet.Combatants.Player = function(name) {
  // this.species = null;
  this.class = null;
  this.weapon = null;

  this.userName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    var output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon;
}

Gauntlet.Combatants.Player.prototype.setClass = function(newClass) {
  this.class = new Gauntlet.GuildHall[newClass]();
}


Gauntlet.Combatants.Player.prototype.setSpell = function(newSpell) {
  this.spell = newSpell;
}

Gauntlet.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  var randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Gauntlet.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

/*
  Define the base properties for a human in a
  constructor function.
 */

Gauntlet.Combatants.Human = function(name) {

  var randomSkin;
  this.playerName = name;
  this.species = "Human";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk", "Valkyrie", "Sorcerer", "Conjurer", "Wizard", "Thief", "Assassin", "Ninja"];
};
Gauntlet.Combatants.Human.prototype = new Gauntlet.Combatants.Player();


/*
  Define the base properties for a monster in a
  constructor function.
 */
Gauntlet.Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

Gauntlet.Combatants.Monster.prototype = new Gauntlet.Combatants.Player();

Gauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker",];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();


Gauntlet.Combatants.Giant = function() {
  this.health = this.health + 20;
  this.species = "Giant";
  this.allowedClasses = ["Giant", "Monk", "Berserker", "Thief", "Ninja"]; // yes, giant

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

Gauntlet.Combatants.Giant.prototype = new Gauntlet.Combatants.Monster();

Gauntlet.Combatants.Drumpf = function() {
  this.health = this.health + 50;
  this.species = "Drumpf";
  this.allowedClasses = ["Berserker", "Thief"];
};

Gauntlet.Combatants.Drumpf.prototype = new Gauntlet.Combatants.Monster();


