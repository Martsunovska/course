'use strict';


let money = +prompt("Ваш бюджет на месяц?", ""),
    time = +prompt("Введите дату в формате YYYY-MM-DD", "2018-11-26");

let appData = {
    moneyDate: money,
    timeDate: time,
    income: false,
    expenses: {},
    optionalExpenses: []
};


for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");
    if ((typeof(a)) === "string" && (typeof(a)) != null && a != "" && b != "") {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }

};
/*  цикл do...while
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");
    if ((typeof(a)) === "string" && (typeof(a)) != null && a != "" && b != "") {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log ("bad result");
        i--;
    };
    i++;
} while (i < 2); */

/* цикл while
let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = +prompt("Во сколько обойдется?", "");
    if ((typeof(a)) === "string" && (typeof(a)) != null && a != "" && b != "") {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log ("bad result");
        i--;
    };
    i++;
}; */


appData.moneyForDay = appData.moneyDate / 30;
alert("бюджет на 1 день — " + appData.moneyForDay);

if (appData.moneyForDay < 100) {
    console.log("Низкий уровень достатка");
} else if (appData.moneyForDay > 100 && (appData.moneyForDay < 1000)) {
    console.log("Средний уровень достатка");
} else if (appData.moneyForDay > 1000) {
    console.log("Высокий уровень достатка");
} else("Ошибка в данных");


console.log(appData);