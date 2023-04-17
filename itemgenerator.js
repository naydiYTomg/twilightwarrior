class Item {
    constructor(name, damage, crit) {
        this.name = name;
        this.damage = damage;
        this.crit = crit
    }
    attack(enemy) {
        let a = getRandomArbitrary((this.damage - enemy.def), this.crit);
        enemy.hp -= a;
    }
}
function generateName() {
    let a = getRandomArbitrary(1, 4);
    let b = getRandomArbitrary(1, 3);
    let firstPart
    let secondPart
    if (a == 1) {
        firstPart = 'Легендарный';
    }else if (a == 2) {
        firstPart = 'Эпический';
    }else if (a == 3) {
        firstPart = 'Деревянный';
    }else if (a == 4) {
        firstPart = 'Обычный'
    }
    if (b == 1) {
        firstPart = 'Меч';
    }else if (b == 2) {
        firstPart = 'Молот';
    }else if (b == 3) {
        firstPart = 'Кинжал';
    }
    return a+' '+b;
}
console.log(generateName());
let happyornot = getRandomArbitrary(1, 1000);
if(happyornot == 3) {
    let bladeOfOlympus = new Item('Blade of Olympus', 9999, 99999)
}