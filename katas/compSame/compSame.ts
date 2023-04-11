const comp = (a1: number[] | null, a2: number[] | null): boolean => {
  if (!a1 || !a2) {
    return false;
  }

  const appearances = (arr: Array<number>, comparator: number): number => {
    let count = 0;

    for (const num of arr) {
      if (num === comparator) {
        count++;
      }
    }

    return count;
  };

  let isValid = true;
  let i = 0;

  while (isValid && i < a1.length) {
    const selected = a1[i];
    const selectedQuared = Math.pow(selected, 2);
    const squareIncluded = a2.includes(selectedQuared);

    if (
      !squareIncluded ||
      appearances(a1, selected) !== appearances(a2, selectedQuared)
    ) {
      isValid = false;
    }

    i++;
  }

  return isValid;
};

module.exports = comp;
