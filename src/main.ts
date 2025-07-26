import Alpine from "alpinejs";
import { Liquid } from "liquidjs";
import Navbar from "./components/Navbar.liquid?raw";
import "./style.css";

Alpine.start();

const engine = new Liquid();

async function renderApp() {
  try {
    const navbarHtml = await engine.parseAndRender(Navbar, {});

    document.querySelector<HTMLDivElement>("#app")!.innerHTML = navbarHtml;

    Alpine.initTree(document.getElementById("app"));
  } catch (error) {
    console.error("Rendering error:", error);
  }
}

renderApp();
