
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let delBtn = document.getElementById("clear-btn")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    count -= 1
    countEl.textContent = count
}

function save() {
    
    showCount = count + " - ";
     
    saveEl.textContent += showCount
   
    countEl.textContent = 0
    count = 0
   
    console.log(showCount)
}

function Clear() {
   
    countEl.textContent = 0
    count = 0
    saveEl.textContent = "Previous Customer Entered: "
   
    console.log(showCount)
}

