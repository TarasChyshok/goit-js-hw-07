const arrayOfCategories = document.querySelectorAll("li.item");
console.log(arrayOfCategories.length);

const action = () => {
    let i = 0;
    for(const elem of arrayOfCategories){
        console.log(elem.firstElementChild.textContent);
        console.log(`Number of elements: ${elem.children[1].querySelectorAll("li").length}`);

    }

}
action();



//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).