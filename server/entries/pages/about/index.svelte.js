import { c as create_ssr_component, e as escape, h as null_to_empty, b as each, v as validate_component, d as add_attribute } from "../../../chunks/index-b578fde4.js";
import { d as data$1 } from "../../../chunks/partners-5f52cd76.js";
import { a as assets } from "../../../chunks/paths-396f020f.js";
const data = {
  page: {
    heading: {
      title: "About Us",
      description: "Want to know who is behind the project? "
    },
    intro: {
      title: "We believe in a fairer future.",
      description: "Where every participant is both user and co-owner. To make this future accessible to all, it must be affordable. We\u2019re building an open ecosystem that empowers software & hardware developers to create, build and share."
    }
  },
  team: {
    title: "Meet Our Team",
    description: "A diverse skillset with proven track record",
    list: [
      {
        name: "Keyvan Sadeghi",
        position: "CEO",
        image: assets + "images/team/Keyvan-Sadeghi.jpg",
        artwork: assets + "images/team/Keyvan-Sadeghi-artwork.png",
        linkedin: "https://www.linkedin.com/in/keyvanmsadeghi/"
      },
      {
        name: "Ehsan Shariati",
        position: "CTO",
        image: assets + "images/team/Ehsan-shariati.jpg",
        artwork: assets + "images/team/Ehsan-shariati-artwork.png",
        linkedin: "https://www.linkedin.com/in/ehsan6sha"
      },
      {
        name: "Kate Writhers",
        position: "Partnerships",
        image: assets + "images/team/Kate-Withers.jpg",
        artwork: assets + "images/team/Kate-Withers-artwork.png",
        linkedin: "https://www.linkedin.com/in/kate-withers-hess-phd-33530023/"
      },
      {
        name: "Arman Shirani",
        position: "Marketing",
        image: assets + "images/team/Arman-shirani.jpg",
        artwork: assets + "images/team/Arman-shirani-artwork.png",
        linkedin: "https://www.linkedin.com/in/armanshirani/"
      },
      {
        name: "Erfan Shekarchi",
        position: "Tokenomics",
        image: assets + "images/team/Erfan-Shekarchi.jpg",
        artwork: assets + "images/team/Erfan-Shekarchi-artwork.png",
        linkedin: "https://www.linkedin.com/in/erfan-shekarchi/"
      },
      {
        name: "Sheida Shahbaz",
        position: "Art & NFT",
        image: assets + "images/team/Sheida-Shahbaz.jpg",
        artwork: assets + "images/team/Sheida-Shahbaz-artwork.png",
        linkedin: "https://www.linkedin.com/in/shidow/"
      },
      {
        name: "Andrew Monaghan",
        position: "Copywriter",
        image: assets + "images/team/Andrew-monaghan.jpg",
        artwork: assets + "images/team/Andrew-monaghan-artwork.png",
        linkedin: "#"
      },
      {
        name: "Jonathan Groeneveld",
        position: "Hardware",
        image: assets + "images/team/Jonathan-Groeneveld.jpg",
        artwork: assets + "images/team/Jonathan-Groeneveld-artwork.png",
        linkedin: "https://www.linkedin.com/in/jonathan-groeneveld-4a8774b7/"
      },
      {
        name: "Ehsan Emami",
        position: "Hardware",
        image: assets + "images/team/Ehsan-emami.png",
        artwork: assets + "images/team/Ehsan-emami-artwork.png",
        linkedin: "https://www.linkedin.com/in/ehsan-emami-0005bb6/"
      },
      {
        name: "Aaron-Surty",
        position: "Software",
        image: assets + "images/team/Aaron-Surty.jpg",
        artwork: assets + "images/team/Aaron-Surty-artwork.png",
        linkedin: "https://www.linkedin.com/in/aaron-surty/"
      },
      {
        name: "Jamshid Saidov",
        position: "Software",
        image: assets + "images/team/Jamshid-Saidov.jpg",
        artwork: assets + "images/team/Jamshid-Saidov-artwork.png",
        linkedin: "https://www.linkedin.com/in/jamshid-saidov-728822a9/"
      },
      {
        name: "Aaron Maines",
        position: "Copywriter",
        image: assets + "images/team/Aaron.jpg",
        artwork: assets + "images/team/Aaron-artwork.png",
        linkedin: "https://www.linkedin.com/in/aaron-maines-a487985/"
      },
      {
        name: "Alain Fundi",
        position: "Sales",
        image: assets + "images/team/Alain-Fundi.jpg",
        artwork: assets + "images/team/Alain-Fundi-artwork.png",
        linkedin: "https://www.linkedin.com/in/alainfundi/"
      },
      {
        name: "Moein Bakhshi",
        position: "Marketing",
        image: assets + "images/team/Moein-Bakhshi.jpg",
        artwork: assets + "images/team/Moein-Bakhshi-artwork.png",
        linkedin: "#"
      }
    ]
  },
  advisors: {
    title: "Meet Our Advisors",
    description: "Experienced advisors",
    list: [
      {
        name: "Crhis Gale",
        position: "Founder | MetaEdge Ventures",
        image: assets + "images/advisors/Advisor-Crhis-Gale.jpg",
        artwork: assets + "images/advisors/crhis-gale-artwork.png"
      },
      {
        name: "Zac Cohen",
        position: "Founder | FileBase",
        image: assets + "images/advisors/Advisor-Zac-Cohen.jpg",
        artwork: assets + "images/advisors/zac-cohen-artwork.png"
      },
      {
        name: "Shaun Neff",
        position: "Founder | Neff brands",
        image: assets + "images/advisors/Advisor-Shaun-Neff.jpg",
        artwork: assets + "images/advisors/shaun-neff-artwork.png"
      },
      {
        name: "Andy Lark",
        position: "CEO | Group Lark",
        image: assets + "images/advisors/Advisor-Andy-Lark.jpg",
        artwork: assets + "images/advisors/andy-lark-artwork.png"
      },
      {
        name: "Stefaan Vervaet",
        position: "Ecosystem Lead | Protocol Labs",
        image: assets + "images/advisors/Advisor-Stefaan-Vervaet.jpg",
        artwork: assets + "images/advisors/andy-lark-artwork.png"
      }
    ]
  },
  partners: {
    title: "Our Partners",
    description: "Biggest names in the industry",
    list: data$1
  },
  memories: {
    title: "Our Memories",
    description: "Functionland family from all over the world but close in heart!",
    photos: [
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/1-small.jpg",
            width: 186,
            height: 282
          },
          large: {
            src: assets + "images/photos-app/1.jpg",
            width: 186,
            height: 282
          }
        },
        type: "image/jpg"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/2-small.jpg",
            width: 584,
            height: 363
          },
          large: {
            src: assets + "images/photos-app/2.jpg",
            width: 584,
            height: 363
          }
        },
        type: "image/jpg"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/4-small.jpg",
            width: 449,
            height: 288
          },
          large: {
            src: assets + "images/photos-app/4.jpg",
            width: 449,
            height: 288
          }
        },
        type: "image/jpg"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/5-small.jpg",
            width: 476,
            height: 288
          },
          large: {
            src: assets + "images/photos-app/5.jpg",
            width: 476,
            height: 288
          }
        },
        type: "image/jpg"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/3-small.jpg",
            width: 233,
            height: 276
          },
          large: {
            src: assets + "images/photos-app/3.jpg",
            width: 233,
            height: 276
          }
        },
        type: "image/jpg"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/6-small.jpg",
            width: 494,
            height: 279
          },
          large: {
            src: assets + "images/photos-app/6.jpg",
            width: 494,
            height: 279
          }
        },
        type: "image/jpg"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/7-small.jpg",
            width: 698,
            height: 457
          },
          large: {
            src: assets + "images/photos-app/7.jpg",
            width: 698,
            height: 457
          }
        },
        type: "image/jpg"
      }
    ]
  },
  jobs: {
    main_title: "Help Us Build a Better Future, Join Functionland",
    title: "Available Positions",
    description: "Email us at hi@fx.land to learn more!",
    cta_items: [
      {
        title: "Marketing Intern",
        description: "Are you passionate and eager to learn new things in a fast-pace environment",
        cta: {
          text: "Apply",
          url: "https://www.linkedin.com/company/functionland/jobs/"
        }
      },
      {
        title: "Community Growth Lead",
        description: "Are you passionate and eager to learn new things in a fast-pace environment",
        cta: {
          text: "Apply",
          url: "https://www.linkedin.com/company/functionland/jobs/"
        }
      },
      {
        title: "Social Media Manager",
        description: "Are you passionate and eager to learn new things in a fast-pace environment",
        cta: {
          text: "Apply",
          url: "https://www.linkedin.com/company/functionland/jobs/"
        }
      }
    ]
  }
};
var heading_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "section.svelte-y4fetc{font-family:var(--inter), Arial, Helvetica, sans-serif;padding:80px 0;text-align:center;font-display:swap}h1.svelte-y4fetc{font-size:44px;font-weight:700;padding-bottom:2rem}p.svelte-y4fetc{font-size:18px;line-height:1.5;font-weight:500;padding:0 20px}",
  map: null
};
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$a);
  return `<section class="${"svelte-y4fetc"}"><div class="${"container"}"><h1 class="${"svelte-y4fetc"}">${escape(title)}</h1>
		<p class="${"svelte-y4fetc"}">${escape(description)}</p></div>
</section>`;
});
var intro_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "section.svelte-14vyrj0{font-family:var(--inter), Arial, Helvetica, sans-serif;font-display:swap}.grid.svelte-14vyrj0{display:grid;grid-template-columns:1fr;grid-template-rows:1fr 1fr;grid-auto-flow:row;padding:2rem;height:100%;width:100%;background:var(--bkg-ac);min-height:var(--section-min-height);align-items:center}.title.svelte-14vyrj0{height:100%;font-size:40px;font-weight:600;border-bottom:4px solid rgb(207, 207, 207);display:flex;align-items:center}.description.svelte-14vyrj0{color:var(--on-bkg-ac-txt);font-size:18px;font-weight:400}@media(min-width: 960px){.grid.svelte-14vyrj0{grid-template-columns:1fr 1fr;grid-template-rows:1fr;grid-auto-flow:row;min-height:unset}.title.svelte-14vyrj0{border-bottom:unset;border-right:4px solid rgb(207, 207, 207);display:grid;grid-template-columns:1fr;grid-template-rows:1fr;align-items:center;align-content:center;justify-content:start;padding:4rem}.description.svelte-14vyrj0{padding:4rem 3.5rem}}",
  map: null
};
const Intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$9);
  return `<section class="${"svelte-14vyrj0"}"><div class="${"container"}"><div class="${"grid svelte-14vyrj0"}"><div class="${"title svelte-14vyrj0"}">${escape(title)}</div>
			<div class="${"description svelte-14vyrj0"}">${escape(description)}</div></div></div>
</section>`;
});
var item_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".item.svelte-z99hc.svelte-z99hc{display:grid;grid-template-columns:1fr;grid-auto-flow:row;grid-template-rows:72.25% auto;aspect-ratio:1/1;width:100%;border-radius:20px;overflow:hidden}.info-wrapper.svelte-z99hc.svelte-z99hc{background:var(--bkg-ac);color:var(--on-bkg-ac-txt)}.title.svelte-z99hc.svelte-z99hc{font-size:1rem;font-weight:500}.name.svelte-z99hc.svelte-z99hc{font-size:1.1rem;font-weight:600}.image-wrapper.svelte-z99hc.svelte-z99hc{background:var(--bkg-ac);position:relative;overflow:hidden;color:var(--on-bkg-ac-txt)}img.svelte-z99hc.svelte-z99hc{width:100%;height:auto;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);transition:opacity cubic-bezier(0.39, 0.575, 0.565, 1) 1s}.item.team.svelte-z99hc img.artwork.svelte-z99hc,.item.advisor.svelte-z99hc img.artwork.svelte-z99hc{opacity:0}.info.svelte-z99hc.svelte-z99hc{display:grid;height:100%;grid-auto-flow:row;align-items:center;padding:1rem}@media(min-width: 960px){.item.svelte-z99hc.svelte-z99hc{max-width:400px;width:100%}.item-0.svelte-z99hc.svelte-z99hc{grid-column:1/2;grid-row:2/4}.item-1.svelte-z99hc.svelte-z99hc{grid-column:2/3;grid-row:1/3}.item-2.svelte-z99hc.svelte-z99hc{grid-column:3/4;grid-row:2/4}.item-3.svelte-z99hc.svelte-z99hc{grid-column:1/3;grid-row:4/4}.item-4.svelte-z99hc.svelte-z99hc{grid-column:2/4;grid-row:4/4}.item.team.svelte-z99hc:hover img.main.svelte-z99hc{opacity:0}.item.team.svelte-z99hc:hover img.artwork.svelte-z99hc{opacity:1}}",
  map: null
};
const Item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { item } = $$props;
  let { index } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$8);
  return `<div class="${escape(null_to_empty(`item ${type} item-${index}`)) + " svelte-z99hc"}"><div class="${"image-wrapper svelte-z99hc"}">${``}</div>
	<div class="${"info-wrapper svelte-z99hc"}"><div class="${"info svelte-z99hc"}"><div class="${"name svelte-z99hc"}">${escape(item.name)}</div>
			<div class="${"title svelte-z99hc"}">${escape(item.position)}</div></div></div>
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".wrapper.svelte-31iv7o{display:grid;grid-template-columns:1fr;grid-auto-flow:row;grid-gap:2rem}@media(min-width: 960px){.wrapper.svelte-31iv7o{grid-template-columns:repeat(3, 1fr);gap:3rem;max-width:fit-content;margin:0 auto}}@media(min-width: 1300px){.wrapper.svelte-31iv7o{grid-template-columns:repeat(3, 400px)}}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list } = $$props;
  let { type } = $$props;
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$7);
  return `<div class="${escape(null_to_empty(`wrapper ${type}`)) + " svelte-31iv7o"}">${each(list, (item) => {
    return `${validate_component(Item, "Item").$$render($$result, { item, type }, {}, {})}`;
  })}
