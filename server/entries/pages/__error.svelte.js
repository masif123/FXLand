import { c as create_ssr_component, d as add_attribute, v as validate_component, m as missing_component, e as escape } from "../../chunks/index-b578fde4.js";
import { L as Logo } from "../../chunks/index-477420ee.js";
var error_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "svg.svelte-1y9zgjx{max-width:100%;height:auto;display:block;fill:var(--err-svg-color);transition:fill 0.2s ease-in-out}",
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$2);
  return `



<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 504 504"}" class="${"svelte-1y9zgjx"}"><path d="${"M175.28,0h154V154h-154Z"}"></path><path d="${"M175.28,350h154V504h-154Z"}"></path><path d="${"M350,175.28H504v154H350Z"}"></path><path d="${"M350,0H504V154H350Z"}"></path><path d="${"M350,350H504V504H350Z"}"></path><path d="${"M0,175.28H154v154H0Z"}"></path><path d="${"M0,0H154V154H0Z"}"></path><path d="${"M0,350H154V504H0Z"}"></path><path d="${"M222.32,321.44,252,291.76l29.68,29.68,39.76-39.76L291.76,252l29.68-29.68-39.76-39.76L252,212.24l-29.68-29.68-39.76,39.76L212.24,252l-29.68,29.68Zm-19.6-99.12,19.6-19.6L252,232.4l29.68-29.68,19.6,19.6L271.6,252l29.68,29.68-19.6,19.6L252,271.6l-29.68,29.68-19.6-19.6L232.4,252Z"}"></path></svg>`;
});
const ErrorScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { message } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  return `<section><div class="${"title"}">Oops!...</div>
	${validate_component(Error$1 || missing_component, "svelte:component").$$render($$result, { width: 404, height: 404, class: "icon" }, {}, {})}
	<div class="${"message"}">An error has occurred!</div>
	<div class="${"error"}"><div class="${"err-status"}">${escape(status)}</div>
		<div class="${"err-message"}">${escape(message)}</div></div>
	<a sveltekit:prefetch href="${"/"}" class="${"logo-link"}" title="${"FunctionLand"}">${validate_component(Logo, "Logo").$$render($$result, { type: "mark" }, {}, {})}
		<span>Click here to go to FunctionLand&#39;s home page and find out more about the box!</span></a></section>`;
});
var _404_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "svg.svelte-6sert9{max-width:100%;height:auto;display:block;fill:var(--svg-soc-fill);transition:fill 0.2s ease-in-out}",
  map: null
};
const _404 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { width } = $$props;
  let { height } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css$1);
  return `



<svg${add_attribute("width", width, 0)}${add_attribute("height", height, 0)} viewBox="${"0 0 504 504"}" class="${"svelte-6sert9"}"><path d="${"M175.28,0h154V154h-154Z"}"></path><path d="${"M175.28,350h154V504h-154Z"}"></path><path d="${"M350,175.28H504v154H350Z"}"></path><path d="${"M350,0H504V154H350Z"}"></path><path d="${"M350,350H504V504H350Z"}"></path><path d="${"M0,175.28H154v154H0Z"}"></path><path d="${"M0,0H154V154H0Z"}"></path><path d="${"M0,350H154V504H0Z"}"></path><path d="${"M301.28,329.28h28v-28h-14v14h-14Z"}"></path><path d="${"M213.92,315.28H246.4v14H213.92Z"}"></path><path d="${"M257.6,315.28h32.48v14H257.6Z"}"></path><path d="${"M203.28,315.28h-14v-14h-14v28h28Z"}"></path><path d="${"M175.28,213.92h14V246.4h-14Z"}"></path><path d="${"M175.28,257.6h14v32.48h-14Z"}"></path><path d="${"M189.28,189.28h14v-14h-28v28h14Z"}"></path><path d="${"M213.92,175.28H246.4v14H213.92Z"}"></path><path d="${"M257.6,175.28h32.48v14H257.6Z"}"></path><path d="${"M329.28,175.28h-28v14h14v14h14Z"}"></path><path d="${"M315.28,257.6h14v32.48h-14Z"}"></path><path d="${"M315.28,213.92h14V246.4h-14Z"}"></path></svg>`;
});
var NotFoundScreen_svelte_svelte_type_style_lang = "";
const css = {
  code: ".title.svelte-1rgqtlq{font-size:2.5rem;font-weight:bold;margin-bottom:1rem;color:var(--err-svg-color)}.icon.svelte-1rgqtlq{max-width:300px}",
  map: null
};
const NotFoundScreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  let { message } = $$props;
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  $$result.css.add(css);
  return `

<section class="${"container"}"><div class="${"err-box"}"><div class="${"title svelte-1rgqtlq"}">Oops!...</div>
		<div class="${"icon svelte-1rgqtlq"}">${status == 404 ? `${validate_component(_404, "Error404").$$render($$result, { width: 404, height: 404 }, {}, {})}` : `${validate_component(Error$1, "Error").$$render($$result, { width: 404, height: 404 }, {}, {})}`}</div>
		<div class="${"message"}">An error has occurred!</div>
		<div class="${"error"}"><div class="${"err-status"}">${escape(status)}</div>
			<div class="${"err-message"}">${escape(message)}</div></div>
		<a sveltekit:prefetch href="${"/"}" class="${"logo-link"}" title="${"FunctionLand"}">
			<span>Click here to go to FunctionLand&#39;s home page and find out more about the box!</span></a></div>
</section>`;
});
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  let { status } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `${status == 404 ? `
	${validate_component(NotFoundScreen, "NotFoundScreen").$$render($$result, { status, message }, {}, {})}` : `${validate_component(ErrorScreen, "ErrorScreen").$$render($$result, { status, message }, {}, {})}`}`;
});
const prerender = true;
function load({ error, status }) {
  return {
    props: { message: error.message, status }
  };
}
const _error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message } = $$props;
  let { status } = $$props;
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  return `${validate_component(Error, "ErrorScreenHandler").$$render($$result, { message, status }, {}, {})}`;
});
export { _error as default, load, prerender };
