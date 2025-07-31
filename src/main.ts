import Alpine from "alpinejs";
import { Liquid } from "liquidjs";
import Navbar from "./components/Navbar.liquid?raw";
import Product from "./components/Product.liquid?raw";
import "./style.css";

Alpine.start();

const engine = new Liquid();

const productVariants = [
  "https://cdn.starapps.studio/v2/apps/vsk/lucchese-inc/groups/122889/100/priscilla-glitz-cream.webp?width=80&height=80&crop=top",
  "https://cdn.starapps.studio/v2/apps/vsk/lucchese-inc/groups/122889/100/priscilla-red.webp?width=80&height=80&crop=top",
  "https://cdn.starapps.studio/v2/apps/vsk/lucchese-inc/groups/122889/100/priscilla-black.webp?width=80&height=80&crop=top",
  "https://cdn.starapps.studio/v2/apps/vsk/lucchese-inc/groups/122889/100/priscilla-brown.webp?width=80&height=80&crop=top",
  "https://cdn.starapps.studio/v2/apps/vsk/lucchese-inc/groups/122889/100/priscilla-suede-espresso.webp?width=80&height=80&crop=top",
  "https://cdn.starapps.studio/v2/apps/vsk/lucchese-inc/groups/122889/100/priscilla-crinkle-patent-black.webp?width=80&height=80&crop=top",
  "https://cdn.starapps.studio/v2/apps/vsk/lucchese-inc/groups/122889/100/priscilla-red-luster.webp?width=80&height=80&crop=top",
  "https://cdn.starapps.studio/v2/apps/vsk/lucchese-inc/groups/122889/100/priscilla-glitz-cream-w-burnt-orange-stitching.webp?width=80&height=80&crop=top",
  "https://cdn.starapps.studio/v2/apps/vsk/lucchese-inc/groups/122889/100/priscilla-glitz-cream-w-maroon-stitching.webp?width=80&height=80&crop=top",
];

async function renderApp() {
  try {
    const response = await fetch("./priscilla-suede.json");
    const productData = await response.json();
    console.log(productData);

    const navbarHtml = await engine.parseAndRender(Navbar, {});
    const productHtml = await engine.parseAndRender(Product, {
      productVariants,
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
