
let mynameDom=document.querySelector('#myName');
mynameDom.innerHTML=prompt('Adınızı Giriniz');



function showTime(){
    let myClockDom=document.querySelector('#myClock');
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
    var d= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    var day=d[date.getDay()];

    h=checkTime(h);
    m=checkTime(m);
    s=checkTime(s);

    myClockDom.innerHTML=h+":"+m+":"+s+" "+day;
    var t=setTimeout('showTime()',1000);

    function checkTime(i){
        if(i<10){
            i="0"+i;
        }
        return i;
    }
}
showTime();
