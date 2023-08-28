import { addComment } from './input-file';
const commentForm = `
<form action="#">
    <textarea type="text" class="form__input" required placeholder="Ваш ответ" rows="2"></textarea>
    <div class="form__actions">
        <label class="file-add">
            <span class="file-add__name"></span>
            <input type="file" class="file-add__input" accept="image/jpeg">
            <span class="file-add__image"></span>
        </label>
        <button type="submit" class="send">Отправить</button>
    </div>
</form>
`;
const addBtn = document.querySelectorAll('.reply');
addBtn.forEach((element) => {
    element.addEventListener('click', function () {
        const parent = this.parentNode.parentNode;
        parent.innerHTML += commentForm;
        addComment();
    })
});
