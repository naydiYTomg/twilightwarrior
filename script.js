
// ЧТО НАДО СДЕЛАТЬ:
// Чтобы противник атаковал,
// Защиту
















let atkbut = document.getElementById('atkb');
let defbut = document.getElementById('defb');
let resh1 = document.getElementById('r1')
let resh2 = document.getElementById('r2')
let reshCenter = document.getElementById('rc')
let reshCenterP = document.getElementById('rcp')
let resh1p = document.getElementById('r1p')
let resh2p = document.getElementById('r2p')
let z1 = document.getElementById('z1')
let forest = document.getElementById('for');
let end = document.getElementById('end');
let blscr = document.getElementById('bs');
let ht = document.getElementById('ht');
let nextbut = document.getElementById('nb');
let wiz = document.getElementById('w1');
let map1 = document.getElementById('map');
let ppos = document.getElementById('ppos');
let countOfEvil = 0;
let countOfGood = 0;
let attacked = 0;
let fightnumber;

document.addEventListener("DOMContentLoaded", blToN);

z1.style.display = 'none';
function blToN() {
    blscr.style.display = 'block';
    blscr.style.animation = 'blToNorm linear 4s forwards';
    setTimeout(function() {
        blscr.style.display = 'none';
    }, 3300)
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  };
var Hero = {
    hp: 10,
    dmg: 3,
    def: 1,
    mana: 15,
    invsize: 10,
    defenceState: false
};
var Enemy = {
    name: "Болотный Зомби",
    hp: 10,
    dmg: 2,
    def: 1,
    defenceState: false
};
let enname = document.getElementById('en')
let enhp = document.getElementById('eh')
let endef = document.getElementById('ed')
let plhp = document.getElementById('ph')
let pldef = document.getElementById('pd')
let pldmg = document.getElementById('pdmg')
let plmana;
let endmg;
let kc = document.getElementById('kc');
function update() {
    atkbut.addEventListener('click', atk);
    plhp.innerHTML = 'Здоровье - '+Hero.hp;
    pldef.innerHTML = 'Защита - '+Hero.def;
    pldmg.innerHTML = 'Урон - '+Hero.dmg;
    enname.innerHTML = Enemy.name;
    enhp.innerHTML = 'Здоровье - '+Enemy.hp;
    endef.innerHTML = 'Защита - '+Enemy.def;
    // endmg.innerHTML = 'Урон - '+Enemy.dmg;
};
function reset1() {
    Enemy.hp = 10;
}
function kill(target) {
    kc.style.display = 'block';
    enname.innerText = 'Повержен';
    enhp.style.display = 'none';
    endef.style.display = 'none';
    target.defenceState = false;
    setTimeout(function(){
        z1.style.display = 'none';
        kc.style.display = 'none';
        enname.style.display = 'none';
        if(fightnumber == 1) {
            next3();
        }
    }, 5000)
};
function attack(target, attacker) {
    if(target.def > attacker.dmg) {
        if(target.defenceState == true) {
            target.hp -= 1
            attacked = 1;
        }else if(target.defenceState == false) {
            target.hp -= 1
            attacked = 1;
        }
    }else {
        if(target.defenceState == true) {
            target.hp -= getRandomArbitrary(0, 2);
            target.defenceState = false;
            attacked = 1;
        }else if(target.defenceState == false) {
            target.hp -= getRandomArbitrary((attacker.dmg - target.def), (attacker.dmg + 1))
            attacked = 1;
        }
    }    
    if (target.hp <= 0) {
        kill(target);
        attacked = 0;
    }else {
        update();
    }
};
function atk() {
    atkbut.removeEventListener('click', atk);
    attack(Enemy, Hero);
}
function defence(target) {
    target.defenceState = true;
};
update();
function startBattle() {
    if(attacked == 0) {
        atkbut.addEventListener('click', atk);
    }else if(attacked == 1) {
        attack(Hero, Enemy)
        update();
    }
}
//storytelling

//before the separation on the path of good and evil/до разделения на пути добра и зла

