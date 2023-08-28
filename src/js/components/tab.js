const tabs = document.querySelectorAll('.tab__heading');
tabs.forEach((element) =>{
    const head = element.querySelector('.tab__question--active');
    element.addEventListener('click', function () {
        head.classList.toggle('tab__question--active');
        head.classList.toggle('tab__question--open');
        if (head.previousElementSibling) {
            head.previousElementSibling.classList.toggle('tab__question--active');
        }
        else {
            head.nextElementSibling.classList.toggle('tab__question--active');
        }
        const id = this.id;
        document.querySelector('#content' + id).classList.toggle('tab__content--active');

    })
});

