const breakfastMenu = ['Pancakes- $12', 'Eggs Benedict- $22.99', 'Oatmeal- $21.99', 'Frittata- $15'];
const mainCourseMenu = ['Steak- $30', 'Pasta- $22.50', 'Burger- $18', 'Salmon- $27.25'];
const dessertMenu = ['Cake- $10', 'Ice Cream- $8.50', 'Pudding- $9.25', 'Fruit Salad- $7'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML

let mainCourseItem = ''
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = ''
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem