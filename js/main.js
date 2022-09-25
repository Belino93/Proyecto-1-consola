let contador = 0

const screen2 = document.getElementById('bottom-screen');
const screen = document.getElementById('top-screen')
const light = document.getElementById('right-mid-light');

function start(){

    if (contador == 0) {
        contador = 1;
        light.style.backgroundColor='rgb(49, 250, 49)';
        screen.style.background='black';
        screen2.style.background='black';
        document.getElementById("video").style.display = "block";
        
    }else{
        light.style.backgroundColor='rgb(66, 66, 66)';
        screen.style.background = 'linear-gradient(to bottom right, white, grey)';

        screen2.style.background = 'linear-gradient(to bottom right, grey, white)';
        document.getElementById("video").style.display = "none";
        contador = 0;
    }

}

