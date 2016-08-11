
/*
  Test code to generate a human player and an orc player
 */
var warrior = new Gauntlet.Combatants.Human();
warrior.setWeapon(new Gauntlet.WeaponsCloset.PocketSand());
warrior.generateClass();  // This will be used for "Surprise me" option
console.log(warrior.toString());

var orc = new Gauntlet.Combatants.Orc();
orc.generateClass();
orc.setWeapon(new Gauntlet.WeaponsCloset.PoisonDart());
console.log(orc.toString());

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
    var moveAlong = true;

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

  var attack = function () {
    var foe = new Gauntlet.Combatants.Drumpf()
    console.log(champ);
    var monsterHealth = foe.health - champ.weapon.damage
    var playerHealth = champ.health - foe.weapon.damage

    if ((monsterHealth) <= 0) {
      alert("Game over. You win!")
    } else if (playerHealth <= 0) {
      alert("Game over. You lose.")
    }
  }
    $("#attack").click(attack)

/*----------  BATTLEGROUND!!  ----------*/

  // Changes battle background on refresh
  var images = ['japan.gif', 'mexican_background.gif', 'planebackground.gif', 'street.gif', 'war.gif'];
   $('#battleground').css({'background-image': 'url(/img/bg/' + images[Math.floor(Math.random() * images.length)] + ')'})

   // ANIMATIONS
   var characterInter = setInterval(moveCharacter, 1);
    var leftOffset = 0;
    function moveCharacter() {
       $(".characterImg").offset({ left: leftOffset });
        leftOffset = leftOffset + 5;
        if (leftOffset > 600) {

          $(".enemyStat").effect( "bounce", "fast" );
          $("#battleground").effect( "shake", "fast" );
         $(".fighterImg").animate({left: "-=600"}, 1);
          clearInterval(characterInter);
        }
    };
  // }

  var monsterInter = setInterval(moveMonster, 1);
  var rightOffset = 0;
  function moveMonster() {
     $(".enemyImg").offset({ left: rightOffset });
      rightOffset = rightOffset - 5;
      if (rightOffset < -600) {

        $("#battleground").effect( "shake", "fast" );
        $(".playerStat").effect( "bounce", "fast" );

       $(".enemyImg").animate({left: "+=600"}, 1);
        clearInterval(monsterInter);
      }
  };
  clearInterval(moveMonster);






});




