const btns = document.querySelectorAll('.likes-counter__btn');
let likeCountPerUser = 0;
btns.forEach((element) =>{
    element.addEventListener('click', function () {
        if (this.classList.contains('up') && likeCountPerUser === 0) {
            let count = element.parentNode.querySelector('.likes-counter__number').innerText;
            Number(count++);
            element.parentNode.querySelector('.likes-counter__number').innerText = count;
            element.parentNode.querySelector('.likes-counter__number').classList.add('count-active');
            likeCountPerUser++;
        }
        else if(this.classList.contains('down') && likeCountPerUser === 1) {
            let count = element.parentNode.querySelector('.likes-counter__number').innerText;
            Number(count--);
            element.parentNode.querySelector('.likes-counter__number').innerText = count;
            element.parentNode.querySelector('.likes-counter__number').classList.remove('count-active');
            likeCountPerUser--;
        }
    })
});
