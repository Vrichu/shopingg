
gsap .to(".courses img",{
    scale:0,
    opacity:0,
    duration:5,
    color:"red"
})
gsap .from(".courses img",{
scale:0,
opacity:0,
duration:5,
color:"#fff"

})
// const form=document.getElementById('form');
// const username=document.getElementById('username');
// const email=document.getElementById('email');0
// const phone=document.getElementById('phone');
// const password=document.getElementById('password');
// const cpassword=document.getElementById('cpassword');
// form.addEventListener('submit',(event)=> 

// {
//   event.preventDefault();
//   validate();
// })
// const validate=()=>{

//     const username=username.value.trim();
//     const email=email.value.trim();
//     const phone=phone.value.trim();
//     const password=password.value.trim();
//     const cpassword=cpassword.value.trim();


//     if(username===""){
//         setErrormsg(username,'username cannot be blank');
//     }else if(username.length<=2){
//         setErrormsg('username,username min3 char');
//     }else{
//         setsuccessMsg(username);
//     }
    
//     if(emailval===""){
//         setErrormsg(email,'email cannot be blank');
//     }else if(isEmail.length<=2){
//         setErrormsg('emailVal,email min3 char');
//     }else{
//         setsuccessMsg(email);
//     }
// }