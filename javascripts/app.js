
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


  $(".champ").click(function() {
    champ.setClass(this.id);
    if (champ.class.name === "Warrior" || champ.class.name === "Valkyrie" || champ.class.name === "Berserker" || champ.class.name === "Monk") {
      console.log("Your destiny is to be a fighter!");
      $("#spell-select").addClass("hide");
      $("#stealth-select").addClass("hide");
    }

    if (champ.class.name === "Wizard" || champ.class.name === "Conjurer" || champ.class.name === "Sorcerer") {
      console.log("Your destiny is to be a magician!");
      $("#weapon-select").addClass("hide");
      $("#stealth-select").addClass("hide");
    }

    if (champ.class.name === "Thief" || champ.class.name === "Ninja" || champ.class.name === "Assassin") {
      console.log("Your destiny is to be sneaky!");
      $("#spell-select").addClass("hide");
      $("#weapon-select").addClass("hide");
    }

    $(".weapon").click(function(event) {
     console.log("User weapon", (this).innerText);
     var champWeapon = event.currentTarget.id
     champ.setWeapon(champWeapon);
    })


     console.log(champ)
  });

/*----------  BATTLEGROUND!!  ----------*/

  var orc;
    function battleCards() {
      console.log("My health",champ.health);
      console.log("What is my name?", champ.playerName);
      console.log("champ Class", champ.class.name);

      // orc = new Gauntlet.Combatants.Orc();
      // orc.setWeapon(new KnottedClub());
      // orc.generateClass();
      // orc.playerName = "MyNameOrc";
      // console.log(orc.toString());
      // var playerOutput = "";
      // var enemyOutput = "";
      // $(".playerStat").html("")

      var playerOutput = `<p>${champ.playerName} the ${champ.class}</p>` +
                     `<div class="health">Health: ${champ.health}</div>`;
      $(".p1Stats").html(playerOutput);

      // var enemyOutput = `<p>${orc.monsterName}</p>` +
      //               `<div class="health">Health: ${orc.health}</div>`;
      // $(".p2Stats").html(enemyOutput);

  };

  // Changes battle background on refresh
  var images = ['japan.gif', 'mexican_background.gif', 'planebackground.gif', 'street.gif', 'war.gif'];
   $('#battleground').css({'background-image': 'url(/img/bg/' + images[Math.floor(Math.random() * images.length)] + ')'})

   // ANIMATIONS

  $("#attack").click(function battle(){

    var fighterInterval = setInterval(moveFighter, 1);
    var leftOffset = 0;
    function moveFighter() {
       $(".fighterImg").offset({ left: leftOffset });
        leftOffset = leftOffset + 5;
        if (leftOffset > 720) {

          // // $(".p1Stats").effect( "bounce", "fast" );
          // $("battleground").effect( "shake", "fast" );
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

          // $("battleground").effect( "shake", "fast" );
          // $(".p2Stats").effect( "bounce", "fast" );

         $(".enemyImg").animate({left: "+=720"}, 1);
          clearInterval(enemyInterval);
        }
    };
    clearInterval(moveEnemy);
  });





});