</div>`;
});
var team_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "section.svelte-182s9t{font-family:var(--inter), Arial, Helvetica, sans-serif;padding:3rem 0 5rem;font-display:swap}.heading.svelte-182s9t{font-family:var(--inter), Arial, Helvetica, sans-serif;padding:80px 0;text-align:center;font-display:swap}.title.svelte-182s9t{font-size:44px;font-weight:700;padding-bottom:2rem}p.svelte-182s9t{font-size:18px;line-height:1.5;font-weight:500;padding:0 20px}",
  map: null
};
const Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  $$result.css.add(css$6);
  return `<section class="${"svelte-182s9t"}"><div class="${"container"}"><div class="${"heading svelte-182s9t"}"><div class="${"title svelte-182s9t"}">${escape(data2.title)}</div>
			<p class="${"svelte-182s9t"}">${escape(data2.description)}</p></div>
		${validate_component(Grid, "Grid").$$render($$result, { list: data2.list, type: "team" }, {}, {})}</div>
</section>`;
});
var people_svelte_svelte_type_style_lang$1 = "";
const css$5 = {
  code: ".wrapper.svelte-1hsenm0{display:grid;grid-template-columns:1fr;grid-auto-flow:row;grid-gap:2rem}@media(min-width: 960px){.wrapper.svelte-1hsenm0{grid-template-columns:30.07518796992481% 30.07518796992481% 30.07518796992481%;margin:0 auto;grid-auto-flow:column;justify-items:center;justify-content:center;width:100%;max-width:1340px}}",
  map: null
};
const People$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list } = $$props;
  let { type } = $$props;
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$5);
  return `<div class="${escape(null_to_empty(`wrapper ${type}`)) + " svelte-1hsenm0"}">${each(list, (item, index) => {
    return `${validate_component(Item, "Item").$$render($$result, { item, type: "advisor", index }, {}, {})}`;
  })}
