

/*
Project Requirements:
Change the background color by generating random rbg color by clicking a button
##
*/

//Steps
let div = null;
//Step 1 - create onload handler

window.onload = () =>{
    main()
}

function main(){

const root = document.getElementById('root');
const btn = document.getElementById('change-btn');
const output = document.getElementById('output');
const copyBtn = document.getElementById('copy-btn');

btn.addEventListener('click', function () {
    const bgColor = generateRGBColor();
    root.style.backgroundColor = bgColor;
    output.value =bgColor
    
   
    

})
copyBtn.addEventListener('click',function(){
    navigator.clipboard.writeText(output.value)
    if(div != null){
        div.remove()
        div = null
    }
    if (isValidHex(output.value)){
        generateToastMessage(`${output.value} copied`)
    }
    else {
        alert('Invalid Color Code');
    }
  
})

output.addEventListener('keyup', function(e){
    const color = e.target.value;
    if(color && isValidHex(color)){
        root.style.backgroundColor = color;
    }
})

}

//Step 2 - random color generator function
 
function generateRGBColor(){
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`

}

function generateToastMessage(msg){

     div  = document.createElement('div')
    
      div.innerText =msg
      div.className ='toast-message toast-message-slide-in'
      div.addEventListener('click',function(){
        div.classList.remove('toast-message-slide-in');
        div.classList.add('toast-message-slide-out')

        div.addEventListener('animationend',function(){
            div.remove();
            div= null
        });
    })

   
    document.body.appendChild(div)
}

/**
 * @param {string} color:;
 */


function isValidHex(color){
if (color.length >=4 && color.length <=7 ) return true;
if (color[0] != '#') return false;


color = color.substring(1)
return /^([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/i.test(color);
}


//Step 3 - collect all necessary references

//Step 4 - handle the click event
