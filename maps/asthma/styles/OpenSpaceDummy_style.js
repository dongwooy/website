var size = 0;
function categories_OpenSpaceDummy(feature, value) {
                switch(value) {case "0":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,255,1.0)'})
    })];
                    break;
case "1":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,160,44,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(51,160,44,1.0)'})
    })];
                    break;}};
var styleCache_OpenSpaceDummy={}
var style_OpenSpaceDummy = function(feature, resolution){
    var value = feature.get("odummy");
    var style = categories_OpenSpaceDummy(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_OpenSpaceDummy[key]){
        var text = new ol.style.Text({
              font: '11.7px \'Noto Sans\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_OpenSpaceDummy[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_OpenSpaceDummy[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};