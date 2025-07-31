import Alpine from "alpinejs";
import { Liquid } from "liquidjs";
import Navbar from "./components/Navbar.liquid?raw";
import Product from "./components/Product.liquid?raw";
import Suggestions from "./components/Suggestions.liquid?raw";
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

const suggestionsVariants = [
  {
    src: "//www.lucchese.com/cdn/shop/files/updated_L_W2241_Hero.jpg?v=1723002102&width=533",
    title: "Smooth Mad Dog Goat",
    price: "$149",
  },
  {
    src: "//www.lucchese.com/cdn/shop/files/N1156.73-2004_Right.jpg?v=1745872076&width=533",
    title: "Luke",
    price: "$895",
  },
  {
    src: "//www.lucchese.com/cdn/shop/files/updated_L_W9411_Hero.jpg?v=1722566009&width=533",
    title: "Ultra Belly Caiman",
    price: "$339",
  },
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
    const suggestionsHtml = await engine.parseAndRender(Suggestions, {
      suggestionsVariants,
    });

    document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
      ${navbarHtml}
      ${productHtml}
      ${suggestionsHtml}
    `;

    Alpine.initTree(document.getElementById("app"));
  } catch (error) {
    console.error("Rendering error:", error);
  }
}

renderApp();
