import { n as noop, c as create_ssr_component, g as getContext, a as subscribe, e as escape, b as each, d as add_attribute, v as validate_component, m as missing_component, f as add_classes, h as null_to_empty } from "../../chunks/index-b578fde4.js";
import { L as Logo } from "../../chunks/index-477420ee.js";
import { a as assets } from "../../chunks/paths-396f020f.js";
function cubicInOut(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
var _ = {
  $(selector) {
    if (typeof selector === "string") {
      return document.querySelector(selector);
    }
    return selector;
  },
  extend(...args) {
    return Object.assign(...args);
  },
  cumulativeOffset(element) {
    let top = 0;
    let left = 0;
    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);
    return {
      top,
      left
    };
  },
  directScroll(element) {
    return element && element !== document && element !== document.body;
  },
  scrollTop(element, value) {
    let inSetter = value !== void 0;
    if (this.directScroll(element)) {
      return inSetter ? element.scrollTop = value : element.scrollTop;
    } else {
      return inSetter ? document.documentElement.scrollTop = document.body.scrollTop = value : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
  },
  scrollLeft(element, value) {
    let inSetter = value !== void 0;
    if (this.directScroll(element)) {
      return inSetter ? element.scrollLeft = value : element.scrollLeft;
    } else {
      return inSetter ? document.documentElement.scrollLeft = document.body.scrollLeft = value : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
    }
  }
};
const defaultOptions = {
  container: "body",
  duration: 500,
  delay: 0,
  offset: 0,
  easing: cubicInOut,
  onStart: noop,
  onDone: noop,
  onAborting: noop,
  scrollX: false,
  scrollY: true
};
const setGlobalOptions = (options) => {
  _.extend(defaultOptions, options || {});
};
var back_svelte_svelte_type_style_lang = "";
var submit_svelte_svelte_type_style_lang = "";
var mailerLite_svelte_svelte_type_style_lang = "";
const css$c = {
  code: '.sub-wrapper.svelte-1b57gpu.svelte-1b57gpu{--from-gap:13px;--sub-wrapper-padding:0 29px 1.5rem;padding:var(--sub-wrapper-padding);position:relative}.sub-box.svelte-1b57gpu.svelte-1b57gpu{display:grid;grid-auto-flow:row;grid-template-columns:1fr;row-gap:2rem}.sub-msg.svelte-1b57gpu.svelte-1b57gpu{align-self:center}@media(min-width: 960px){.sub-wrapper.svelte-1b57gpu.svelte-1b57gpu{--sub-wrapper-padding:70px 0 40px;grid-column:1 / -1;grid-row:1 / 2;border-bottom:1px solid var(--footer-nav-border-color)}.sub-wrapper.svelte-1b57gpu .sub-box.svelte-1b57gpu{grid-auto-flow:column;grid-template-columns:1fr auto;row-gap:2rem}}.sub-wrapper input{font-family:var(--inter), Arial, Helvetica, sans-serif !important;font-size:var(--input-font-size) !important;color:var(--input-color) !important;line-height:var(--input-line-height) !important;height:var(--input-height) !important;padding:var(--input-padding) !important;background:var(--input-bg) !important;border-width:var(--input-border-width) !important;border-color:var(--input-border-color) !important;border-style:var(--input-border-type) !important;border-radius:var(--input-border-radius) !important;transition-property:border-color, color, background-color !important;transition-duration:0.25s !important;transition-timing-function:ease-in-out !important;font-display:swap}* *.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button[type="submit"].primary:not(:disabled):not([style]){font-family:var(--inter), Arial, Helvetica, sans-serif !important;font-size:var(--input-font-size) !important;color:var(--input-color) !important;line-height:var(--input-line-height) !important;height:var(--input-height) !important;padding:var(--input-padding) !important;background-color:var(--input-bg) !important;border-width:var(--input-border-width) !important;border-color:var(--input-border-color) !important;border-style:var(--input-border-type) !important;border-radius:var(--input-border-radius) !important;transition-property:border-color, color, background-color !important;transition-duration:0.25s !important;transition-timing-function:ease-in-out !important;min-width:var(--input-btn-width) !important;width:var(--input-btn-width);font-weight:var(--input-btn-font-weight) !important;align-items:center !important;justify-content:center !important;display:inline-grid !important;font-display:swap}.sub-wrapper .sub-form form button[type="submit"].primary{font-family:var(--inter), Arial, Helvetica, sans-serif !important;font-size:var(--input-font-size) !important;color:var(--input-color) !important;line-height:var(--input-line-height) !important;height:var(--input-height) !important;padding:var(--input-padding) !important;background-color:var(--input-bg) !important;border-width:var(--input-border-width) !important;border-color:var(--input-border-color) !important;border-style:var(--input-border-type) !important;border-radius:var(--input-border-radius) !important;transition-property:border-color, color, background-color !important;transition-duration:0.25s !important;transition-timing-function:ease-in-out !important;min-width:var(--input-btn-width) !important;width:var(--input-btn-width);font-weight:var(--input-btn-font-weight) !important;align-items:center !important;justify-content:center !important;display:inline-grid !important;font-display:swap}.sub-wrapper input[type="email"], .sub-wrapper input[type="text"]{font-size:var(--input-text-font-size) !important;color:var(--input-text-color) !important;font-weight:var(--input-text-font-weight) !important;line-height:var(--input-text-line-height) !important;box-shadow:0 0 0 0 var(--color-error) !important;transition:box-shadow 0.3s ease-in-out, background 0.3s ease-in-out !important}.sub-wrapper input[type="email"]:focus, .sub-wrapper input[type="text"]:focus{background:var(--input-text-focus-bg) !important}.sub-wrapper input:disabled, .sub-wrapper button:disabled{color:var(--input-disabled-color) !important;background:var(--input-disabled-bg) !important;border-color:var(--input-disabled-brdr-color) !important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal{display:grid;grid-auto-flow:column;grid-template-columns:1fr;grid-template-rows:1fr}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal > button{grid-column:1/-1;grid-row:1/-1}@media(min-width: 960px){.sub-wrapper button:not(:disabled):hover{cursor:pointer !important}}',
  map: null
};
const MailerLite = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$c);
  return `<div class="${"sub-wrapper svelte-1b57gpu"}"><div class="${"sub-box svelte-1b57gpu"}"><div class="${"sub-msg p-large svelte-1b57gpu"}">Join our mailing list to stay on top of latest promotions and offers</div>
        <div class="${"ml-form-embed sub-form"}" data-account="${"3699446:b2k9f5k0b8"}" data-form="${"5212676:c6u9w0"}"></div></div>
</div>`;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var NavMaker_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".heading.svelte-121ytaq{--heading-font-size:15px;--heading-font-weight:700;--heading-color:var(--black);--heading-line-height:24px;--heading-height:24px;--heading-margin-b:4px;font-size:var(--heading-font-size);font-weight:var(--heading-font-weight);color:var(--heading-color);line-height:var(--heading-line-height);height:var(--heading-height);margin-bottom:var(--heading-margin-b)}ul.svelte-121ytaq{--row-gap:0.5rem;display:grid;grid-auto-flow:row;grid-template-columns:1fr;row-gap:var(--row-gap)}li.svelte-121ytaq{display:inline-block;width:100%}a.svelte-121ytaq{--font-size:15px;text-decoration:none;font-size:var(--font-size);letter-spacing:var(--letter-spacing)}@media(prefers-color-scheme: dark){.heading.svelte-121ytaq{--heading-color:var(--white)}}",
  map: null
};
const NavMaker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { title } = $$props;
  let { items } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  $$result.css.add(css$b);
  $$unsubscribe_page();
  return `<div class="${"heading svelte-121ytaq"}">${escape(title)}</div>
<ul class="${"svelte-121ytaq"}">${each(items, (item) => {
    return `<li class="${["svelte-121ytaq", $page.url.pathname === item.path ? "active" : ""].join(" ").trim()}">${item.internal === true ? `<a sveltekit:prefetch${add_attribute("href", item.path, 0)} class="${"svelte-121ytaq"}">${escape(item.text)}</a>` : `${item.internal === false ? `<a${add_attribute("href", item.path, 0)} rel="${"external"}" class="${"svelte-121ytaq"}">${escape(item.text)}</a>` : `<a${add_attribute("href", item.path, 0)} class="${"svelte-121ytaq"}">${escape(item.text)}</a>`}`}
		</li>`;
  })}
</ul>`;
});
const main_nav = {
  list: [
    {
      path: "/",
      text: "Home",
      type: "link",
      internal: true
    },
    {
      path: "https://blog.fx.land/",
      text: "Blog",
      type: "link",
      internal: true
    },
    {
      path: "/about",
      text: "About Us",
      type: "link",
      internal: true
    },
    {
      path: "https://fx.land/nft/",
      text: "NFT",
      type: "link",
      internal: false
    },
    {
      path: "https://fx.land/mine/",
      text: "FULA Protocol",
      type: "link",
      internal: false
    }
  ],
  cta: {
    path: "https://fx.land/nft/",
    text: "Pre-Register",
    type: "scroll",
    refrence: "preorder"
  }
};
const copyright_nav = {
  list: [
    {
      path: "/#privacy",
      text: "Privacy Policy",
      type: "link",
      internal: false
    },
    {
      path: "/#terms",
      text: "Terms and Conditions",
      type: "link",
      internal: false
    },
    {
      path: "/#referral-guidelines",
      text: "Referral Guidelines",
      type: "link",
      internal: false
    }
  ]
};
const company_nav = {
  title: "Company",
  items: [
    {
      path: "/about",
      text: "About Us",
      type: "link",
      internal: true
    },
    {
      path: "/#contact",
      text: "Contact Us",
      type: "link",
      internal: false
    },
    {
      path: "https://fx.land/nft/",
      text: "NFT",
      type: "link",
      internal: false
    }
  ]
};
const help_nav = {
  title: "Get Help",
  items: [
    {
      path: "/#faq",
      text: "Frequently Asked Questions",
      type: "link",
      internal: false
    },
    {
      path: "/#support",
      text: "Support",
      type: "link",
      internal: false
    },
    {
      path: "/#wishlist",
      text: "Wishlist",
      type: "link",
      internal: false
    }
  ]
};
const resources_nav = {
  title: "Resources",
  items: [
    {
      path: "https://fx.land/FulaWP",
      text: "Whitepaper",
      type: "link",
      internal: false
    },
    {
      path: "https://drive.google.com/file/d/1FGbvyUQqTdjWYml95V3DVooUjo6w7xFe/view?usp=sharing",
      text: "Branding Guidelines",
      type: "link",
      internal: false
    },
    {
      path: "https://fx.land/mine/",
      text: "FULA Protocol",
      type: "link",
      internal: false
    }
  ]
};
const social_nav = [
  {
    url: "https://discord.gg/k9UybUBdBB",
    name: "Discord",
    width: "28px",
    height: "21.34px"
  },
  {
    url: "https://twitter.com/functionland",
    name: "Twitter",
    width: "28px",
    height: "22.75px"
  },
  {
    url: "https://github.com/functionland",
    name: "GitHub",
    width: "28px",
    height: "27.31px"
  },
  {
    url: "https://t.me/functionland",
    name: "Telegram",
    width: "28px",
    height: "28px"
  },
  {
    url: "https://www.instagram.com/functionland.official",
    name: "Instagram",
    width: "28px",
    height: "28px"
  },
  {
    url: "https://www.linkedin.com/company/functionland",
    name: "LinkedIn",
    width: "28px",
    height: "28px"
  }
];
var FooterNav_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "div.svelte-1y46k7g{--padding:7px 15px 13px;--gap:1rem;--columns:1fr 1fr;--rows:1fr 1fr;display:grid;grid-template-columns:var(--columns);grid-template-rows:var(--rows);padding:var(--padding);row-gap:var(--gap)}nav.svelte-1y46k7g:nth-child(3){--column:1 / 3;grid-column:var(--column)}@media(min-width: 960px){div.svelte-1y46k7g{--padding:0;--columns:1fr 1fr 1fr;--rows:1fr;align-items:center}nav.svelte-1y46k7g:nth-child(3){--column:3}}",
  map: null
};
const FooterNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `<div class="${"svelte-1y46k7g"}"><nav class="${"svelte-1y46k7g"}">${validate_component(NavMaker, "NavMaker").$$render($$result, Object.assign(company_nav), {}, {})}</nav>
	<nav class="${"svelte-1y46k7g"}">${validate_component(NavMaker, "NavMaker").$$render($$result, Object.assign(resources_nav), {}, {})}</nav>
	<nav class="${"svelte-1y46k7g"}">${validate_component(NavMaker, "NavMaker").$$render($$result, Object.assign(help_nav), {}, {})}</nav>
</div>`;
});
var discord_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "svg.svelte-18b5yxc{fill:var(--svg-soc-fill);transition:fill 0.2s ease-in-out;width:45px;height:34px}@media(min-width: 960px){svg.svelte-18b5yxc{width:28px;height:21px}svg.svelte-18b5yxc:hover{fill:var(--svg-soc-hover)}}",
  map: null
};
const Discord = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$9);
  return `



<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 16 16"}" class="${"svelte-18b5yxc"}"><path d="${"M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"}"></path></svg>`;
});
var twitter_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: "svg.svelte-8pytat{fill:var(--svg-soc-fill);transition:fill 0.2s ease-in-out;width:45px;height:37px}@media(min-width: 960px){svg.svelte-8pytat{width:28px;height:23px}svg.svelte-8pytat:hover{fill:var(--svg-soc-hover)}}",
  map: null
};
const Twitter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$8);
  return `



<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 16 16"}" class="${"svelte-8pytat"}"><path d="${"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"}"></path></svg>`;
});
var github_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "svg.svelte-xcz923{fill:var(--svg-soc-fill);transition:fill 0.2s ease-in-out;width:45px;height:44px}@media(min-width: 960px){svg.svelte-xcz923{width:28px;height:27px}svg.svelte-xcz923:hover{fill:var(--svg-soc-hover)}}",
  map: null
};
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$7);
  return `



<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 16 16"}" class="${"svelte-xcz923"}"><path d="${"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}"></path></svg>`;
});
var instagram_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "svg.svelte-7zrsd7{fill:var(--svg-soc-fill);transition:fill 0.2s ease-in-out;width:45px;height:45px}@media(min-width: 960px){svg.svelte-7zrsd7{width:28px;height:28px}svg.svelte-7zrsd7:hover{fill:var(--svg-soc-hover)}}",
  map: null
};
const Instagram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$6);
  return `



<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 16 16"}" class="${"svelte-7zrsd7"}"><path d="${"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}"></path></svg>`;
});
var linkedin_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "svg.svelte-7zrsd7{fill:var(--svg-soc-fill);transition:fill 0.2s ease-in-out;width:45px;height:45px}@media(min-width: 960px){svg.svelte-7zrsd7{width:28px;height:28px}svg.svelte-7zrsd7:hover{fill:var(--svg-soc-hover)}}",
  map: null
};
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$5);
  return `



<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 16 16"}" class="${"svelte-7zrsd7"}"><path d="${"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"}"></path></svg>`;
});
var telegram_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "svg.svelte-7zrsd7{fill:var(--svg-soc-fill);transition:fill 0.2s ease-in-out;width:45px;height:45px}@media(min-width: 960px){svg.svelte-7zrsd7{width:28px;height:28px}svg.svelte-7zrsd7:hover{fill:var(--svg-soc-hover)}}",
  map: null
};
const Telegram = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$4);
  return `



<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 16 16"}" class="${"svelte-7zrsd7"}"><path d="${"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"}"></path></svg>`;
});
const GetIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  return `${name === "Discord" ? `${validate_component(Discord || missing_component, "svelte:component").$$render($$result, { width, height }, {}, {})}` : `${name === "Twitter" ? `${validate_component(Twitter || missing_component, "svelte:component").$$render($$result, { width, height }, {}, {})}` : `${name === "GitHub" ? `${validate_component(Github || missing_component, "svelte:component").$$render($$result, { width, height }, {}, {})}` : `${name === "Telegram" ? `${validate_component(Telegram || missing_component, "svelte:component").$$render($$result, { width, height }, {}, {})}` : `${name === "Instagram" ? `${validate_component(Instagram || missing_component, "svelte:component").$$render($$result, { width, height }, {}, {})}` : `${name === "LinkedIn" ? `${validate_component(Linkedin || missing_component, "svelte:component").$$render($$result, { width, height }, {}, {})}` : ``}`}`}`}`}`}`;
});
var Social_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-1iodstx{--social-padding:40px 0;border:1px solid var(--footer-nav-border-color);border-right:0;border-left:0;padding:var(--social-padding)}ul.svelte-1iodstx{--row-gap:40px;display:grid;grid-auto-flow:row;grid-template-columns:repeat(3, 1fr);grid-auto-rows:auto;grid-template-rows:1fr 1fr;row-gap:var(--row-gap);align-items:center;justify-items:center}a.svelte-1iodstx{--size:50px;display:grid;align-items:center;justify-items:center;text-decoration:none;width:var(--size);height:var(--size)}@media(min-width: 960px){nav.svelte-1iodstx{--social-padding:0;border:none;align-items:center;display:grid}ul.svelte-1iodstx{--row-gap:40px;column-gap:20px}a.svelte-1iodstx{--size:auto}}",
  map: null
};
const Social = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<nav class="${"svelte-1iodstx"}"><ul class="${"svelte-1iodstx"}">${each(social_nav, (social) => {
    return `<li><a target="${"_blank"}"${add_attribute("href", social.url, 0)} aria-label="${"FunctionLand on " + escape(social.name)}" class="${"svelte-1iodstx"}">${validate_component(GetIcon, "GetIcon").$$render($$result, {
      name: social.name,
      width: social.width,
      height: social.height
    }, {}, {})}</a>
			</li>`;
  })}</ul>
