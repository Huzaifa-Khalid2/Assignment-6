document.getElementById('my-btn').addEventListener('click', myFunction)
function myFunction () {
   let pizzasize = ''
   let topping = ''
   pizzasize = document.getElementById('my-text').value
   topping = document.getElementById('my-text2').value
  if ((pizzasize == 'large') && (topping == 'one')) {
    alert('$6.00 + $1 x 1.13 so you must pay $7.91')
  } else if ((pizzasize == 'large') && (topping == 'two')) {
    alert('$6.00 + 1.75 x 1.13 so you must pay $8.76')
  } else if ((pizzasize == 'large') && (topping == 'three')) {
    alert('$6.00 + $2.50 x 1.13 so you must pay $9.61')
  } else if ((pizzasize == 'large') && (topping == 'four')) {
    alert('$6.00 + $3.35 x 1.13 so you must pay $10.57')
  } else if ((pizzasize == 'Extralarge') && (topping == 'one')) {
    alert('$10.00 + $1 x 1.13 so you must pay $12.43')
  } else if ((pizzasize == 'Extralarge') && (topping == 'two')) {
    alert('$10.00 + 1.75 x 1.13 so you must pay $13.28')
  } else if ((pizzasize == 'Extralarge') && (topping == 'three')) {
    alert('$10.00 + $2.50 x 1.13 so you must pay $14.13')
  } else if ((pizzasize == 'Extralarge') && (topping == 'four')) {
    alert('$10.00 + $3.35 x 1.13 so you must pay $15.09')
  } else {
    alert('Undifined please enter both toppings and pizza size')
  }
}
