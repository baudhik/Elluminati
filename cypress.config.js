const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qpmjin',
  video: true,

  e2e: {
    "env": {
      "USERNAME": "baudhik",
      "PASSWORD": "Elluminati@123"
    },
   
     setupNodeEvents(on, config) {
      // implement node event listeners here

      baseUrl = "https://admineber.elluminatiinc.net/admin/login"; // Update with your application's base URL
      process.env.HTTPS = true;
      hideXHR: false;



    },
  },
});
