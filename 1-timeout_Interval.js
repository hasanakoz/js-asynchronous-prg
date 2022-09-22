//*==================================================
//*        1- Senkron-Asenkron Programlama
//*==================================================

//! Javascript, single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? --------------------------------------------------------------
//? Asenkron Programlama, bir alt gorevin uygulamanin asil thread'inden
//? bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama
//? teknigidir. Bu alt gorev tamamlandiginda (basriyla veya basarisizlikla)
//? asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin
//? performansininin artirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Ozellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri,
//? Dosya Okuma/Yazma islemleri gibi zaman tuketen kodlarda Asyn Programlama
//? kullanilmasi cok onemlidir.

//* Senkron
//* ------------------------------------------------

// const bekle = (waitingTime) => {
//   const startTime = new Date().getTime();
//   while (new Date().getTime() < startTime + waitingTime);
// };

// console.log("hello");
// // alert("cw"); //blocking code

// console.time("timer");
// bekle(3000); //blocking code
// console.timeEnd("timer");
// console.log("fs12");

//* Asynchronous (setTimeout)
//*-----------------------------------

// console.log("timeout");
// setTimeout(() => {
//   console.log("hi");
// }, 1000); // last in the queue..

// setTimeout(() => {
//   console.log("hello");
// }, 500);
// console.log("timeout bitti");

//* Asynchronous (setInterval, clearInterval)
//*-----------------------------------

console.log("start");
let counter = 0;
const intervalId = setInterval(() => {
  console.log(++counter);
  if (counter > 4) {
    clearInterval(intervalId);
    console.log("everything finished");
  }
}, 1000);
console.log("stop");
