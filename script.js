const hexColor = document.getElementById('color')
const btn = document.getElementById('btn')
const colors = [1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']
const backgroundColor = document.getElementById('background-color')

btn.addEventListener('click', function(){
    let hexText = '#'
// Iterate through array 6 times
    for(i=0; i<6; i++){
// Pick a random value every iteration
    
    hexText += colors[getRandom()]
    console.log(hexText)
    }
    backgroundColor.style.backgroundColor = hexText
    hexColor.textContent = hexText
    
})

// Choose a random value from array 
function getRandom(){
    return Math.floor(Math.random() * colors.length)
}



