    const  wrapper = document.querySelector("#wrapper");
    wrapper.style.height = "100px";
    wrapper.style.width = "250px";
    wrapper.style.color = "red";
    wrapper.style.display = "flex";
    wrapper.style.justifyContent = "center";
    wrapper.style.marginLeft = "750px";
    wrapper.style.marginTop = "400px";
    wrapper.style.fontSize = "40px";
    wrapper.style.border = "1px solid black";
    wrapper.style.backgroundColor = "#ff0";
    wrapper.style.innerText = "";


    let mySeconds;
    let startSeconds;
    let startMinutes;

    const seconds = document.querySelector(".seconds");
    const minutes = document.querySelector(".minutes");

    function timer() {
    mySeconds = setInterval(() => {
       startSeconds = seconds.innerText = parseInt(seconds.innerText, 10) + 1;
       seconds.innerText = addZero(startSeconds);
        if(seconds.innerText > 59){
            startMinutes = minutes.innerText = parseInt(minutes.innerText, 10) + 1;
            minutes.innerText = addZero(startMinutes);
            seconds.innerText = "00";
        }
    }, 1000);
}


    function stopTimer() {
        clearInterval(mySeconds)
    }

    function cleanTimer() {
        seconds.innerText = "00";
        minutes.innerText = "00";
    }
    function addZero(o) {
        if(o < 10){
            o = "0" + o;
        }
        return o;
    }

    const button1 = document.createElement("button");
    button1.innerText = "Go";
    button1.className = "start";
    button1.style.height = "50px";
    button1.style.width = "50px";
    wrapper.append(button1)
    button1.addEventListener("click", timer)

    const button2 = document.createElement("button");
    button2.innerText = "reset";
    button2.className = "clear";
    button2.style.height = "50px";
    button2.style.width = "50px";
    wrapper.append(button2)
    button2.addEventListener("click", cleanTimer)

    const button3 = document.createElement("button");
    button3.innerText = "pause";
    button3.className = "stop";
    button3.style.height = "50px";
    button3.style.width = "50px";
    wrapper.append(button3)
    button3.addEventListener("click", stopTimer)