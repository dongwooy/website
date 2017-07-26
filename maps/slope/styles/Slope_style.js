var size = 0;
var ranges_Slope = [[0.000000, 0.000000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(255,245,240,0.4)'})
    })]],
[0.000000, 2.415000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(252,189,164,0.4)'})
    })]],
[2.415000, 4.415000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(251,112,80,0.4)'})
    })]],
[4.415000, 8.428000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(211,32,32,0.4)'})
    })]],
[8.428000, 48.408000, [ new ol.style.Style({
         fill: new ol.style.Fill({color: 'rgba(103,0,13,0.4)'})
    })]]];
var styleCache_Slope={}
var style_Slope = function(feature, resolution){
    var value = feature.get("acs_slope");
    var style = ranges_Slope[0][2];
    for (i = 0; i < ranges_Slope.length; i++){
        var range = ranges_Slope[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Slope[key]){
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
        styleCache_Slope[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Slope[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};