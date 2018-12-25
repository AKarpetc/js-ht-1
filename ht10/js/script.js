window.addEventListener("DOMContentLoaded", () => {

  //Tabs
  "use strict";

  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  class AdModel {
    constructor() {

      this.deadline = '2019-01-01';

    }
    showalert() {
      alert();
    }
    hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
      }
    }

    showTabContent(b) {
      if (tabContent[b].classList.contains("hide")) {
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
      }
    }

    showTabEvent(event) {
      let target = event.target;
      if (target && target.classList.contains("info-header-tab")) {
        for (let i = 0; i < tab.length; i++) {
          if (target == tab[i]) {
            this.hideTabContent(0);
            this.showTabContent(i);
            break;
          }
        }
      }
    }

    getTimeRemaining(endtime) {
      let t = Date.parse(endtime) - Date.parse(new Date());
      let seconds = Math.floor((t / 1000) % 60);
      let minutes = Math.floor((t / 1000 / 60) % 60);
      let hours = Math.floor((t / 1000 / 60 / 60));

      return {
        total: t,
        hours: hours,
        minute: minutes,
        seconds: seconds
      };

    }

    setClock(id, endtime) {

      let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minute = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(UpdateClock, 1);

      function UpdateClock() {

        let t = admodel.getTimeRemaining(endtime);
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
  }

  var admodel = new AdModel();

  admodel.hideTabContent(1);

  info.addEventListener("click", (e) => {
    admodel.showTabEvent(e);
  });

  admodel.setClock('timer', admodel.deadline);


  //modal window
  var more = document.querySelector(".more"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close"),
    descriptionButtons = document.querySelectorAll(".description-btn, .more");

  descriptionButtons.forEach(element => {

    element.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });

  });


  close.addEventListener('click', () => {

    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';

  });

});