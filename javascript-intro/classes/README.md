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
    (this.name = name), (this.location = location);
  }
}
const me = new Person("Alex", "Sydney");
```

new is an instance of a person a class is a physical stamp and you make new objects. the this can think of this as the object thats created. by the constructor running.

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
using _name means dont touch/change this value we can't overwrite the name now. private property. get or set
using class you can getall the data i need within the object. your able to access and update these properies which can be dangerous when something shouldn't bw xhanged. using the _ tells you it shouldnt be touched.
simluar logic in a single scope. without having to reach external variables.  
abstraction - indirection. know code is running but you havent written that code yourself is avstraction using a map theres a loop happening but we arent writing that loop. you have to go through multiple layers to see whats going on.
in classes - getters and setters this is a form of abstraction and indirection.
purity is hard to achieve in a class.

Inheritence - class based language has some type of inheritence - objects that are silmiar different animals with different thingsit produces. things that need to behave similarily.
track - song to a podast or recording. they will have things that are similar. things that any type will have thew same of. shared across.
super() - calls our parent.
c;ass Podcast extends Track { } (which inherits everything in track) we need to call the constructor using super but also add our additonal properites.

inhertience vs compostion - most will say do composition but OOP in thier handbook would recommend composition as its more flexible and scaleable.

polymorphism - cant be done proerly in javascript. different classes or different types can have the same methood with the same connertations.

array = [1,2,3,4,5]
str = "1 2 3 4 5"
they both have slice methods. -the slice method in the hood is polymorphism even if its different under the hood its still polymorphic. the same action. only the implementation may be differently. still the same outcome. as long as they have the same method name it will work based on which shape child is called. the super can be empty if the constructor is empty. different implementations for different types methods with the same name. as long as they ahve the same charactistic we can process them the same way. this is a strong part of composition. leverage polymorpism over inheritence.

## Pros and cons

## practical use cases what data be typically dealing with with objects and where object iteration is useful.

## object iteration

iterating through keys/values /enteries of objects.
Object.keys()
Object.values()
Object.entries() each array postional the first is the key than the value. two values.
validation of data. when theirs user input we need to validate.
const validationObject = {
name: "Sting",
director: "String",
release: "Number",
idmbRating: "Number",
runtime: "String",
}

cosole.log(Object.entries(([key, value]) => {
const typeName = value.consturctor.name
}))
use the constructor name as any type of will return object.

## Complex Data

array of objects.
marrying the two ideas of functions and iterators.
this is the type of data you'll be working with

get all the movies .filter
