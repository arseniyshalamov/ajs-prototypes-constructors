import Bowerman from "../bowerman";

test('creating new Bowerman', () => {
    const bowerman = new Bowerman('Harry', 'Bowerman');

    const expected = {
        name: 'Harry',
        type: 'Bowerman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    };

    expext(bowerman).toEqual(expected);
});