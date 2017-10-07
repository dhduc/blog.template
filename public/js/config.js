require.config({
    baseUrl: site.js_path,
    paths: {
        jquery: "lib/jquery/dist/jquery.min",
        jquery_menu: "lib/jquery.menu/jquery.menu",
        bootstrap: "lib/bootstrap/js/bootstrap.min",
        highlightjs: "lib/highlightjs/highlightjs.min",
        prism: "lib/prism/prism",
        popper: "lib/popper/popper.min"
    },
    shim: {
        bootstrap: {
            deps: ["jquery", "popper"]
        },
        jquery_menu: {
            deps: ["jquery"]
        }
    }
});
// Load the main app module to start the app
require(["js/app"]);