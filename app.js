const start=document.querySelector('.start-btn')
const level=document.querySelector('.level')
const body=document.querySelector('body')
const quarters=document.querySelectorAll('.quarter')
const body_style=window.getComputedStyle(body)
const hider=document.querySelector('.hider')
const shower=document.querySelector('.shower')
const sound_on=document.querySelector('.sound-on')
const sound_off=document.querySelector('.sound-off')

let answer = []

let input = []

let level_value = 1

console.log('ATB')

let count = 0

let canClick = 'False'

let isReady = 'False'

let colorDict={}

let sound='True'

let highscore=[]

colorDict['.green']=['rgb(0, 255, 0)','rgb(29, 161, 32)' ]
colorDict['.red']=['rgb(255, 0, 0)','rgb(191, 46, 43)' ]
colorDict['.yellow']=['rgb(255, 255, 0)','rgb(185, 162, 8)' ]
colorDict['.blue']=['rgb(0, 0, 255)','rgb(10, 39, 129)' ]
colorDict['.start-btn']=['rgb(103, 103, 103)','rgb(194, 194, 194)']
colorDict['.level']=['rgb(103, 103, 103)','rgb(194, 194, 194)']

function colorToggle(element){
    ele=document.querySelector(element)
    element_style=window.getComputedStyle(ele)
    let color = (colorDict[element])
    let color1 = color[0]
    let color2 = color[1]
    if (element_style.getPropertyValue('background-color') == color1) {
        ele.style.backgroundColor=color2
    }
    else if (element_style.getPropertyValue('background-color') == color2){
        ele.style.backgroundColor=color1
    }
    
    else{
        console.log('Internal Server Error')
    }
}

function sequenceGenerate(){
    let a = Math.floor(Math.random()*4)
    answer.push(a)
}

function displayColor(i){
    if (answer[i] == 0){
        colorToggle('.green')
    }
    else if (answer[i] == 1){
        colorToggle('.red')
    }
    else if (answer[i] == 2){
        colorToggle('.yellow')
    }
    else if (answer[i] == 3){
        colorToggle('.blue')
    }
}

function sequenceShow(){
    let i = 0
    let t = 0
    while (i<answer.length){
        setTimeout(displayColor,t,i)
        play()
        setTimeout(displayColor,t+500,i)
        i++
        t+=1000
        
    }

    makeReady()
}

function play() {
    if (sound == 'True'){
    let audio = document.getElementById("beep-sound");
    audio.play();
    }
}

function makeReady(){
    isReady = 'True'
}

