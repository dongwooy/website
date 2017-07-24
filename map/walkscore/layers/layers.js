var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_walkscore = new ol.format.GeoJSON();
var features_walkscore = format_walkscore.readFeatures(geojson_walkscore, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_walkscore = new ol.source.Vector();
jsonSource_walkscore.addFeatures(features_walkscore);var lyr_walkscore = new ol.layer.Vector({
                source:jsonSource_walkscore, 
                style: style_walkscore,
                title: "walkscore"
            });

lyr_walkscore.setVisible(true);
var layersList = [baseLayer,lyr_walkscore];
lyr_walkscore.set('fieldAliases', {'GEOID': 'GEOID', 'walkscore': 'walkscore', });
lyr_walkscore.set('fieldImages', {'GEOID': 'TextEdit', 'walkscore': 'TextEdit', });
lyr_walkscore.set('fieldLabels', {'GEOID': 'inline label', 'walkscore': 'inline label', });
lyr_walkscore.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});