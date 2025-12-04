const menu = document.getElementById("menu")
const sideBar = document.getElementById("sideBar")
menu.onclick = function(){
    if(sideBar.style.display === 'none'){
        sideBar.style.display = 'flex'
        menu.src = "./images/close.png"
    }else{
        sideBar.style.display = 'none'
        menu.src = "./images/menu.png"
    }
    
}