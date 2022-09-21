const { remote } = require("webdriverio");

function openChrome() {
  return remote({
    capabilities: {
      browserName: "chrome",
    },
  });
}

module.exports = { openChrome };
