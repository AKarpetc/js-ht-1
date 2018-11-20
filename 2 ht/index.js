'use strict'
let money;
let time;


(function start() {

    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
})();


var appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: true,
    moneyPerDay: null,
    budjet: null,
};

appData.budjet = appData.money;

(function detectDayBudget() {
    for (let i = 0; i < 2; i++) {

        let compCons = prompt("Введите обязательную статью расходов в этом месяце"),
            total = +prompt("Во сколько обойдется?");

        if (typeof (compCons) === "string" && compCons.length < 50 &&
            (typeof (compCons)) != null && (typeof (total)) != null && compCons != "" && total != "") {
            let expenses = {};

            expenses[compCons] = total;
            appData.expenses = expenses;
            appData.budjet -= appData.expenses[compCons];


        } else {
            i--;

        }
    }

    appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
    alert("Дневной бюджет:" + appData.moneyPerDay);

})();

(function detectDayBudget() {
    for (let i = 0; i < 2; i++) {

        let compCons = prompt("Введите не обязательную статью расходов в этом месяце"),
            total = +prompt("Во сколько обойдется?");

        if (typeof (compCons) === "string" && compCons.length < 50 &&
            (typeof (compCons)) != null && (typeof (total)) != null && compCons != "" && total != "") {
            let optionalExpenses = {};

            optionalExpenses[i] = total;
            appData.optionalExpenses = optionalExpenses;
            appData.budjet -= appData.optionalExpenses[i];


        } else {
            i--;

        }
    }

    appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
    alert("Дневной бюджет:" + appData.moneyPerDay);

});

(function detectLevel()
{
    switch (appData.moneyPerDay) {

        case appData.moneyPerDay < 50:
            alert("Маловато");
            break;
        case appData.moneyPerDay > 50 && appData.moneyPerDay < 100:
            alert("Пойдет");
            break;
        default:
            alert("Да ты богачь");
    }

})();


(function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +promptfdsgsdfgdfg("Под какой процент?");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Сумма накоплений:" + appData.monthIncome.toFixed());

    }
})();