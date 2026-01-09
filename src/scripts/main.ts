import "../styles/main.scss";
import { Sliders, Offers } from "./components";

document.addEventListener("DOMContentLoaded", (): void => {
  new Sliders();
  new Offers();
});
