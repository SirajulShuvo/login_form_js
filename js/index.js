// item select
let nameField = document.getElementById('nameField');
let title  = document.getElementById('title');
let underline = document.getElementById('underline');
let signUp = document.getElementById('mySignUp');
let signIn = document.getElementById('mySignIn');

signIn.addEventListener('click',(e) => {
    nameField.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    signUp.classList.add('disabled')
    signIn.classList.remove('disabled')
    underline.style.transform = 'translateX(35px)'
})

signUp.addEventListener('click',(e) =>{
    nameField.style.maxHeight='50px';
    title.innerHTML = 'Sign Up'
    signIn.classList.add('disabled')
    signUp.classList.remove('disabled')
    underline.style.transform = 'translateX(-25px)'
});

console.log('helo')