## Objects 
object orientation programming (OOP)
javacript is less useful as it doesnt have classes like java does. a bit of a taste and ideas that we will revisit in java. 

object constructors - 

protoype Object: holds all the methods.and shows you what methods you can use and chains of protoypes. 

array protoype is also an object which means it has methods you can use due to it being an object. either look for a property or (the length or the index ) or if we find the method we use that method if we dont have those we check the prototype. 

check if its in the object then use the protoype if its not. 

object.create takes a protype and creates an object based on those methods within it. 

default protype we then define the protoype ofr that particular object. if that object or protype have a type that also is san object or has methods you gain access to those prototype methods. 

constructors are a type of function that when combined with a new keyword create an object. 
New + 

Pascal start with a capital letter for constructor functions. 
function Person (name, location) {
    this.name = name;
    this.location = location 
}
const me = new Person("Alex", "Sydney")

constructor. 

ES6 - all the good stuff in javascript that added a class based syntax. 

this is still an obejct constructor just 
```js
class Person {
    constructor(name, location) {
       this.name = name,
        this.location = location
    }
}
    const me = new Person("Alex", "Sydney")
```

new is an instance of a person a class is a physical stamp and you make new objects.  the this can think of this as the object thats created. by the constructor running. 

## What is OOP 
this is a programming pattern or paradigm 
javascript was designed to be gerneral prpise and open so its not very well suited to OOP. 
 so theres different patterns we can use. functiona procedure imperitive. etc.
the OOP is trying to map things or concepts to classes to contain their behaviour. 
Why - EASIER TO REASON about and to sensilbly split our code. 
best tool for the job at hand. 
functional approach unless it uses classes. 
## pillars of OOP
Encapsulation, abstraction, inheritence, polymorphism. 
## Pros and cons 