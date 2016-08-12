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
// warrior.setWeapon(new Gauntlet.WeaponsCloset.PocketSand());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// var orc = new Gauntlet.Combatants.Orc();
// orc.generateClass();
// orc.setWeapon(new Gauntlet.WeaponsCloset.PoisonDart());
// console.log(orc.toString());

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
      case "card--battleground":
        moveAlong = ($("#player-name").val() !== "");
        battleCards()
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
  });
    var drumpf = new Gauntlet.Combatants.Drumpf()


// Captures userClass
    $("[next='card--weapon']").on('click', function(e) {
     var PlayerClass = $(this).toggleClass('selected');
     // userName.setClass = new Gauntlet.Guildhall.PlayerClass();
     // console.log(userName)
});


  $(".champ").click(function() {
    champ.setClass(this.id);

    $(".weapon").click(function(event) {
     console.log("User weapon", (this).innerText);
     var champWeapon = event.currentTarget.id
     champ.setWeapon(champWeapon);
    })


     console.log(champ)
  });

    $(".fighter").click(function() {
      console.log("Your destiny is to be a fighter!");
      $("#spell-select").addClass("hide");
      $("#stealth-select").addClass("hide");
      $("#fighterChar").removeClass('hide');
      $("#trump").removeClass('hide');
    })

    $(".magic").click(function() {
      console.log("Your destiny is to be a magician!");
      $("#weapon-select").addClass("hide");
      $("#stealth-select").addClass("hide");
      $("#magicalChar").removeClass('hide');
      $("#scott").removeClass('hide');
    })

    $(".stealth").click(function() {
      console.log("Your destiny is to be sneaky!");
      $("#spell-select").addClass("hide");
      $("#weapon-select").addClass("hide");
      $("#stealthChar").removeClass('hide');
      $("#scott").removeClass('hide');
    })


/*----------  BATTLEGROUND!!  ----------*/


function battleCards() {
      // var drumpf = new Gauntlet.Combatants.Drumpf()
      console.log("My health",champ.health);
      console.log("What is my name?", champ.playerName);
      console.log("champ Class", champ.class);
      printStats(drumpf, champ)
      // orc = new Gauntlet.Combatants.Orc();
      // orc.setWeapon(new KnottedClub());
      // orc.generateClass();
      // orc.playerName = "MyNameOrc";
      // console.log(orc.toString());
      // var playerOutput = "";
      // var enemyOutput = "";
      // $(".playerStat").html("")

  };
  function printStats(drumpf, champ){
      var playerOutput = `<p>${champ.playerName} fighting with ${champ.weapon}</p><br>` +
                     `<div class="health">Health: ${champ.health}</div>`;
      $(".p1Stats").html(playerOutput);

      var enemyOutput = `<p>${drumpf.name}</p>` +
                    `<div class="health">Health: ${drumpf.health}</div>`;
      $(".p2Stats").html(enemyOutput);
  }

  // Changes battle background on refresh
  var images = ['japan.gif', 'mexican_background.gif', 'planebackground.gif', 'street.gif', 'war.gif'];
   $('#battleground').css({'background-image': 'url(/img/bg/' + images[Math.floor(Math.random() * images.length)] + ')'})

   // ANIMATIONS

  $("#attack").click(function (){
    console.log("are we in function")
    console.log("drumpf health", drumpf.health)
    console.log("drumpf damage", drumpf.damage)

    console.log("champ health", champ.health)
    drumpf.health = drumpf.health - champ.weapon.damage
    champ.health = champ.health - drumpf.damage
    printStats(drumpf, champ)

    if ((drumpf.health) <= 0) {
      alert("Game over. You win!")
    } else if (champ.health <= 0) {
      alert("Game over. You lose.")
    }

    var fighterInterval = setInterval(moveFighter, 1);
    var leftOffset = 0;
    function moveFighter() {
       $(".fighterImg").offset({ left: leftOffset });
        leftOffset = leftOffset + 5;
        if (leftOffset > 720) {
         $(".fighterImg").animate({left: "-=720"}, 1);
          clearInterval(fighterInterval);
        }
    };

    var enemyInterval = setInterval(moveEnemy, 1);
    var rightOffset = 0;
    function moveEnemy() {
       $(".enemyImg").offset({ left: rightOffset });
        rightOffset = rightOffset - 5;
        if (rightOffset < -720) {

         $(".enemyImg").animate({left: "+=720"}, 1);
          clearInterval(enemyInterval);
        }
    };
    clearInterval(moveEnemy);
  });

});