start.addEventListener('click',function(){
    colorToggle('.start-btn')
    setTimeout(colorToggle,500,'.start-btn')
    if (count == 0){
    input=[]
    sequenceGenerate()
    setTimeout(sequenceShow,1000)
    start.textContent='Ready'    
    count++
    }

    else if (count == 1){
        if ( isReady == 'True'){
        start.textContent='Submit'
        count++
        canClick='True'
        }
    }

    else if (count == 2){
        canClick = 'False'
        isReady = 'False'
        if (input.length == answer.length ){
            let i = 0
            let l = input.length
            let isSame = 'False'
            while ( i < l ){
                if (input[i] == answer[i]){
                    isSame = 'True'
                }
                else{
                    i = l
                    isSame = 'False'
                }
                i++
            }
            if ( isSame == 'True' ){
                level_value+=1
                level.textContent=level_value
            }
            else{
                level.textContent=1
                answer=[]
                let a=highscore.length
                if (a == 3){
                    let min_level = Math.min.apply(Math, highscore);
                    if (level_value > min_level){
                    if ( highscore[0] == min_level ){
                        highscore.shift()
                    }
                    else if (highscore[2] == min_level){
                        highscore.pop()
                    }
                    else{
                        highscore=[highscore[0],highscore[2]]
                    }   
                }
            }
                highscore.push(level_value-1)
                level_value = 1
                highscore.sort(function(a, b){return b-a})
                score1 = document.querySelector('.score1')
                score2 = document.querySelector('.score2')
                score3 = document.querySelector('.score3')
                if ( a  >= 1 ){
                    score1.textContent = 'Level '+highscore[0]
                    score1.style.visibility = 'visible'
                }
                if ( a  >= 2 ){
                    score2.textContent = 'Level '+highscore[1]
                    score2.style.visibility = 'visible'
                }
                if ( a  == 3 ){
                    score3.textContent = 'Level '+highscore[2]
                    score3.style.visibility = 'visible'
                }
            }
    }
        else{
            level.textContent=1
            answer=[]
            let a=highscore.length
            if (a == 3){
                let min_level = Math.min.apply(Math, highscore);
                if (level_value > min_level){
                if ( highscore[0] == min_level ){
                    highscore.shift()
                }
                else if (highscore[2] == min_level){
                    highscore.pop()
                }
                else{
                    highscore=[highscore[0],highscore[2]]
                }
                }
            }
                highscore.push(level_value-1)
                level_value = 1
                highscore.sort(function(a, b){return b-a})
                score1 = document.querySelector('.score1')
                score2 = document.querySelector('.score2')
                score3 = document.querySelector('.score3')
                if ( a  >= 1 ){
                    console.log('path1')
                    score1.textContent = 'Level '+highscore[0]
                    score1.style.visibility = 'visible'
                }
                if ( a  >= 2 ){
                    console.log('path2')
                    score2.textContent = 'Level '+highscore[1]
                    score2.style.visibility = 'visible'
                }
                if ( a  == 3 ){
                    console.log('path3')
                    score3.textContent = 'Level '+highscore[2]
                    score3.style.visibility = 'visible'
                }
        }
    start.textContent='Start game'
    count=0

    }}
)



function quarterAnim(element){
    colorToggle(element)
    ele=document.querySelector(element)
    if (element == '.red'){
    ele.classList.remove('red-glow'); 
    void ele.offsetWidth;-
    ele.classList.add('red-glow'); 
    }
    else if (element == '.green'){
        ele.classList.remove('green-glow'); 
        void ele.offsetWidth; 
        ele.classList.add('green-glow'); 
        }
    else if (element == '.blue'){
    ele.classList.remove('blue-glow'); 
    void ele.offsetWidth; 
    ele.classList.add('blue-glow'); 
    } 
    else if (element == '.yellow'){
        ele.classList.remove('yellow-glow'); 
        void ele.offsetWidth; 
        ele.classList.add('yellow-glow'); 
    }
    setTimeout(colorToggle,500,element)
}
    
quarters.forEach(function (quarter) {
    quarter.addEventListener("click", function (e) {
        if (canClick == 'True'){
      const styles = e.currentTarget.classList;
      play()
      if (styles.contains("green")) {
        quarterAnim('.green')
        input.push(0)
      }
      else if (styles.contains("red")) {
        quarterAnim('.red')
        input.push(1)
      }
      else if (styles.contains("yellow")) {
        quarterAnim('.yellow')
        input.push(2)
      }
      else if (styles.contains("blue")) {
        quarterAnim('.blue')
        input.push(3)
      }
    }
    })
})
  
hider.addEventListener('click',function(){
    document.querySelector('#sidebar').style.visibility='hidden'
    document.querySelector('.shower').style.display='block'
    document.querySelector('.shower').style.visibility='visible'

})

shower.addEventListener('click',function(){
    document.querySelector('#sidebar').style.visibility='visible'
    document.querySelector('.shower').style.display='none'

})

sound_on.addEventListener('click',function(){
    sound_on.style.display='none'
    sound_off.style.display='block'
    sound='False'

})

sound_off.addEventListener('click',function(){
    sound_on.style.display='block'
    sound_off.style.display='none'
    sound='True'

})













