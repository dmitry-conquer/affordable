import "../styles/main.scss";
import { Sliders, Offers, Marquee, Tabs } from "./components";

document.addEventListener("DOMContentLoaded", (): void => {
  new Sliders();
  new Offers();
  new Tabs();
  new Marquee("marquee-track", { speed: 0.5, pauseOnHover: false });
});

