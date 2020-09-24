function add() {
    let sum = 0;
    a = Number(document.getElementById('first').value);
    b = Number(document.getElementById("second").value);
    sum = a + b;
    c = a + ' + ' + b + ' = ' + sum;

    document.getElementById("answer").innerText = c;
}
function multiplicationTable() {
    a = Number(document.getElementById("mulA").value);
    let new1;
    newl = document.getElementById("product");
    newl.innerHTML = " ";
    for (let i = 1; i <= 10; i++) {
        if (i == 1) {
            newl.innerHTML += "<tr>" + "<h4>Table of " + a + "</h4></tr>";
        }
        newl.innerHTML += "<tr><td>" + a + " x " + i + " = " + a * i + "</td></tr>";
    }
}
function subtract() {
    let diff = 0;
    a = Number(document.getElementById("ele1").value);
    b = Number(document.getElementById("ele2").value);
    diff = a - b;
    c = a + " - " + b + " = " + diff;

    document.getElementById("difference").innerHTML = c;

}

var click = 0;
function clickCounter() {
    click += 1;
    document.getElementById("CLICKS").innerHTML = "CLICKS : " + click;
}
let even = 0;
function darkMode() {
    if (even == 0) {
        document.getElementById("dark").innerHTML = "Dark Mode";
        document.getElementById("togg").className = "hero is-dark  is-bold"
        even = 1;
    }
    else {
        document.getElementById("dark").innerHTML = "Light Mode";
        document.getElementById("togg").className = "hero is-warning  is-bold"
        even = 0;
    }
}
//Bubble Sorting Algorithm
let array = [1, 4, 9, 10, 200, 40, 30, 20];

// Ascending Order
function bubbleSortAscending() {
    for (var i = 0; i <= array.length - 1; i++) {
        for (var j = 0; j <= array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                array[j] = array[j] + array[j + 1];
                array[j + 1] = array[j] - array[j + 1];
                array[j] = array[j] - array[j + 1];
                console.log(array);
            }
        }
    }
}
console.log(array);
// Decending Order
function bubbleSortDecending() {
    for (var i = 0; i <= array.length - 1; i++) {
        for (var j = 0; j <= array.length - i - 1; j++) {
            if (array[j] < array[j + 1]) {
                array[j] = array[j] + array[j + 1];
                array[j + 1] = array[j] - array[j + 1];
                array[j] = array[j] - array[j + 1];
                console.log(array);
            }
        }
    }
}