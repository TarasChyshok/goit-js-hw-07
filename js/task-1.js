const arrayOfCategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${arrayOfCategories.length}`);

const action = () => {
    for(const elem of arrayOfCategories){
        console.log(`Category: ${elem.firstElementChild.textContent}`);
        console.log(`Elements: ${elem.children[1].querySelectorAll("li").length}`);
    }

}
action();



//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).