</div>`;
});
var people_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "section.svelte-182s9t{font-family:var(--inter), Arial, Helvetica, sans-serif;padding:3rem 0 5rem;font-display:swap}.heading.svelte-182s9t{font-family:var(--inter), Arial, Helvetica, sans-serif;padding:80px 0;text-align:center;font-display:swap}.title.svelte-182s9t{font-size:44px;font-weight:700;padding-bottom:2rem}p.svelte-182s9t{font-size:18px;line-height:1.5;font-weight:500;padding:0 20px}",
  map: null
};
const People = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  $$result.css.add(css$4);
  return `<section class="${"svelte-182s9t"}"><div class="${"container"}"><div class="${"heading svelte-182s9t"}"><div class="${"title svelte-182s9t"}">${escape(data2.title)}</div>
			<p class="${"svelte-182s9t"}">${escape(data2.description)}</p></div>
		${validate_component(People$1, "Grid").$$render($$result, { list: data2.list, type: "team" }, {}, {})}</div>
</section>`;
});
var partners_svelte_svelte_type_style_lang$1 = "";
const css$3 = {
  code: ".wrapper.svelte-zh5q36.svelte-zh5q36{display:grid;grid-template-columns:repeat(2, auto);grid-auto-flow:row;grid-gap:2rem;align-items:center;align-content:center;justify-content:center;justify-items:center;width:100%;gap:3rem}picture.svelte-zh5q36.svelte-zh5q36{position:relative;display:grid;align-items:center;justify-content:center;width:100%;height:100%}img.svelte-zh5q36.svelte-zh5q36{display:block;width:auto;max-height:56px;max-width:120px}img.colored.svelte-zh5q36.svelte-zh5q36{opacity:0}.partner.svelte-zh5q36.svelte-zh5q36{position:relative;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;align-items:center;align-content:center;justify-content:center;justify-items:center}.partner.svelte-zh5q36 picture.svelte-zh5q36,.partner.svelte-zh5q36 .colored.svelte-zh5q36{grid-column:1/-1;grid-row:1/-1;transition:opacity 0.4s, transform 0.4s}@media(min-width: 960px){.wrapper.svelte-zh5q36.svelte-zh5q36{grid-template-columns:repeat(5, auto);max-width:1207px;margin:0 auto}.partner.svelte-zh5q36:hover picture.svelte-zh5q36{opacity:0;transform:scale(1.1)}.partner.svelte-zh5q36.svelte-zh5q36:hover{overflow:visible;z-index:2}.partner.svelte-zh5q36:hover .colored.svelte-zh5q36{opacity:1;transform:scale(1.1)}}@media(min-width: 1300px){}",
  map: null
};
const Partners$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { list } = $$props;
  let { type } = $$props;
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  $$result.css.add(css$3);
  return `<div class="${escape(null_to_empty(`wrapper ${type}`)) + " svelte-zh5q36"}">${each(list, (item) => {
    return `<div class="${"partner svelte-zh5q36"}"><picture class="${"svelte-zh5q36"}"><source${add_attribute("srcset", item.dark, 0)} media="${"(prefers-color-scheme: dark)"}">
				<img${add_attribute("src", item.light, 0)}${add_attribute("alt", item.title, 0)} loading="${"lazy"}" decoding="${"async"}" class="${"visible svelte-zh5q36"}"></picture>
			<img${add_attribute("src", item.main, 0)}${add_attribute("alt", item.title, 0)} class="${"colored svelte-zh5q36"}" loading="${"lazy"}" decoding="${"async"}">
		</div>`;
  })}
