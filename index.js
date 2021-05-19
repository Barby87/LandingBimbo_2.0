var logEl1 = document.querySelector('.battery-log1');
var logEl2 = document.querySelector('.battery-log2');
var logEl3 = document.querySelector('.battery-log3');
var logEl4 = document.querySelector('.battery-log4');
var logEl5 = document.querySelector('.battery-log5');
var logEl6 = document.querySelector('.battery-log6');
var logEl7 = document.querySelector('.battery-log7');
var logEl8 = document.querySelector('.battery-log8');

var myObject = {
  cycles1: 0,
  cycles2: 0,
  cycles3: 0,
  cycles4: 0,
  cycles5: 0,
  cycles6: 0,
  cycles7: 0,
  cycles8: 0
}

anime({
  targets: myObject,
  cycles1: 163095021,
  cycles2: 568941,
  cycles3: 9641,
  cycles4: 2995,
  cycles5: 2165872878,
  cycles6: 13674,
  cycles7: 12577,
  cycles8: 2435465,
  round: 1,
  duration: 2000,
  easing: 'linear',
  update: function() {
    logEl1.innerHTML = myObject.cycles1.toLocaleString('es-ES');
    logEl2.innerHTML =  myObject.cycles2.toLocaleString('es-ES');
    logEl3.innerHTML =  myObject.cycles3.toLocaleString('es-ES');
    logEl4.innerHTML =  myObject.cycles4.toLocaleString('es-ES');
    logEl5.innerHTML =  myObject.cycles5.toLocaleString('es-ES');
    logEl6.innerHTML =  myObject.cycles6.toLocaleString('es-ES');
    logEl7.innerHTML =  myObject.cycles7.toLocaleString('es-ES');
    logEl8.innerHTML =  myObject.cycles8.toLocaleString('es-ES');
  }
});

