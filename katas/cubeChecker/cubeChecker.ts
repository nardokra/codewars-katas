const cubeChecker = (volume: number, side: number): boolean => {
  return volume >= 1 && side >= 1 && side * side * side === volume;
};

module.exports = cubeChecker;
