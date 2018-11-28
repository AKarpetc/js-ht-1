let money;
let time;

money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: {},
    savings: false
};

for (let i = 0; i < 2; i++) {
    var ccompulsoryConsumption = prompt(
        "Введите обязательную статью расходов в этом месяце"
    );
    let total = +prompt("Во сколько обойдется?");
    let expenses = {};
    expenses[ccompulsoryConsumption] = total;
    appData.expenses = expenses;
    alert(
        "Дневной бюджет:" +
        (appData.money - appData.expenses[ccompulsoryConsumption]) / 30
    );
}
console.log(appData);