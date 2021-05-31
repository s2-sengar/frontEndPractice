{
    let number=Math.floor(Math.random()*100)+1
    let success=0;
    const check=document.querySelector('.btn--active')
          restart=document.querySelector('.btn--secondary');
    console.log(number);
    const checkInput = () => {
            const input=document.querySelector('input');
            if(input.value==number){
                console.log(1);
                return{
                    res:0,
                    inputVal:input.value
                };
            }else{
                return {
                    res:(input.value)-number,
                    inputVal:input.value
                };
            }
        }
    const controlUi=()=>{
        const val=checkInput();
        const html=`<p>You guessed ${val.inputVal}</p>`;
        const result=document.querySelector('.result');
        const text=document.querySelector('.val');
        console.log();
        if((val.inputVal)){
            document.querySelector('.response').insertAdjacentHTML('beforeend',html);
            console.log(html);
            if(val.res<0){
                result.classList.remove('hide');
                result.classList.add('failure');
                if(val.res<-20){
                    text.innerHTML=`You gussed too low`;
                }else{
                    text.innerHTML=`Almost there!`;
                }         
            }else if(val.res>0){
                result.classList.remove('hide');
                result.classList.add('failure');
                if(val.res>20){
                    text.innerHTML=`You gussed too high`;
                }else{
                    text.innerHTML=`Almost there!`;
                }
            }else{
                result.classList.remove('hide');
                result.classList.remove('failure');
                result.classList.add('success')
                text.innerHTML=`Awsome you got it.`
                success=1;
            }
        }else{
            console.log("AAAAA");
            document.querySelector('.result').classList.add('hide');
        }
        document.querySelector('input').value="";
        console.log(val);
    }
    const restartGame=()=>{
        number=Math.floor(Math.random()*100)+1;
        const result=document.querySelector('.result');
        result.classList.add('hide');
        document.querySelector('.response').innerHTML="";
    }
    if(success==0){
        check.addEventListener('click',controlUi);
    }
    restart.addEventListener('click',restartGame);
}
