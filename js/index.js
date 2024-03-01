function loginFormJs(){
    // item select
let nameField = document.getElementById('nameField');
let title  = document.getElementById('title');
let underline = document.getElementById('underline');
let signUp = document.getElementById('mySignUp');
let signIn = document.getElementById('mySignIn');
let p1 = document.getElementById('p1');

signIn.addEventListener('click',(e) => {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    signUp.classList.add('disabled')
    signIn.classList.remove('disabled')
    underline.style.transform = 'translateX(35px)'
    p1.innerHTML = 'Lost password';
})

signUp.addEventListener('click',(e) =>{
    nameField.style.maxHeight='50px';
    title.innerHTML = 'Sign Up'
    signIn.classList.add('disabled')
    signUp.classList.remove('disabled')
    underline.style.transform = 'translateX(-25px)'
    p1.innerHTML = 'Forget password';
});
}
loginFormJs();