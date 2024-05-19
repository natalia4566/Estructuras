// Define a Person class
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

// Define a City class
class City {
    constructor(name) {
        this.name = name;
    }
}

// Create some people and cities
const alice = new Person("Alice", 25, "Barcelona");
const bob = new Person("Bob", 30, "Madrid");
const carol = new Person("Carol", 22, "Barcelona");
const david = new Person("David", 28, "Madrid");

const barcelona = new City("Barcelona");
const madrid = new City("Madrid");

// Establish relationships (people living in cities)
alice.city = barcelona;
bob.city = madrid;
carol.city = barcelona;
david.city = madrid;

// Query: List of people living in a particular city
function getPeopleInCity(city) {
    const peopleInCity = [];
    for (const person of [alice, bob, carol, david]) {
        if (person.city.name === city) {
            peopleInCity.push(person.name);
        }
    }
    return peopleInCity;
}

// Example usage
const targetCity = "Barcelona";
const peopleInTargetCity = getPeopleInCity(targetCity);
console.log(`People living in ${targetCity}: ${peopleInTargetCity.join(", ")}`);
