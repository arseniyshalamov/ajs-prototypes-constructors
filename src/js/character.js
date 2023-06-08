/**
 * character creation function
 * 
 * @param {string} name
 * @param {string} type
 * 
 * @throws {InvalidArgumentException} 
 */ 
function Character(name, type) {
    this.name = name;
    this.type = type;
}