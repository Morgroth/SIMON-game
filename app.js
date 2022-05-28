const red=document.querySelector('.red')
const green=document.querySelector('.green')
const yellow=document.querySelector('.yellow')
const blue=document.querySelector('.blue')
const start=document.querySelector('.start-btn')
const ready=document.querySelector('.ready-btn')
const submit=document.querySelector('.submit-btn')
const level=document.querySelector('.level')
const body=document.querySelector('body')

const red_style=window.getComputedStyle(red)
const green_style=window.getComputedStyle(green)
const yellow_style=window.getComputedStyle(yellow)
const blue_style=window.getComputedStyle(blue)
const start_style=window.getComputedStyle(start)
const ready_style=window.getComputedStyle(ready)
const submit_style=window.getComputedStyle(submit)
const level_style=window.getComputedStyle(level)
const body_style=window.getComputedStyle(body)

let answer = []

let input = []

let level_value = 1

let isReady='False'

let isStart='False'

let isSubmit='False'

console.log('ATB')

function colorToggleRed(color1,color2){
    //console.log('colorToggleRed')
    if ( red_style.getPropertyValue('background-color') == color1){
        red.style.backgroundColor=color2
    }
    else if ( red_style.getPropertyValue('background-color') == color2){
        red.style.backgroundColor=color1
    }
    
    else{
        console.log('Internal Server Error')
    }
}

function colorToggleYellow(color1,color2){
    //console.log('colorToggleYellow')
    if ( yellow_style.getPropertyValue('background-color') == color1){
        yellow.style.backgroundColor=color2
    }
    else if ( yellow_style.getPropertyValue('background-color') == color2){
        yellow.style.backgroundColor=color1
    }
    
    else{
        console.log('Internal Server Error')
    }
}

function colorToggleGreen(color1,color2){
    // console.log('colorToggleGreen')
    // console.log(color1)
    // console.log(color2)
    // console.log(green_style.getPropertyValue('background-color'))
    if ( green_style.getPropertyValue('background-color') == color1){
        green.style.backgroundColor=color2
    }
    else if ( green_style.getPropertyValue('background-color') == color2){
        green.style.backgroundColor=color1
    }
    
    else{
        console.log('Internal Server Error')
    }
}

function colorToggleBlue(color1,color2){
    //console.log('colorToggleBlue')
    if ( blue_style.getPropertyValue('background-color') == color1){
        blue.style.backgroundColor=color2
    }
    else if ( blue_style.getPropertyValue('background-color') == color2){
        blue.style.backgroundColor=color1
    }
    
    else{
        console.log('Internal Server Error')
    }
}

function colorToggleStart(color1,color2){
    //console.log('colorToggleStart')
    if ( start_style.getPropertyValue('background-color') == color1){
        start.style.backgroundColor=color2
    }
    else if ( start_style.getPropertyValue('background-color') == color2){
        start.style.backgroundColor=color1
    }
    
    else{
        console.log('Internal Server Error')
    }
}

function colorToggleReady(color1,color2){
    //console.log('colorToggleReady')
    if ( ready_style.getPropertyValue('background-color') == color1){
        ready.style.backgroundColor=color2
    }
    else if ( ready_style.getPropertyValue('background-color') == color2){
        ready.style.backgroundColor=color1
    }
    
    else{
        console.log('Internal Server Error')
    }
}

function colorToggleSubmit(color1,color2){
    //console.log('colorToggleSubmit')
    if ( submit_style.getPropertyValue('background-color') == color1){
        submit.style.backgroundColor=color2
    }
    else if ( submit_style.getPropertyValue('background-color') == color2){
        submit.style.backgroundColor=color1
    }
    
    else{
        console.log('Internal Server Error')
    }
}

function colorToggleLevel(color1,color2){
    console.log('colorToggleLevel')
    console.log(color1)
    console.log(color2)
    console.log(level_style.getPropertyValue('background-color'))
    if ( level_style.getPropertyValue('background-color') == color1){
        level.style.backgroundColor=color2
    }
    else if ( level_style.getPropertyValue('background-color') == color2){
        level.style.backgroundColor=color1
    }
    
    else{
        console.log('Internal Server Error')
    }
}

function colorToggleBody(color1,color2){
    //console.log('colorToggleBody')
    if ( body_style.getPropertyValue('background-color') == color1){
        body.style.backgroundColor=color2
    }
    else if ( body_style.getPropertyValue('background-color') == color2){
        body.style.backgroundColor=color1
    }
    
    else{
        console.log('Internal Server Error')
    }
}

function sequenceGenerate(){
    //console.log('sequenceGenerator')
    let a = Math.floor(Math.random()*4)
    //console.log(a)
    answer.push(a)
    console.log('answer in next line')
    console.log(answer)

    //console.log(typeof(answer))
    //console.log(answer.length)
}

