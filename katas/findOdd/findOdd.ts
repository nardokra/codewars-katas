const findOdd = (arrayOfNumbers: number[]): number => {
  let result: number;

  const uniqueNumbers = arrayOfNumbers.filter(
    (item, i, original) => original.indexOf(item) === i
  );

  const elementCount = (arr: number[], element: number) =>
    arr.reduce(
      (currentElement, arrElement) =>
        arrElement == element ? currentElement + 1 : currentElement,
      0
    );

  let i = 0;
  while (typeof result === "undefined" && i < uniqueNumbers.length) {
    const element = uniqueNumbers[i];
    const numberOfOccurances = elementCount(arrayOfNumbers, element);
    if (numberOfOccurances % 2 !== 0) {
      result = element;
    }
    i++;
  }

  return result || 0;
};

module.exports = findOdd;
