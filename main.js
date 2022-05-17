const getFoodMenu = (key, value) => {
    const api = `https://www.themealdb.com/api/json/v1/1/search.php?${key}=${value}`;
    fetch(api)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            try {
                getData(data, value);
            } catch (err) {
                alert('Search result not found');

            }

        });
}

const search_btn = document.getElementById("searchBtn");
search_btn.addEventListener('click', () => {
    document.getElementById('display-data').innerHTML = '';
    const food = document.getElementById("food").value;
    const len = food.length;
    // console.log(len);
    if (len == 1) getFoodMenu('f', food[0]);
    else if (len > 1) getFoodMenu('s', food);
    document.getElementById('food').value = '';
});


function getData(data, value) {
    const arr = data.meals;
    const names = [];
    displayItems(data.meals);
    names.filter(names => name === value);
    console.log(value);
}

const displayItems = data => {
    const foodsDiv = document.getElementById('display-data');

    data.forEach(element => {
        const foodItemDiv = document.createElement('div');
        foodItemDiv.className = 'food';
        getIngredient(foodItemDiv, element);

        const foodInfo = `
            <img src="${element.strMealThumb}">
            <h3>${element.strMeal}</h3>
        `;
        foodItemDiv.innerHTML = foodInfo;
        foodsDiv.appendChild(foodItemDiv);
    });

}

function setIngredient(element, ingredients) {
    ingredients.push(element.strIngredient1);
    ingredients.push(element.strIngredient2);
    ingredients.push(element.strIngredient3);
    ingredients.push(element.strIngredient4);
    ingredients.push(element.strIngredient5);
    ingredients.push(element.strIngredient6);
    ingredients.push(element.strIngredient7);
    ingredients.push(element.strIngredient8);
    ingredients.push(element.strIngredient9);
    ingredients.push(element.strIngredient10);
    ingredients.push(element.strIngredient11);
    ingredients.push(element.strIngredient12);
    ingredients.push(element.strIngredient13);
    ingredients.push(element.strIngredient14);
    ingredients.push(element.strIngredient15);
    ingredients.push(element.strIngredient16);
    ingredients.push(element.strIngredient17);
    ingredients.push(element.strIngredient18);
    ingredients.push(element.strIngredient19);
    ingredients.push(element.strIngredient20);
}

function getIngredient(foodMenuDiv, element) {

    foodMenuDiv.addEventListener('click', () => {
        document.getElementById('parentDiv').style.display = "none";

        document.getElementById("ingredient").appendChild(foodMenuDiv);
        const ingredients = [];

        setIngredient(element, ingredients);
        document.getElementById('ingredient-id').style.display = 'block';
        const ul = document.getElementById('ul');
        let index = 0;
        while (ingredients[index] != "") {
            const li = document.createElement('li');
            li.innerText = ingredients[index];
            console.log(li);
            ul.appendChild(li);
            index++;
        }

    });
}