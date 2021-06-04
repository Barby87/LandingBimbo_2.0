const logEl1 = document.querySelector('.battery-log1');
const logEl2 = document.querySelector('.battery-log2');
const logEl3 = document.querySelector('.battery-log3');
const logEl4 = document.querySelector('.battery-log4');
const logEl5 = document.querySelector('.battery-log5');
const logEl6 = document.querySelector('.battery-log6');

const waypoint = new Waypoint({
  element: document.getElementsByClassName('start-waypoint')[0],
  handler: function() {
    
    const myObject = {
      cycles1: 0,
      cycles2: 0,
      cycles3: 0,
      cycles4: 0,
      cycles5: 0,
      cycles6: 0,
      // cycles7: 0,
      // cycles8: 0
    }

    anime({
      targets: myObject,
      cycles1: 163095021,
      cycles2: 9641,
      cycles3: 2995,
      cycles4: 13674,
      cycles5: 12577,
      cycles6: 2435465,
      round: 1,
      duration: 2000,
      easing: 'linear',

      update: function() {
        logEl1.innerHTML =  myObject.cycles1.toLocaleString('de-DE');
        logEl2.innerHTML =  myObject.cycles2.toLocaleString('de-DE');
        logEl3.innerHTML =  myObject.cycles3.toLocaleString('de-DE');
        logEl4.innerHTML =  myObject.cycles4.toLocaleString('de-DE');
        logEl5.innerHTML =  myObject.cycles5.toLocaleString('de-DE');
        logEl6.innerHTML =  myObject.cycles6.toLocaleString('de-DE');
      }
    });
    this.destroy()
  }
 
})



