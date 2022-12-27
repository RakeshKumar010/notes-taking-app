let dh = document.getElementById('dh');
    let dt = document.getElementById('dt');


    let dh2 = document.getElementById('dh2');
    let dt2 = document.getElementById('dt2');

    let dh3 = document.getElementById('dh3');
    let dt3 = document.getElementById('dt3');

    let dh4 = document.getElementById('dh4');
    let dt4 = document.getElementById('dt4');

    let se1 = document.getElementById('se1');
    let se2 = document.getElementById('se2');
    let se3 = document.getElementById('se3');
    let se4 = document.getElementById('se4');

    function funNmae() {


        window.open("files/note.html", "", "width=500px,height=400px,left=400px,top=250px");



    }
    if (typeof Object.keys(localStorage)[0] == 'string') {

        dh.innerHTML = Object.keys(localStorage)[0];
        dt.innerHTML = Object.values(localStorage)[0];
    }

    if (typeof Object.keys(localStorage)[1] == 'string') {

        dh2.innerHTML = Object.keys(localStorage)[1];
        dt2.innerHTML = Object.values(localStorage)[1];
    }

    if (typeof Object.keys(localStorage)[2] == 'string') {

        dh3.innerHTML = Object.keys(localStorage)[2];
        dt3.innerHTML = Object.values(localStorage)[2];
    }

    if (typeof Object.keys(localStorage)[3] == 'string') {

        dh4.innerHTML = Object.keys(localStorage)[3];
        dt4.innerHTML = Object.values(localStorage)[3];
    }

    function divdelete1() {
        localStorage.removeItem(Object.keys(localStorage)[0]);
        se1.style.display = "none";

    }
    function divdelete2() {
        localStorage.removeItem(Object.keys(localStorage)[1]);
        se2.style.display = "none";

    }
    function divdelete3() {
        localStorage.removeItem(Object.keys(localStorage)[2]);
        se3.style.display = "none";

    }
    function divdelete4() {
        localStorage.removeItem(Object.keys(localStorage)[3]);
        se4.style.display = "none";

    }