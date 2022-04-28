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

function ativeLogin() {
    const container = document.getElementById('container');
    container.classList.toggle('active')
}