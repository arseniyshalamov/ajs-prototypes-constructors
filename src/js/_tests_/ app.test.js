import Character from "../app";

test('checking error - wrong type', () => {
    const char = () => new Character('Harry', 'Knight');
    expext(char).toThrow('wrong type.');
});

test('checking error - wrong name', () => {
    const char = () => new Character('Fkjneirgnkjwvmker', 'Swordsman');
    expext(char).toThrow('wrong name.');
});

test('checking set damage', () => {
    const char = new Daemon('Marry', 'Daemon');
    char.damage(12);
    expect(char.health).toBe(92.8);
});

test('checking level up', () => {
    const char = new Daemon('Marry', 'Daemon');
    char.levelUp();
    expect(char.level).toBe(2);
});

test('checking error - dead character', () => {
    const chart = new Daemon('Marry', 'Daemon');
    chart.health = 0;
    const t = () => chart.levelUp();
    expect(t).toThrow(new Error("Character's dead"));
});