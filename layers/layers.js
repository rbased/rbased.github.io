var wms_layers = [];


        var lyr_googleImageries_0 = new ol.layer.Tile({
            'title': 'google Imageries',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.com/maps/vt/lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_State_covid_1 = new ol.format.GeoJSON();
var features_State_covid_1 = format_State_covid_1.readFeatures(json_State_covid_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_State_covid_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_State_covid_1.addFeatures(features_State_covid_1);
var lyr_State_covid_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_State_covid_1, 
                style: style_State_covid_1,
                interactive: true,
    title: 'State_covid<br />\
    <img src="styles/legend/State_covid_1_0.png" /> 0 - 0 <br />\
    <img src="styles/legend/State_covid_1_1.png" /> 0 - 50 <br />\
    <img src="styles/legend/State_covid_1_2.png" /> 50 - 100 <br />\
    <img src="styles/legend/State_covid_1_3.png" /> 100 - 175 <br />\
    <img src="styles/legend/State_covid_1_4.png" /> 175 - 250 <br />\
    <img src="styles/legend/State_covid_1_5.png" /> 250 - 350 <br />\
    <img src="styles/legend/State_covid_1_6.png" /> 350 - 500 <br />\
    <img src="styles/legend/State_covid_1_7.png" /> 500 - 700 <br />\
    <img src="styles/legend/State_covid_1_8.png" /> 700 - 1000 <br />\
    <img src="styles/legend/State_covid_1_9.png" /> 1000 +<br />'
        });

lyr_googleImageries_0.setVisible(true);lyr_State_covid_1.setVisible(true);
var layersList = [lyr_googleImageries_0,lyr_State_covid_1];
lyr_State_covid_1.set('fieldAliases', {'State': 'State', 'Confirmed': 'Confirmed', 'Recovered': 'Recovered', 'Deaths': 'Deaths', 'Active': 'Active', });
lyr_State_covid_1.set('fieldImages', {'State': 'TextEdit', 'Confirmed': 'Range', 'Recovered': 'Range', 'Deaths': 'Range', 'Active': 'Range', });
lyr_State_covid_1.set('fieldLabels', {'State': 'inline label', 'Confirmed': 'inline label', 'Recovered': 'inline label', 'Deaths': 'inline label', 'Active': 'inline label', });
lyr_State_covid_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});