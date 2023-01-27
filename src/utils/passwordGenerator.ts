export const generatePassword = (config: {
  lowercase: string
  uppercase: string
  numbers: string
  symbols: string
  length: string
}) => {
  const charactersTypes: any = {
    lowercase: [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ],
    uppercase: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbols: [
      "{",
      "}",
      "$",
      "!",
      "@",
      "#",
      "%",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "+",
      "=",
      "~",
      "<",
      ">",
      "/",
      "?",
    ],
  }

  let password: string[] = []

  for (const key in config) {
    if (key !== 'length') {
      for (let index = 0; index < 7; index++) {
        password = password.concat(charactersTypes[key])
      }
    }
  }

  return password
    .sort(() => Math.random() - 0.5)
    .join("")
    .slice(0, Number(config.length))
}