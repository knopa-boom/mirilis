/**
 * Отслеживаем клик по эл-ту с классом menu и вызываем ф-ю 
 * Если этот эл-т содержит класс topnav, то добавим ему еще один класс responsive
 * Если не содержит - оставляем тот же класс
 */
menu.onclick = function myFunc() {
    var x = document.getElementById("myTopNav");

    if(x.className === "topnav") x.className += " responsive"
    else x.className = "topnav";
};