function next1() {
    ht.innerHTML = '- Ни черта ни помню, даже имени';
    nextbut.removeEventListener('click', next1)
    nextbut.addEventListener('click', next2)
}
function next2() {
    ht.innerHTML = '- О, какой-то человек идёт! Погодите-ка, это же не человек!';
    nextbut.removeEventListener('click', next2);
    nextbut.addEventListener('click', nextToBattle1);
}
function nextToBattle1() {
    nextbut.style.display = 'none';
    ht.style.display = 'none';
    z1.style.display = 'block';
    enname.style.display = 'inline';
    enhp.style.display = 'inline';
    endef.style.display = 'inline';
    fightnumber = 1;
    reset1()
    update();
    startBattle();
}
function next3() {
    nextbut.style.display = 'block';
    ht.style.display = 'inline';
    ht.innerHTML = '- Ух, это было сложно. Так, я где-то в болотах. Надо выбираться';
    nextbut.addEventListener('click', next4)
    nextbut.removeEventListener('click', nextToBattle1);
}
function next4() {
    ht.innerHTML = ' ';
    nextbut.style.display = 'none';
    reshCenter.style.display = 'block';
    reshCenterP.innerHTML = 'Искать выход с болота';
    reshCenter.addEventListener('click', next5);
    nextbut.removeEventListener('click', next4);
    // nextbut.addEventListener('ckick', next2);
}
function next5() {
    reshCenter.style.display = 'none';
    reshCenter.removeEventListener('click', next5);
    nextbut.style.display = 'block';
    // nextbut.removeEventListener('click', next5)
    nextbut.addEventListener('click', next6);
    forest.src = 'images/for2.png';
    // ht.style.display = 'inline';
    ht.innerHTML = '- Вроде бы дальше только лес';
}
function next6() {
    ht.innerHTML = 'Вы идёте по лесу и выходите на поляну. Перед вами неожиданно появилось непонятное светящееся облако';
    nextbut.addEventListener('click', next7);
    nextbut.removeEventListener('click', next6);
}
function next7() {
    ht.innerHTML = 'Вдруг перед вами возник высокий человек в странных одеяниях.<br> Вы испуганы';
    nextbut.addEventListener('click', next8);
    nextbut.removeEventListener('click', next7);
}
function next8() {
    ht.innerHTML = '- Здравстуй путник! Что привело тебя в земли гильдии <br> в столь ранний час?';
    wiz.style.display = 'block';
    enname.innerHTML = 'Незнакомец';
    nextbut.style.display = 'none';
    resh1.style.backgroundColor = 'green';
    resh2.style.backgroundColor = 'red';
    resh1p.innerHTML = 'Вы удивитесь, но даже я сам не знаю';
    resh2p.innerHTML = 'Не твоё дело';
    resh1.style.display = 'block';
    resh2.style.display = 'block';
    nextbut.removeEventListener('click', next8);
    resh1.addEventListener('click', wGnext1);
    resh2.addEventListener('click', wEnext1);
}

//after the separation on the path of good and evil/после разделения на пути добра и зла


