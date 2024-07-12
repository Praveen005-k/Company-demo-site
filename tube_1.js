

const darkTheme = function(){
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".dark-theme").textContent = "Light Theme"
    document.querySelector("header").style.backgroundColor = "#F86624"
    document.querySelector(".sidenav").style.backgroundColor = "#808A9F"
}

const lightTheme = function(){
    document.querySelector("body").style.backgroundColor = "white"
    document.querySelector("dark-theme").style.backgroundColor = "Dark Theme"
    document.querySelector("header").style.backgroundColor = "#F86624"
    document.querySelector(".sidenav").style.backgroundColor = "#1768AC"
}

function eleHover(ele){
    ele.style.backgroundColor = "yellow";
}

function eleOut(ele){
    ele.style.backgroundColor = "#DEE7E7"
}

const changeCompany = function(){
    document.querySelector("#company").textContent = "Sales Force";
}

const normal = function(){
    document.querySelector("#company").textContent = "Company";
}