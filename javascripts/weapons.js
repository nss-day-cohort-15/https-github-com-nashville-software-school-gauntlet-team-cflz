var Gauntlet = Gauntlet || {};

Gauntlet.WeaponsCloset = {};

Gauntlet.WeaponsCloset.Weapon = function () {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["Melee", "Projectile", "Sneak"];
  this.type = "";
  this.toString = function() {
    return "" + this.name + " " + this.type + " attack for " + this.damage + " damage!";
  }
};
// Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
//   this.weapon = new Gauntlet.WeaponsCloset[newWeapon];
// }

//FIGHTER CLASS WEAPONS
Gauntlet.WeaponsCloset.KnottedClub = function() {
  this.name = "Knotted-Club";
  this.damage = Math.floor(Math.random() * 10 + 10);
  this.type = this.damageTypes[0];
};
Gauntlet.WeaponsCloset.KnottedClub.prototype = new Gauntlet.WeaponsCloset.Weapon();

Gauntlet.WeaponsCloset.HandOfGod = function() {
  this.name = "Hand of God";
  this.damage = Math.floor(Math.random() * 10 + 10);
  this.type = this.damageTypes[0];
};
Gauntlet.WeaponsCloset.HandOfGod.prototype = new Gauntlet.WeaponsCloset.Weapon();

Gauntlet.WeaponsCloset.GjereTheSword = function() {
  this.name = "Gjere the Sword";
  this.damage = Math.floor(Math.random() * 10 + 10);
  this.type = this.damageTypes[0];
};
Gauntlet.WeaponsCloset.HandOfGod.prototype = new Gauntlet.WeaponsCloset.Weapon();

Gauntlet.WeaponsCloset.BigSword = function() {
  this.name = "Sword of Over Compensation";
  this.damage = Math.floor(Math.random() * 10 + 10);
  this.type = this.damageTypes[0];
};
Gauntlet.WeaponsCloset.BigSword.prototype = new Gauntlet.WeaponsCloset.Weapon();

//STEATH CLASS WEAPONS

Gauntlet.WeaponsCloset.PocketSand = function() {
  this.name = "Pocket-Sand";
  this.damage = Math.floor(Math.random() * 10 + 10);
  this.type = this.damageTypes[2];
};
Gauntlet.WeaponsCloset.PocketSand.prototype = new Gauntlet.WeaponsCloset.Weapon();


Gauntlet.WeaponsCloset.Shuriken = function() {
  this.name = "Shuriken";
  this.damage = Math.floor(Math.random() * 10 + 10);
  this.type = this.damageTypes[1];
};
Gauntlet.WeaponsCloset.Shuriken.prototype = new Gauntlet.WeaponsCloset.Weapon();

Gauntlet.WeaponsCloset.PoisonDart = function() {
  this.name = "Poison-Dart";
  this.damage = Math.floor(Math.random() * 10 + 10);
  this.type = this.damageTypes[1];
};
Gauntlet.WeaponsCloset.PoisonDart.prototype = new Gauntlet.WeaponsCloset.Weapon();




