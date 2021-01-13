document.getElementById('my-btn').addEventListener('click', myFunction)
function myFunction () {
  let topping = 1
  let pizzasize = document.getElementById('my-text').value
  pizzasize = parseInt(pizzasize)
  topping = document.getElementById('my-text2')
  topping = parseInt(topping)
   if ((pizzasize = 'large') && (topping = '1')) {
    alert('$6.00 + $1 + 13% so you must pay $7.91')
  } else if ((pizzasize = 'large') && (topping = '2')) { 
    alert('$6.00 + 1.75 + 13% so you must pay $8.76')
  } else if ((pizzasize = 'large') && (topping = '3')) {
    alert('$6.00 + $2.50 + 13% so you must pay $9.61')
  }  else if ((pizzasize = 'large') && (topping = '4')) {
    alert('$6.00 + $3.35 + 13% so you must pay $10.57')
  } else if ((pizzasize = 'Extralarge') && (topping = '1')) {
    alert('$10.00 + $1 + 13% so you must pay $12.43')  
  } else if ((pizzasize = 'Extralarge') && (topping = '2')) { 
    alert('$10.00 + 1.75 + 13% so you must pay $13.28')
  } else if ((pizzasize = 'Extralarge') && (topping = '3')) {
    alert('$10.00 + $2.50 + 13% so you must pay $14.13')
  }  else if ((pizzasize = 'Extralarge') && (topping = '4')) {
    alert('$10.00 + $3.35 + 13% so you must pay $15.09')
  } else {
    alert('undifined please enter both toppings and pizza size')
  } 
}