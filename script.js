let atkbut = document.getElementById('atkb');
let defbut = document.getElementById('defb');
let resh1 = document.getElementById('r1')
let resh2 = document.getElementById('r2')
let z1 = document.getElementById('z1')
let enname = document.getElementById('en')
let enhp = document.getElementById('eh')
let endef = document.getElementById('ed')
let plhp = document.getElementById('ph')
let pldef = document.getElementById('pd')
let pldmg = document.getElementById('pdmg')
let kc = document.getElementById('kc')
let turn = 2;
let defenceState = false;
let end = document.getElementById('end');
let blscr = document.getElementById('bs');
let ht = document.getElementById('ht');
let nextbut = document.getElementById('nb')

z1.style.display = 'none';
function blToN() {
    blscr.style.display = 'block';
    blscr.style.animation = 'blToNorm linear 4s forwards';
    setTimeout(function() {
        blscr.style.display = 'none';
    }, 3300)
}
document.addEventListener("DOMContentLoaded", blToN);
function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
class Enemy {
    constructor(name, hp, damage, def) {
        this.name = name;
        this.hp = hp;
        this.damage = damage;
        this.def = def;
    }
    attack(player) {
        if(defenceState == false) {
            let b = getRandomArbitrary((this.damage - player.def), (this.damage + 1));
            player.hp -= b;
        }else if(defenceState == true) {
            let b = getRandomArbitrary(0, 1);
            player.hp -=b;
        }
        if (player.hp <= 0) {
            endgame();
        }else {
            atkbut.addEventListener('click', atk);
            defbut.addEventListener('click', def)
        }
    }
}
class Hero {
    constructor(hp, damage, def, mana, invsize) {
        this.hp = hp;
        this.damage = damage;
        this.def = def;
        this.mana = mana;
        this.invsize = invsize;
    }
    attack(enemy) {
        let a = getRandomArbitrary((this.damage - enemy.def), (this.damage + 1));
        enemy.hp -= a;
        
        if(enemy.hp <= 0) {
            kill();
            resh1.addEventListener('click', resetEnStats);
            resh1.addEventListener('click', changeEnStats);
        }else {
            enemy1.attack(hero);
            changePlayerStats();
        }
    }
    defence() {
        defenceState = true;
        enemy1.attack(hero);
        changePlayerStats();
    }
}
function changePlayerStats() {
    plhp.innerHTML = 'Здоровье - '+hero.hp;
    pldef.innerHTML = 'Защита - '+hero.def;
    pldmg.innerHTML = 'Урон - '+hero.damage;
}
function changeEnStats() {
    turn = 0;
    enname.innerHTML = enemy1.name;
    enhp.innerHTML = 'Здоровье - '+enemy1.hp;
    endef.innerHTML = 'Защита - '+enemy1.def;
    z1.style.display = 'block';
    resh1.removeEventListener('click', resetEnStats);
    resh1.removeEventListener('click', changeEnStats);
}
function atk() {
    turn = 1;
    atkbut.removeEventListener('click', atk);
    hero.attack(enemy1);
    if (enemy1.hp >= 0){
        changeEnStats();
    }
}
function def() {
    turn = 1;
    defbut.removeEventListener('click', def)
    hero.defence();
}
function resetEnStats() {
    atkbut.addEventListener('click', atk);
    defbut.addEventListener('click', def)
    enemy1.hp = 15;
}
function kill() {
    kc.style.display = 'block';
    enname.innerText = 'Повержен';
    enhp.innerHTML = ' ';
    endef.innerHTML = ' ';
    setTimeout(function(){
        z1.style.display = 'none';
        kc.style.display = 'none';
        enname.innerHTML = ' ';
        next3();
    }, 5000)
    atkbut.removeEventListener('click', atk);
    defbut.removeEventListener('click', def);
}
function changeDMG() {
    hero.damage = 5;
    changePlayerStats();
}
function endgame() {
    end.style.display = 'inline';
    atkbut.removeEventListener('click', atk);
    defbut.removeEventListener('click', def);
    resh1.removeEventListener('click', resetEnStats);
    resh1.removeEventListener('click', changeEnStats);
    stop();
}
function nextToBattle1() {
    nextbut.style.display = 'none';
    ht.style.display = 'none';
    resetEnStats();
    changeEnStats();
}
function next4() {
    ht.innerHTML = 'To be continued...';
    nextbut.removeEventListener('click', next4);
}
function next3() {
    nextbut.style.display = 'block';
    ht.style.display = 'inline';
    ht.innerHTML = 'Ух, это было сложно. Так, я где-то в болотах. Надо выбираться';
    nextbut.addEventListener('click', next4)
    nextbut.removeEventListener('click', nextToBattle1);
}
function next2() {
    ht.innerHTML = 'О, какой-то человек идёт! Погодите-ка, это же не человек!';
    nextbut.removeEventListener('click', next2);
    nextbut.addEventListener('click', nextToBattle1);
}
function next1() {
    ht.innerHTML = 'Ни черта ни помню, даже имени';
    nextbut.removeEventListener('click', next1)
    nextbut.addEventListener('click', next2)
}
let enemy1 = new Enemy('Болотный Зомби',15, 2, 1);
let hero = new Hero(10, 2, 1, 15, 10);
changePlayerStats();
resh1.addEventListener('click', resetEnStats);
resh1.addEventListener('click', changeEnStats);
resh2.addEventListener('click', changeDMG)
nextbut.addEventListener('click', next1)
// function tick() {
//     if (turn == 0) {
//         atkbut.addEventListener('click', hero.attack(enemy1))
//         // defbut.addEventListener('click', hero.defence(enemy1))
//         // techbut.addEventListener('click', hero.openTechMenu)
//     } else if (turn == 1) {
//         atkbut.removeEventListener('click', hero.attack(enemy1))
//         // defbut.removeEventListener('click', hero.defence(enemy1))
//         // techbut.removeEventListener('click', hero.openTechMenu)
//         let c = getRandomArbitrary(1, 2);
//         if(enemy1.hp <= 10) {
//             // if(c == 1) {
//             //     enemy1.defence(hero);
//             // }else if(c == 2){
//             //     enemy1.attack(hero);
//             // }
//         }else {
//             enemy1.attack(hero);
//         }
//     } else if (turn == 2) {
//         atkbut.removeEventListener('click', hero.attack(enemy1))
//         // defbut.removeEventListener('click', hero.defence(enemy1))
//         // techbut.removeEventListener('click', hero.openTechMenu)
//     }
// }
// document.body.addEventListener('timeupdate', tick);
// if (battle = true) {
//     let timer = setInterval(tick, 1000);
// }else if (battle = false) {
//     clearInterval(timer)
// }
