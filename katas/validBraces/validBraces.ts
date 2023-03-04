const validBraces = (braces: string): boolean => {
  const curlyBraces = "{}";
  const squareBraces = "[]";
  const ovalBraces = "()";

  while (
    braces.indexOf(curlyBraces) !== -1 ||
    braces.indexOf(squareBraces) !== -1 ||
    braces.indexOf(ovalBraces) !== -1
  ) {
    braces = braces
      .replace(curlyBraces, "")
      .replace(squareBraces, "")
      .replace(ovalBraces, "");
  }

  return !braces.length;
};

module.exports = validBraces;
