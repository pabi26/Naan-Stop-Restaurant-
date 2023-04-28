const menuBtn = document.getElementById('menu-btn')
const closeMenuBtn = document.getElementById('close-menu-btn')

menuBtn.addEventListener('click', function() {
    document.getElementById('navbar-menu').style.display = 'flex';
    menuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'block'
})

closeMenuBtn.addEventListener('click', function() {
    document.getElementById('navbar-menu').style.display = 'none';
    menuBtn.style.display = 'block';
    closeMenuBtn.style.display = 'none'
})