</nav>`;
});
var Copyright_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".copyright.svelte-1m8fe59{--padding:40px 15px;padding:var(--padding);font-size:var(--small-f-size)}ul.svelte-1m8fe59{margin-bottom:1rem;display:grid;width:100%;row-gap:0.5rem;grid-auto-rows:24px}@media(min-width: 960px){.copyright.svelte-1m8fe59{--padding:40px 0 80px;grid-row:3 / 4;grid-column:1 / -1;display:grid;grid-auto-flow:columns;grid-template-columns:1fr auto;align-items:center;align-content:center;height:30px;border-top:1px solid var(--footer-nav-border-color)}ul.svelte-1m8fe59{grid-auto-flow:column;grid-auto-rows:unset;grid-column:2/3;grid-row:1/-1;grid-auto-rows:unset;align-items:center;align-content:center;height:100%;margin-bottom:0;column-gap:40px}div.svelte-1m8fe59{grid-row:1/-1;grid-column:1/2}}",
  map: null
};
const startYear = "2022";
const Copyright = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const currentYear = new Date().getFullYear();
  let yearString = "";
  if (currentYear >= startYear) {
    yearString = startYear + " - " + currentYear;
  } else {
    yearString = startYear;
  }
  const navItems = copyright_nav.list;
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<div class="${"copyright svelte-1m8fe59"}"><ul class="${"svelte-1m8fe59"}">${each(navItems, (navItem) => {
    return `<li${add_classes(($page.url.pathname === navItem.path ? "active" : "").trim())}><a sveltekit:prefetch${add_attribute("href", navItem.path, 0)}>${escape(navItem.text)}</a>
			</li>`;
  })}</ul>
	<div class="${"svelte-1m8fe59"}">\xA9 <a sveltekit:prefetch href="${"/"}">Functionland</a>, Inc. ${escape(yearString)}.
	</div>
</div>`;
});
var index_svelte_svelte_type_style_lang$1 = "";
const css$1 = {
  code: "footer.svelte-1de7dx5{width:100%;position:relative;z-index:1;background:var(--bkg)}.container.svelte-1de7dx5{display:grid;grid-auto-flow:row;grid-template-columns:1fr}.logo-link.svelte-1de7dx5{--padding:41px 0;--min-height:109px;--width:100%;align-items:center;align-content:center;position:relative;z-index:1;min-height:var(--min-height);padding:var(--padding);width:var(--width);grid-template-columns:1fr;grid-template-rows:var(--min-height);display:grid;justify-items:center;justify-content:center;border:1px solid var(--footer-nav-border-color);border-left:none;border-right:none}@media(min-width: 960px){footer.svelte-1de7dx5{margin:0 auto}.container.svelte-1de7dx5{--columns:1fr;grid-template-columns:var(--columns);grid-template-rows:auto 1fr auto}.logo-link.svelte-1de7dx5{--padding:0;--min-height:unset;--width:auto;border:none;justify-items:start}.d-container.svelte-1de7dx5{display:grid;padding:50px 0 60px;grid-auto-flow:column;grid-column-gap:40px}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1de7dx5"}"><div class="${"container svelte-1de7dx5"}">
		${validate_component(MailerLite, "MailerLite").$$render($$result, {}, {}, {})}
		<div class="${"d-container svelte-1de7dx5"}"><a sveltekit:prefetch href="${"/"}" class="${"logo-link svelte-1de7dx5"}" title="${"FunctionLand"}">${validate_component(Logo, "Logo").$$render($$result, { type: "portrait" }, {}, {})}</a>
			${validate_component(FooterNav, "FooterNav").$$render($$result, {}, {}, {})}
			${validate_component(Social, "Social").$$render($$result, {}, {}, {})}</div>
		${validate_component(Copyright, "Copyright").$$render($$result, {}, {}, {})}</div>
