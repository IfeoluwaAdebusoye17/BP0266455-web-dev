export let currentSelectedPath;

loadFromStorage();

export function loadFromStorage() {
  currentSelectedPath = JSON.parse(localStorage.getItem('cart'));  

  if (!currentSelectedPath) {
    currentSelectedPath = [{
      pathId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
    }];
  }
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(currentSelectedPath));
}

export function selectProgram(pathId) {
  currentSelectedPath[0] = {
    pathId: pathId,
  };
  

  saveToStorage()
}

export function removeFromCart(productId) {
  const newCart = [];

  currentSelectedPath.forEach((cartItem) => {
    
    if(cartItem.pathId !== productId ) {
      newCart.push(cartItem);
    }
      
  });

  currentSelectedPath = newCart;

  saveToStorage();
}
