const { removeDuplicateCharacters } = require("./index");

test(`The removeDuplicateCharacters function should return the correct reduced string when the input string is only lowercase letters`, () => {
  const actual = removeDuplicateCharacters(
    "sssgggdsdsddddddaaadhhhhhggihhdjjsjkkllammmskl",
    3
  );
  const expected = "sssgggdsdsdddaaadhhhggihhdjjsjkkllammmskl";
  expect(actual).toBe(expected);
});

test(`The removeDuplicateCharacters function should return the correct reduced string when the input string is only uppercase letters`, () => {
  const actual = removeDuplicateCharacters("SSSKKJJNNDFHHHEUUU", 1);
  const expected = "SKJNDFHEU";
  expect(actual).toBe(expected);
});

test(`The removeDuplicateCharacters function should return the correct reduced string when the input string has alternating case letters`, () => {
  const actual = removeDuplicateCharacters("SSsKKkJiJnNNDFfHHHhEUUU", 2);
  const expected = "SsKkJiJnNDFfHhEUU";
  expect(actual).toBe(expected);
});
test(`The removeDuplicateCharacters function should return the correct reduced string when the input string has alternating case letters`, () => {
  const actual = removeDuplicateCharacters(
    "SSsKkkKkJiJnNNNNnnNDddDDDFfHHHhEUUU",
    3
  );
  const expected = "SSsKkkJiJnNNDdDFfHHhEUUU";
  expect(actual).toBe(expected);
});
test(`The removeDuplicateCharacters function should return the input string if the integer is greater than the maximum consecutive character length`, () => {
  const actual = removeDuplicateCharacters(
    "SSsKkkKkJiJnNNNNnnNDddDDDFfHHHhEUUU",
    8
  );
  const expected = "SSsKkkKkJiJnNNNNnnNDddDDDFfHHHhEUUU";
  expect(actual).toBe(expected);
});
test(`The removeDuplicateCharacters function should return a message if the integer is equal to zero `, () => {
  const actual = removeDuplicateCharacters(
    "SSsKkkKkJiJnNNNNnnNDddDDDFfHHHhEUUU",
    0
  );
  const expected = "Please make sure the integer is greater than zero";
  expect(actual).toBe(expected);
});
test(`The removeDuplicateCharacters function should return a message if the integer is less than zero `, () => {
  const actual = removeDuplicateCharacters(
    "SSsKkkKkJiJnNNNNnnNDddDDDFfHHHhEUUU",
    -8
  );
  const expected = "Please make sure the integer is greater than zero";
  expect(actual).toBe(expected);
});
test(`The removeDuplicateCharacters function takes in an empty string and returns back an empty string`, () => {
  const actual = removeDuplicateCharacters("", 2);
  const expected = "";
  expect(actual).toBe(expected);
});
test(`The removeDuplicateCharacters function should return an empty string if the input string is containing only whitespaces`, () => {
  const actual = removeDuplicateCharacters("    ", 2);
  const expected = "";

  expect(actual).toBe(expected);
});

test(`The removeDuplicateCharacters function should return the correct reduced string,removing as well all the whitespaces`, () => {
  const actual = removeDuplicateCharacters(" kk0011211Jji  J02223NdID ", 2);
  const expected = "kk0011211JjiJ0223NdID";
  expect(actual).toBe(expected);
});