</footer>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1xr84fp.svelte-1xr84fp{position:fixed;z-index:10;background:var(--header-bg);width:100%;height:var(--header-height);top:0;left:0;right:0}.logo-link.svelte-1xr84fp.svelte-1xr84fp{align-items:center;align-content:center;position:relative;z-index:1;height:var(--header-height);width:157px;grid-template-columns:1fr;grid-template-rows:var(--header-height);display:grid}ul.svelte-1xr84fp.svelte-1xr84fp{position:relative;padding:0;margin:0;height:3em;display:grid;grid-template-columns:1fr;grid-auto-rows:50px;justify-content:start;align-items:center;align-content:start;height:100%;list-style:none}li.svelte-1xr84fp.svelte-1xr84fp{position:relative;height:100%}li.svelte-1xr84fp a.svelte-1xr84fp::before{content:'';width:0;height:0;position:absolute;bottom:0;border-bottom:2px solid transparent;left:13px;transition:border-bottom-color 0.2s ease-in-out, width 0.2s ease-in-out, left 0.2s ease-in-out,\r\n			right 0.2s ease-in-out;transform-origin:50% 50%}li.active.svelte-1xr84fp a.svelte-1xr84fp::before{width:50%;left:calc(100% - 13px - 50%);border-bottom-color:var(--active-menu-border-color)}li.svelte-1xr84fp a.svelte-1xr84fp{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--menu-item-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}nav.svelte-1xr84fp.svelte-1xr84fp{display:grid;justify-content:start;grid-template-columns:1fr;grid-template-rows:1fr auto;overflow:hidden;width:100%}.wrapper.svelte-1xr84fp.svelte-1xr84fp{display:flex;flex-direction:row;height:var(--header-height);align-items:center;align-content:center;background:var(--header-bg);gap:3rem}@media(min-width: 960px){.toggle-menu.svelte-1xr84fp.svelte-1xr84fp{display:none}li.svelte-1xr84fp:not(.active):hover a.svelte-1xr84fp{color:var(--menu-item-hover-color)}li.svelte-1xr84fp:not(.active):hover a.svelte-1xr84fp::before{width:50%;border-bottom-color:var(--hover-menu-border-color)}.overlay.svelte-1xr84fp.svelte-1xr84fp{display:none}nav.svelte-1xr84fp.svelte-1xr84fp,ul.svelte-1xr84fp.svelte-1xr84fp{grid-auto-flow:column;grid-template-columns:unset;grid-template-rows:unset;grid-auto-rows:100%}nav.svelte-1xr84fp.svelte-1xr84fp{grid-template-columns:1fr auto;justify-items:space-between}}@media(max-width: 959px){:root{--menuopen-border-color:var(--b-o-1)}.overlay.svelte-1xr84fp.svelte-1xr84fp{background:var(--b-o-4);pointer-events:none;position:absolute;left:0;top:0;bottom:0;right:0;height:100vh;z-index:-2;opacity:0;transition:0.25s opacity 0.15s ease-in-out}.header-buttons.svelte-1xr84fp.svelte-1xr84fp{height:var(--header-height);width:100%;display:flex;justify-content:space-between;grid-template-columns:157px auto;align-content:center;align-items:center;background:var(--header-bg);z-index:1;position:relative;padding:0 15px}.header-buttons.svelte-1xr84fp.svelte-1xr84fp:after{content:'';width:0;position:absolute;top:var(--header-height);right:0;opacity:0;border-bottom:1px solid var(--menuopen-border-color);transition:0.35s width 0s ease-in-out, 0.55s opacity 0s ease-in-out;will-change:width, opacity}nav.svelte-1xr84fp.svelte-1xr84fp{position:absolute;background:var(--header-bg);left:35%;bottom:0;opacity:0;top:var(--header-height);pointer-events:none;border-left:1px solid transparent;transform:translateX(100%);transition:0.15s transform 0.3s ease-in-out, 0.15s opacity 0.3s ease-in-out,\r\n				border-left-color 0.3s ease-in-out, 0.3s width 0.3s ease-in-out, 0.3s width 0.3s ease-in-out;z-index:-1;width:65%;height:calc(100vh - var(--header-height))}li.svelte-1xr84fp.svelte-1xr84fp{opacity:0;transform:translateX(100%)}li.active.svelte-1xr84fp a.svelte-1xr84fp::before{border-bottom-color:var(--menuopen-border-color)}ul.svelte-1xr84fp li.svelte-1xr84fp:nth-child(1){transition:0.35s transform 0.1s ease-in-out, 0.35s opacity 0.1s ease-in-out}ul.svelte-1xr84fp li.svelte-1xr84fp:nth-child(2){transition:0.35s transform 0.15s ease-in-out, 0.35s opacity 0.15s ease-in-out}ul.svelte-1xr84fp li.svelte-1xr84fp:nth-child(3){transition:0.35s transform 0.2s ease-in-out, 0.35s opacity 0.2s ease-in-out}ul.svelte-1xr84fp li.svelte-1xr84fp:nth-child(4){transition:0.35s transform 0.25s ease-in-out, 0.35s opacity 0.25s ease-in-out}ul.svelte-1xr84fp li.svelte-1xr84fp:nth-child(5){transition:0.35s transform 0.3s ease-in-out, 0.35s opacity 0.3s ease-in-out}ul.svelte-1xr84fp li a.svelte-1xr84fp::before{left:calc((100% - 13px - 50%) * -1.2);transition:border-bottom-color 0.2s ease-in-out, width 0.2s ease-in-out,\r\n				0.45s left 0s ease-in-out}ul.svelte-1xr84fp li.active a.svelte-1xr84fp::before{transition:border-bottom-color 0.2s ease-in-out, width 0.2s ease-in-out,\r\n				0.45s left 0s ease-in-out;left:calc(((100% * -1) - 13px - 50%) * 1.2)}.open.svelte-1xr84fp ul li.svelte-1xr84fp{opacity:1;transform:translateX(0)}.open.svelte-1xr84fp li.active a.svelte-1xr84fp::before{left:calc((100% - 13px - 50%) * 1);transition:border-bottom-color 0.2s ease-in-out, width 0.2s ease-in-out,\r\n				0.45s left 0.15s ease-in-out}nav.open.svelte-1xr84fp.svelte-1xr84fp{opacity:1;pointer-events:all;transform:translateX(0%);border-left-color:var(--menuopen-border-color)}.header-buttons.open.svelte-1xr84fp.svelte-1xr84fp:after{transition:0.45s width 0.2s ease-in-out, 0.25s opacity 0.2s ease-in-out;width:100%;opacity:1}.overlay.open.svelte-1xr84fp.svelte-1xr84fp{transition:0.35s opacity 0.15s ease-in-out;pointer-events:all;opacity:1}.cta.svelte-1xr84fp.svelte-1xr84fp{display:grid;padding:1rem 10px;grid-template-columns:auto;align-content:center;justify-content:end;text-align:revert}.btn-cta.svelte-1xr84fp.svelte-1xr84fp{opacity:0;transform:translateX(-100%);transition:0.35s opacity 0s ease-in-out, 0.35s transform 0s ease-in-out}.open.svelte-1xr84fp .btn-cta.svelte-1xr84fp{opacity:1;transform:translateX(0);transition:0.3s opacity 0.35s ease-in-out, 0.3s transform 0.35s ease-in-out}}@media(min-width: 960px){.wrapper.svelte-1xr84fp.svelte-1xr84fp{position:relative;z-index:2;padding:0 20px;margin:0 auto;z-index:2;background:var(--header-bg);width:100%;height:100%;max-width:var(--container-max-width)}header.svelte-1xr84fp.svelte-1xr84fp::after{content:'';background:var(--header-bg);left:0;right:0;top:0;position:fixed;height:60px;z-index:1}header.svelte-1xr84fp.svelte-1xr84fp::before{content:'';position:absolute;top:15px;height:25px;width:100%;left:0;right:0;z-index:0;box-shadow:0 4px 30px 0 var(--text-color)}}@media(max-width: 959px){header.svelte-1xr84fp.svelte-1xr84fp{padding:0}}@media(prefers-color-scheme: dark){:root{--menuopen-border-color:var(--w-o-3)}}@media(prefers-color-scheme: dark) and (max-width: 959px){.toggle-menu.svelte-1xr84fp img.svelte-1xr84fp{transition:filter 0.2s ease-in-out}.toggle-menu.svelte-1xr84fp img.svelte-1xr84fp{filter:invert(1)}.overlay.svelte-1xr84fp.svelte-1xr84fp{background:var(--b-o-5)}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navClass;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const menuIcon = assets + "images/layout/menu.png";
  const navItems = main_nav.list;
  const ctaItem = main_nav.cta;
  let notransitionClass = "no-transition";
  $$result.css.add(css);
  navClass = `close`;
  $$unsubscribe_page();
  return `

<header class="${"svelte-1xr84fp"}"><div class="${"wrapper svelte-1xr84fp"}"><div class="${escape(`overlay ${notransitionClass} ${navClass}`) + " svelte-1xr84fp"}"></div>
		<div class="${escape(null_to_empty(`header-buttons ${notransitionClass} ${navClass}`)) + " svelte-1xr84fp"}"><a sveltekit:prefetch href="${"/"}" class="${"logo-link svelte-1xr84fp"}" title="${"FunctionLand"}">${validate_component(Logo, "Logo").$$render($$result, { type: "default" }, {}, {})}</a>
			<button class="${"toggle-menu svelte-1xr84fp"}"><img${add_attribute("src", menuIcon, 0)} alt="${"Menu"}" height="${"26"}" width="${"26"}" class="${"svelte-1xr84fp"}"></button>
			</div>
		<nav class="${escape(null_to_empty(`${notransitionClass} ${navClass}`)) + " svelte-1xr84fp"}"><ul class="${"svelte-1xr84fp"}">${each(navItems, (navItem) => {
    return `<li class="${["svelte-1xr84fp", $page.url.pathname === navItem.path ? "active" : ""].join(" ").trim()}">${navItem.internal === true ? `<a sveltekit:prefetch${add_attribute("href", navItem.path, 0)} class="${"svelte-1xr84fp"}">${escape(navItem.text)}</a>` : `${navItem.internal === false ? `<a${add_attribute("href", navItem.path, 0)} rel="${"external"}" class="${"svelte-1xr84fp"}">${escape(navItem.text)}</a>` : `<a${add_attribute("href", navItem.path, 0)} class="${"svelte-1xr84fp"}">${escape(navItem.text)}</a>`}`}
					</li>`;
  })}</ul>
			<div class="${"cta svelte-1xr84fp"}"><button class="${"btn btn-cta svelte-1xr84fp"}">${escape(ctaItem.text)}</button></div></nav></div>
</header>`;
});
var app = "";
var animations = "";
const prerender = true;
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setGlobalOptions({ offset: -60 });
  return `${$$result.head += `<script data-svelte="svelte-1rduoeq">(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
_.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
var ml_account = ml('accounts', '3699446', 'b2k9f5k0b8', 'load');
<\/script>`, ""}


${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default, prerender };
