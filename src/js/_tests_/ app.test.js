import Character from "../app";

test('checking error - wrong type', () => {
    const char = () => new Character('Harry', 'Knight');
    expext(char).toThrow('Странное имя.');
});

test('checking error - wrong name', () => {
    const char = () => new Character('Fkjneirgnkjwvmker', 'Swordsman');
    expext(char).toThrow('Стоит изменить.');
});