let ampm=document.getElementById('ampm')

function DisplayTime(){
    let time= new Date();
    let hr=time.getHours();
    let min=padzero(time.getMinutes());
    let sec=padzero(time.getSeconds());
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='PM'
    }
document.getElementById('hours').innerHTML=hr
document.getElementById('mins').innerHTML=min
document.getElementById('seconds').innerHTML=sec
}
function padzero(num){
    return num<10?"0"+num:num
}
setInterval(DisplayTime,500)
