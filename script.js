let cities = [];

function addCity() {
  const cityNameInput = document.getElementById("city-name");
  const cityXInput = document.getElementById("city-x");
  const cityYInput = document.getElementById("city-y");

  const city = {
    name: cityNameInput.value,
    x: parseInt(cityXInput.value),
    y: parseInt(cityYInput.value),
  };

  cities.push(city);
  updateCityList();
  clearCityInputs();
}

function updateCityList() {
  const cityList = document.getElementById("city-list");
  cityList.innerHTML = "";

  cities.forEach((city) => {
    const li = document.createElement("li");
    li.textContent = `${city.name} (${city.x}, ${city.y})`;
    cityList.appendChild(li);
  });
}

function clearCityInputs() {
  document.getElementById("city-name").value = "";
  document.getElementById("city-x").value = "";
  document.getElementById("city-y").value = "";
}

function solveTSP() {
  const shortestRoute = findShortestRoute(cities);
  const shortestDistance = calculateDistance(shortestRoute);

  displayShortestRoute(shortestRoute);
  displayShortestDistance(shortestDistance);
  displayRouteOnMap(shortestRoute);
}

// The calculateDistance() and findShortestRoute() functions from the previous example

function displayShortestRoute(route) {
  const shortestRouteElement = document.getElementById("shortest-route");
  shortestRouteElement.innerHTML = "";

  route.forEach((city) => {
    const li = document.createElement("li");
    li.textContent = city.name;
    shortestRouteElement.appendChild(li);
  });
}

function displayShortestDistance(distance) {
  const shortestDistanceElement =
    document.getElementById("shortest-distance");
  shortestDistanceElement.textContent = `Shortest distance: ${distance.toFixed(
    2
  )}`;
}

function displayRouteOnMap(route) {
  const mapElement = document.getElementById("map");
  const mapOptions = {
    zoom: 5,
    center: new google.maps.LatLng(route[0].x, route[0].y),
  };
  const map = new google.maps.Map(mapElement, mapOptions);
  const routeCoordinates = route.map(
    (city) => new google.maps.LatLng(city.x, city.y)
  );
  const routePath = new google.maps.Polyline({
    path: routeCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  routePath.setMap(map);
}

// Initialize the map
function initMap() {
  // Empty function as a placeholder
}