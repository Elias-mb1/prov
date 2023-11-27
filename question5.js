// 5.1 Spread med objekt (2p)
// Skriv klart funktionen addIsFast som tar ett bil-objekt och returnerar en kopia
// av objektet och dessutom lägger till egenskapen isFast på det nya objektet.
// Om speed är över 100 ska isFast vara true annars ska det vara false

function addIsFast(car) {
  const carCopy = { ...car };

  carCopy.isFast = carCopy.speed > 100;

  return carCopy;
}

const car = {
  name: "Volvo",
  speed: 120,
};

console.log(addIsFast(car));

function combineArrays(arr1, arr2) {
  const combinedArray = [...arr1, ...arr2];

  return combinedArray;
}

console.log(combineArrays([1, 2, 3], [4, 5, 6])); // Ska logga [1, 2, 3, 4, 5, 6]
