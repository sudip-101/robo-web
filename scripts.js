window.addEventListener('scroll', (e) => {
    var item = document.getElementById('navbar');
    if(window.scrollY > window.innerHeight){
        item.classList.add('active');
    }
    else{
        item.classList.remove('active');
    }
});