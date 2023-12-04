2 == "2"; //true
2 === 2; //true
2 === "2"; //false
"2" + 3 == 23; //true
"2" + 3 === 5; //true
10 % 3; //1
10 % 3 === 1; // true
(100 % 7) % 5; //NaN
(100 % 7) % 5 !== 0; //true
(100 % 7) % 9 == 2; //false
!(10 % 2); //true
!!!!((10 % 7) % 3); //NaN
10 % 3 === -1 % 2; //false
(892783 != "89278" + 3) == 0; // true
true && false; //false;
false || true; //true;
true || false; // true
true || false; // true;
true || false + true; //true
true * false && false + true; //false
10 && 123 && -1 && 3; //-1
10 && 123 && 0 && 3; //0
(10 && (123 || "") && parseInt("Roisin")) || 23 / 23 - 1; //10
3 && "Calum" && ("" || 26); //26
3 && "Remi" && (null || 86 * 0 || ("" + 1 && "Cat" + "Dog")); //null
