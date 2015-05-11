define(["text!./template.html", "avalon"], function (template)
{
    var widgetName = "panel";
    //var template;
    //require(["text!/Common/avalon/panel/template.html"], function (text)
    //{
    //    template = text;
    //})
    avalon.ui[widgetName] = function (element, data, vmodels)
    {

        var innerHTML = element.innerHTML;
        var options=data[widgetName+"Options"];
        avalon.clearHTML(element);

        var model = {
            $id: data[widgetName + 'Id']

        };
        avalon.mix(true, model, {}, options);
       
      
        var vmmodel = avalon.define(model);
        avalon.nextTick(function ()
        { 
            element.innerHTML = template;
            avalon.scan(element, [vmmodel].concat(vmodels))
        })
        return vmmodel;
    }
    avalon.ui[widgetName].defaults = {
        aaa: "123",
        bbb: "bbb",
        ccc: "ccc"
    }
    return avalon;
});