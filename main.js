let datesec = document.getElementById("dates");
let weekdays = document.getElementsByClassName("daysec");

let __wwdays = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];

function digitalclock() {
    let d = new Date();
    let dd = (d.getDate());
    let mm = (d.getMonth() + 1);
    let yy = (d.getFullYear());

    datesec.innerText = dd + " : " + mm + " : " + yy;

}
digitalclock();

let timesec = document.getElementById("times");

function numberformat(num) {
    return num < 10 ? "0" + num : num;
}

let diffzones = document.getElementsByClassName("zonesec");

function digitalhrs() {
    setInterval(() => {
        let m = new Date();
        let hh = numberformat(m.getHours());
        let mm = numberformat(m.getMinutes());
        let ss = numberformat(m.getSeconds());
        let ww = m.getDay();


        timesec.innerText = hh + " : " + mm + " : " + ss;
        document.getElementsByClassName("active-days")[0].classList.remove("active-days");
        document.getElementsByClassName("daysec")[ww].classList.add("active-days");

        if (m.getHours() >= 12 && m.getHours() <= 24) {
            diffzones[1].classList.add("active-days");
            diffzones[0].classList.remove("active-days");

        } else {
            diffzones[0].classList.add("active-days");
            diffzones[1].classList.remove("active-days");
        }

    }, 1000);
}
digitalhrs();