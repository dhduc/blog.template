requirejs.config({
  baseUrl: site.js_path,

  paths: {
    jquery: "libs/jquery-2.1.4.min",
    jquery_menu: "libs/jquery.menu",
    highlightjs: "libs/highlightjs.min",
    prism: "libs/prism"
  },

  shim: {
    jquery_menu: {
      deps: ["jquery"]
    }
  }

});
// Load the main app module to start the app
requirejs(["app"]);