import { c as create_ssr_component } from "../../../chunks/index-b578fde4.js";
import { d as dev, b as browser } from "../../../chunks/env-14926626.js";
const hydrate = dev;
const router = browser;
const prerender = true;
const Nft = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>NFT</title>`, ""}`, ""}
<div class="${"content"}"><h1>FXLAND NFT</h1></div>`;
});
export { Nft as default, hydrate, prerender, router };
