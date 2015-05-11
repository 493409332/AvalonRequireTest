 
define(["text!~/Test.html"], function (text)
{
    console.log(123123123)
    avalon.templateCache.test = text;

  var tabheight=avalon.vmodels.tabVM.widgetElement.offsetHeight-35;

    var scrollbar = {
        show: "always",
        showBarHeader: true,
        size: "small",
        toggle: true
    };
    avalon.define({
        $id: "testmt",
        username: "面条",
        $scrollbar: scrollbar,
        tabheight: tabheight
    });
 
    avalon.vmodels.Index.page.test = "test";

     console.log("123123123123213123")
    
});