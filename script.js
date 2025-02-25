function setBackgroundColor(color)
{
    document.body.style.backgroundColor= color;
}

document.getElementById('redButton').addEventListener('click',function(){setBackgroundColor('red');});
document.getElementById('greenButton').addEventListener('click',function(){setBackgroundColor('green');});
document.getElementById('blueButton').addEventListener('click',function(){setBackgroundColor('blue');});
document.getElementById('whiteButton').addEventListener('click',function(){setBackgroundColor('white');});

document.getElementById('inputBox').addEventListener('keypress', function(event){   // "KeyPress" Evento que é acionado quando usuario pressiona uma tecla //
    alert("Tecla pressionada: " + event.key)
});  