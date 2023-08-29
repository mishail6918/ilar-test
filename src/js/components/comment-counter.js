const btns = document.querySelectorAll('.likes-counter__btn');
btns.forEach((element, index) =>{
    element.addEventListener('click', function () {
        let checkClass = element.parentNode.querySelector('.likes-counter__number').classList.contains('count-active');
        if (this.classList.contains('up') && checkClass === false) {
            let count = element.parentNode.querySelector('.likes-counter__number').innerText;
            Number(count++);
            element.parentNode.querySelector('.likes-counter__number').innerText = count;
            element.parentNode.querySelector('.likes-counter__number').classList.add('count-active');
        }
        else if(this.classList.contains('down') && checkClass) {
            let count = element.parentNode.querySelector('.likes-counter__number').innerText;
            Number(count--);
            element.parentNode.querySelector('.likes-counter__number').innerText = count;
            element.parentNode.querySelector('.likes-counter__number').classList.remove('count-active');
        }
    })
});
