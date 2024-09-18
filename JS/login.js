
//step-1: set event handler
document.getElementById('button-login')
.addEventListener('click', function(event){
 // step-2: prevent default behavior   
 event.preventDefault();//<--- problem face
 console.log('login button click');

 //step-3: get the phone number
const mobileNumber = document.getElementById('mobile-number').value;
console.log(mobileNumber);
})
