export function addComment() {
    const input = document.querySelectorAll('.file-add__input');
    input.forEach((element) =>{
        element.addEventListener('change', function () {
            const file = this.files[0];
            this.parentNode.querySelector('.file-add__name').innerHTML = file.name;
        })
    });
}
addComment();
