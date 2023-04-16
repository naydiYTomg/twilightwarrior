let turn = 2;
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
class Enemy {
    constructor(hp, damage, def) {
        this.hp = hp;
        this.damage = damage;
        this.def = def;
    }
    attack(player) {
        let b = getRandomArbitrary((this.damage - player.def), (this.damage + 1));
        player.hp -= a;
        turn = 0;
    }
}
class Hero {
    constructor(hp, damage, def, energy, invsize) {
        this.hp = hp;
        this.damage = damage;
        this.def = def;
        this.energy = energy;
        this.invsize = invsize;
    }
    attack(enemy) {
        let a = getRandomArbitrary((this.damage - enemy.def), (this.damage + 1));
        enemy.hp -= a;
        turn = 1;
        if(enemy.hp <= 0) {
            kill();
            turn = 2;
        }
    }
}
function kill() {
    //тут будет код чтобы убирать врага с экрана
}
function tick() {
    if (turn == 0) {
        atkbut.addEventListener('click', hero.attack(enemy1))
        defbut.addEventListener('click', hero.defence(enemy1))
        techbut.addEventListener('click', hero.openTechMenu)
    } else if (turn == 1) {
        atkbut.removeEventListener('click', hero.attack(enemy1))
        defbut.removeEventListener('click', hero.defence(enemy1))
        techbut.removeEventListener('click', hero.openTechMenu)
        let c = getRandomArbitrary(1, 2);
        if(enemy1.hp <= 10) {
            if(c == 1) {
                enemy1.defence(hero);
            }else if(c == 2){
                enemy1.attack(hero);
            }
        }else {
            enemy1.attack(hero);
        }
    } else if (turn == 2) {
        atkbut.removeEventListener('click', hero.attack(enemy1))
        defbut.removeEventListener('click', hero.defence(enemy1))
        techbut.removeEventListener('click', hero.openTechMenu)
    }
}
setInterval(tick, 1000);