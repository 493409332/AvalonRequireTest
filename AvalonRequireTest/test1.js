 
define(["text!~/Test1.html"], function (text)
{

    avalon.templateCache.test1 = text;
    var tabheight = avalon.vmodels.tabVM.widgetElement.offsetHeight - 35;

    var scrollbar = {
        show: "always",
        showBarHeader: true,
        size: "small",
        toggle: true
    };
    avalon.define({
        $id: "testmt1",
        username: "面条1",
        $scrollbar: scrollbar,
        tabheight: tabheight
    });
    var aaaa = {};
    aaaa[0] = "zzz";

    aaaa["aaa"] = "呵呵";
    aaaa["bb"] = "哈哈";
    //  aaaa.put("aaaa", "cccc")
    avalon.log(aaaa);



    avalon.vmodels.Index.page.test1 = "test1";


});