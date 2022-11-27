let count = 0
let circleCoordX = 0
let circleCoordY = 0

function createCircle(classname, rotate){
    for(let i = 0; i <= 10; i++){ 
        count+=20
        let vector = document.createElement('div')
        vector.className = ` ${classname} circleY circles animationColors `
        vector.setAttribute('style',`transform: ${rotate}(${count}deg);`)
        contentCircle.appendChild(vector)
    }
    return false
}

createCircle('circleX', 'rotateX')
createCircle('circleY', 'rotateY')

document.onkeydown = function(e){
    if(e.which == 37){
        circleCoordX-=5
    }
    if(e.which == 39){
        circleCoordX+=5
    }
    if(e.which == 38){
        circleCoordY+=5
    }
    if(e.which == 40){
        circleCoordY-=5
    }
    contentCircle.style.transform = `rotateY(${circleCoordX}deg) rotateX(${circleCoordY}deg)`
}


pauseStart.onclick = ()=>{
    let circles = document.querySelectorAll('.circles')
    circles.forEach(item => item.classList.toggle('animationColors'))
    contentCircle.classList.toggle('animationRotate')
    container.classList.toggle('animationShadow')
    contentCircle.className == 'content' ? pauseStart.innerHTML = '⏵' : pauseStart.innerHTML = '⏸︎'
    if(contentCircle.className == 'content'){
        helpBlock.setAttribute('style','bottom: 5%; opacity: 1;')
        setTimeout(()=>{
            helpBlock.setAttribute('style','bottom: -5%; opacity: 0;')
        },5000)
    }
    else{
        helpBlock.setAttribute('style','bottom: -5%; opacity: 0;')
    }
}


