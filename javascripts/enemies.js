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
  this.health = this.health + 20;
  this.species = "Drumpf";
  this.class = "Scumbag";
};

Gauntlet.Combatants.Drumpf.prototype = new Gauntlet.Combatants.Monster();
