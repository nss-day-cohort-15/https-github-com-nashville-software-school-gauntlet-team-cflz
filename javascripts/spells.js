/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  }
};

Gauntlet.Combatants.Player.prototype.setSpell = function(newSpell) {
  this.spell = newSpell;
}

/*
  An elemental sphere that can be cast by a magical class
 */
Gauntlet.SpellBook.Sphere = function() {
  this.name = "sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};

Gauntlet.SpellBook.Sphere.prototype = new Gauntlet.SpellBook.Spell();




Gauntlet.SpellBook.Wand = function() {
  this.name = "wand";
  this.damage = Math.floor(Math.random() * 10 + 11); // check to make sure these math aren't bad

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};

Gauntlet.SpellBook.Wand.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.Sceptre = function() {
  this.name = "sceptre";
  this.damage = Math.floor(Math.random() * 10 + 12); // check to make sure these math aren't bad

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};

Gauntlet.SpellBook.Sceptre.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.TeslaCoil = function() {
  this.name = "tesla coil";
  this.damage = Math.floor(Math.random() * 5 + 20); // check to make sure these math aren't bad

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};

Gauntlet.SpellBook.TeslaCoil.prototype = new Gauntlet.SpellBook.Spell();

Gauntlet.SpellBook.Hadouken = function() {
  this.name = "hadouken";
  this.damage = Math.floor(Math.random() * 11 + 10); // check to make sure these math aren't bad

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};

Gauntlet.SpellBook.Hadouken.prototype = new Gauntlet.SpellBook.Spell();

