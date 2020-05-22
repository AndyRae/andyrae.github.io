/* global L Tabletop */

/*
 * Script to display two tables from Google Sheets as point and polygon layers using Leaflet
 * The Sheets are then imported using Tabletop.js and overwrite the initially laded layers
 */

// init() is called as soon as the page loads
function init() {
  // PASTE YOUR URLs HERE
  // these URLs come from Google Sheets 'shareable link' form
  // the first is the polygon layer and the second the points
  var polyURL =
    "https://docs.google.com/spreadsheets/d/1NBWmLVVLQFYasJLAb-DZ10iHXS_ASRgPQ3zwjGyZvZQ/edit?usp=sharing#gid=970510810";
    

  Tabletop.init({ key: polyURL, callback: addPolygons, simpleSheet: true });
}
window.addEventListener("DOMContentLoaded", init);

// Create a new Leaflet map centered on the World
var map = L.map("map").setView([51.5074, 0.1278], 2);

// This is the Carto Positron basemap
var basemap = L.tileLayer(
  "https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}{r}.png",
  {
    attribution:
      "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://cartodb.com/attributions'>CartoDB</a>",
    subdomains: "abcd",
    maxZoom: 19
  }
);
basemap.addTo(map);

var sidebar = L.control
  .sidebar({
    container: "sidebar",
    closeButton: true,
    position: "right"
  })
  .addTo(map);

let panelID = "my-info-panel";
var panelContent = {
  id: panelID,
  tab: "<i class='fa fa-bars active'></i>",
  pane: "<p id='sidebar-content'></p><p id='sidebar-content-2'></p>",
  title: "<h2 id='sidebar-title'>None selected</h2>"
};
sidebar.addPanel(panelContent);

map.on("click", function() {
  sidebar.close(panelID);
});

// These are declared outisde the functions so that the functions can check if they already exist
var polygonLayer;

// The form of data must be a JSON representation of a table as returned by Tabletop.js
// addPolygons first checks if the map layer has already been assigned, and if so, deletes it and makes a fresh one
// The assumption is that the locally stored JSONs will load before Tabletop.js can pull the external data from Google Sheets
function addPolygons(data) {
  if (polygonLayer != null) {
    // If the layer exists, remove it and continue to make a new one with data
    polygonLayer.remove();
  }

  // Need to convert the Tabletop.js JSON into a GeoJSON
  // Start with an empty GeoJSON of type FeatureCollection
  // All the rows will be inserted into a single GeoJSON
  var geojsonWorld = {
    type: "FeatureCollection",
    features: []
  };

  for (var row in data) {
    // The Sheets data has a column 'include' that specifies if that row should be mapped
    if (data[row].include == "y") {
      var coords = JSON.parse(data[row].geometry);

      geojsonWorld.features.push({
        type: "Feature",
        geometry: {
          type: "MultiPolygon",
          coordinates: coords
        },
        properties: {
          name: data[row].name,
          summary: data[row].summary,
          status: data[row].status,
          local: data[row].local
        }
      });
    }  }

  polygonLayer = L.geoJSON(geojsonWorld, {
    onEachFeature: function(feature, layer) {
      layer.on({
        click: function(e) {

          // if this isn't added, then map.click is also fired!
          L.DomEvent.stopPropagation(e);

          document.getElementById("sidebar-title").innerHTML =
            e.target.feature.properties.name;
          document.getElementById("sidebar-content").innerHTML =
            e.target.feature.properties.summary;
          document.getElementById("sidebar-content-2").innerHTML =
            e.target.feature.properties.status;
          sidebar.open(panelID);
        }
      });
    },
    style: function(feature) {
      switch (feature.properties.status) {
          case 'open': return { color: "#2AD460", fillColor: "#2AD460", weight: 1 };
          case 'partial':   return { color: "#FC6254", fillColor: "#FC6254", weight: 1 };
          case 'closed':   return { color: "#C01E5C", fillColor: "#C01E5C", weight: 1 };
      }
  }
  }).addTo(map);
}

