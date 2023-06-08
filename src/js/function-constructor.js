export default function Character(name, type) {
    const trueType = ["Bowerman", "Swordsman", "Magician", "Daemon", "Undead", "Zombie"];
    const attackDefence = {
        Bowman: '25/25',
        Swordsman: '40/10',
        Magician: '10/40',
        Undead: '25/25',
        Zombie: '40/10',
        Daemon: '10/40',
    }
    if (typeof name !== 'string' || name.length < 2 || name.length > 10 || !trueType.includes(type)) {
        throw new Error('Некорректный значение');
    } else {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        for (let key in attackDefence) {
            if (key === type) {
                const attackDefenceSplit = attackDefence[key].split('/');
                this.attack = Number(attackDefenceSplit[0]);
                this.defence = Number(attackDefenceSplit[1]);
            }
        }
    }
}