//way of good/путь добра
function wGnext1() {
    ht.innerHTML = '- Да, вид у тебя не очень. Давай я тебя вылечу?';
    resh1.style.display = 'none';
    resh2.style.display = 'none';
    resh1.removeEventListener('click', wGnext1);
    resh2.removeEventListener('click', wEnext1);
    nextbut.style.display = 'block';
    nextbut.style.left = '470px';
    nextbut.addEventListener('click', wGnext2);
}
function wGnext2() {
    ht.innerHTML = 'Вы чувствуете прилив сил';
    wiz.style.display = 'none';
    enname.style.display = 'none';
    nextbut.style.left = '750px';
    Hero.hp = 11;
    update();
    nextbut.removeEventListener('click', wGnext2);
    nextbut.addEventListener('click', wGnext3);
}
function wGnext3() {
    ht.innerHTML = '- Пройдёмся по лесу?';
    wiz.style.display = 'block';
    enname.style.display = 'block';
    nextbut.style.left = '470px';
    nextbut.style.display = 'none';
    reshCenter.style.display = 'block';
    reshCenterP.innerHTML = 'С радостью';
    reshCenter.addEventListener('click', wGnext4);
    nextbut.removeEventListener('click', wGnext3);
}
function wGnext4() {
    ht.innerHTML = 'Вы неспешно идёте сквозь лес';
    wiz.style.display = 'none';
    enname.style.display = 'none';
    nextbut.style.left = '750px';
    reshCenter.style.display = 'none';
    reshCenter.removeEventListener('click', wGnext4);
    nextbut.style.display = 'block';
    nextbut.addEventListener('click', wGnext5);
}
function wGnext5() {
    ht.innerHTML = '- Так как же тебя зовут?';
    wiz.style.display = 'block';
    enname.style.display = 'block';
    nextbut.style.left = '470px';
    nextbut.removeEventListener('click', wGnext5);
    nextbut.addEventListener('click', wGnext6);
}
function wGnext6() {
    ht.innerHTML = '- Скажем так, у меня нет имени. У меня такой же вопрос: А как твоё имя?';
    wiz.style.display = 'none';
    enname.style.display = 'none';
    nextbut.style.left = '750px';
    nextbut.removeEventListener('click', wGnext6);
    nextbut.addEventListener('click', wGnext7);
}
function wGnext7() {
    ht.innerHTML = '- Хм, интересно... Зовут меня Джеремайя, я старший маг <br> в гильдии магов';
    wiz.style.display = 'block';
    enname.style.display = 'block';
    nextbut.style.left = '470px';
    nextbut.removeEventListener('click', wGnext7);
    nextbut.addEventListener('click', wGnext8);
}
function wGnext8() {
    ht.innerHTML = '- Извини, мне нужно срочно уйти. Давай я дам тебе адрес <br> гильдии, я советую тебе вступить в неё';
    enname.innerHTML = 'Джеремайя'
    nextbut.removeEventListener('click', wGnext8);
    nextbut.addEventListener('click', wGnext9);
}
function wGnext9() {
    ht.innerHTML = 'Перо и листок появились у мага в руке и он быстро накорябал адрес: деревня Кьёлверт, северная окраина';
    wiz.style.display = 'none';
    enname.style.display = 'none';
    nextbut.style.left = '750px';
    nextbut.removeEventListener('click', wGnext9);
    nextbut.addEventListener('click', wGnext10);
}
function wGnext10() {
    ht.innerHTML = 'Он отдал листок и расстворился';
    nextbut.removeEventListener('click', wGnext10);
    nextbut.addEventListener('click', wGnext11);
}
function wGnext11() {
    ht.innerHTML = '- Хм, он очень удивился когда я сказал что у меня нет имени...';
    nextbut.removeEventListener('click', wGnext11);
    nextbut.addEventListener('click', wGnext12);
}
function wGnext12() {
    ht.style.display = 'none';
    nextbut.style.display = 'none';
    reshCenter.style.display = 'block';
    reshCenterP.innerHTML = 'В путь!';
    nextbut.removeEventListener('click', wGnext12);
    reshCenter.addEventListener('click', wGnext13);
}
function wGnext13() {
    map1.style.display = 'block';
    ppos.style.display = 'block';
    reshCenter.style.display = 'none'
    ppos.style.animation = 'walk1 2.5s linear forwards';
    reshCenter.removeEventListener('click', wGnext13);
    setTimeout(function() {
        map1.style.display = 'none';
        ppos.style.display = 'none';
        ht.style.display = 'block';
        nextbut.style.display = 'block';
        // nextbut.addEventListener('click', wGnext14);
        ht.innerHTML = 'На пути вам встретился лесной зомби';
    }, 2500);
}

//way of evil/путь зла

function wEnext1() {

}

nextbut.addEventListener('click', next1)
// DEBUG

// function chStatsToZ2() {
//     Enemy.name = 'Лесной Зомби';
//     Enemy.hp = 15;
//     Enemy.dmg = 3;
// }

// console.log(Enemy.name);
// console.log(Enemy.hp);
// Enemy.defenceState = true;
// console.log(Enemy.defenceState);
// setTimeout(attack(Enemy, Hero), 100);
// console.log(Enemy.hp);
// console.log(Enemy.defenceState);

// chStatsToZ2();

// console.log(Enemy.name);
// console.log(Enemy.hp);
// Enemy.defenceState = true;
// console.log(Enemy.defenceState);
// setTimeout(attack(Enemy, Hero), 100);
// console.log(Enemy.hp);
// console.log(Enemy.defenceState);