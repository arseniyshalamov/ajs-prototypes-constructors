import Character from '../function-constructor';

test('Creating a character with incorrect data', () => {
    expect(() => new Character('Bar', 'Magistr').toThrow());
});

test('Creating a character with correct data', () => {
    const hero = {
        name: 'Elusiv',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };

    const result = new Character('Elusiv', 'Daemon');
    expect(result).toThrow(hero);
});