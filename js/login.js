const ulSquares = document.querySelector("ul.squares")

for (let i = 0; i < 11; i++) {
    const li = document.createElement("li")

    const random = (min, max) => Math.random() * (max - min) + min

    const size = Math.floor(random(10, 120))
    const position = random(1, 99)
    const delay = random(5, 0.1)
    const duration = random(24, 12)

    li.style.width = `${size}px`
    li.style.height = `${size}px`
    li.style.bottom = `-${size}px`

    li.style.left = `${position}%`

    li.style.animationDelay = `${delay}s`
    li.style.animationDuration = `${duration}s`
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`
    
    ulSquares.appendChild(li)
}

function myFunction() {
    const view = document.getElementById("myPass");
    if (view.type === "password") {
        view.type = "text";
        } else {
            view.type = "password";
        }
    }

    // function myFunction2() {
    // const view = document.getElementById("pass-register");
    // if (view.type === "password") {
    //     view.type = "text";
    //     } else {
    //         view.type = "password";
    //     }
    // }
    
    function myFunction3() {
    const view = document.getElementById("pass-register2");
    if (view.type === "password") {
        view.type = "text";
        } else {
            view.type = "password";
        }
    }

    function opemLogin() {
        document.getElementById("telaLogin").style.width = "250px";
        document.getElementById("bntLogin").style.width = "550px";
    
      }
    
    function closeLogin() {
        document.getElementById("telaLogin").style.width = "0";
    }

//Teste Registro
