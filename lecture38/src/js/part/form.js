"use strict";

require("core-js/modules/es6.promise");

function form() {
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

 
  //Form
  var message = {
    loading: "Загрузка...",
    success: "Спасибо!",
    failure: "Что то пошло не так..."
  };
  var form = document.querySelector(".main-form"),
      input = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
  statusMessage.classList.add("status");
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.appendChild(statusMessage);
    var promise = new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open("POST", 'server.php');
      request.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
      var formData = new FormData(form);
      request.send(formData);
      request.addEventListener("readystatechange", function () {
        if (request.readyState < 4) {
          statusMessage.innerHTML = message.loading;
          resolve();
        } else if (request.readyState == 4 && request.status == 200) {
          resolve();
        } else {
          statusMessage.innerHTML = message.failure;
          reject();
        }
      });
    });
    promise.then(function () {
      statusMessage.innerHTML = message.loading;
    }).then(function () {
      statusMessage.innerHTML = message.failure;
    }).catch(function () {
      statusMessage.innerHTML = message.failure;
    }).then(function () {
      for (var i = 0; i < input.length; i++) {
        input[i].value = "";
      }
    });
  });
}

module.exports = form;