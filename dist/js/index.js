const addGlitchEffect = e => {
    if (e.target.closest('.cards__box')){
        e.target.closest('.cards__box--heading')?.classList.add('heading--effect')
        e.target.closest('.cards__box--heading')?.setAttribute("data-text", e.target.closest('.cards__box--heading').textContent);
    }
}

document.querySelectorAll('.cards__box').forEach(el => {
    el.addEventListener('mouseover', addGlitchEffect)
})

document.querySelectorAll('.cards__box').forEach(el => {
    el.addEventListener('mouseleave', e =>{
        document.querySelectorAll('.cards__box--heading').forEach(el => {
            el.classList.remove('heading--effect')
            el.removeAttribute("data-text");
        })

    })
})
document.querySelector('.year').textContent = new Date().getFullYear()