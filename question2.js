// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

function filterWordsWithLetterA(words) {
  const filteredWords = words.filter((word) => word.includes("a"));

  return filteredWords;
}

const inputArray = ["Programming", "is", "great!"];
console.log(filterWordsWithLetterA(inputArray)); // ska logga ["Programming", "great!"]
