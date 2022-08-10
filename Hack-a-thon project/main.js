const btn1 = document.getElementById("btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")


btn1.addEventListener('click', () =>{
    console.log('testing')
})




function toggleBlock(htmlNode){
    console.log('hiding element', htmlNode)
    if(htmlNode.style.display == 'none'){
        htmlNode.style.display = 'block'
    }else{
        htmlNode.style.display ='none'
    }
    
  }