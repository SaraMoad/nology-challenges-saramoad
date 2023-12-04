2 == "2"; //true true
2 === 2; //true true
2 === "2"; //false false
"2" + 3 == 23; //true true
"2" + 3 === 5; //true  false - cause the type isnt the same and its 23
10 % 3; //1 1
10 % 3 === 1; // true true
(100 % 7) % 5; //NaN 2  you get the number back when its not divisable
(100 % 7) % 5 !== 0; //true true
(100 % 7) % 9 == 2; //false  true (due to 2 being the remainder when its not divisable)
!(10 % 2); //true true
!!!!((10 % 7) % 3); //NaN false - count the exclamation flips the value.
10 % 3 === -1 % 2; //false false 1 === -1 is false.
(892783 != "89278" + 3) == 0; // true true
true && false; //false false
false || true; //true; true
true || false; // true true
true || false; // true; true
true || false + true; //true true
true * false && false + true; //false 0 - because its not just checking true or false.
10 && 123 && -1 && 3; // -1 is truthy and then final truthy is 3
10 && 123 && 0 && 3; //0 0
(10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1; //10 is a 0/ 0 its an or statement so it checks for both to see if theres any truth and 0 is the final false.
3 && "Calum" && ("" || 26); //26 26
3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")); // catdog as its an or statement it checks for the first truthy which is the catdog.

console.log(3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")));
