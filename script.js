"use strict";

let nb0 = 0;
let nb1 = 1;

const effacer = function () {
    document.getElementById("calc").value = "";
    nb0 = 0;
    nb1 = 1;
};

const afficher = function (a) {
    document.getElementById("calc").value += a;

    console.log(a, nb0);
};

const calculer = function (a) {
    if (a === "*") {
        nb0 = nb0 * Number(document.getElementById("calc").value);

        console.log(nb0, a);
    } else if (a === "-") {
        nb0 =
            nb0 -
            Number(document.getElementById("calc").value) +
            Number(document.getElementById("calc").value) * 2;

        console.log(nb0, a);
    } else if (a === "+") {
        nb0 = nb0 + Number(document.getElementById("calc").value);

        console.log(nb0, a);
    }
    document.getElementById("calc").value = a;
};

const faire = function () {
    console.log("egale");
    document.getElementById("calc").value =
        nb0 + Number(document.getElementById("calc").value);
};