'use strict';


let money = prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "2018-11-26");

let appData = {
    moneyDate: money,
    timeDate: time,
    income: false,
    expenses: {},
    optionalExpenses: []
};

let q11 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    q12 = prompt("Во сколько обойдется?", ""),
    q21 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    q22 = prompt("Во сколько обойдется?", "");

appData.expenses.q11 = q12;
appData.expenses.q21 = q22;

alert("бюджет на 1 день — " + appData.moneyDate / 30);

console.log(appData);