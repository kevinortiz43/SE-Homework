let attackButton = document.getElementById("attackButton");
let displayUserHull = document.getElementById("user-Hull");
let displayUserFirePower = document.getElementById("user-FirePower");
let displayUserAccuracy = document.getElementById("user-Accuracy");
let displayEnemyHull = document.getElementById("enemy-Hull");
let displayEnemyFirePower = document.getElementById("enemy-FirePower");
let displayEnemyAccuracy = document.getElementById("enemy-Accuracy");
let displayMessage1 = document.getElementById("messages");

let enemyCount = 7;

const user = {
  hull: 20,
  firePower: 5,
  accuracy: 0.7,

  attack(alien) {
    alert(` User turn `);

    let toHit = Math.random();
    let userInput1 = prompt(`Do you want to attack or retreat? `);
    if (this.hull > 0) {
      if (enemyCount > 0) {
        if (userInput1.toLowerCase() == `attack`) {
          if (this.accuracy > toHit) {
            alien.hull = alien.hull - this.firePower;
            if (alien.hull > 0) {
              alert(` Enemy has ${alien.hull} hull point(s) left. `);
            } else {
              alert(` You have destroyed the enemy! `);
              enemyCount--;
              alert(` There are ${enemyCount} ships left `);
            }
          } else {
            alert(` You have missed the alien. `);
            enemy.attack1;
          }
        } else if (userInput1.toLowerCase() == `retreat`) {
          alert(` You were routed, Game over `);
        } else {
          alert(` Please input appropriate response `);
        }
      } else {
        alert(` You destroyed all enemy ships! `);
      }
    } else {
      alert(` you were killed`);
    }
    return alert;
  },
};

const enemy = {
  hull: Math.round(Math.random() * (6 - 3) + 3), //randomize hull strength //
  firePower: Math.round(Math.random() * (4 - 2) + 2), //randomize firepower //2-4
  accuracy: Math.random() * (0.8 - 0.6) + 0.6, //*  // randomize accuracy

  attack1(human) {
    alert(` Enemy turn `);

    let toHit = Math.random();
    if (human.hull > 0) {
      if (this.accuracy > toHit) {
        human.hull = human.hull - this.firePower;
        if (human.hull > 0) {
          alert(` You were hit! you have ${human.hull} hull points left `);
        } else {
          alert(` You were killed `);
        }
      } else {
        alert(` The enemy missed `);
      }
    } else {
    }
    return alert;
  },
};

displayUserStats(user);

displayEnemyStats(enemy);

function displayUserStats() {
  displayUserHull.innerHTML = user.hull;
  displayUserFirePower.innerHTML = user.firePower;
  displayUserAccuracy.innerHTML = user.accuracy;
}

function displayEnemyStats() {
  displayEnemyHull.innerHTML = enemy.hull;
  displayEnemyFirePower.innerHTML = enemy.firePower;
  displayEnemyAccuracy.innerHTML = enemy.accuracy;
}

function displayMessage(x) {
  alert(x);
}

function displayBattle() {
  if (user.hull > 0 && enemy.hull > 0) {
    while (enemyCount > -1 && user.hull > 0) {
      console.log(user.attack(enemy));
      console.log(enemy.attack1(user));
    }
  }
}

attackButton.addEventListener("click", () => {
  console.log(displayBattle());
});
