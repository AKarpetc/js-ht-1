window.addEventListener("DOMContentLoaded", () => {

  //Tabs
  "use strict";
  let tab = document.querySelectorAll(".info-header-tab"),
    info = document.querySelector(".info-header"),
    tabContent = document.querySelectorAll(".info-tabcontent");

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove("show");
      tabContent[i].classList.add("hide");
    }
  }
  hideTabContent(1);

  function showTabContent(b) {
    if (tabContent[b].classList.contains("hide")) {
      tabContent[b].classList.remove("hide");
      tabContent[b].classList.add("show");
    }
  }

  info.addEventListener("click", function (event) {
    let target = event.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });



  //Timer
  let deadline = '2019-01-01';

  function getTimeRemaining(endtime) {

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

  function setClock(id, endtime) {

    let timer = document.getElementById(id),
      hours = timer.querySelector('.hours'),
      minute = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(UpdateClock, 1);


    function UpdateClock() {

      let t = getTimeRemaining(endtime);
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

  //modal window
  var more = document.querySelector(".more"),
    overlay = document.querySelector(".overlay"),
    close = document.querySelector(".popup-close"),
    descriptionButtons = document.querySelectorAll(".description-btn, .more");

  console.log(descriptionButtons);


  descriptionButtons.forEach(element => {
    element.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });

  });


  close.addEventListener('click', function () {

    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';

  });

});