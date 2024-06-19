let b1=document.getElementById('btn')
let main=document.getElementById('main_box');
let b2=document.getElementById('btn_one')
b1.addEventListener('click',function activ() {
    main.style.display="block";
    main.style.transitionTimingFunction="linear"
})
b2.addEventListener('click',function close() {
    main.style.display="none";
})
