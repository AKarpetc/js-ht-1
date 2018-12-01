'use strict'
let money;
let time;


function start() {

    time = prompt("Введите дату в формате YYYY-MM-DD");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

//start();
var appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    moneyPerDay: null,
    budjet: null,
    detectDayBudget: function () {
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

    },
    choseoptExpenses: function () {
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



    },
    detectLevel: function () {
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

    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +promptfdsgsdfgdfg("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Сумма накоплений:" + appData.monthIncome.toFixed());

        }
    },
    chooseIncome:function(){
        var items=prompt("Что принесет дополнительный доход?(перечислите через запятую)");
        appData.income=items.split(',');
        appData.income.push(prompt('может что то ещё?'));
    }
};
var items=("Что принесет ,дополнительный, доход?(перечислите через запятую)").split(',');
console.log(appData);