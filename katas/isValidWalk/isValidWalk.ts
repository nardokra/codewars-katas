const isValidWalk = (walk: string[]) => {
  let verticalDistance = 0;
  let horizontalDistance = 0;

  walk.forEach((block) => {
    switch (block) {
      case "n":
        verticalDistance += 1;
        break;
      case "s":
        verticalDistance -= 1;
        break;
      case "e":
        horizontalDistance += 1;
        break;
      case "w":
        horizontalDistance -= 1;
        break;
    }
  });

  return walk.length === 10 && !verticalDistance && !horizontalDistance;
};

module.exports = isValidWalk;
