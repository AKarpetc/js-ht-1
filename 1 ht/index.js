var money;
var time;

 money=+prompt("Ваш бюджет на месяц?");
 time=prompt("Введите дату в формате YYYY-MM-DD");
 var appData=
 {
     money:money,
     timeData:time,
     expenses:{},
     optionalExpenses:{},
     income:{},
     savings:false,

 }
 var ccompulsoryConsumption=prompt("Введите обязательную статью расходов в этом месяце");
 var  total=  +prompt("Во сколько обойдется?");

 var expenses={};
 expenses[ccompulsoryConsumption]=total;
 appData.expenses=expenses;

 alert("Дневной бюджет:" (appData.money-appData.expenses[ccompulsoryConsumption])/30)


 