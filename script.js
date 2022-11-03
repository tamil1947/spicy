let icon=document.querySelector('#nav-dropdown-icon');
let nav=document.querySelector('.dropdown-nav');
icon.onclick=()=>{
nav.classList.toggle('active');
icon.classList.toggle('fa-times')
}

window.onscroll=()=>{
nav.classList.remove('active');
}