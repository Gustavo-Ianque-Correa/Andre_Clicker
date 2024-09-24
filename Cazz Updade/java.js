
var money = document.querySelector('#Money').value;

var Up1PP = document.querySelector('#Up1PP').value;

var Up2pp = document.querySelector('#Up2PP').value;

var Up3PP = document.querySelector('#Up3PP').value;

var Uppcu3 = document.querySelector('#Uppcu3').value;

var Cooknovo = document.getElementById('Cunovo');

var Uppcu3 = 10;

var Up3PP = 0;

var UppCu = 10;

var Uppcu2 = 100;

var DinheiroAcu = 0

var UpGeral = 1;

var Upptrue3 = new Boolean(false)

var Upptrue2 = false;

var dinheiroMM = 0
var ligado = false





console.log(Upptrue2)

Up1PP = 0;
Up2PP = 0;
money = 0;



function UpgradeCazz() {



    if (money >= Uppcu3) {

        Up3PP = Up3PP + 1

        Upptrue3 = Boolean(true)

        money = money - Uppcu3;

        document.getElementById('Money').innerHTML = money;

        document.getElementById('Up3PP').innerHTML = Up3PP;

        document.getElementById('Uppcu3').innerHTML = Uppcu3;

        console.log(Up3PP)

        dinheiroMM = dinheiroMM + 1

        console.log(Upptrue3)

    }

    if (ligado == false) {
        cazz3()

    }

}



function cazz3() {

    Cooknovo.style = "display:flex";

    setInterval(come, 2000);

    ligado = true

    function come() {
        DinheiroAcu = DinheiroAcu + dinheiroMM;


        document.getElementById('DiCunovo').innerHTML = DinheiroAcu

    }

}

function Pega() {

    money = money + DinheiroAcu;
    DinheiroAcu = 0

    document.getElementById('DiCunovo').innerHTML = DinheiroAcu;
    document.getElementById('Money').innerHTML = money;

}


function UpgradeAndre() {



    if (money >= UppCu) {
        Up1PP++
        document.getElementById('Up1PP').innerHTML = Up1PP;
        money = money - UppCu
        document.getElementById('Money').innerHTML = money;


        UppCu = UppCu * 2


        document.getElementById('Uppcu').innerHTML = UppCu;
        console.log(UppCu)


        UpGeral = UpGeral + 1;
    }


}


function UpgradePreinx() {

    var uppreinx = 0
    let Up2cd = 0

    if (money >= Uppcu2) {


        uppreinx++
        Up2PP++

        money = money - Uppcu2;

        document.getElementById('Money').innerHTML = money;
        Uppcu2 = Uppcu2 * 2;


        document.getElementById('Uppcu2').innerHTML = Uppcu2;
        document.getElementById('Up2PP').innerHTML = Up2PP;


        Upptrue2 = true;
        console.log(Upptrue2)

    }



    if (Upptrue2 == true) {

        setInterval(tempo, 1000);



        function tempo() {

            money = money + uppreinx;

            document.getElementById('Money').innerHTML = money;
        }
        tempo()
    }

}


function preinx() {

    console.log(Upptrue3)

    Cookie = document.querySelector('#Cookie');

    money = money + UpGeral

    document.getElementById("Money").innerHTML = money;

    console.log(money);

};