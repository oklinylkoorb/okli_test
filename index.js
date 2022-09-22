const tests = require("./test");
const { openChrome } = require("./utils/driverUtils");
const { GREEN, RED } = require("./utils/assert");

let passed = 0,
  failed = 0,
  total = 0;
const results = [];
async function runTests() {
  let browser;
  for (let key in tests) {
    const test = tests[key];
    if (typeof test === "function") {
      try {
        browser = await openChrome();
        await test(browser);
        results.push({
          name: `${key} - passed`,
          status: GREEN,
        });
        passed++;
      } catch (e) {
        await browser.saveScreenshot(`screenshots/${key}-${Date.now()}.png`);
        results.push({
          name: `${key} - failed`,
          status: RED,
        });
        failed++;
      } finally {
        await browser.deleteSession();
        total++;
      }
    }
  }

  console.log("RUN RESULT:");
  console.log("\n********************************\n");
  for (let { name, status } of results) {
    console.log(status, name);
  }
}

runTests()
  .then(() => {
    console.log("\n********************************\n");
    if (!failed) {
      console.log(GREEN, `${passed} of ${total} Tests PASSED`);
    } else {
      console.log(RED, `${failed} of ${total} Tests Failed`);
    }
  })
  .catch((e) => console.error("Something went wrong", e));