</div>`;
});
var partners_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-wr258l{font-family:var(--inter), Arial, Helvetica, sans-serif;padding:3rem 0 5rem;background:var(--bkg-ac);font-display:swap}.heading.svelte-wr258l{font-family:var(--inter), Arial, Helvetica, sans-serif;padding:80px 0;text-align:center;font-display:swap}.title.svelte-wr258l{font-size:44px;font-weight:700;padding-bottom:2rem}p.svelte-wr258l{font-size:18px;line-height:1.5;font-weight:500;padding:0 20px}",
  map: null
};
const Partners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  $$result.css.add(css$2);
  return `<section class="${"svelte-wr258l"}"><div class="${"container"}"><div class="${"heading svelte-wr258l"}"><div class="${"title svelte-wr258l"}">${escape(data2.title)}</div>
			<p class="${"svelte-wr258l"}">${escape(data2.description)}</p></div>
		${validate_component(Partners$1, "Grid").$$render($$result, { list: data2.list }, {}, {})}</div>
</section>`;
});
var photosGrid_svelte_svelte_type_style_lang = "";
var photosSlider_svelte_svelte_type_style_lang = "";
var photos_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "section.svelte-182s9t{font-family:var(--inter), Arial, Helvetica, sans-serif;padding:3rem 0 5rem;font-display:swap}.heading.svelte-182s9t{font-family:var(--inter), Arial, Helvetica, sans-serif;padding:80px 0;text-align:center;font-display:swap}.title.svelte-182s9t{font-size:44px;font-weight:700;padding-bottom:2rem}p.svelte-182s9t{font-size:18px;line-height:1.5;font-weight:500;padding:0 20px}",
  map: null
};
const Photos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  $$result.css.add(css$1);
  return `

