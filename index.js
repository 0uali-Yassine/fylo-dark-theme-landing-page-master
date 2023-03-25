let input = document.querySelector('input');
let label = document.querySelector('label');
let check_input = document.querySelector('.check_input');

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

check_input.addEventListener('click',()=>{
    if(!emailRegex.test(input.value)|| input.value ==''){
        label.innerText = 'Please enter a valid email address';
    }else{
        label.innerText = '';
    }
})

let meta = document.querySelector('.meta');
let twitt = document.querySelector('.twitt');
let insta = document.querySelector('.insta');
meta.addEventListener('mouseover',()=> {
    meta.style.backgroundImage = "url('/icon/meta-blue.png')";
    meta.style.backgroundRepeat = 'no-repeat';
    meta.style.backgroundSize =  'cover';
    meta.style.width = '25px';
    meta.style.height = '25px';
})
meta.addEventListener('mouseout',()=> {
    meta.style.backgroundImage = "url('/icon/meta_white.png')";
})

twitt.addEventListener('mouseover',()=> {
    twitt.style.backgroundImage = "url('/icon/twitt_blue.png')";
    twitt.style.backgroundRepeat = 'no-repeat';
    twitt.style.backgroundSize =  'cover';
    twitt.style.width = '25px';
    twitt.style.height = '25px';
})
twitt.addEventListener('mouseout',()=> {
    twitt.style.backgroundImage = "url('/icon/twitt_white.png')";
})

insta.addEventListener('mouseover',()=> {
    insta.style.backgroundImage = "url('/icon/inst_blue.png')";
    insta.style.backgroundRepeat = 'no-repeat';
    insta.style.backgroundSize =  'cover';
    insta.style.width = '25px';
    insta.style.height = '25px';
})
insta.addEventListener('mouseout',()=> {
    insta.style.backgroundImage = "url('/icon/insta_white.png')";
})



