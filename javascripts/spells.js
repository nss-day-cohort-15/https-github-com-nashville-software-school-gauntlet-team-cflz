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




// var Gauntlet Gauntlet || {};
// Gauntlet.WeaponsCloset = {};
// Gauntlet.WeaponsCloset.Weapon = function () {
//   this.name = "";
//   this.damage = 0;

//   this.damageTypes = ["Melee", "Projectile", "Sneak"];
//   this.type = "";
//   this.toString = function() {
//     return this.name this.type + " attack for " + this.damage + " damage!";
//   }
// };
// Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
//   this.weapon = newWeapon;
// }

// Gauntlet.WeaponsCloset.PocketSand = function() {
//   this.name = "pocket sand";
//   this.damage = Math.floor(Math.random() * 10 + 10);
//   this.type = this.damageTypes[2];
// };
// Gauntlet.WeaponsCloset.PocketSand.prototype = new Gauntlet.WeaponsCloset.Weapon();


