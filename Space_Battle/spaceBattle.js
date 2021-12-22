let prompt = require("prompt-sync")()
let enemyCount = 6;
const user = {
  hull: 20,
  firePower: 5,
  accuracy: 0.7,
  isOperable: true,

  attack(alien) {
    let message1 = ` `;
    let toHit = Math.random();
    let userInput1 = prompt(` Do you want to attack or retreat? `);
    if (userInput1.toLowerCase() == `attack`) {
      if (this.accuracy > toHit) {
        alien.hull = alien.hull - this.firePower;
        if (alien.hull > 0) {
          message1 = ` Enemy has ${alien.hull} hull point(s) left. `;
         //if alien.hull > 0 go back to our turn and fight 
         //we must keep fighting until, aliens turn to fight back
        // until one or the other dies
        //if the alien still has health? what do we want to happen then?
        //aliens turn
        
        } else {
          message1 = ` You have destroyed the enemy! `;
          console.log(` this many left ${enemyCount}`)
          enemyCount--
          // alien.hull < 0 we go down a round
          //when the alien loses all its health, BRING ON A NEW SHIP!  
        }
      } else {
        message1 = ` You have missed the alien. `;
      }
    } else if (userInput1.toLowerCase() == `retreat`) {
      message1 = ` You were routed, Game over `;
    } else {
      message1 = `Please input appropriate response.`
      //this.attack(alien)
      //come back to stop for unnecessary response
    }
    return message1;
  },
};

const enemy = {
  hull: Math.round(Math.random() * (6 - 3) + 3), //randomize hull strength //
  firePower: Math.round(Math.random() * (4 - 2) + 2), //randomize firepower //2-4
  accuracy: Math.random() * (0.8 - 0.6) + 0.6, //*  // randomize accuracy
  isOperable: true,

  attack1(human) {
    let message2 = ``;
    let toHit = Math.random();
    if (this.hull > 0) {
      // starts fighting the humans
      if (this.accuracy > toHit) {
        human.hull = human.hull - this.firePower;
        //dynamically being changed, reassigning value for hull.
        if (human.hull > 0) {
          //pass back to user
          //human.isOperable = true;
          message2 = `You were hit! you have ${human.hull} hull points left`;
        } else {
          //game over
          //human.isOperable = false;
          message2 = `you were killed`;
        }
      } else {
        message2 = `The enemy missed`;
        //pass back to user
      }
    } else {
      //message2 = `The enemy has been killed`;
      //bring on new enemy/run function back
    }
    return message2;
  },
};



// const battle = (user, enemy) => {
//   if (user.hull >0  && enemy.hull > 0) {
//     console.log(`users turn`);
//     console.log(user.attack(enemy));
//   } else console.log(`enemy turn`);
//   //enemy.attack1(human)
//   // results = enemy.attack(user);
//   console.log(enemy.attack1(user));
// };

// console.log(battle(user, enemy));


if (user.hull > 0 && enemy.hull > 0 ){
for(i=0; i<enemyCount; i++){
    console.log(user.attack(enemy))
    console.log(enemy.attack1(user))  
  }
}

// //input for attack no loop
// //trigger attack 6 times here
  
// return msg
//alert let message = computer .attack
// you don't want to return before you make the function call
///  computer.attack(player);
//return something from computer. attack, we need both returns
// return computer .attack
//let results = computer.attack and store it
// rturn those values.
// alert whaterver computer. attack is

// round system 
// counter 0 
// user 0
// enemy 1
// set round back 0

//problems with code
//doesnt run it back
    //taking the enemy cap into account
        //no loop yet*******