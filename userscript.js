function check()
{
    let password = document.getElementById ('password').value
    let Digitlength = document.getElementById('Digit-length')

    let row1 = document.getElementById('row1')

    password = password.trim()

    if(password.length > 4){
        Digitlength.setAttribute("checked", "checked")
        row1.style.color = "green"
    }
    else{
        Digitlength.removeAttribute("checked")
        row1.style.color = "rgb(56, 43, 11)"
    }
}
