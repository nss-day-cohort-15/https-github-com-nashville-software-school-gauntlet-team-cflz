// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new Gauntlet.WeaponsCloset.PocketSand());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new Gauntlet.WeaponsCloset.PoisonDart());
// console.log(orc.toString());


/*
  Test code to generate a human player and an orc player
 */
// var warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new BroadSword());
// console.log(orc.toString());

/*
  Test code to generate a spell
 */
var spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());


$(document).ready(function() {

  var champ;
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    var nextCard = $(this).attr("next");
    var moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    var previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });
  // Captures userName
    $("[next='card--class']").on('click', function(e) {
      var champName = $('#player-name').val();
      champ = new Gauntlet.Combatants.Human(champName)
      console.log(champ)
  });

// // Captures userClass
//     $("[next='card--weapon']").on('click', function(e) {
//      userClass = $(this).toggleClass('selected');
//      userName.setClass = new Gauntlet.Guildhall.userClass();
//      console.log(userName)
// });

  $(".champ").click(function() {
     console.log("User class", (this).innerText);
     var champClass = (this).innerText.toLowerCase();
     champClass = champClass.charAt(0).toUpperCase() + champClass.slice(1)
     console.log(champClass)
     champ.setClass(champClass);
     console.log(champ)
  });


  $(".weapon").click(function(event) {
     console.log("User weapon", (this).innerText);
     // var champWeapon = (this).innerText.toLowerCase();
     var champWeapon = event.currentTarget.id

     // champWeapon = champWeapon.charAt(0).toUpperCase() + champWeapon.slice(1)
     // console.log(champWeapon)
     champ.weapon = new Gauntlet.WeaponsCloset[champWeapon]();

     console.log(champ)
  });

$(".spell").click(function() {
     console.log("User spell", (this).innerText);
     var champSpell = (this).innerText.toLowerCase();
     champSpell = champSpell.charAt(0).toUpperCase() + champSpell.slice(1)
     console.log(champSpell)
     champ.setSpell(champSpell);
     console.log(champ)
  });



  });

//on attack:

// function 1: generate enemy {trump}
// function 2. combat, some kind of DOM output

// function combat (enemy, champ) {
// var enemy.health = enemy.health;
// var playerDamage = player.Weapon.damage;

//  if (enemy.Weapon.damange > player.Weapon.damage) {
//   console.log('you lose, you dumb fuck')
//  }

// }


