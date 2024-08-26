export let program;

loadFromStorage();

export function loadFromStorage() {
  JSON.parse(localStorage.getItem('cart'));  

  if (!program) {
    program = [{
      courseId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2
    }];
  }
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(program));
}

export function selectProgram(courseId) {
  program[0] = {
    courseId: courseId,
    quantity: 1
  };
  

  saveToStorage()
}

export function removeFromCart(productId) {
  const newCart = [];

  program.forEach((cartItem) => {
    
    if(cartItem.courseId !== productId ) {
      newCart.push(cartItem);
    }
      
  });

  program = newCart;

  saveToStorage();
}
