function check(){
    var a = new Date();
    var time = a.getHours();
    var tid = document.getElementById("mani");
    if (time > 5 && time < 12){
        tid.innerHTML = "Morgen";
        document.getElementById("body").setAttribute("style","background-color: black");
        document.getElementById("main").setAttribute("style","background-color: white");
        document.getElementById("h").setAttribute("style","color: black");
        document.getElementById("mani").setAttribute("style","color: black");
    }
    else if (time >= 12 && time < 18){
        tid.innerHTML = "Eftermiddag";
        document.getElementById("main").setAttribute("style","background-color: white");
        document.getElementById("h").setAttribute("style","color: black");
        document.getElementById("mani").setAttribute("style","color: black");
    }
    else if (time >= 18 && time < 24){
        tid.innerHTML = "Aften";        
    }
    else{
        tid.innerHTML = "Nat";
        document.getElementById("body").setAttribute("style","background-color: black");
    }
}