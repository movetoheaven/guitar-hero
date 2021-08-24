const garis1 = document.getElementById("garis1"); //parent
const garis2 = document.getElementById("garis2");
const garis3 = document.getElementById("garis3");
const ortu = document.getElementById("ortu");
const score = document.getElementById("score")
const now = document.getElementById("now")
const element = document.createElement("element");
let kecepatan = 200;
let skor = score.innerText
randombet()

setInterval(() => { //Bikin Garis
   const anak = document.createElement("anak");
   let rand = Math.floor(Math.random() * 125 + 1);
   anak.innerText = rand > 9 || rand < 1 ? "-" : rand;
   garis1.insertBefore(anak, garis1.firstChild);
}, kecepatan);

setInterval(() => {
   const anak = document.createElement("anak");
   let rand = Math.floor(Math.random() * 125 + 1);
   anak.innerText = rand > 9 || rand < 1 ? "-" : rand;
   garis2.insertBefore(anak, garis2.firstChild);
}, kecepatan);

setInterval(() => {
   const anak = document.createElement("anak");
   let rand = Math.floor(Math.random() * 125 + 1);
   anak.innerText = rand > 9 || rand < 1 ? "-" : rand;
   garis3.insertBefore(anak, garis3.firstChild);
}, kecepatan);

setInterval(() => { //Remove Garis
   const last1 = garis1.lastElementChild;
   const batas1 = last1.getBoundingClientRect(); //mencari posisi last element child
   const last2 = garis2.lastElementChild;
   const batas2 = last2.getBoundingClientRect();
   const last3 = garis3.lastElementChild;
   const batas3 = last3.getBoundingClientRect();

   if (batas1.x > 160) {
      last1.remove();
   }
   if (batas2.x > 160) {
      last2.remove();
   }
   if (batas3.x > 160) {
      last3.remove();
   }
}, kecepatan - 150);

function tambah_score() {
   if (now.innerHTML == element.innerText) {
      score.innerHTML = Number(score.innerHTML) + 1
      console.log("masuk kedalam if oi")
      randombet()
      now.innerHTML = 0
   }
   console.log("fungsinya kepanggil")
}

function randombet() {
   let rand = Math.floor(Math.random() * 30 + 1);
   element.innerText = rand;
   ortu.append(element);
}

//ambil element akhir dan posisi, bila posisi melebihi maka remove dengan cara .remove()
function kali() {
   const last1 = garis1.lastElementChild;
   const batas1 = last1.getBoundingClientRect();
   const tombolkali = document.getElementById("kali")
   const posisitombol = tombolkali.getBoundingClientRect()
   console.log(last1)

   if (batas1.x >= posisitombol.x && !isNaN(last1.innerText)) {
      let nilai = last1.innerText
      let hasil = now.innerText

      hasil = hasil * nilai
      now.innerHTML = hasil
      console.log(hasil)
   }
   tambah_score()
}

function tambah() {
   const last2 = garis2.lastElementChild;
   const batas2 = last2.getBoundingClientRect();
   const tomboltambah = document.getElementById("tambah")
   const posisitombol = tomboltambah.getBoundingClientRect()

   if (batas2.x >= posisitombol.x && !isNaN(last2.innerText)) {
      let nilai = last2.innerText
      let hasil = now.innerText

      hasil = Number(hasil) + Number(nilai)
      now.innerHTML = hasil
      console.log(hasil)
   }
   tambah_score()
}

function kurang() {
   const last3 = garis3.lastElementChild;
   const batas3 = last3.getBoundingClientRect();
   const tombolkurang = document.getElementById("kurang")
   const posisitombol = tombolkurang.getBoundingClientRect()

   if (batas3.x >= posisitombol.x && !isNaN(last3.innerText)) {
      let nilai = last3.innerText
      let hasil = now.innerText

      hasil = Number(hasil) - Number(nilai)
      now.innerHTML = hasil
      console.log(hasil)
   }
   tambah_score()
}




