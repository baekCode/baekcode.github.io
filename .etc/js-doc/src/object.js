/**
 * @class
 * @classdesc Dog Classes description
* */
const Dog = class {
    /**
     * Create dog name & age.
     * @param {string} - name description
     * @param {number} - age description
     * */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    /**
     * @method
     * @return {string} return gog name.
     * */
    getName(){
        return this.name;
    }
}

/**
 * @class
 * @param {string} name set person name.
 * @param {number} age set person age.
 * */
const Person = function(name, age) {
    this.name = name;
    this.age = age;
    /**
     * @method
     * @return {string} return person name
     * */
    this.getName = function() {
        return this.name
    }
}