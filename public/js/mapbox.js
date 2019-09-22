/* eslint-disable */
export const displayMap = locations => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibmhpbmNkZyIsImEiOiJjazBubjM0aHkwMW90M2NteDNsYzk1MDNwIn0.Be1JHEwcs-xzBA6GWMBEpg";

  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/nhincdg/ck0no7loe044d1ck14e3daghc",
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement("div");
    el.className = "marker";

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: "bottom"
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
