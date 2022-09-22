import message from "../pert 5/generala.mjs"

class Hero { //ini class prarent / induk
constructor() {
    if(this.constructor == Hero) throw new Error({message: 'error kalo manggil indukannya aja'})
}
 hari() { // dan ini function didalam class Hero
console.log("ini isi hari");
var i = 'kuku';
this.heri(i);
}

heri(i) {
    console.log(i);
    // console.log("ini isi hari");
}
}

class AnakHero extends hero {

}
// var  panggil_hari = new Hero();
// panggil_hari.hari();
var panggil_anak = new AnakHero();
panggil_anak.hari();