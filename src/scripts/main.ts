import "../styles/main.scss";
import { Sliders, Offers, Marquee } from "./components";

document.addEventListener("DOMContentLoaded", (): void => {
  new Sliders();
  new Offers();
  new Marquee("marquee-track", { speed: 0.5, pauseOnHover: false });
});
