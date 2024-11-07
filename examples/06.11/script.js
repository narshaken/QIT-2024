/*var isRain = prompt('Qazir janbyr ma?');

if (isRain == 'yes' || isRain == 'yep') {
    alert('onda avtobuspen bar');
} else if (isRain == 'no') {
    var isMorning = prompt('qazir tan ba?');

    if (isMorning == 'yes') {
        alert('onda velikpen bar');
    } else if (isMorning == 'no') {
        alert('onda kolikpen bar');
    }
}

alert('end!!!!!!')*/





/*alert("salem dos, suraqtarga tek yes nemese no dep jauap ber");
var party = prompt('Sen sauyq keshke barasyn ba?');

if (party == 'no') {
    alert('onda uide jat');
} else if (party == 'yes') {
    var isParty = prompt('kiim tandauga komek kerek pa?');

    if (isParty == 'yes') {
        alert('onda dress cod qara tusti');
    } else if (isParty == 'no') {
        alert('jaraidy, sau bol');
    } 
}

alert('sattilik!!!')*/



/*let name = prompt("enter your name");
let email = prompt("enter your email");
let age = prompt("enter your age");
alert("hello, " + name + "\n" + "you are " + age + "\n" + "your email " + email);*/




let order = ""

var burger = prompt("burger tandanyz:" + '\n' + 'a) chicken' + '\n' + 'b) beef' + '\n' + 'c) vegan burger');
if (burger == "a") {
    order += "chicken" 
} else if (burger == "b") {
    order += "beef"
} else if (burger == "c") {
    order += "vegan burger"
}

var drink = prompt("susyn tandanyz:" + '\n' + 'a) fanta' + '\n' + 'b) cola' + '\n' + 'c) sprait');
if (burger == "a") {
    order += "fanta"
} else if (burger == "b") {
    order += "cola"
} else if (burger == "c") {
    order += "sprait"
}

var souce = prompt("souce tandanyz:" + '\n' + 'a) syrnyi' + '\n' + 'b) ketchup' + '\n' + 'c) barbeque');
if (burger == "a") {
    order += "syrnyi"
} else if (burger == "b") {
    order += "ketchup"
} else if (burger == "c") {
    order += "barbeque"
}

var fried = prompt("fried tandanyz:" + '\n' + 'a) small' + '\n' + 'b) medium' + '\n' + 'c) large');
if (burger == "a") {
    order += "small"
} else if (burger == "b") {
    order += "medium"
} else if (burger == "c") {
    order += "large"
}




alert(order)
