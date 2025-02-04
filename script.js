let copaoStarbucks = document.querySelector(".copao_starbucks")
   
    let verde = document.querySelector(".verde")
    verde.addEventListener("click", () => {
        copaoStarbucks.src = "./img/img1.png"
        circulo.style.background = ("#32cd32")
    })

    let rosa = document.querySelector(".rosa")
    rosa.addEventListener("click", () => {
        copaoStarbucks.src = "./img/img2.png"
        circulo.style.background = ("#eb7495")
    })

    let roxo = document.querySelector(".roxo")
    roxo.addEventListener("click", () => {
        copaoStarbucks.src = "./img/img3.png"
        circulo.style.background = ("#d752b1")
    })

    let circulo = document.querySelector(".circulo")