function displayColor(i){
    if (answer[i] == 0){
        colorToggleGreen('rgb(144, 238, 143)','rgb(0, 255, 0)')
    }
    else if (answer[i] == 1){
        colorToggleRed('rgb(244, 54, 67)','rgb(255, 0, 0)')
    }
    else if (answer[i] == 2){
        colorToggleYellow('rgb(255, 255, 128)','rgb(255, 255, 0)')
    }
    else if (answer[i] == 3){
        colorToggleBlue('rgb(114, 188, 212)','rgb(0, 0, 255)')
    }
}

function sequenceShow(){
    //console.log('sequenceShow')
    let i = 0
    let t = 0
    while (i<answer.length){
        setTimeout(displayColor,t,i)
        setTimeout(displayColor,t+1000,i)
        i++
        t+=1000
        
    }
}

start.addEventListener('click',function(){

    //console.log('start')
    colorToggleStart('rgb(255, 255, 255)','rgb(0, 0, 0)')
    body.style.backgroundColor='rgb(216, 191, 216)'
    setTimeout(colorToggleStart,250,'rgb(255, 255, 255)','rgb(0, 0, 0)')
    sequenceGenerate()
    setTimeout(sequenceShow,1000)
    isStart='True'
    

})

ready.addEventListener('click',function(){
    //console.log('ready')
    colorToggleReady('rgb(255, 255, 255)','rgb(0, 0, 0)',)
    setTimeout(colorToggleReady,250,'rgb(255, 255, 255)','rgb(0, 0, 0)')
    if (isStart == 'True'){
    isReady = 'True'
    ready.textContent='Begin'
    input=[]
    isStart = 'False'
    isSubmit='True'
}
})

green.addEventListener('click',function(){
    //console.log('green')
    if (isReady =='True'){
    input.push(0)
    colorToggleGreen('rgb(144, 238, 143)','rgb(0, 255, 0)')
    setTimeout(colorToggleGreen,250,'rgb(144, 238, 143)','rgb(0, 255, 0)')
    //console.log('input: ' + input)
    //console.log(input)
}    
})

red.addEventListener('click',function(){
    //console.log('red')
    if (isReady =='True'){
    input.push(1)
    colorToggleRed('rgb(244, 54, 67)','rgb(255, 0, 0)')
    setTimeout(colorToggleRed,250,'rgb(244, 54, 67)','rgb(255, 0, 0)')
    //console.log('input: ' + input)
}
})

yellow.addEventListener('click',function(){
    //console.log('yellow')
    if (isReady =='True'){
    input.push(2)
    colorToggleYellow('rgb(255, 255, 128)','rgb(255, 255, 0)')
    setTimeout(colorToggleYellow,250,'rgb(255, 255, 128)','rgb(255, 255, 0)')
    //console.log('input: ' + input)
}
})

blue.addEventListener('click',function(){
    //console.log('blue')
    if (isReady =='True'){
    input.push(3)
    colorToggleBlue('rgb(114, 188, 212)','rgb(0, 0, 255)')
    setTimeout(colorToggleBlue,250,'rgb(114, 188, 212)','rgb(0, 0, 255)')
    //console.log('input: ' + input)
}
})

submit.addEventListener('click',function(){
    //console.log('submit')
    if (isSubmit =='True'){
        colorToggleSubmit('rgb(255, 255, 255)','rgb(0, 0, 0)')
        setTimeout(colorToggleSubmit,250,'rgb(255, 255, 255)','rgb(0, 0, 0)')
        isReady='False'
        isStart='False'
        isSubmit='False'
        // console.log('input: ' + input)
        // console.log('answer: ' + answer)
        //console.log('input and answer in next line')
        //console.log(input)
        //console.log(answer)

        if (input.length == answer.length ){
            let i = 0
            let l = input.length
            let isSame = 'False'
            while ( i < l ){
                if (input[i] == answer[i]){
                    //console.log('in loop')
                    //console.log(i)
                    i++
                    isSame = 'True'
                }
                else{
                    i = l
                    isSame = 'False'
                }
            }
            //console.log(isSame)    
            if ( isSame == 'True' ){
                //console.log('changing level')
                level_value+=1
                // console.log('level_value: ' + level_value)
                // console.log('done changing level')
                level.textContent=level_value
                //console.log(level.textContent)
                //colorToggleLevel('rgb(255, 255, 255)','rgb(0, 0, 0)')
                //console.log('changing body color')
                colorToggleBody('rgb(127, 0, 255)','rgb(216, 191, 216)')
                //console.log('done body color')
            }
            else{
                //console.log('same length')
                level.textContent=0
                //console.log('Bad luck')
                answer=[]
            }
        }
        else{
            //console.log('diff length')
            level.textContent=0
            //console.log('Bad luck')
            answer=[]
        }
    }
    ready.textContent='Ready'
    //console.log('changing colors')
    //console.log('done changing colors')
})
