function sortArray() {
  const numbersInput = prompt("Enter a Numbers:");
  const namesInput = prompt("Enter a Name :");

  const numbers = numbersInput.split(',').map(Number);
  const names = namesInput.split(',');

  const reversedNumbers = numbers.reverse();
  alert('Numerically in reverse: ' + reversedNumbers.join(', '));

  const sortedNames = names.sort();
  alert('Sorted names alphabetically: ' + sortedNames.join(', '));
}