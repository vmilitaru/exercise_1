const { removeDuplicates } = require("./index");

test(`The removeDuplicates function should return the correct reduced lowercase string when the input string is in lowercase letters`, () => {
    const actual = removeDuplicates(
      "sssgggdsdsddddddaaadhhhhhggihhdjjsjkkllammmskl",
      3
    );
    const expected = "sssgggdsdsdddaaadhhhggihhdjjsjkkllammmskl";
    expect(actual).toBe(expected);
  });
  test(`The removeDuplicates function should return the correct reduced lowercase string when the input string is in uppercase letters`, () => {
    const actual = removeDuplicates("SSSKKJJNNDFHHHEUUU", 1);
    const expected = "skjndfheu";
    expect(actual).toBe(expected);
  });
  test(`The removeDuplicates function should return the input string if the integer is greater than the maximum consecutive character length`, () => {
    const actual = removeDuplicates("SSsKkkKkJiJnNNNNnnNDddDDDFfHHHhEUUU", 8);
    const expected = "ssskkkkkjijnnnnnnnnddddddffhhhheuuu";
    expect(actual).toBe(expected);
  });
  test(`The removeDuplicates function should return a message if the integer is equal to zero `, () => {
    const actual = removeDuplicates("SSsKkkKkJiJnNNNNnnNDddDDDFfHHHhEUUU", 0);
    const expected =
    "Please make sure the integer is greater than zero";
    expect(actual).toBe(expected);
  });
  test(`The removeDuplicates function should return a message if the integer is less than zero `, () => {
    const actual = removeDuplicates("SSsKkkKkJiJnNNNNnnNDddDDDFfHHHhEUUU", -8);
    const expected =
    "Please make sure the integer is greater than zero";
    expect(actual).toBe(expected);
  });
  test(`The removeDuplicates function takes in a string with 1 white space and returns back the string as it is when the integer value is greater than the string length`, () => {
    const actual = removeDuplicates(" ", 2);
    const expected =" "
    expect(actual).toBe(expected);
  });
  test(`The removeDuplicates function takes in a string with 3 white spaces and returns back a string with 1 white space when the integer is 1 `, () => {
    const actual = removeDuplicates("   ", 1);
    const expected =" "
     
    expect(actual).toBe(expected);
  });

  test(`The removeDuplicates function takes in an empty string and returns back an empty string`, () => {
    const actual = removeDuplicates("", 3);
    const expected =""
     
    expect(actual).toBe(expected);
  });