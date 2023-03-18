var arr = [];

function chart() {
    var btn = "";
    
    for (let i = 1; i < 91; i++){
       
       btn = document.createElement("button");
       btn.innerText = i;
      btn.setAttribute('id', i);
     
       document.getElementById("btns").appendChild(btn);
    }
}


chart();

function start() {
    var num = Math.floor(Math.random() *90 +1);
    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
            num = Math.floor(Math.random() *90 +1);
            i =0;
        }
    }

    document.getElementById("number").innerHTML = num;
    document.getElementById(num).style.background = "green";

    if (arr.length == 90) {
        document.getElementById("gamedraw").innerHTML = "Game Draw";
        setInterval(() => {
        location.reload();
    },10000)
    }

    arr.push(num);
}
