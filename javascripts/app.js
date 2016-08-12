
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


  $(".champ").click(function() {
    console.log(champ)
     champ.setClass(this.id);
     console.log(champ)
  });



    $(".weapon").click(function(event) {
     console.log("User weapon", (this).innerText);
     var champWeapon = event.currentTarget.id
     champ.setWeapon(champWeapon);
     console.log(champ)
  });

/*----------  BATTLEGROUND!!  ----------*/


    function battleCards() {
      console.log("My health",champ.health);
      console.log("What is my name?", champ.playerName);
      console.log("champ Class", champ.class);
      var drumpf = new Gauntlet.Combatants.Drumpf;

      var playerOutput = `<p>${champ.playerName} the ${champ.class}</p>` +
                     `<div class="health">Health: ${champ.health}</div>`;
      $(".p1Stats").html(playerOutput);

      enemyOutput = `<p>${drumpf.name}</p>` +
                    `<div class="health">Health: ${drumpf.health}</div>`;
      $(".p2Stats").html(enemyOutput);



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

         $(".enemyImg").animate({left: "+=720"}, 1);
          clearInterval(enemyInterval);
        }
    };
    clearInterval(moveEnemy);
  });
}
})






