let is_menu = false
document.querySelector('.menu_img').onclick = () => {
    let menu = document.querySelector('.menu')
    if(is_menu) {
        menu.style.maxHeight = '0px'
    }
    else {
        menu.style.maxHeight = menu.scrollHeight + 'px'
    }
    is_menu = !is_menu
}