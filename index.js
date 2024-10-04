// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const park = { lat: 30.196033, lng: -95.199577};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: park,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Big Rivers waterpark and Adventure</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Big Rivers waterpark and Adventure</b>, also referred to as <b>Park</b>, is a large " +
    "waterpark in the central part of the Texas" +
    "It is located in Waco, Texas. The park lies " +
    "near the Brazos River making it a scenic spot for water activities" +
    "during vacations and holidays. Features include COLORado Racer, " +
    "Wild Isle, Hawk's Glide and Eagle Challenge this is " +
    "is a must vist place for relaxation. It has many springs, waterholes, " +
    "attractions. This park is listed as a World " +
    "must visit place.</p>" +
    '<p>Attribution: Park, <a href="https://bigriverswaterpark.com">' +
    "https://bigriverswaterpark.com/</a> " +
    "(fun place to visit).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "park",
  });
  const marker = new google.maps.Marker({
    position: park,
    map,
    title: "Big River waterpark and Adventure (park)",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;