import { initMap } from "./map"; // Нехватало фигурных скобочек

ymaps.ready(() => {
  initMap(ymaps, "map");
  console.log("inited");
});
