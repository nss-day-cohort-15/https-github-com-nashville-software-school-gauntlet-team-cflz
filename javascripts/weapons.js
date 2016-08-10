var Gauntlet || {};
Gauntlet.WeaponsCloset = {};

Gauntlet.WeaponsCloset.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

Gauntlet.WeaponsCloset.Dagger = function() {
  this.name = "dagger";
  this.damage = 4;
  this.hands = 1;
};
Dagger.prototype = new Gauntlet.WeaponsCloset.Weapon();

var BroadSword = function() {
  this.name = "broad sword";
  this.damage = 14;
  this.hands = 2;
};
BroadSword.prototype = new Gauntlet.WeaponsCloset.Weapon();

var WarAxe = function() {
  this.name = "war axe";
  this.damage = 18;
  this.hands = 2;
};
WarAxe.prototype = new Gauntlet.WeaponsCloset.Weapon();

