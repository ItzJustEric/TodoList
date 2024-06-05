const buttonEl = document.getElementById("btn")
const inputEl = document.getElementById("input-box")
const containerEl = document.querySelector(".container")

buttonEl.addEventListener("click",getItem = () =>{
    const text = document.createElement("p") 
    text.textContent = inputEl.value
    containerEl.appendChild(text)
    inputEl.value = " "


    text.addEventListener("mouseover",removeItem = () => {
        text.style.textDecoration = "line-through"

        text.addEventListener("mouseout",KeepItem = ()=>{
            text.style.textDecoration = "none"


        })

        text.addEventListener("click",deleteItem = () =>{
             containerEl.removeChild(text)

        })
        
        
    })


})



