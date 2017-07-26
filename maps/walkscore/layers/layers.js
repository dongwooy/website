var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
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
            });var format_county_scag_utm = new ol.format.GeoJSON();
var features_county_scag_utm = format_county_scag_utm.readFeatures(geojson_county_scag_utm, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_county_scag_utm = new ol.source.Vector();
jsonSource_county_scag_utm.addFeatures(features_county_scag_utm);var lyr_county_scag_utm = new ol.layer.Vector({
                source:jsonSource_county_scag_utm, 
                style: style_county_scag_utm,
                title: "county_scag_utm"
            });

lyr_walkscore.setVisible(true);lyr_county_scag_utm.setVisible(true);
var layersList = [baseLayer,lyr_walkscore,lyr_county_scag_utm];
lyr_walkscore.set('fieldAliases', {'GEOID': 'GEOID', 'walkscore': 'walkscore', });
lyr_county_scag_utm.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_walkscore.set('fieldImages', {'GEOID': 'TextEdit', 'walkscore': 'TextEdit', });
lyr_county_scag_utm.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_walkscore.set('fieldLabels', {'GEOID': 'inline label', 'walkscore': 'inline label', });
lyr_county_scag_utm.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_county_scag_utm.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});