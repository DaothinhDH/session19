// Bài 1
let hideText = document.querySelector(".Hidetext")
let showText = document.querySelector(".Showtext")
let h3 = document.querySelector("h3")

hideText.onclick = function () {
    h3.style.display = "none"

}
showText.onclick = function () {
    h3.style.display = "flex"
}


// Bài 2
let button = document.querySelector(".open")
let box2 = document.querySelector(".box2")
let close = document.querySelector(".close")

close.onclick = function () {
    box2.style.display = "none"
}
button.onclick = function () {
    box2.style.display = "flex"

}

// bài 3
let change = document.querySelector(".change")
let boxA = document.querySelector(".boxA")
let boxB = document.querySelector(".boxB")
let boxC = document.querySelector(".boxC")

boxA.addEventListener("mouseover",function () {
    change.style.background="red"
})

boxA.addEventListener("mouseout", function () {
    change.style.background="none"
    
})

boxB.addEventListener("mouseover", function () {
    change.style.background = "pink"
})
boxB.addEventListener("mouseout", function () {
    change.style.background = "none"
   
})
boxC.addEventListener("mouseover", function () {
    change.style.background = "yellow"
    
})
boxC.addEventListener("mouseout", function () {
    change.style.background = "none"

    
})