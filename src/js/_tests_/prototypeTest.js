import Character from '../prototype';

test('Creating a character', () => {
    const hero = {
        name: 'Elusiv',
        type: 'Daemon',
        health: 100,
        attack: 10,
        defence: 40,
    };

    const result = new Character('Elusiv', 'Daemon');
    expect(result).toEqual(hero);
});

test('Damage test', () => {
    const hero = new Character('Elusiv', 'Daemon');
    hero.damage(10);
    expect(hero.health).toBe(94);
});

test('Ultimate damage test', () => {
    const hero = new Character('Elusiv', 'Daemon');
    hero.damage(200);
    expect(hero.health).toBe(0);
});