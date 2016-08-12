
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
      console.log(champ)
  });
    var drumpf = new Gauntlet.Combatants.Drumpf()


// Captures userClass
    $("[next='card--weapon']").on('click', function(e) {
     var PlayerClass = $(this).toggleClass('selected');
     // userName.setClass = new Gauntlet.Guildhall.PlayerClass();
     console.log(userName)
});


  $(".champ").click(function() {
    console.log(champ)
    //  console.log("User class", (this).innerText);
     // var champClass = (this).innerText.toLowerCase();
    //  console.log(champClass)
    //  champClass = champClass.charAt(0)
     champ.setClass(this.id);
     console.log(champ)
  });

  // $(".champ").click(function () {
  //   console.log(champClass);
  //   if (champClass === "Warrior" || champClass === "Valkyrie" || champClass === "Berserker" || champClass === "Monk") {
  //     console.log("you picked figher");
  //     $("#spell-select").addClass("hidden");
  //   }

  //   if (champClass === "Wizard" || champClass === "Conjurer" || champClass === "Sorcerer") {
  //     console.log("you picked mage");
  //     $("#weapon-select").addClass("hidden");
  //   }

  //   if (champClass === "Thief" || champClass === "Ninja" || champClass === "Assassin") {
  //     console.log("you picked stealth");
  //     $("#spell-select").addClass("hidden");
  //   }

    $(".weapon").click(function(event) {
     console.log("User weapon", (this).innerText);
     // var champWeapon = (this).innerText.toLowerCase();
     var champWeapon = event.currentTarget.id

     // champWeapon = champWeapon.charAt(0).toUpperCase() + champWeapon.slice(1)
     // console.log(champWeapon)
     champ.setWeapon(champWeapon);
     // champ.setWeapon(champWeapon)



     console.log(champ)
  });



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
      var playerOutput = `<p>${champ.playerName} the ${champ.class} with ${champ.weapon}</p>` +
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
    console.log("champ dam", champ.weapon.damage)
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

