"use strict";

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.regexp.to-string");

function timer() {
  var deadline = '2019-02-01';

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor(t / 1000 % 60);
    var minutes = Math.floor(t / 1000 / 60 % 60);
    var hours = Math.floor(t / 1000 / 60 / 60);
    return {
      total: t,
      hours: hours,
      minute: minutes,
      seconds: seconds
    };
  }

  function setClock(id, endtime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minute = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(UpdateClock, 1);

    function UpdateClock() {
      var t = getTimeRemaining(endtime);

      if (t.total < 0) {
        t.hours = 0;
        t.minute = 0;
        t.seconds = 0;
      }

      hours.textContent = t.hours.toString().length == 1 ? '0' + t.hours.toString() : t.hours;
      minute.textContent = t.minute.toString().length == 1 ? '0' + t.minute : t.minute;
      seconds.textContent = t.seconds.toString().length == 1 ? '0' + t.seconds : t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('timer', deadline);
}

;
module.exports = timer;