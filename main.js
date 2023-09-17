let btn = document.getElementById('btn');
let result = document.getElementById('result');
let input=document.getElementById('input');



btn.addEventListener('click',function(){
    var randomNum=Math.floor(Math.random()*100);

    result.innerHTML = randomNum;
    
    setTimeout(function(){
        if(input==randomNum){
            window.alert("Congratiolations.....your answer is correct!!")
        }
        else{
            window.alert("OPSS wrong answer..try again!!")
        
        }
    },100)
})


