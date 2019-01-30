wordEnding(number, words) {
  return /^([2-4]|\d*[2-9][2-4])$/.test(String(number))
    ? words[1]
    : /^(1|\d*[2-9]1)$/.test(String(number))
      ? words[0]
      : words[2];
}
