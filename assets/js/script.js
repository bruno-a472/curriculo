const botoes = document.querySelectorAll("[data-carrossel-botao]")

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const movimento = botao.dataset.carrosselBotao === "prox" ? 1 : -1
        const slides = botao
        .closest("[data-carrossel]")
        .querySelector("[data-slides]")
        const ativoSlide = slides.querySelector("[data-ativo]")
        let novoIndice = [...slides.children].indexOf(ativoSlide) + movimento
        if (novoIndice < 0) novoIndice = slides.children.length - 1
        if (novoIndice >= slides.children.length) novoIndice = 0 
        
        slides.children[novoIndice].dataset.ativo = true
        delete ativoSlide.dataset.ativo
    })
})
















// const botoes = document.querySelector("[data-botao-passa-carrossel]")

// botoes.forEach(botao => {
//     botao.addEventListener("click", () => {
//         const movimento = botao.dataset.carrosselBotao === "pro" ? 1 : -1
//         const slides = button
//         .closest("[carrossel-dados]")
//         .querySelector("[slides-dados]")
        
//         const slideAtivo = slides.querySelector("[dado-ativo]")
//         let newIndex = [...slides.children].indexOf(slideAtivo) + movimento
//         if (newIndex < 0) newIndex = slides.children.length -1
//         if (newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete slideAtivo.dataset.active
//     })
// })