<section class="${"svelte-182s9t"}"><div class="${"container"}"><div class="${"heading svelte-182s9t"}"><div class="${"title svelte-182s9t"}">${escape(data2.title)}</div>
			<p class="${"svelte-182s9t"}">${escape(data2.description)}</p></div>
		${``}</div>
</section>`;
});
var ctaCard_svelte_svelte_type_style_lang = "";
var jobs_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-zttjcn{font-family:var(--inter), Arial, Helvetica, sans-serif;padding:3rem 0 8rem;font-display:swap}.heading.svelte-zttjcn{font-family:var(--inter), Arial, Helvetica, sans-serif;padding:80px 0;text-align:center;font-display:swap}.title.svelte-zttjcn{font-size:44px;font-weight:700;padding-bottom:2rem}.main-title.svelte-zttjcn{max-width:720px;margin:0 auto}p.svelte-zttjcn{font-size:18px;line-height:1.5;font-weight:500;padding:0 20px}.grid.svelte-zttjcn{display:grid;grid-template-columns:1fr;width:max-content;gap:3rem;margin:0 auto}@media(min-width: 960px){.grid.svelte-zttjcn{display:grid;grid-template-columns:repeat(3, 1fr);width:max-content;gap:3rem;margin:0 auto}}.swiper-button-prev, .swiper-rtl .swiper-button-next,.swiper-button-next, .swiper-rtl .swiper-button-prev{filter:grayscale(1)\r\n    }",
  map: null
};
const Jobs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  $$result.css.add(css);
  return `



