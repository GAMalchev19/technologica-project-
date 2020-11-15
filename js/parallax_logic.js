document.addEventListener("mousemove", parralax);
function parralax(e){

    this.querySelectorAll('.number').forEach(Layer => {
        const speed = Layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/300
        const y = (window.innerHeight - e.pageY*speed)/70

        Layer.style.transform = `translateX(${x}px)  translateY(${y}px)`
    })
}