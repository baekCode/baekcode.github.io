const family = {
    'address': 'seoul',
    members: {},
    addFamily: function (age, name, role) {
        this.members[role] = {
            age: age,
            name: name
        }
    },
    getHeadcount: function () {
        return Object.keys(this.members).length;
    }
}

family.addFamily(30, '홍길동', "aunt")
family.addFamily(10, '뿡이', "dog")


console.log(family.members);
console.log(family.getHeadcount());

const printMembers = function () {
    const members = family.members;
    for (const role in members) {
        console.log(`role => ${role}, name => ${members[role].name}, age => ${members[role].age}`)
    }
}

printMembers()


const members = {};
const addMember = function (age, name, role) {
    this.members[role] = {age, name}
}
const newFamily = {members, addMember}

newFamily.addMember(10,'철수', 'role')
console.log(newFamily.members)

