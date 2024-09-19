document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();
    console.log("taka  out korte guta den");

    const cashOut =document.getElementById('input-cash-out').value;
    const pinNumber = document.getElementById('input-cash-out-pin-number').value;
    //wrong way to pin
    console.log(cashOut,pinNumber);

     if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
    //reduce the balance
       const newBalance = balanceNumber - cashOut;
       
       //update the 

       document.getElementById('account-balance').innerText = newBalance;

    
    }
    else {
        alert('Failed to cash out.Please try aging later ')
    } 
})

