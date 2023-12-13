// const me = {
//     name: "Sara",
//     location: "Melbourne", 
//     greeting() {
//         console.log(`My name is ${this.name} and i live in ${this.location}`)
//     }
// };
// console.log(me)
// console.log(me.greeting())

class Dog {
    static allDogs = [];
    static getDogsByBreed(breed) {
        return this.allDogs.filter((dog) => dog.breed.toLowerCase() === breed.toLowerCase)
    }

    constructor(name, breed, ) {
        this.name = name;
        this.breed = breed;
        this.allWalks = [];
        Dog.allDogs.push(this)
    }

    walk(distance) {
        console.log(`${this.name} walked a ${distance}km walk`)
        return this.allWalks.push(distance)
    };

    totalWalkDistance() {
        return this.allWalks.reduce((total,walk) => total+walk, 0)
    }
    averageWalkDistance(){
        return this.totalWalkDistance() / this.allWalks.length;
    }

    walkSummary() {
        console.log(`${this.name} has been on ${this.allWalks.length} for a total of ${this.totalWalkDistance()}`)
    }
}

const dog1 = new Dog("jerry", "cavilaier")
const dog2 = new Dog("Sallie", "labrador")
const dog3 = new Dog("ted", "sausage dog")
const dog4 = new Dog("kenny", "poodle")

dog1.walk(10)
dog1.walk(20)
dog1.walk(2)
dog2.walk(2)
dog3.walk(2)
dog3.walk(12)
console.log(dog3.averageWalkDistance())
dog1.walkSummary()
console.log(Dog.allDogs)