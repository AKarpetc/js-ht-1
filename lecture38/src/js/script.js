window.addEventListener("DOMContentLoaded", () => {

  //Tabs
  "use strict";

  let tabs=require('./part/tabs.js'),
      timer=require('./part/timer.js'),
      form=require('./part/form.js');
  
  
      tabs();
      timer();
      form();
});