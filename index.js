// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
  const Aqua = { lat: 31.5545, lng: 97.1326 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: Aqua,
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Big River waterpark and Adventure</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Big Rivers waterpark and Advventure</b>, also referred to as <b>Aqua park</b>, is a large " +
    "waterpark in the central part of the " +
    "Texas. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://bigriverswaterpark.com">' +
    "https://bigriverswaterpark.com/</a> " +
    "(fun place to visit).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Uluru",
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map,
    title: "Uluru (Ayers Rock)",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

window.initMap = initMap;