<section class="${"svelte-zttjcn"}"><div class="${"container"}"><div class="${"heading svelte-zttjcn"}"><div class="${"title main-title svelte-zttjcn"}">${escape(data2.main_title)}</div></div>
		<div class="${"heading svelte-zttjcn"}"><div class="${"title svelte-zttjcn"}">${escape(data2.title)}</div>
			<p class="${"svelte-zttjcn"}">${escape(data2.description)}</p></div>
		${``}</div>
</section>`;
});
const hydrate = true;
const prerender = true;
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>About Us</title>`, ""}`, ""}
${validate_component(Heading, "Heading").$$render($$result, {
    title: data.page.heading.title,
    description: data.page.heading.description
  }, {}, {})}
${validate_component(Intro, "Intro").$$render($$result, {
    title: data.page.intro.title,
    description: data.page.intro.description
  }, {}, {})}
${validate_component(Team, "Team").$$render($$result, { data: data.team }, {}, {})}
${validate_component(People, "People").$$render($$result, { data: data.advisors }, {}, {})}
${validate_component(Partners, "Partners").$$render($$result, { data: data.partners }, {}, {})}
${validate_component(Photos, "Photos").$$render($$result, { data: data.memories }, {}, {})}
${validate_component(Jobs, "Jobs").$$render($$result, { data: data.jobs }, {}, {})}`;
});
export { About as default, hydrate, prerender };
