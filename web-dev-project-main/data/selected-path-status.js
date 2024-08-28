//We are using local storage to initially keep an object in the cart so the code does not crash. We replace it with the path the user has selected.
export let currentSelectedPath;

loadFromStorage();

export function loadFromStorage() {
  currentSelectedPath = JSON.parse(localStorage.getItem('storedPath'));  

  if (!currentSelectedPath) {
    currentSelectedPath = [{
      pathId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
    }];
  }
}

function saveToStorage() {
  localStorage.setItem('storedPath', JSON.stringify(currentSelectedPath));
}

export function selectPath(pathId) {
  currentSelectedPath[0] = {
    pathId: pathId,
  };
  

  saveToStorage()
}

//If the user clicks unenroll we remove it from the array and store the empty array in local storage

export function removeStoredPath() {
  
  const newStoredPath = [];
  currentSelectedPath = newStoredPath;

  saveToStorage();
}
