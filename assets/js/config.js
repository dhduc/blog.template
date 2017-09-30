requirejs.config({
  baseUrl: site.js_path,

  paths: {
    jquery: "lib/js/jquery-2.1.4.min",
    jquery_menu: "lib/js/jquery.menu",
    highlightjs: "lib/js/highlightjs.min",
    prism: "lib/js/prism"
  },

  shim: {
    jquery_menu: {
      deps: ["jquery"]
    }
  }

});
// Load the main app module to start the app
requirejs(["js/app"]);