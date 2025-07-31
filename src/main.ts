import Alpine from "alpinejs";
import { Liquid } from "liquidjs";
import Navbar from "./components/Navbar.liquid?raw";
import Product from "./components/Product.liquid?raw";
import "./style.css";

Alpine.start();

const engine = new Liquid();

async function renderApp() {
  try {
    const response = await fetch("./priscilla-suede.json");
    const productData = await response.json();
    console.log(productData);

    const navbarHtml = await engine.parseAndRender(Navbar, {});
    const productHtml = await engine.parseAndRender(Product, {
      product: productData,
    });

    document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
      ${navbarHtml}
      ${productHtml}
    `;

    Alpine.initTree(document.getElementById("app"));
  } catch (error) {
    console.error("Rendering error:", error);
  }
}

renderApp();
