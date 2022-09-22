const results = [];

const GREEN = "\x1b[32m%s\x1b[0m";
const RED = "\x1b[31m%s\x1b[0m";

class Assertion {
  constructor(actual) {
    this.actual = actual;
  }

  toBe(expected) {
    if (expected != this.actual) {
      console.log(
        RED,
        `Assertion Failed: expected: ${expected}, is not eaquls to actual: ${this.actual}`
      );
      throw `Assertion Failed: expected: ${expected}, is not eaquls to actual: ${this.actual}`;
    }
    return console.log(
      GREEN,
      `Assertion Passed: expected: ${expected}, actual: ${this.actual}`
    );
  }

  equals(expected) {
    if (expected !== this.actual) {
      console.log(
        RED,
        `Assertion Failed: expected: ${expected}, is not eaquls to actual: ${this.actual}`
      );
      throw `Assertion Failed: expected: ${expected}, is not eaquls to actual: ${this.actual}`;
    }
    return console.log(
      GREEN,
      `Assertion Passed: expected: ${expected}, eaquls to actual: ${this.actual}`
    );
  }

  async elementTextContains(expected) {
    const actualText = await this.actual.getText();
    if (actualText.indexOf(expected) === -1) {
      console.log(
        RED,
        `Assertion Failed: expected: ${expected}, is not part of actual: ${actualText}`
      );
      throw `Assertion Failed: expected: ${expected}, is not part of actual: ${actualText}`;
    }
    return console.log(
      GREEN,
      `Assertion Passed: expected: ${expected}, is part of actual: ${actualText}`
    );
  }
}

module.exports = {
  assert: (actual) => new Assertion(actual),
  GREEN: GREEN,
  RED: RED,
};
