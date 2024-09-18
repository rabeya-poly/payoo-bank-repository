
//step-1: set event handler
document.getElementById('button-login')
.addEventListener('click', function(event){
 // step-2: prevent default behavior   
 event.preventDefault();//<--- problem face
//  console.log('login button click');

 //step-3: get the phone number
const mobileNumber = document.getElementById('mobile-number').value;
const pinNumber = document.getElementById('pin-number').value;

console.log(mobileNumber,pinNumber);

//step=4: validation pin and number
// this not do use....
if(mobileNumber === '5' && pinNumber === '1234'){
    console.log('you r login');
    window.location.href = '/home.html';
}
else{
    alert('wrong number and pin')
}

})
