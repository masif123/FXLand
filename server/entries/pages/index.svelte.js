import { n as noop, i as safe_not_equal, a as subscribe, r as run_all, j as is_function, c as create_ssr_component, e as escape, b as each, d as add_attribute, v as validate_component, h as null_to_empty, k as compute_rest_props, l as createEventDispatcher, s as setContext, o as onDestroy, p as spread, q as escape_attribute_value, t as escape_object, u as tick, g as getContext } from "../../chunks/index-b578fde4.js";
import { a as assets } from "../../chunks/paths-396f020f.js";
import "just-throttle";
import "rss-to-json";
import { g as getDocument, $, n as nextTick, S as Swiper$1, d as data$3 } from "../../chunks/partners-5f52cd76.js";
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = noop;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = is_function(result) ? result : noop;
      }
    };
    const unsubscribers = stores_array.map((store, i) => subscribe(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      run_all(unsubscribers);
      cleanup();
    };
  });
}
const data$2 = [
  {
    show: true,
    type: "value",
    ref: "own-your-data",
    intro_title: "Own Your Data",
    intro_desc: "Box is built from the ground up. It was designed to put the power back into YOUR hands. Your data is your property, and yours alone. Your photos, files, and data are fully encrypted. Nobody else has a key.",
    main_title: "Own Your Data",
    main_desc: "Get a peace of mind with Box. Our proprietary AES-256 encryption software hacker-proofs your data. Even if the world\u2019s most talented hacker were able to bring the power of all world\u2019s computers to bear on your Box,  it would still take (literally!) billions of years to break into your files. Only you can access your data. Only you can share it.",
    show_cta: true,
    cta_text: "Learn more",
    videos: [
      {
        src: assets + "videos/own_your_data_dark.mp4",
        type: "video/mp4",
        scheme: "dark",
        poster: assets + "images/home-page/own-your-data-b.jpg"
      },
      {
        src: assets + "videos/own_your_data_light.mp4",
        type: "video/mp4",
        scheme: "light",
        poster: assets + "images/home-page/own-your-data-w.jpg"
      }
    ],
    photos: []
  },
  {
    show: true,
    type: "value",
    ref: "apps-without-ads",
    intro_title: "Apps Without Ads or Subscription",
    intro_desc: "Box gives you private cloud-alike storage. Sharing. Collaboration. No ads. No tracking. No subscription fees. It is designed to be a self-sustainable ecosystem for both users and developers. <br> No kidding. ",
    main_title: "Start with Box Photos! ",
    main_desc: "Our app Photos - recognized on GitHub as in the top 3% of open-source apps worldwide - is a polished, forever-free gallery that works seamlessly on any device. It provides fast, easy access and sharing from anywhere, across any device.",
    show_cta: true,
    cta_text: "Learn more",
    videos: [],
    photos: [
      {
        srcset: {
          small: {
            src: assets + "videos/bgloop/1.webm",
            width: 247,
            height: 192
          },
          large: {
            src: assets + "videos/bgloop/1.webm",
            width: 329,
            height: 495
          }
        },
        type: "video/webm"
      },
      {
        srcset: {
          small: {
            src: assets + "videos/bgloop/2.webm",
            width: 360,
            height: 279
          },
          large: {
            src: assets + "videos/bgloop/2.webm",
            width: 850,
            height: 563
          }
        },
        type: "video/webm"
      },
      {
        srcset: {
          small: {
            src: assets + "videos/bgloop/3.webm",
            width: 139,
            height: 293
          },
          large: {
            src: assets + "videos/bgloop/3.webm",
            width: 581,
            height: 388
          }
        },
        type: "video/webm"
      },
      {
        srcset: {
          small: {
            src: assets + "videos/bgloop/4.webm",
            width: 180,
            height: 245
          },
          large: {
            src: assets + "videos/bgloop/4.webm",
            width: 692,
            height: 463
          }
        },
        type: "video/webm"
      },
      {
        srcset: {
          small: {
            src: assets + "videos/bgloop/5.webm",
            width: 384,
            height: 216
          },
          large: {
            src: assets + "videos/bgloop/5.webm",
            width: 384,
            height: 216
          }
        },
        type: "video/webm"
      }
    ]
  },
  {
    show: true,
    type: "value",
    ref: "earn-crypto",
    intro_title: "Earn Crypto",
    intro_desc: "Box quietly earns $FULA tokens by providing backups and resources to others on the network. When you make backups, take advantage of cloud-alike services or use apps,  Box compensates the open-source developers, UX designers, and contributors who built them for you.",
    main_title: "Earn Crypto",
    main_desc: "Thanks to BAS, our Blockchain-Attached Storage solution, Box lets you share storage and CPU power with others while quietly mining $FULA tokens in the background.",
    show_cta: true,
    cta_text: "Learn more",
    videos: [
      {
        src: assets + "videos/earn_crypto.mp4",
        type: "video/mp4",
        media: "light",
        role: "small",
        poster: assets + "images/home-page/earn-crypto.jpg"
      },
      {
        src: assets + "videos/earn_crypto_desktop.mp4",
        type: "video/mp4",
        media: "light",
        role: "large",
        poster: assets + "images/home-page/earn-crypto.jpg"
      }
    ],
    photos: []
  }
];
const data$1 = [
  {
    show: true,
    type: "feature",
    ref: "plug-n-play",
    intro_title: "Plug-n-Play",
    intro_desc: "Setting up your Box takes just a few seconds as easy as a few clicks on your phone, like how you setup your smart TV!",
    main_title: "Plug-n-Play",
    main_desc: "Box is designed for simplicity. It\u2019s easy to set up, creates instant backups, syncs with your devices, and gives you access to a new open-source platform with free cloud services and endless possibilities.",
    show_cta: true,
    cta_text: "Learn more",
    videos: [],
    photos: [
      {
        srcset: {
          small: {
            src: assets + "images/home/plug-n-play-small.webp",
            width: 387,
            height: 229
          },
          large: {
            src: assets + "images/home/plug-n-play.webp",
            width: 1920,
            height: 1073
          }
        },
        type: "image/webp",
        alt: "Box is a modular, plug and play decentralized application server that auto-mines tokens for the users."
      }
    ]
  },
  {
    show: true,
    type: "feature",
    ref: "customizable",
    intro_title: "Customizable",
    intro_desc: "Customizable Box includes up to 9 towers, which users can use to extend the storage or CPU power of their Box if they want to. AS we build more partnerships, diverse towers like GPU or router will become available. Limit will be your imagination.",
    main_title: "Built To Be Built On",
    main_desc: "Our hardware is also an open-source platform. With a modular plug-and-play design and standardized dimensions, Box lets hardware builders create additional plug-in towers to extend its functionality.",
    show_cta: true,
    cta_text: "Learn more",
    videos: [
      {
        src: assets + "videos/customize.mp4",
        type: "video/mp4",
        scheme: "light",
        poster: assets + "images/home-page/customizable.png"
      },
      {
        src: assets + "videos/customize_dark.mp4",
        type: "video/mp4",
        scheme: "dark",
        poster: assets + "images/home-page/customizable.jpg"
      }
    ],
    photos: []
  },
  {
    show: true,
    type: "feature",
    ref: "design",
    intro_title: "Solving subscription from the roots",
    intro_desc: "Solving subscription from the roots With Box, ordinary people own the hardware running the network. This solves the paying problem. Developers no longer have to pay rent. And, for the first time, developers are paid to create free applications and services for you to enjoy. ",
    main_title: "Timeless design",
    main_desc: "Box is built with the help of designers from a wide range of expertise including Product design, Electronics and Computer engineering to ensure the best customer experience and we are totally open to more suggestions from the community",
    show_cta: true,
    cta_text: "Learn more",
    videos: [],
    photos: [
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/photos/2-small.webp",
            width: 247,
            height: 192
          },
          large: {
            src: assets + "images/photos-app/photos/2.webp",
            width: 427,
            height: 288
          }
        },
        type: "image/webp"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/photos/19-small.webp",
            width: 360,
            height: 279
          },
          large: {
            src: assets + "images/photos-app/photos/19.webp",
            width: 427,
            height: 288
          }
        },
        type: "image/webp"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/photos/4-small.webp",
            width: 139,
            height: 293
          },
          large: {
            src: assets + "images/photos-app/photos/4.webp",
            width: 584,
            height: 326
          }
        },
        type: "image/webp"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/photos/6-small.webp",
            width: 180,
            height: 245
          },
          large: {
            src: assets + "images/photos-app/photos/6.webp",
            width: 167,
            height: 282
          }
        },
        type: "image/webp"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/photos/5-small.webp",
            width: 265,
            height: 229
          },
          large: {
            src: assets + "images/photos-app/photos/5.webp",
            width: 433,
            height: 279
          }
        },
        type: "image/webp"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/photos/8-small.webp",
            width: 265,
            height: 229
          },
          large: {
            src: assets + "images/photos-app/photos/8.webp",
            width: 209,
            height: 276
          }
        },
        type: "image/webp"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/photos/24-small.webp",
            width: 265,
            height: 229
          },
          large: {
            src: assets + "images/photos-app/photos/24.webp",
            width: 626,
            height: 457
          }
        },
        type: "image/webp"
      },
      {
        srcset: {
          small: {
            src: assets + "images/photos-app/photos/27-small.webp",
            width: 265,
            height: 229
          },
          large: {
            src: assets + "images/photos-app/photos/27.webp",
            width: 550,
            height: 457
          }
        },
        type: "image/webp"
      }
    ]
  }
];
const unifiedSetTimeout = (fn, ms) => setTimeout(fn, ms);
const unifiedClearTimeout = (id) => clearTimeout(id);
const raf = typeof requestAnimationFrame === "undefined" ? (fn) => unifiedSetTimeout(fn, 1e3 / 60) : (fn) => requestAnimationFrame(fn);
const cancelRaf = typeof cancelAnimationFrame === "undefined" ? unifiedClearTimeout : (id) => cancelAnimationFrame(id);
function debounce(fn, ms = "animationFrame", leading = false) {
  const defer = ms === "animationFrame" ? (fn2) => raf(fn2) : (fn2) => setTimeout(fn2, ms);
  const cancelDeferred = ms === "animationFrame" ? cancelRaf : unifiedClearTimeout;
  let pending = null;
  const scheduleNext = (scheduledFn, ...args) => {
    const wrappedCall = () => {
      scheduledFn(...args);
      pending = null;
    };
    pending = { wrappedCall, id: defer(wrappedCall) };
  };
  const cancelScheduled = () => {
    if (pending) {
      cancelDeferred(pending.id);
      pending = null;
    }
  };
  const debounced = !leading ? function(...args) {
    cancelScheduled();
    scheduleNext(fn, ...args);
  } : function(...args) {
    if (pending === null) {
      fn(...args);
    } else {
      cancelScheduled();
    }
    scheduleNext(() => {
      pending = null;
    });
  };
  debounced.cancel = () => {
    cancelScheduled();
  };
  debounced.flush = () => {
    if (pending !== null) {
      const pendingCall = pending.wrappedCall;
      cancelScheduled();
      if (!leading) {
        pendingCall();
      }
    }
  };
  return debounced;
}
const windowShim = typeof window !== "undefined" ? window : {
  scrollX: 0,
  scrollY: 0,
  innerWidth: 1920,
  innerHeight: 1080,
  addEventListener: () => void 0,
  removeEventListener: () => void 0,
  matchMedia: () => ({
    addEventListener: () => void 0,
    removeEventListener: () => void 0,
    matches: false
  })
};
var Orientation;
(function(Orientation2) {
  Orientation2[Orientation2["Landscape"] = 0] = "Landscape";
  Orientation2[Orientation2["Portrait"] = 1] = "Portrait";
})(Orientation || (Orientation = {}));
function makeWindowScrollStore(debounced) {
  let previous;
  return readable(void 0, (set) => {
    const update = () => {
      const currentX = windowShim.scrollX;
      const currentY = windowShim.scrollY;
      if (currentX !== previous?.x || currentY !== previous?.y) {
        previous = { x: currentX, y: currentY };
        set(previous);
      }
    };
    update();
    const scrollHandler = debounced ? debounce(update) : update;
    windowShim.addEventListener("scroll", scrollHandler);
    return () => {
      windowShim.removeEventListener("scroll", scrollHandler);
    };
  });
}
const windowScroll = makeWindowScrollStore(true);
const windowScrollUndebounced = makeWindowScrollStore(false);
derived(windowScroll, ($windowScroll) => $windowScroll.x);
derived(windowScrollUndebounced, ($windowScroll) => $windowScroll.x);
const scrollY = derived(windowScroll, ($windowScroll) => $windowScroll.y);
derived(windowScrollUndebounced, ($windowScroll) => $windowScroll.y);
function makeSizeStore(debounced) {
  let previous;
  return readable(void 0, (set) => {
    const update = () => {
      const currentWidth = windowShim.innerWidth;
      const currentHeight = windowShim.innerHeight;
      if (currentWidth !== previous?.width || currentHeight !== previous?.height) {
        previous = { width: currentWidth, height: currentHeight };
        set(previous);
      }
    };
    update();
    const resizeHandler = debounced ? debounce(update) : update;
    windowShim.addEventListener("resize", resizeHandler);
    return () => {
      windowShim.removeEventListener("resize", resizeHandler);
    };
  });
}
const viewportSize = makeSizeStore(true);
const viewportSizeUndebounced = makeSizeStore(false);
const innerWidth = derived(viewportSize, ($windowSize) => $windowSize.width);
derived(viewportSizeUndebounced, ($windowSize) => $windowSize.width);
const innerHeight = derived(viewportSize, ($windowSize) => $windowSize.height);
derived(viewportSizeUndebounced, ($windowSize) => $windowSize.height);
var slogan_svelte_svelte_type_style_lang = "";
const css$f = {
  code: ".slogan-wrapper.svelte-medzns{pointer-events:none;position:fixed;width:fit-content;height:fit-content;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;z-index:12;width:100%;height:100%;display:grid;align-items:center;mix-blend-mode:screen;max-width:var(--container-max-width)}h1.svelte-medzns{color:var(--actionColor);pointer-events:none;font-size:var(--slogan-font-size);font-weight:var(--slogan-font-weight);line-height:var(--slogan-line-height);letter-spacing:var(--slogan-letter-spacing);text-align:center;max-width:var(--slogan-max-width);font-family:var(--roboto), Arial, Helvetica, sans-serif;margin:0 auto;word-break:break-word;position:relative;z-index:4;mix-blend-mode:screen;font-display:swap}",
  map: null
};
const Slogan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let scrollY2;
  $$result.css.add(css$f);
  $$unsubscribe_innerWidth();
  return `

${$innerWidth > 960 ? `<div class="${"slogan-wrapper svelte-medzns"}" style="${"opacity: " + escape(isNaN(1 - Math.max(0, scrollY2 / 40)) ? 0 : 1 - Math.max(0, scrollY2 / 40))}"><h1 class="${"slogan svelte-medzns"}">${`<span class="${"hidden"}">A Private, </span>
				<span class="${"hidden"}">Payless, </span>
				<span class="${"hidden"}">Cloud Storage </span>
				<span class="${"hidden"}">Alternative</span>`}</h1></div>` : `<div class="${"slogan-wrapper mobile svelte-medzns"}" style="${"opacity: " + escape(isNaN(1 - Math.max(0, scrollY2 / 40)) ? 0 : 1 - Math.max(0, scrollY2 / 40))}"><h1 class="${"slogan svelte-medzns"}">${`<span class="${"hidden"}">A Private, </span>
				<span class="${"hidden"}">Payless, </span>
				<span class="${"hidden"}">Cloud Storage </span>
				<span class="${"hidden"}">Alternative</span>`}</h1></div>`}`;
});
var introParallax_svelte_svelte_type_style_lang = "";
const css$e = {
  code: ".hidden.svelte-yh3wlf.svelte-yh3wlf{opacity:0;user-select:none;display:none}section.svelte-yh3wlf.svelte-yh3wlf{height:unset;min-height:unset;padding-bottom:0;position:sticky;top:60px}.parallax-container.svelte-yh3wlf.svelte-yh3wlf{position:sticky;height:125vh;top:60px;width:100vw;background-color:#494753}.parallax-container.svelte-yh3wlf img.svelte-yh3wlf{position:absolute;top:0;left:0;width:100%}.parallax-container.svelte-yh3wlf img.svelte-yh3wlf:last-child::after{content:'';position:absolute;width:100%;height:100%;background:rgb(45,10,13)}.frame.svelte-yh3wlf.svelte-yh3wlf{width:-webkit-fill-available;grid-column:1/-1;grid-row:1/-1;height:min-content;height:100%;align-items:end;align-content:end;justify-content:center;visibility:hidden;display:none;position:sticky;top:0;z-index:-1;margin:0 auto;width:100%;height:fit-content;width:-webkit-fill-available;grid-template-columns:100vw}.frame.active.svelte-yh3wlf.svelte-yh3wlf{visibility:visible;display:grid;z-index:1}.frame.svelte-yh3wlf picture.svelte-yh3wlf{display:grid;align-content:end;align-items:end;justify-content:center;height:100%;width:100vw;grid-template-columns:100vw;overflow:hidden;justify-items:center}.frame.svelte-yh3wlf img.svelte-yh3wlf{position:relative;top:unset;width:unset;height:auto;transition:height 0.3s;max-width:unset;left:unset;transform:unset}.slogan-wrapper.svelte-yh3wlf.svelte-yh3wlf{pointer-events:none;position:fixed;width:fit-content;height:fit-content;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;z-index:12;width:100%;height:100%;display:grid;align-items:center;mix-blend-mode:screen;max-width:var(--container-max-width)}@media(max-width: 720px){.m-one-liner.svelte-yh3wlf.svelte-yh3wlf{display:block}.parallax-container.svelte-yh3wlf.svelte-yh3wlf{height:calc(100vh - 60px)}section.svelte-yh3wlf.svelte-yh3wlf{position:relative;top:0}.frame.svelte-yh3wlf img.svelte-yh3wlf{transform:unset;max-width:calc( ( (1080 / 720) * 100vw ) - 60px);max-height:unset}}@media(min-width: 721px){.one-liner.svelte-yh3wlf.svelte-yh3wlf,.l-one-liner.svelte-yh3wlf.svelte-yh3wlf{display:block}.parallax-container.svelte-yh3wlf.svelte-yh3wlf{height:calc( (100vh / 100) * 125);margin-bottom:-25vh}.frame.svelte-yh3wlf.svelte-yh3wlf{width:-webkit-fill-available;grid-column:1/-1;grid-row:1/-1;height:min-content;height:100%;align-items:end;align-content:end;justify-content:center;visibility:hidden;display:none;position:sticky;top:0;z-index:-1;margin:0 auto;width:100%;height:fit-content}.frame.active.svelte-yh3wlf.svelte-yh3wlf{visibility:visible;display:grid;z-index:1}.frame.svelte-yh3wlf picture.svelte-yh3wlf{display:grid;align-content:end;align-items:end;justify-content:center;height:100%;width:100%}.frame.svelte-yh3wlf img.svelte-yh3wlf{position:relative;top:unset;width:unset;height:auto;transition:height 0.3s;left:unset;transform:translateY(-20%);max-height:calc( ( (1920 / 1080) * 100vh ) - 300px);max-width:calc( ( (1920 / 1920) * 100% ) + 60px)}}@media(min-width: 1900px){.frame.svelte-yh3wlf img.svelte-yh3wlf{max-width:unset}}",
  map: null
};
const Intro_parallax = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobile;
  let threshold;
  let heightVar;
  let $$unsubscribe_innerHeight;
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerHeight = subscribe(innerHeight, (value) => value);
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let frames = [], currentFrame = 1;
  let totalFrames = $innerWidth < 960 ? 53 : 59;
  for (let i = 1; i < totalFrames + 1; i++) {
    frames.push(i);
  }
  $$result.css.add(css$e);
  isMobile = $innerWidth < 960;
  threshold = isMobile ? 47 : 37;
  heightVar = currentFrame <= threshold ? "calc( 100vh - 60px)" : "auto";
  $$unsubscribe_innerHeight();
  $$unsubscribe_innerWidth();
  return `${$$result.head += `${each(frames, (frame, index) => {
    return `${isMobile == true ? `<link rel="${"preload"}" as="${"image"}"${add_attribute("href", assets + "/frames/intro/mobile/frame_" + frame + ".webp", 0)} type="${"image/webp"}" media="${"(max-width: 720px)"}" data-svelte="svelte-8omyux">` : `<link rel="${"preload"}" as="${"image"}"${add_attribute("href", assets + "/frames/intro/desktop/frame_" + frame + ".webp", 0)} type="${"image/webp"}" media="${"(min-width: 721px)"}" data-svelte="svelte-8omyux">`}`;
  })}`, ""}


<section class="${"svelte-yh3wlf"}"><div class="${"parallax-container svelte-yh3wlf"}">${each(frames, (frame) => {
    return `${isNaN(currentFrame) && frame == 1 || frame === parseInt(currentFrame) ? `<div class="${"frame active frame_" + escape(frame) + " svelte-yh3wlf"}"><picture class="${"svelte-yh3wlf"}"><source media="${"(min-width:721px)"}"${add_attribute("srcset", assets + "/frames/intro/desktop/frame_" + frame + ".webp", 0)} type="${"image/webp"}" width="${"1920"}" height="${"1080"}">
						<source media="${"(max-width:720px)"}"${add_attribute("srcset", assets + "/frames/intro/mobile/frame_" + frame + ".webp", 0)} type="${"image/webp"}" width="${"720"}" height="${"1080"}">
						<img${add_attribute("src", assets + "/frames/intro/desktop/frame_" + frame + ".jpeg", 0)} alt="${""}"${add_attribute("style", `--heightVar:${heightVar}`, 0)} class="${"svelte-yh3wlf"}">
					</picture></div>
			` : ``}`;
  })}

		${parseInt(currentFrame) > totalFrames ? `<div class="${"frame active frame_" + escape(totalFrames) + " svelte-yh3wlf"}"><picture class="${"svelte-yh3wlf"}"><source media="${"(min-width:721px)"}"${add_attribute("srcset", assets + "/frames/intro/desktop/frame_" + totalFrames + ".webp", 0)} type="${"image/webp"}" width="${"1920"}" height="${"1080"}">
					<source media="${"(max-width:720px)"}"${add_attribute("srcset", assets + "/frames/intro/mobile/frame_" + totalFrames + ".webp", 0)} type="${"image/webp"}" width="${"720"}" height="${"1080"}">
					<img${add_attribute("src", assets + "/frames/intro/desktop/frame_" + totalFrames + ".jpeg", 0)} alt="${""}"${add_attribute("style", `--heightVar:${heightVar}`, 0)} class="${"svelte-yh3wlf"}"></picture></div>` : ``}

		<div class="${"frame frame_" + escape(frames.length + 1) + " svelte-yh3wlf"}"></div></div>
	${validate_component(Slogan, "Slogan").$$render($$result, {}, {}, {})}
</section>`;
});
var hero_svelte_svelte_type_style_lang = "";
const css$d = {
  code: ".hidden.svelte-1gjqyju.svelte-1gjqyju{opacity:0;user-select:none}section.svelte-1gjqyju.svelte-1gjqyju{padding-bottom:0}.wrapper.svelte-1gjqyju.svelte-1gjqyju{padding:var(--hero-section-padding)}.one-liner.svelte-1gjqyju.svelte-1gjqyju{display:block}h2.svelte-1gjqyju.svelte-1gjqyju{font-family:var(--montserrat), Arial, Helvetica, sans-serif;font-size:var(--hero-font-size);font-weight:var(--hero-font-weight);line-height:var(--hero-line-height);letter-spacing:var(--letter-spacing);margin:0 auto;padding-bottom:var(--hero-padding-bottom);aspect-ratio:266/319;width:100%;font-display:swap}h2.svelte-1gjqyju>span.svelte-1gjqyju{display:block}h2.svelte-1gjqyju>span.one-liner.svelte-1gjqyju{padding-top:1.5rem}img.svelte-1gjqyju.svelte-1gjqyju{width:100%;display:block;border-radius:var(--hero-image-brdrds)}.hero-image-wrapper.svelte-1gjqyju.svelte-1gjqyju{aspect-ratio:1678/947;position:relative;width:100%}@media(max-width: 959px){h2.svelte-1gjqyju.svelte-1gjqyju{padding-bottom:0}.wrapper.svelte-1gjqyju.svelte-1gjqyju{padding:var(--hero-section-padding);height:100%;display:grid;gap:1rem;padding-bottom:0}}@media(min-width: 960px){.hero-text.svelte-1gjqyju.svelte-1gjqyju,.hero-image.svelte-1gjqyju.svelte-1gjqyju{min-height:50vh;align-items:center;display:grid;margin:0 auto}h2.svelte-1gjqyju.svelte-1gjqyju{text-align:var(--hero-text-align);aspect-ratio:827 / 300;max-width:var(--hero-max-width)}h2.svelte-1gjqyju>span.svelte-1gjqyju{display:inline-block}h2.svelte-1gjqyju>span.svelte-1gjqyju:nth-child(1){display:block}.hero-image-wrapper.svelte-1gjqyju.svelte-1gjqyju{aspect-ratio:1678/947;position:relative;width:100%}picture.svelte-1gjqyju.svelte-1gjqyju{aspect-ratio:1678/947;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);overflow:hidden;border-radius:var(--hero-image-brdrds)}img.svelte-1gjqyju.svelte-1gjqyju{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);transform-origin:center;width:auto;max-width:unset;margin:0 auto;display:block;border-radius:var(--hero-image-brdrds)}picture.animate.svelte-1gjqyju.svelte-1gjqyju,picture.animateFromTop.svelte-1gjqyju.svelte-1gjqyju,picture.animateFromBottom.svelte-1gjqyju.svelte-1gjqyju,picture.animateToBottom.svelte-1gjqyju.svelte-1gjqyju,picture.animateToTop.svelte-1gjqyju.svelte-1gjqyju{height:400px;width:400px;animation-name:none}picture.animate.animateFromTop.svelte-1gjqyju.svelte-1gjqyju{-webkit-animation:scale-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation:scale-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation-delay:1s}picture.animateToTop.animateFromTop.svelte-1gjqyju.svelte-1gjqyju:not(.animate),picture.animate.animateFromBottom.svelte-1gjqyju.svelte-1gjqyju:not(.animateFromTop){height:100%;width:100%;animation-name:none}picture.svelte-1gjqyju img.animate.svelte-1gjqyju,picture.svelte-1gjqyju img.animateFromTop.svelte-1gjqyju,picture.svelte-1gjqyju img.animateFromBottom.svelte-1gjqyju,picture.svelte-1gjqyju img.animateToBottom.svelte-1gjqyju,picture.svelte-1gjqyju img.animateToTop.svelte-1gjqyju{transform:translateX(-47%) translateY(-40%);height:calc((947 / 1678) * 100vw);animation-name:none}picture.svelte-1gjqyju img.animate.animateFromTop.svelte-1gjqyju{-webkit-animation:size-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation:size-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation-delay:1.3s}picture.svelte-1gjqyju img.animateToTop.animateFromTop.svelte-1gjqyju:not(.animate),picture.svelte-1gjqyju img.animate.animateFromBottom.svelte-1gjqyju:not(.animateFromTop){transform:translateX(-50%) translateY(-50%);height:100%;animation-name:none}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let isMobile = $innerWidth < 960;
  const image = {
    src: {
      desktop: assets + "images/home/hero-image-desktop.webp",
      mobile: assets + "images/home/hero-image-desktop-small.webp"
    },
    alt: "Functionland's Blockchain-Attached Storage creates a sustainable ecosystem for app developers to create high-quality, free-forever applications which keep users' data private",
    options: { threshold: 0.01, unobserveOnEnter: false },
    inview: false,
    scrollDirection: "",
    change: ({ detail }) => {
      image.inview = detail.inView;
      image.scrollDirection = detail.scrollDirection.vertical;
    },
    init: ({ detail }) => {
      image.posY = window.pageYOffset + detail.node.getBoundingClientRect().y;
    }
  };
  $$result.css.add(css$d);
  $$unsubscribe_innerWidth();
  return `${$$result.head += `<link rel="${"preload"}"${add_attribute("href", image.src.desktop, 0)} media="${"(min-width: 960px)"}" as="${"image"}" data-svelte="svelte-gul4q"><link rel="${"preload"}"${add_attribute("href", image.src.mobile, 0)} media="${"(max-width: 959px)"}" as="${"image"}" data-svelte="svelte-gul4q">`, ""}
<section class="${"svelte-1gjqyju"}"><div class="${"container"}"><div class="${"wrapper svelte-1gjqyju"}"><div class="${"hero-text svelte-1gjqyju"}"><h2 class="${"hero svelte-1gjqyju"}">${`<span class="${"one-liner hidden svelte-1gjqyju"}"><span class="${"bold"}">Box </span>
							<span>by </span>
							<span class="${"teal-text"}">Functionland </span></span>
						<span class="${"one-liner hidden svelte-1gjqyju"}"><span>The first </span>
							<span>Blockchain-Attached Storage solution</span></span>`}</h2></div>
			<div class="${"hero-image svelte-1gjqyju"}">${isMobile ? `<div class="${"hero-image-wrapper svelte-1gjqyju"}"><picture id="${"hero"}" class="${"svelte-1gjqyju"}"><source${add_attribute("srcset", image.src.desktop, 0)} media="${"(min-width: 960px)"}">
							${image.inview ? `<img${add_attribute("src", image.src.mobile, 0)}${add_attribute("alt", image.alt, 0)} loading="${"eager"}" class="${"svelte-1gjqyju"}">` : `<img${add_attribute("src", image.src.mobile, 0)}${add_attribute("alt", image.alt, 0)} loading="${"lazy"}" class="${"hidden svelte-1gjqyju"}">`}</picture></div>` : `<div class="${"hero-image-wrapper svelte-1gjqyju"}"><picture id="${"hero"}" class="${[
    "svelte-1gjqyju",
    (image.inview ? "animate" : "") + " " + (image.scrollDirection === "down" ? "animateFromBottom" : "") + " " + (image.scrollDirection !== "down" ? "animateFromTop" : "") + " " + (image.scrollDirection === "top" ? "animateToBottom" : "") + " " + (image.scrollDirection !== "top" ? "animateToTop" : "")
  ].join(" ").trim()}"><source${add_attribute("srcset", image.src.desktop, 0)} media="${"(min-width: 960px)"}">
							<img${add_attribute("src", image.src.mobile, 0)}${add_attribute("alt", image.alt, 0)} loading="${"eager"}" class="${[
    "svelte-1gjqyju",
    (image.inview ? "animate" : "") + " " + (image.scrollDirection === "down" ? "animateFromBottom" : "") + " " + (image.scrollDirection !== "down" ? "animateFromTop" : "") + " " + (image.scrollDirection === "top" ? "animateToBottom" : "") + " " + (image.scrollDirection !== "top" ? "animateToTop" : "")
  ].join(" ").trim()}"></picture></div>`}</div>


<style type="${"text/css"}">.ml-form-embedSubmitLoad{display:inline-block;width:20px;height:20px}.g-recaptcha{transform:scale(1);-webkit-transform:scale(1);transform-origin:0 0;-webkit-transform-origin:0 0}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ml-form-embedSubmitLoad:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:4px solid #fff;border-color:#fff #fff #fff transparent;animation:ml-form-embedSubmitLoad 1.2s linear infinite}@keyframes ml-form-embedSubmitLoad{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}#mlb2-5614488.ml-form-embedContainer{box-sizing:border-box;display:table;margin:0 auto;position:static;width:100%!important}#mlb2-5614488.ml-form-embedContainer button,#mlb2-5614488.ml-form-embedContainer h4,#mlb2-5614488.ml-form-embedContainer p,#mlb2-5614488.ml-form-embedContainer span{text-transform:none!important;letter-spacing:normal!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper{background-color:#eee;border-width:0;border-color:transparent;border-radius:4px;border-style:solid;box-sizing:border-box;display:inline-block!important;margin:0;padding:0;position:relative}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper.embedDefault,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper.embedPopup{width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper.embedForm{max-width:100%;width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-align-left{text-align:left}#mlb2-5614488.ml-form-embedContainer .ml-form-align-center{text-align:center}#mlb2-5614488.ml-form-embedContainer .ml-form-align-default{display:table-cell!important;vertical-align:middle!important;text-align:center!important}#mlb2-5614488.ml-form-embedContainer .ml-form-align-right{text-align:right}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedHeader img{border-top-left-radius:4px;border-top-right-radius:4px;height:auto;margin:0 auto!important;max-width:100%;width:undefinedpx}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody{padding:20px 20px 0 20px}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal{padding-bottom:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent{text-align:left;margin:0 0 20px 0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:30px;font-weight:400;margin:0 0 10px 0;text-align:left;word-break:break-word}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px;font-weight:400;line-height:20px;margin:0 0 10px 0;text-align:left}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ul,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ul{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol{list-style-type:lower-alpha}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol ol,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol ol{list-style-type:lower-roman}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p a,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p a{color:#000;text-decoration:underline}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group{text-align:left!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label{margin-bottom:5px;color:#333;font-size:14px;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-weight:700;font-style:normal;text-decoration:none;display:inline-block;line-height:20px}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child{margin:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form{margin:0;width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent{margin:0 0 20px 0;width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow{float:left}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm{margin:0;padding:0 0 20px 0;width:100%;height:auto;float:left}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow{margin:0 0 10px 0;width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item{margin:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-formfieldHorizintal{margin:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin-bottom:0;margin-top:0;margin-left:0;margin-right:0;padding:10px 10px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-webkit-input-placeholder{color:#333}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-moz-placeholder{color:#333}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-ms-input-placeholder{color:#333}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-moz-placeholder{color:#333}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow textarea,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow textarea{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin-bottom:0;margin-top:0;padding:10px 10px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{border-color:#ccc!important;background-color:#fff!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input.custom-control-input[type=checkbox]{box-sizing:border-box;padding:0;position:absolute;z-index:-1;opacity:0;margin-top:5px;margin-left:-1.5rem;overflow:visible}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{border-radius:4px!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::after{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e")}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input:checked~.custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::before{border-color:#00d0d0!important;background-color:#00d0d0!important;color:#fff!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before{top:2px;box-sizing:border-box}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after{top:0!important;box-sizing:border-box!important;position:absolute;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::before{position:absolute;top:4px;left:-1.5rem;display:block;width:16px;height:16px;pointer-events:none;content:"";background-color:#fff;border:#adb5bd solid 1px;border-radius:50%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::after{position:absolute;top:2px!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{position:absolute;top:4px;left:-1.5rem;display:block;width:16px;height:16px;pointer-events:none;content:"";background-color:#fff;border:#adb5bd solid 1px;border-radius:50%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after{position:absolute;top:0!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after{position:absolute;top:0!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-radio .custom-control-label::after{background:no-repeat 50%/50% 50%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after{background:no-repeat 50%/50% 50%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-control,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input{position:absolute;z-index:-1;opacity:0;box-sizing:border-box;padding:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label{color:#000;font-size:12px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;line-height:22px;margin-bottom:0;position:relative;vertical-align:top;font-style:normal;font-weight:700}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-select,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-select{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;line-height:20px!important;margin-bottom:0;margin-top:0;padding:10px 28px 10px 12px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important;height:auto;display:inline-block;vertical-align:middle;background:url(https://cdn.mailerlite.com/images/default/dropdown.svg) no-repeat right .75rem center/8px 10px;-webkit-appearance:none;-moz-appearance:none;appearance:none}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow{height:auto;width:100%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal{width:70%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal{width:30%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal.labelsOn{padding-top:25px}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields{box-sizing:border-box;float:left;padding-right:10px}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input{background-color:#fff;color:#333;border-color:#ccc;border-radius:4px;border-style:solid;border-width:1px;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;margin-bottom:0;margin-top:0;padding:10px 10px;width:100%;box-sizing:border-box;overflow-y:initial}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button{background-color:#00d0d0!important;border-color:#00d0d0;border-style:solid;border-width:1px;border-radius:6px;box-shadow:none;color:#fff!important;cursor:pointer;font-family:Roboto,Arial,Helvetica,sans-serif;font-size:12px!important;font-weight:700;line-height:20px;margin:0!important;padding:10px!important;width:100%;height:auto}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button:hover{background-color:#02b0b0!important;border-color:#02b0b0!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]{box-sizing:border-box;padding:0;position:absolute;z-index:-1;opacity:0;margin-top:5px;margin-left:-1.5rem;overflow:visible}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description{color:#000;display:block;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:12px;text-align:left;margin-bottom:0;position:relative;vertical-align:top}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label{font-weight:400;margin:0;padding:0;position:relative;display:block;min-height:24px;padding-left:24px}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a{color:#000;text-decoration:underline}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p{color:#000!important;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:12px!important;font-weight:400!important;line-height:18px!important;padding:0!important;margin:0 5px 0 0!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p:last-child{margin:0}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit{margin:0 0 20px 0;float:left;width:100%}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button{background-color:#00d0d0!important;border:none!important;border-radius:6px!important;box-shadow:none!important;color:#fff!important;cursor:pointer;font-family:Roboto,Arial,Helvetica,sans-serif!important;font-size:12px!important;font-weight:700!important;line-height:21px!important;height:auto;padding:10px!important;width:100%!important;box-sizing:border-box!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading{display:none}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover{background-color:#02b0b0!important}.ml-subscribe-close{width:30px;height:30px;background:url(https://cdn.mailerlite.com/images/default/modal_close.png) no-repeat;background-size:30px;cursor:pointer;margin-top:-10px;margin-right:-10px;position:absolute;top:0;right:0}.ml-error input,.ml-error select,.ml-error textarea{border-color:red!important}.ml-error .custom-checkbox-radio-list{border:1px solid red!important;border-radius:4px;padding:10px}.ml-error .label-description,.ml-error .label-description p,.ml-error .label-description p a,.ml-error label:first-child{color:red!important}#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p,#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p:first-letter{color:red!important}@media only screen and (max-width:600px){.ml-form-embedWrapper.embedDefault,.ml-form-embedWrapper.embedPopup{width:100%!important}.ml-form-formContent.horozintalForm{float:left!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow{height:auto!important;width:100%!important;float:left!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal{width:100%!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal>div{padding-right:0!important;padding-bottom:10px}.ml-form-formContent.horozintalForm .ml-button-horizontal{width:100%!important}.ml-form-formContent.horozintalForm .ml-button-horizontal.labelsOn{padding-top:0!important}}
</style>
<style type="${"text/css"}">.ml-mobileButton-horizontal{display:none}#mlb2-5614488 .ml-mobileButton-horizontal button{background-color:#00d0d0!important;border-color:#00d0d0!important;border-style:solid!important;border-width:1px!important;border-radius:6px!important;box-shadow:none!important;color:#fff!important;cursor:pointer;font-family:Roboto,Arial,Helvetica,sans-serif!important;font-size:14px!important;font-weight:700!important;line-height:20px!important;padding:10px!important;width:100%!important}@media only screen and (max-width:600px){#mlb2-5614488.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm{padding:0 0 10px 0!important}.ml-hide-horizontal{display:none!important}.ml-form-formContent.horozintalForm .ml-button-horizontal{display:none!important}.ml-mobileButton-horizontal{display:inline-block!important;margin-bottom:20px;width:100%}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal>div{padding-bottom:0!important}}
</style>
<style type="${"text/css"}">@media only screen and (max-width:600px){.ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields{margin-bottom:10px!important;width:100%!important}}
</style>
<div id="${"mlb2-5614488"}" class="${"ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5614488"}"><div class="${"ml-form-align-center"}"><div class="${"ml-form-embedWrapper embedForm"}"><div class="${"ml-form-embedBody ml-form-embedBodyHorizontal row-form"}"><div class="${"ml-form-embedContent"}" style="${"margin-bottom:0"}"></div>
        <form class="${"ml-block-form"}" action="${"https://static.mailerlite.com/webforms/submit/q9h9a4"}" data-code="${"q9h9a4"}" method="${"post"}" target="${"_blank"}"><div class="${"ml-form-formContent horozintalForm"}"><div class="${"ml-form-horizontalRow"}"><div class="${"ml-input-horizontal"}"><div style="${"width:100%"}" class="${"horizontal-fields"}"><div class="${"ml-field-group ml-field-email ml-validate-email ml-validate-required"}"><input type="${"email"}" class="${"form-control"}" data-inputmask="${""}" name="${"fields[email]"}" placeholder="${"Enter You Email for up to 50% off"}" autocomplete="${"email"}"></div></div></div>
              <div class="${"ml-button-horizontal primary"}"><button type="${"submit"}" class="${"primary"}">Pre-register for up to 50% off</button>
                <button disabled="${"disabled"}" style="${"display:none"}" type="${"button"}" class="${"loading"}"><div class="${"ml-form-embedSubmitLoad"}"></div> <span class="${"sr-only"}">Loading...</span></button></div></div></div>
          <input type="${"hidden"}" name="${"ml-submit"}" value="${"1"}">
          <div class="${"ml-mobileButton-horizontal"}"><button type="${"submit"}" class="${"primary"}">Pre-register for up to 50% off</button>
            <button disabled="${"disabled"}" style="${"display:none"}" type="${"button"}" class="${"loading"}"><div class="${"ml-form-embedSubmitLoad"}"></div> <span class="${"sr-only"}">Loading...</span></button></div>
          <input type="${"hidden"}" name="${"anticsrf"}" value="${"true"}"></form></div>
      <div class="${"ml-form-successBody row-success"}" style="${"display:none"}"><div class="${"ml-form-successContent"}"><h4></h4>
          <p><span style="${"color:#f6f6f6;font-size:20px"}"><span style="${"color:#000"}"><strong>Thank you for becoming a Functionlander!</strong></span><br></span></p>
          <p><strong><span style="${"color:#ccc"}"><span style="${"color:#000"}">You will receive a confirmation email shortly, please <em>confirm</em> your subscription.</span></span></strong></p></div></div></div></div></div>
<script>function ml_webform_success_5614488(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-5614488 .row-success").show(),r(".ml-subscribe-form-5614488 .row-form").hide()}
<\/script>
<img src="${"https://track.mailerlite.com/webforms/o/5614488/q9h9a4?v1647787747"}" width="${"1"}" height="${"1"}" style="${"max-width:1px;max-height:1px;visibility:hidden;padding:0;margin:0;display:block"}" alt="${"."}" border="${"0"}" class="${"svelte-1gjqyju"}">
<script src="${"https://static.mailerlite.com/js/w/webforms.min.js?v9b62042f798751c8de86a784eab23614"}" type="${"text/javascript"}"><\/script>
</div></div>
</section>`;
});
var FadeIn_svelte_svelte_type_style_lang = "";
const css$c = {
  code: ".fullheight.svelte-cca67j{height:100%}.inheritbg.svelte-cca67j{background:inherit}",
  map: null
};
const FadeIn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inview } = $$props;
  let { delay } = $$props;
  let { fh } = $$props;
  let { inheritbg } = $$props;
  if ($$props.inview === void 0 && $$bindings.inview && inview !== void 0)
    $$bindings.inview(inview);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.fh === void 0 && $$bindings.fh && fh !== void 0)
    $$bindings.fh(fh);
  if ($$props.inheritbg === void 0 && $$bindings.inheritbg && inheritbg !== void 0)
    $$bindings.inheritbg(inheritbg);
  $$result.css.add(css$c);
  return `<div${add_attribute("style", `${typeof delay != "undefined" ? `animation-delay: ${delay}s;` : ""}`, 0)} class="${[
    "svelte-cca67j",
    (inheritbg ? "inheritbg" : "") + " " + (fh ? "fullheight" : "") + " " + (inview.inview ? "fadeIn" : "") + " " + (inview.scrollDirection === "down" ? "fadeInFromBottom" : "") + " " + (inview.scrollDirection !== "down" ? "fadeInFromTop" : "") + " " + (inview.scrollDirection === "top" ? "fadeInToBottom" : "") + " " + (inview.scrollDirection !== "top" ? "fadeInToTop" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css$b = {
  code: "h2.svelte-19b7igf{font-size:var(--headline-title-font-size);line-height:var(--headline-title-line-height);font-weight:var(--headline-title-font-weight);letter-spacing:var(--headline-letter-spacing);padding-bottom:var(--headline-title-padding-bottom)}p.svelte-19b7igf{font-size:var(--headline-content-font-size);line-height:var(--headline-content-line-height);font-weight:var(--headline-content-font-weight);padding-bottom:var(--headline-content-padding-bottom)}.wrapper.svelte-19b7igf{height:100%;align-self:start}.animate.svelte-19b7igf,.animateFromTop.svelte-19b7igf,.animateFromBottom.svelte-19b7igf,.animateToBottom.svelte-19b7igf,.animateToTop.svelte-19b7igf{opacity:0;animation-name:none}.animate.animateFromTop.svelte-19b7igf{-webkit-animation:fade-in-bottom 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation:fade-in-bottom 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation-delay:0.6s}.animateToTop.animateFromTop.svelte-19b7igf:not(.animate),.animate.animateFromBottom.svelte-19b7igf:not(.animateFromTop){opacity:1;animation-name:none}@media(min-width: 960px){.wrapper.titled.svelte-19b7igf{grid-row:2}button.svelte-19b7igf{align-self:end}.item.svelte-19b7igf{height:100%;display:grid;grid-auto-flow:column;grid-template-rows:auto 1fr auto;width:100%;grid-template-columns:1fr;max-width:unset}}@media(max-width: 960px){.item.svelte-19b7igf{padding:0 15px}}@media(prefers-color-scheme: dark){.item.svelte-19b7igf{padding-top:1rem;padding-bottom:1rem;position:relative;border-radius:20px}.dark-bg.svelte-19b7igf{display:block;position:absolute;top:0;left:0;width:100%;height:100%;border-radius:20px;z-index:-1;background:var(--b-o-5)}}@media(prefers-color-scheme: dark) and (min-width: 960px){.item.svelte-19b7igf{padding:1rem}}",
  map: null
};
const Headline = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => value);
  let { item } = $$props;
  let { titled } = $$props;
  let { index } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  if ($$props.titled === void 0 && $$bindings.titled && titled !== void 0)
    $$bindings.titled(titled);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$b);
  $$unsubscribe_innerWidth();
  return `<div class="${escape(null_to_empty(`wrapper ${titled ? "titled" : ""}`)) + " svelte-19b7igf"}"><div class="${escape(null_to_empty(`item ${titled ? "titled" : ""}`)) + " svelte-19b7igf"}"><h2 class="${"svelte-19b7igf"}">${escape(item.intro_title)}</h2>
		<p class="${"svelte-19b7igf"}"><!-- HTML_TAG_START -->${item.intro_desc}<!-- HTML_TAG_END --></p>
		
		${item.show_cta == true ? `<button class="${"btn btn-cta svelte-19b7igf"}">${escape(item.cta_text)}</button>` : ``}
		<div class="${"dark-bg svelte-19b7igf"}"></div></div>
</div>`;
});
var grid_svelte_svelte_type_style_lang = "";
const css$a = {
  code: "section.has-headline.svelte-1lxdn79.svelte-1lxdn79,section.has-pre-section.svelte-1lxdn79.svelte-1lxdn79{min-height:var(--description-min-height)}.grid.svelte-1lxdn79.svelte-1lxdn79{display:grid;grid-auto-flow:row;grid-template-columns:1fr;gap:var(--headlines-grid-gap);align-items:center;justify-items:center;padding:var(--headlines-padding)}.grid.has-pre-section.svelte-1lxdn79 .pre-section.svelte-1lxdn79{text-align:center;display:grid;row-gap:1rem;grid-template-rows:minmax(20vh, 1fr) auto;align-items:center}.grid.has-pre-section.svelte-1lxdn79 h3.svelte-1lxdn79{font-size:20px;font-weight:500}@media(min-width: 960px){.grid.svelte-1lxdn79.svelte-1lxdn79{padding:0;max-height:var(--section-min-height);gap:var(--headlines-grid-gap);grid-template-columns:1fr 1fr 1fr}.grid.has-pre-section.svelte-1lxdn79.svelte-1lxdn79,.grid.has-headline.svelte-1lxdn79.svelte-1lxdn79{gap:var(--headlines-grid-gap);padding:0;min-height:var(--section-min-height);row-gap:0;padding-bottom:6rem;max-height:unset}.grid.has-headline.svelte-1lxdn79.svelte-1lxdn79{grid-template-rows:1fr 1fr 120px;grid-template-columns:1fr 1fr 1fr;min-height:var(--section-min-height)}.grid.has-pre-section.svelte-1lxdn79.svelte-1lxdn79{grid-template-columns:1fr 1fr 1fr;min-height:var(--section-min-height);row-gap:2rem;justify-content:center;justify-items:center}.grid.has-headline.svelte-1lxdn79 h3.svelte-1lxdn79{font-size:20px;font-weight:500;grid-row:1 / 2;grid-column:1 / 4;align-self:center;justify-self:center;font-size:80px;padding:120px 0}.grid.has-pre-section.svelte-1lxdn79 .pre-section.svelte-1lxdn79{grid-row:1 / 2;grid-column:1 / 4;text-align:center;display:grid;row-gap:1rem;grid-template-rows:50vh auto;align-items:center;max-width:var(--container-max-width)}.grid.has-pre-section.svelte-1lxdn79 h3.svelte-1lxdn79{font-size:64px}.grid.has-pre-section.svelte-1lxdn79 img.svelte-1lxdn79{width:100%;border-radius:20px}.grid.has-headline h3 b, .grid.has-pre-section h3 b{font-weight:bold}}@media(prefers-color-scheme: dark){.grid.has-pre-section.svelte-1lxdn79 h3.svelte-1lxdn79,.grid.has-headline.svelte-1lxdn79 h3.svelte-1lxdn79{mix-blend-mode:screen;color:var(--actionColor)}}",
  map: null
};
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let { data: data2 } = $$props;
  let { title } = $$props;
  let { presection } = $$props;
  let sectionClass, wrapperClass = "grid wrapper";
  if (typeof title != "undefined" && $innerWidth > 960) {
    wrapperClass += " has-headline";
    sectionClass = "has-headline";
  }
  if (typeof presection != "undefined") {
    wrapperClass += " has-pre-section";
    sectionClass = "has-pre-section";
  }
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.presection === void 0 && $$bindings.presection && presection !== void 0)
    $$bindings.presection(presection);
  $$result.css.add(css$a);
  $$unsubscribe_innerWidth();
  return `${$$result.head += `${``}`, ""}
<section class="${escape(null_to_empty(sectionClass)) + " svelte-1lxdn79"}"><div class="${"container"}"><div class="${escape(null_to_empty(wrapperClass)) + " svelte-1lxdn79"}">${title && $innerWidth > 960 ? `<h3 class="${"svelte-1lxdn79"}"><!-- HTML_TAG_START -->${title}<!-- HTML_TAG_END --></h3>` : ``}
			${typeof presection != "undefined" ? `<div class="${"pre-section svelte-1lxdn79"}">${presection.title.length > 0 ? `<h3 class="${"svelte-1lxdn79"}"><!-- HTML_TAG_START -->${presection.title}<!-- HTML_TAG_END --></h3>` : ``}
					${presection.desc.length > 0 ? `<p><!-- HTML_TAG_START -->${presection.desc}<!-- HTML_TAG_END --></p>` : ``}
					${presection.image.src.length > 0 ? `<div><img${add_attribute("src", presection.image.src, 0)}${add_attribute("alt", presection.image.alt, 0)}${add_attribute("type", presection.image.type, 0)} loading="${"lazy"}" class="${"svelte-1lxdn79"}"></div>` : ``}</div>` : ``}
			${each(data2, (item, index) => {
    return `${item.show == true ? `${validate_component(Headline, "Headline").$$render($$result, {
      item,
      titled: title != void 0 ? true : false,
      index
    }, {}, {})}` : ``}`;
  })}</div></div>
</section>`;
});
var descItem_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".hidden.svelte-u9jxer{opacity:0}.fade-in-right.svelte-u9jxer,.fade-in-rightFromBottom.svelte-u9jxer,.fade-in-rightFromTop.svelte-u9jxer{animation-name:none}.fade-in-rightFromTop.svelte-u9jxer{animation:fade-in-right 1s ease-in-out normal both;animation-delay:0.8s}.fade-in-rightFromBottom.svelte-u9jxer{animation-name:none}h3.svelte-u9jxer{z-index:1;margin:0 auto;text-align:center;position:relative;padding:var(--description-title-padding);font-size:var(--description-title-font-size);line-height:var(--description-title-line-height);font-weight:var(--description-title-font-weight);color:var(--section-title-color);mix-blend-mode:var(--section-title-mix-blend-mode)}h3.earn-crypto.svelte-u9jxer{color:white;grid-row-gap:20px;padding-bottom:0}p.svelte-u9jxer{z-index:1;margin:0 auto;position:relative;padding:0 1rem;line-height:var(--description-desc-line-height);padding-bottom:var(--description-desc-padding-bottom)}p.apps-without-ads.svelte-u9jxer{text-align:center;max-width:90%}p.earn-crypto.svelte-u9jxer{max-width:90%;padding:0}@media(min-width: 960px){p.svelte-u9jxer{width:var(--description-max-width);max-width:900px}p.earn-crypto.svelte-u9jxer{max-width:900px}h3.plug-n-play.svelte-u9jxer,p.plug-n-play.svelte-u9jxer{padding:1rem 0;margin:unset;justify-self:start}h3.customizable.svelte-u9jxer,p.customizable.svelte-u9jxer{grid-column:2/3;padding:1rem 0;text-align:start;width:100%;max-width:78%}h3.plug-n-play.svelte-u9jxer,h3.customizable.svelte-u9jxer{grid-row:2/3}p.customizable.svelte-u9jxer,p.plug-n-play.svelte-u9jxer{grid-row:3/4}}@media(max-width: 959px){h3.earn-crypto.svelte-u9jxer{font-size:42px;line-height:1.2;padding:2rem 1rem 1.5rem}p.earn-crypto.svelte-u9jxer{aspect-ratio:228/220;width:100%;max-width:75%}}@media(prefers-color-scheme: dark){h3.earn-crypto.svelte-u9jxer{color:var(--section-title-color)}}",
  map: null
};
const DescItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMobile;
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let { item } = $$props;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$9);
  isMobile = $innerWidth < 960;
  $$unsubscribe_innerWidth();
  return `${!isMobile ? `${item.ref == "plug-n-play" || item.ref == "customizable" ? `<h3 class="${escape(null_to_empty(item.ref)) + " svelte-u9jxer"}"><!-- HTML_TAG_START -->${item.main_title}<!-- HTML_TAG_END --></h3>
        <p class="${escape(null_to_empty(item.ref)) + " svelte-u9jxer"}"><!-- HTML_TAG_START -->${item.main_desc}<!-- HTML_TAG_END --></p>` : `<h3 class="${escape(null_to_empty(item.ref)) + " svelte-u9jxer"}"><!-- HTML_TAG_START -->${item.main_title}<!-- HTML_TAG_END --></h3>
        <p class="${escape(null_to_empty(item.ref)) + " svelte-u9jxer"}"><!-- HTML_TAG_START -->${item.main_desc}<!-- HTML_TAG_END --></p>`}` : `<h3 class="${escape(null_to_empty(item.ref)) + " svelte-u9jxer"}"><!-- HTML_TAG_START -->${item.main_title}<!-- HTML_TAG_END --></h3>
    <p class="${escape(null_to_empty(item.ref)) + " svelte-u9jxer"}"><!-- HTML_TAG_START -->${item.main_desc}<!-- HTML_TAG_END --></p>`}`;
});
var ColorScheme;
(function(ColorScheme2) {
  ColorScheme2[ColorScheme2["Light"] = 0] = "Light";
  ColorScheme2[ColorScheme2["Dark"] = 1] = "Dark";
})(ColorScheme || (ColorScheme = {}));
let colorSchemeMediaQuery;
function getColorSchemeMediaQuery() {
  if (!colorSchemeMediaQuery) {
    colorSchemeMediaQuery = windowShim.matchMedia("(prefers-color-scheme: dark)");
  }
  return colorSchemeMediaQuery;
}
function getColorScheme() {
  return getColorSchemeMediaQuery().matches ? ColorScheme.Dark : ColorScheme.Light;
}
function makeColorSchemeStore(debounced) {
  let previousValue;
  return readable(void 0, (set) => {
    const update = () => {
      const currentValue = getColorScheme();
      if (currentValue !== previousValue) {
        previousValue = currentValue;
        set(currentValue);
      }
    };
    update();
    const changeHandler = debounced ? debounce(update) : update;
    getColorSchemeMediaQuery().addEventListener("change", changeHandler);
    return () => {
      getColorSchemeMediaQuery().removeEventListener("change", changeHandler);
    };
  });
}
const prefersColorScheme = makeColorSchemeStore(true);
var videos_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".desktop-video.svelte-h2qfa7{display:none}.video-wrapper.svelte-h2qfa7{position:relative;width:100%;text-align:center;align-self:center}video.svelte-h2qfa7{max-width:100%}.video-wrapper.earn-crypto.svelte-h2qfa7{position:relative;bottom:0;width:100%;z-index:0;margin:-70px 0 0}.video-wrapper.earn-crypto.svelte-h2qfa7:before{content:'';background:linear-gradient(180deg, #4c4d51 60.48%, rgba(79, 80, 85, 0) 92.22%);top:-80%;left:0;width:100%;height:20%;position:absolute;z-index:1;pointer-events:none}video.earn-crypto.svelte-h2qfa7{max-width:unset;width:150%;left:50%;bottom:-10%;transform:translateX(-50%);position:absolute}.video-wrapper.video-wrapper.customizable.svelte-h2qfa7{border-radius:20px;overflow:hidden}@media(min-width: 960px){.mobile-video.svelte-h2qfa7{display:none}.desktop-video.svelte-h2qfa7{display:block}.video-wrapper.svelte-h2qfa7{position:relative;width:100%;text-align:center;overflow:hidden}.video-wrapper.customizable.svelte-h2qfa7{grid-row:1/-1;grid-column:1/-1;border-radius:20px;overflow:hidden;z-index:1}video.svelte-h2qfa7{max-width:600px;display:block;margin:0 auto}.video-wrapper.earn-crypto.svelte-h2qfa7{position:relative;padding-top:0;margin:unset;width:unset;height:unset;margin-top:-20vh}video.earn-crypto.svelte-h2qfa7{max-width:100%;width:unset;left:50%;bottom:0;transform:translate(-50%, 0);position:relative}.video-wrapper.earn-crypto.svelte-h2qfa7:before{top:-10%}.video-wrapper.customizable.svelte-h2qfa7{transform-origin:start;justify-self:start;position:absolute;left:0;z-index:1;top:0;transform-origin:center;height:100%;width:100%;overflow:hidden;border-radius:20px;overflow:hidden;align-items:center;display:grid}.video-wrapper.customizable.animateFromTop.svelte-h2qfa7{-webkit-animation:expand-to-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation:expand-to-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation-delay:0.2s}.video-wrapper.customizable.animateFromBottom.svelte-h2qfa7{-webkit-animation:expand-to-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation:expand-to-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation-delay:0.2s}.video-wrapper.customizable.animate.svelte-h2qfa7{-webkit-animation:collapse-from-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation:collapse-from-right 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation-delay:0.2s}}@media(prefers-color-scheme: dark){.video-wrapper.customizable.svelte-h2qfa7{background:#3a3f48}}",
  map: null
};
let browserSupportText = "Your browser does not support the video element.";
const Videos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let colorScheme;
  let $innerWidth, $$unsubscribe_innerWidth;
  let $prefersColorScheme, $$unsubscribe_prefersColorScheme;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  $$unsubscribe_prefersColorScheme = subscribe(prefersColorScheme, (value) => $prefersColorScheme = value);
  let { data: data2 } = $$props;
  let videos = data2.videos ? data2.videos.length > 0 ? data2.videos : false : false;
  const observer = {
    inview: false,
    options: {
      rootMargin: "150px",
      unobserveOnEnter: false
    },
    scrollDirection: "",
    change: ({ detail }) => {
      observer.inview = detail.inView;
      observer.scrollDirection = detail.scrollDirection.vertical;
      if (detail.inView == true) {
        let video = detail.node.querySelector("video");
        if (video !== null) {
          if (data2.ref === "earn-crypto") {
            if ($innerWidth < 960) {
              detail.node.querySelector("video.mobile-video");
            } else {
              detail.node.querySelector("video.desktop-video");
            }
          }
          if (video.paused) {
            setTimeout(() => {
              video.play();
              video.addEventListener("timeupdate", function() {
              }, false);
            }, 600);
          }
        }
      }
    }
  };
  let custCurrentTime;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  $$result.css.add(css$8);
  colorScheme = $prefersColorScheme === 0 ? "light" : "dark";
  $$unsubscribe_innerWidth();
  $$unsubscribe_prefersColorScheme();
  return `${videos ? `<div class="${[
    escape(data2.ref) + " de-contain video-wrapper svelte-h2qfa7",
    (observer.inview && data2.ref === "customizable" ? "animate" : "") + " " + (observer.scrollDirection === "down" && data2.ref === "customizable" ? "animateFromBottom" : "") + " " + (observer.scrollDirection !== "down" && data2.ref === "customizable" ? "animateFromTop" : "")
  ].join(" ").trim()}">${data2.ref === "earn-crypto" ? `${$innerWidth > 960 ? `${validate_component(FadeIn, "FadeIn").$$render($$result, {
    inview: observer,
    delay: 1.2,
    inheritbg: true
  }, {}, {
    default: () => {
      return `<video${add_attribute("src", videos[1].src, 0)}${add_attribute("type", videos[1].type, 0)} decoding="${"async"}" playsinline muted class="${escape(null_to_empty(`${data2.ref} ${data2.ref}-main desktop-video`)) + " svelte-h2qfa7"}"><source${add_attribute("src", videos[0].src, 0)}${add_attribute("type", videos[0].type, 0)} decoding="${"async"}" media="${"(max-width: 959px)"}">${escape(browserSupportText)}</video>
					<video${add_attribute("src", videos[0].src, 0)}${add_attribute("type", videos[0].type, 0)} decoding="${"async"}" playsinline muted class="${escape(null_to_empty(`${data2.ref} ${data2.ref}-main mobile-video`)) + " svelte-h2qfa7"}">${escape(browserSupportText)}</video>`;
    }
  })}` : `<div class="${"earn-crypto"}" style="${"line-height:0;"}"><img src="${"/images/home/earn-crypto.webp"}" alt="${""}" width="${"100%"}"></div>`}` : `${data2.ref == "own-your-data" ? `${$innerWidth > 960 ? `${each(videos, (video) => {
    return `${video.scheme !== void 0 ? `${colorScheme === video.scheme ? `${validate_component(FadeIn, "FadeIn").$$render($$result, {
      inview: observer,
      delay: 0.1,
      inheritbg: true
    }, {}, {
      default: () => {
        return `<video id="${"encryption"}" playsinline muted class="${escape(null_to_empty(`${data2.ref} `)) + " svelte-h2qfa7"}" decoding="${"async"}"><source${add_attribute("src", video.src, 0)}${add_attribute("type", video.type, 0)}>${escape(browserSupportText)}</video>
							`;
      }
    })}` : ``}` : `${validate_component(FadeIn, "FadeIn").$$render($$result, {
      inview: observer,
      delay: 0.6,
      inheritbg: true
    }, {}, {
      default: () => {
        return `<video playsinline muted class="${escape(null_to_empty(`${data2.ref} `)) + " svelte-h2qfa7"}" decoding="${"async"}"><source${add_attribute("src", video.src, 0)}${add_attribute("type", video.type, 0)}>${escape(browserSupportText)}</video>
						`;
      }
    })}`}`;
  })}` : `<div class="${"earn-crypto"}" style="${"line-height:0;"}"><img src="${"/images/home/own-your-data.webp"}" alt="${""}" width="${"100%"}"></div>`}` : `${each(videos, (video) => {
    return `${video.scheme !== void 0 ? `${colorScheme === video.scheme ? `${data2.ref === "customizable" ? `${validate_component(FadeIn, "FadeIn").$$render($$result, {
      inview: observer,
      delay: 0.3,
      inheritbg: true
    }, {}, {
      default: () => {
        return `<video playsinline muted class="${escape(null_to_empty(`${data2.ref} `)) + " svelte-h2qfa7"}" decoding="${"async"}" style="${"transition: transform 0.1s; transform: scale(2.4); transform-origin: bottom;"}"${add_attribute("currentTime", custCurrentTime, 0)}><source${add_attribute("src", video.src, 0)}${add_attribute("type", video.type, 0)}>${escape(browserSupportText)}</video>
							`;
      }
    })}` : `${validate_component(FadeIn, "FadeIn").$$render($$result, {
      inview: observer,
      delay: 0.1,
      inheritbg: true
    }, {}, {
      default: () => {
        return `<video id="${"encryption"}" playsinline muted class="${escape(null_to_empty(`${data2.ref} `)) + " svelte-h2qfa7"}" decoding="${"async"}"><source${add_attribute("src", video.src, 0)}${add_attribute("type", video.type, 0)}>${escape(browserSupportText)}</video>
							`;
      }
    })}`}` : ``}` : `${data2.ref === "customizable" ? `${validate_component(FadeIn, "FadeIn").$$render($$result, {
      inview: observer,
      delay: 0.3,
      inheritbg: true
    }, {}, {
      default: () => {
        return `<video playsinline muted class="${escape(null_to_empty(`${data2.ref} `)) + " svelte-h2qfa7"}" decoding="${"async"}"><source${add_attribute("src", video.src, 0)}${add_attribute("type", video.type, 0)}>${escape(browserSupportText)}</video>
						`;
      }
    })}` : `${validate_component(FadeIn, "FadeIn").$$render($$result, {
      inview: observer,
      delay: 0.6,
      inheritbg: true
    }, {}, {
      default: () => {
        return `<video playsinline muted class="${escape(null_to_empty(`${data2.ref} `)) + " svelte-h2qfa7"}" decoding="${"async"}"><source${add_attribute("src", video.src, 0)}${add_attribute("type", video.type, 0)}>${escape(browserSupportText)}</video>
						`;
      }
    })}`}`}`;
  })}`}`}</div>` : ``}


`;
});
var animatedImage_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".image-wrapper.svelte-1ls9rex.svelte-1ls9rex{transform:scale(0);width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);will-change:transform;transition:-webkit-transform 0.5s;transition:transform 0.5s;transition:transform 0.5s, -webkit-transform 0.5s;overflow:hidden}.image-transformer.svelte-1ls9rex.svelte-1ls9rex{will-change:transform;transition:-webkit-transform 0.6s;transition:transform 0.6s;transition:transform 0.6s, -webkit-transform 0.6s}.image-wrapper.animateFromTop.svelte-1ls9rex.svelte-1ls9rex{-webkit-transform:scale(1);transform:scale(1)}.image-wrapper.animateFromBottom.svelte-1ls9rex.svelte-1ls9rex{opacity:0;-webkit-transform:scale(0);transform:scale(0)}.image-wrapper.animate.svelte-1ls9rex.svelte-1ls9rex{transition:-webkit-transform 0.5s, opacity 0.4s;transition:transform 0.5s cubic-bezier(0.49, 0.45, 0.47, 1.24), opacity 0.4s;transition:transform 0.5s cubic-bezier(0.49, 0.45, 0.47, 1.24),\r\n			-webkit-transform 0.5s cubic-bezier(0.49, 0.45, 0.47, 1.24), opacity 0.4s;opacity:1;-webkit-transform:scale(1);transform:scale(1)}div.image-box.svelte-1ls9rex.svelte-1ls9rex{position:absolute}div.image-box.svelte-1ls9rex img.svelte-1ls9rex{height:100%;width:100%;border-radius:20px;display:block;object-fit:cover}div.image-box.svelte-1ls9rex.svelte-1ls9rex:nth-child(1){position:absolute;top:0;left:12.9%;z-index:1}div.image-box.svelte-1ls9rex.svelte-1ls9rex:nth-child(2){position:absolute;top:10.17%;left:3.6%;z-index:0}div.image-box.svelte-1ls9rex.svelte-1ls9rex:nth-child(3){position:absolute;top:32.69%;right:6.4%;z-index:0}div.image-box.svelte-1ls9rex.svelte-1ls9rex:nth-child(4){position:absolute;top:55.37%;left:3.5%;z-index:0}div.image-box.svelte-1ls9rex.svelte-1ls9rex:nth-child(5){position:absolute;bottom:0;left:15.6%;z-index:0}@media(max-width:960px){.design.image-box.svelte-1ls9rex.svelte-1ls9rex{width:50% !important;height:130px;padding:5px;position:static !important;aspect-ratio:1 !important}.design.image-box.svelte-1ls9rex img.svelte-1ls9rex{height:120px !important;object-fit:cover !important;animation:0}.image-box.apps-without-ads.svelte-1ls9rex.svelte-1ls9rex{width:50% !important;position:static !important;aspect-ratio:auto !important;line-height:0;padding:5px}.image-box.apps-without-ads.svelte-1ls9rex video.svelte-1ls9rex{max-width:100%;border-radius:20px}}@media(min-width: 960px){div.image-box.design.svelte-1ls9rex.svelte-1ls9rex,div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(1),div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(2),div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(3),div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(4),div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(5),div.image-box.design.svelte-1ls9rex img.svelte-1ls9rex{position:unset;top:unset;left:unset;right:unset;bottom:unset}div.image-box.svelte-1ls9rex:not(.design) img.svelte-1ls9rex{height:unset;width:100%;border-radius:20px}div.image-box.svelte-1ls9rex.svelte-1ls9rex:not(.design):nth-child(1){position:absolute;top:0;left:0;z-index:1}div.image-box.svelte-1ls9rex.svelte-1ls9rex:not(.design):nth-child(2){position:absolute;top:17.42%;left:3.6%;z-index:0}div.image-box.svelte-1ls9rex.svelte-1ls9rex:not(.design):nth-child(3){position:absolute;top:0;left:unset;right:0;z-index:0}div.image-box.svelte-1ls9rex.svelte-1ls9rex:not(.design):nth-child(4){position:absolute;top:unset;left:0;z-index:0;bottom:2.66%}div.image-box.svelte-1ls9rex.svelte-1ls9rex:not(.design):nth-child(5){position:absolute;bottom:0;right:0;left:unset;top:unset;z-index:0}div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(n),div.image-box.design.svelte-1ls9rex:nth-child(n) img.svelte-1ls9rex{aspect-ratio:unset !important;width:100% !important;height:100% !important}div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(1){grid-row:1/2;grid-column:1/3}div.image-box.design.svelte-1ls9rex:nth-child(1) .image-wrapper.svelte-1ls9rex{animation-delay:0.15s}div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(2){grid-row:1/2;grid-column:3/5}div.image-box.design.svelte-1ls9rex:nth-child(2) .image-wrapper.svelte-1ls9rex{animation-delay:0.15s}div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(3){grid-row:1/3;grid-column:5/6}div.image-box.design.svelte-1ls9rex:nth-child(3) .image-wrapper.svelte-1ls9rex{animation-delay:0.15s}div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(4){grid-row:2/3;grid-column:1/2}div.image-box.design.svelte-1ls9rex:nth-child(4) .image-wrapper.svelte-1ls9rex{animation-delay:0.1s}div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(5){grid-row:2/3;grid-column:2/4}div.image-box.design.svelte-1ls9rex:nth-child(5) .image-wrapper.svelte-1ls9rex{animation-delay:0.1s}div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(6){grid-row:2/3;grid-column:4/5}div.image-box.design.svelte-1ls9rex:nth-child(6) .image-wrapper.svelte-1ls9rex{animation-delay:0.1s}div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(7){grid-row:3/4;grid-column:1/4}div.image-box.design.svelte-1ls9rex:nth-child(7) .image-wrapper.svelte-1ls9rex{animation-delay:0.1s}div.image-box.design.svelte-1ls9rex.svelte-1ls9rex:nth-child(8){grid-row:3/4;grid-column:4/6}div.image-box.design.svelte-1ls9rex:nth-child(8) .image-wrapper.svelte-1ls9rex{animation-delay:0.1s}}",
  map: null
};
const AnimatedImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css$7);
  image.size === "small" ? 390 : 1530;
  return `${image.size == "small" ? `<div class="${escape(null_to_empty(`image-box ${image.ref}`)) + " svelte-1ls9rex"}"${add_attribute("style", `aspect-ratio: ${image.photo.srcset.small.width}/${image.photo.srcset.small.height}; width: ${image.photo.srcset.small.width / 390 * 100}%`, 0)}><div class="${"image-transformer svelte-1ls9rex"}"><div class="${[
    "image-wrapper svelte-1ls9rex",
    "  animateFromTop"
  ].join(" ").trim()}">${image.ref == "apps-without-ads" ? `<video${add_attribute("src", image.photo.srcset.large.src, 0)} class="${escape(null_to_empty(image.ref)) + " svelte-1ls9rex"}"${add_attribute("width", image.photo.srcset.large.width, 0)} type="${"video/mp4"}" autoplay="${"true"}" loading="${"lazy"}" decoding="${"async"}" loop muted><track default kind="${"captions"}"></video>` : `<img${add_attribute("src", image.photo.srcset.small.src, 0)} alt="${""}" class="${escape(null_to_empty(`${image.ref != "plug-n-play" ? image.position % 2 == 0 ? "vibrate-1-3s" : "vibrate-1-6s" : ""} ${image.ref}`)) + " svelte-1ls9rex"}"${add_attribute("width", image.photo.srcset[image.size].width, 0)}${add_attribute("height", image.photo.srcset[image.size].height, 0)} loading="${"lazy"}" decoding="${"async"}">`}</div></div></div>` : `<div class="${escape(null_to_empty(`image-box ${image.ref}`)) + " svelte-1ls9rex"}"${add_attribute("style", `aspect-ratio: ${image.photo.srcset.large.width}/${image.photo.srcset.large.height}; width: ${image.photo.srcset.large.width / 1530 * 100}%`, 0)}>${image.ref == "apps-without-ads" ? `<div class="${[
    "image-transformer svelte-1ls9rex",
    ""
  ].join(" ").trim()}"${add_attribute("data-range", `${parseInt(image.photo.srcset.large.width / 20)},${parseInt(image.photo.srcset.large.height / 20)}`, 0)}><div class="${[
    "image-wrapper video-mask svelte-1ls9rex",
    "  animateFromTop"
  ].join(" ").trim()}" style="${"transition-delay:" + escape(`${image.position % 2 === 0 ? "0.6s" : "0.7s"}`)}">
					<video${add_attribute("src", image.photo.srcset.large.src, 0)} class="${escape(null_to_empty(image.ref)) + " svelte-1ls9rex"}"${add_attribute("width", image.photo.srcset.large.width, 0)} type="${"video/mp4"}" autoplay="${"true"}" loading="${"lazy"}" decoding="${"async"}" loop muted><track default kind="${"captions"}"></video></div></div>` : `<div class="${[
    "image-wrapper svelte-1ls9rex",
    "  animateFromTop"
  ].join(" ").trim()}" style="${"transition-delay:" + escape(`${image.position % 2 === 0 ? "0.6s" : "0.7s"}`)}"><img${add_attribute("src", image.photo.srcset.large.src, 0)} alt="${""}" class="${escape(null_to_empty(image.ref)) + " svelte-1ls9rex"}"${add_attribute("width", image.photo.srcset.large.width, 0)}${add_attribute("height", image.photo.srcset.large.height, 0)} loading="${"lazy"}" decoding="${"async"}"></div>`}</div>`}`;
});
var plugnplayImage_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".hidden.svelte-5l04r6.svelte-5l04r6{opacity:0}@media(min-width: 960px){.image-box.svelte-5l04r6.svelte-5l04r6{position:absolute;right:0;z-index:1;top:0;transform-origin:center;height:100%;width:100%;overflow:hidden;border-radius:20px;overflow:hidden;object-fit:contain}.image-box.animateFromTop.svelte-5l04r6.svelte-5l04r6{-webkit-animation:expand-to-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation:expand-to-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation-delay:0.2s}.image-box.animateFromBottom.svelte-5l04r6.svelte-5l04r6{-webkit-animation:expand-to-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation:expand-to-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation-delay:0.2s}.image-box.animate.svelte-5l04r6.svelte-5l04r6{-webkit-animation:collapse-from-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation:collapse-from-left 1s cubic-bezier(0.39, 0.575, 0.565, 1) normal both;animation-delay:0.2s}.image-box.svelte-5l04r6 img.svelte-5l04r6{width:auto;max-width:unset;height:100%;max-width:unset;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);border-radius:20px;overflow:hidden}}",
  map: null
};
const PlugnplayImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  $$result.css.add(css$6);
  return `${image.size == "small" ? `<div class="${escape(null_to_empty(`image-box ${image.ref}`)) + " svelte-5l04r6"}"${add_attribute("style", `aspect-ratio: ${image.photo.srcset.small.width}/${image.photo.srcset.small.height}; width: ${image.photo.srcset.small.width / 390 * 100}%`, 0)}>${`<img${add_attribute("src", image.photo.srcset.small.src, 0)}${add_attribute("alt", image.photo.alt, 0)} class="${"hidden " + escape(image.ref) + " svelte-5l04r6"}"${add_attribute("width", image.photo.srcset.small.width, 0)}${add_attribute("height", image.photo.srcset.small.height, 0)} loading="${"lazy"}" decoding="${"async"}"${add_attribute("type", image.photo.type, 0)}>`}</div>` : `<div class="${[
    escape(null_to_empty(`image-box ${image.ref}`)) + " svelte-5l04r6",
    (image.parent.inview ? "animate" : "") + " " + (image.parent.scrollDirection === "down" ? "animateFromBottom" : "") + " " + (image.parent.scrollDirection !== "down" ? "animateFromTop" : "")
  ].join(" ").trim()}"><img${add_attribute("src", image.photo.srcset.large.src, 0)}${add_attribute("alt", image.photo.alt, 0)} class="${escape(null_to_empty(image.ref)) + " svelte-5l04r6"}"${add_attribute("width", image.photo.srcset.large.width, 0)}${add_attribute("height", image.photo.srcset.large.height, 0)} loading="${"lazy"}" decoding="${"async"}"${add_attribute("type", image.photo.type, 0)}></div>`}`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  $$unsubscribe_innerWidth();
  return `${data2.ref == "plug-n-play" ? `${$innerWidth < 960 ? `${validate_component(PlugnplayImage, "PlugnplayImage").$$render($$result, {
    image: {
      ref: data2.ref,
      photo: data2.photo,
      size: "small",
      parent: data2.parent
    }
  }, {}, {})}` : `${validate_component(PlugnplayImage, "PlugnplayImage").$$render($$result, {
    image: {
      ref: data2.ref,
      photo: data2.photo,
      size: "large",
      parent: data2.parent
    }
  }, {}, {})}`}` : `${$innerWidth < 960 ? `${data2.position <= 4 ? `${validate_component(AnimatedImage, "AnimatedImage").$$render($$result, {
    image: {
      ref: data2.ref,
      photo: data2.photo,
      position: data2.position,
      size: "small",
      parent: data2.parent
    }
  }, {}, {})}` : ``}` : `${validate_component(AnimatedImage, "AnimatedImage").$$render($$result, {
    image: {
      ref: data2.ref,
      photo: data2.photo,
      position: data2.position,
      size: "large",
      parent: data2.parent
    }
  }, {}, {})}`}`}`;
});
var photos_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "div.photos.svelte-1x2o1y0:not(.plug-n-play){position:relative;aspect-ratio:390/939;width:100%;display:block}@media(min-width: 960px){div.photos.svelte-1x2o1y0:not(.plug-n-play):not(.design){aspect-ratio:1529/1198.99;max-width:90%;margin:0 auto}div.photos.design.svelte-1x2o1y0{aspect-ratio:1188/1058}.photos.plug-n-play.svelte-1x2o1y0{grid-row:1 / -1;grid-column:2 / 3;position:unset !important}div.photos.design.svelte-1x2o1y0{aspect-ratio:1055/1185;display:grid;grid-template-columns:167px 245px 181px 209px 326px;grid-template-columns:14.09282700421941% 20.67510548523207% 15.27426160337553% 17.63713080168776% 27.51054852320675%;grid-template-rows:288px 276px 457px;grid-template-rows:27.29857819905213% 26.16113744075829% 43.3175355450237%;gap:12px;max-width:1185px;width:100%;height:auto}}@media(max-width:960px){.photos.design.svelte-1x2o1y0,.photos.apps-without-ads.svelte-1x2o1y0{display:flex !important;flex-wrap:wrap;aspect-ratio:initial !important}}",
  map: null
};
const Photos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let { data: data2 } = $$props;
  let isInView, scrollDirection;
  let photos = data2.photos ? data2.photos.length > 0 ? true : false : false;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  $$result.css.add(css$5);
  $$unsubscribe_innerWidth();
  return `${photos ? `${$innerWidth < 960 && data2.ref == "apps-without-ads" ? `<div class="${"box-photos"}"><img src="${"/images/home/box-photos.webp"}" alt="${"Box Photos"}" style="${"width:100%;"}"></div>` : `<div class="${escape(null_to_empty(`photos  ${data2.ref} ${$innerWidth > 960 && (data2.ref != "design" && data2.ref != "plug-n-play" ? "de-contain" : "")}`)) + " svelte-1x2o1y0"}">${each(data2.photos, (photo, index) => {
    return `${validate_component(Image, "Image").$$render($$result, {
      data: {
        photo,
        position: index,
        ref: data2.ref,
        parent: { inview: isInView, scrollDirection }
      }
    }, {}, {})}`;
  })}</div>`}` : ``}`;
});
var descSection_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "section.svelte-l22eib.svelte-l22eib,.wrapper.svelte-l22eib.svelte-l22eib{min-height:var(--description-min-height)}.wrapper.svelte-l22eib.svelte-l22eib{padding:0;display:grid;overflow:hidden;position:relative;justify-items:center;align-items:center;grid-template-rows:auto auto 1fr;gap:0}.wrapper.apps-without-ads.svelte-l22eib.svelte-l22eib,.wrapper.design.svelte-l22eib.svelte-l22eib{margin-bottom:120px}section#earn-crypto.svelte-l22eib.svelte-l22eib,.wrapper.earn-crypto.svelte-l22eib.svelte-l22eib{min-height:unset}.wrapper.earn-crypto.svelte-l22eib.svelte-l22eib{color:white;background:#4c4d51;grid-row-gap:20px}.wrapper.earn-crypto.svelte-l22eib.svelte-l22eib:before{content:'';background:linear-gradient(180deg, #4c4d51 60.48%, rgba(79, 80, 85, 0) 92.22%);top:0;left:0;width:100%;height:40%;position:absolute;z-index:1;pointer-events:none}@media(min-width: 960px){section#plug-n-play.svelte-l22eib.svelte-l22eib,section#customizable.svelte-l22eib.svelte-l22eib{padding-bottom:10rem}#earn-crypto.svelte-l22eib .wrapper.svelte-l22eib{border-radius:20px;overflow:hidden}.wrapper.apps-without-ads.svelte-l22eib.svelte-l22eib{overflow:unset}.wrapper.plug-n-play.svelte-l22eib.svelte-l22eib,.wrapper.customizable.svelte-l22eib.svelte-l22eib{grid-template-columns:1fr 1fr;grid-template-rows:1fr max-content max-content 1fr;align-items:center;justify-content:center;align-content:center}.wrapper.earn-crypto.svelte-l22eib.svelte-l22eib:before{height:10%}}@media(max-width: 959px){section#earn-crypto.svelte-l22eib.svelte-l22eib{padding-bottom:0}section#earn-crypto.svelte-l22eib>.container.svelte-l22eib{padding:0}}@media(prefers-color-scheme: dark){section#own-your-data.svelte-l22eib.svelte-l22eib{background:linear-gradient(to left, rgb(58 63 72) 0%,rgb(58 63 72) 100%)}}",
  map: null
};
const DescSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  $$result.css.add(css$4);
  return `<section${add_attribute("id", data2.ref, 0)} class="${"svelte-l22eib"}"><div class="${"container svelte-l22eib"}"><div class="${"wrapper " + escape(data2.ref) + " svelte-l22eib"}">${validate_component(DescItem, "DescriptionItem").$$render($$result, { item: data2 }, {}, {})}
            ${validate_component(Videos, "Videos").$$render($$result, { data: data2 }, {}, {})}
            ${validate_component(Photos, "Photos").$$render($$result, { data: data2 }, {}, {})}</div></div>
</section>`;
});
const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  return `${each(data2, (item) => {
    return `${validate_component(DescSection, "DescSection").$$render($$result, { data: item }, {}, {})}`;
  })}`;
});
const Headlines = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data: data2 } = $$props;
  let { title } = $$props;
  let { presection } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.presection === void 0 && $$bindings.presection && presection !== void 0)
    $$bindings.presection(presection);
  return `${validate_component(Grid, "Grid").$$render($$result, { data: data2, title, presection }, {}, {})}
${validate_component(Description, "Description").$$render($$result, { data: data2 }, {}, {})}`;
});
var preorder_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".wrapper.svelte-o2zv3f.svelte-o2zv3f{position:relative;height:var(--section-min-height);color:white;display:grid;justify-content:center;align-content:end;width:100%;grid-template-columns:1fr;padding-bottom:121px;border-radius:20px;overflow:hidden}p.svelte-o2zv3f.svelte-o2zv3f,.cta.svelte-o2zv3f.svelte-o2zv3f{display:grid;position:relative;z-index:1;width:100%;align-items:center;justify-content:center;font-size:24px;font-weight:400;line-height:30px}.cta.svelte-o2zv3f.svelte-o2zv3f{height:56px}.parallax-bg.svelte-o2zv3f.svelte-o2zv3f{height:100%;width:100%;position:absolute;left:0;right:0;bottom:0;top:0}.frame.svelte-o2zv3f.svelte-o2zv3f{visibility:hidden;display:none;width:100%}.frame.active.svelte-o2zv3f.svelte-o2zv3f{visibility:visible;z-index:1;display:block}img.svelte-o2zv3f.svelte-o2zv3f{height:auto;width:100%;position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}@media(min-width: 960px){.wrapper.svelte-o2zv3f.svelte-o2zv3f{margin:0 auto}}@media(max-width: 959px){.container.svelte-o2zv3f.svelte-o2zv3f{padding:0}.actionWrapper.svelte-o2zv3f>p.svelte-o2zv3f{padding:0 10px;text-align:center;font-size:18px;line-height:1.25}}",
  map: null
};
const Preorder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_scrollY;
  let $$unsubscribe_innerHeight;
  let $innerWidth, $$unsubscribe_innerWidth;
  $$unsubscribe_scrollY = subscribe(scrollY, (value) => value);
  $$unsubscribe_innerHeight = subscribe(innerHeight, (value) => value);
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => $innerWidth = value);
  let frames = [], currentFrame = 0, totalFrames = 179, ctaButtonRef;
  for (let i = 0; i < totalFrames; i++) {
    frames.push(i);
  }
  if ($innerWidth >= 960)
    ;
  else {
    currentFrame = 3;
  }
  $$result.css.add(css$3);
  $$unsubscribe_scrollY();
  $$unsubscribe_innerHeight();
  $$unsubscribe_innerWidth();
  return `${$$result.head += `${`${each(frames, (frame, index) => {
    return `${index < 30 ? `<link rel="${"preload"}" as="${"image"}"${add_attribute("href", assets + "/frames/preorder/pre-order_" + frame + ".webp", 0)} type="${"image/webp"}" data-svelte="svelte-1rbrs5y">` : ``}`;
  })}`}`, ""}

<section id="${"preorder"}"><div class="${"container svelte-o2zv3f"}"><div class="${["wrapper svelte-o2zv3f", ""].join(" ").trim()}">${$innerWidth < 960 ? `
				
				<div style="${"position: absolute;top: 0;right: 0;left: 0;bottom: 0;"}"><img${add_attribute("src", assets + "/images/home/preorder-poster.webp", 0)} alt="${"Pre-order"}" style="${"height: 100%;object-fit: cover;"}" class="${"svelte-o2zv3f"}"></div>` : `<div class="${"parallax-bg svelte-o2zv3f"}">${each(frames, (frame, index) => {
    return `${parseInt(currentFrame) == frame ? `<div class="${"frame active frame_" + escape(frame) + " svelte-o2zv3f"}"><picture><source${add_attribute("srcset", assets + "/frames/preorder/pre-order_" + frame + ".webp", 0)} type="${"image/webp"}" width="${"1920"}" height="${"1080"}">
									<img${add_attribute("src", assets + "/frames/preorder/pre-order_" + frame + ".jpeg", 0)} alt="${""}" loading="${"lazy"}" class="${"lazy svelte-o2zv3f"}"></picture>
							</div>` : `<div class="${"frame frame_" + escape(frame) + " svelte-o2zv3f"}"><picture><source${add_attribute("srcset", assets + "/frames/preorder/pre-order_" + frame + ".webp", 0)} type="${"image/webp"}" width="${"1920"}" height="${"1080"}">
									<img${add_attribute("src", assets + "/frames/preorder/pre-order_" + frame + ".jpeg", 0)} alt="${""}" loading="${"lazy"}" class="${"lazy svelte-o2zv3f"}"></picture>
							</div>`}`;
  })}</div>`}
			<div class="${"actionWrapper svelte-o2zv3f"}" id="${"preordercta"}"><p class="${"svelte-o2zv3f"}">Box is available soon! Pre-register for up to 50% off.
					</p>
					<div class="${"cta svelte-o2zv3f"}">
						<div${add_attribute("this", ctaButtonRef, 0)}>
							
<style type="${"text/css"}">.ml-form-embedSubmitLoad{display:inline-block;width:20px;height:20px}.g-recaptcha{transform:scale(1);-webkit-transform:scale(1);transform-origin:0 0;-webkit-transform-origin:0 0}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ml-form-embedSubmitLoad:after{content:" ";display:block;width:11px;height:11px;margin:1px;border-radius:50%;border:4px solid #fff;border-color:#fff #fff #fff transparent;animation:ml-form-embedSubmitLoad 1.2s linear infinite}@keyframes ml-form-embedSubmitLoad{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}#mlb2-5335676.ml-form-embedContainer{box-sizing:border-box;display:table;margin:0 auto;position:static;width:100%!important}#mlb2-5335676.ml-form-embedContainer button,#mlb2-5335676.ml-form-embedContainer h4,#mlb2-5335676.ml-form-embedContainer p,#mlb2-5335676.ml-form-embedContainer span{text-transform:none!important;letter-spacing:normal!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper{border-width:0;border-color:transparent;border-radius:4px;border-style:solid;box-sizing:border-box;display:inline-block!important;margin:0;padding:0;position:relative}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper.embedDefault,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper.embedPopup{width:100%}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper.embedForm{max-width:100%;width:100%}#mlb2-5335676.ml-form-embedContainer .ml-form-align-left{text-align:left}#mlb2-5335676.ml-form-embedContainer .ml-form-align-center{text-align:center}#mlb2-5335676.ml-form-embedContainer .ml-form-align-default{display:table-cell!important;vertical-align:middle!important;text-align:center!important}#mlb2-5335676.ml-form-embedContainer .ml-form-align-right{text-align:right}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedHeader img{border-top-left-radius:4px;border-top-right-radius:4px;height:auto;margin:0 auto!important;max-width:100%;width:undefinedpx}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody{padding:20px 20px 0 20px}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody.ml-form-embedBodyHorizontal{padding-bottom:0}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent{text-align:left;margin:0 0 20px 0}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent h4,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent h4{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:30px;font-weight:400;margin:0 0 10px 0;text-align:left;word-break:break-word}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px;font-weight:400;line-height:20px;margin:0 0 10px 0;text-align:left}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ul,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ul{color:#000;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol{list-style-type:lower-alpha}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent ol ol ol,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent ol ol ol{list-style-type:lower-roman}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p a,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p a{color:#000;text-decoration:underline}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group{text-align:left!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-block-form .ml-field-group label{margin-bottom:5px;color:#333;font-size:14px;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-weight:700;font-style:normal;text-decoration:none;display:inline-block;line-height:20px}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedContent p:last-child,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-successBody .ml-form-successContent p:last-child{margin:0}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody form{margin:0;width:100%}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent{margin:0 0 20px 0;width:100%}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow{float:left}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm{margin:0;padding:0 0 20px 0;width:100%;height:auto;float:left}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow{margin:0 0 10px 0;width:100%}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-last-item{margin:0}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow.ml-formfieldHorizintal{margin:0}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin-bottom:0;margin-top:0;margin-left:0;margin-right:0;padding:10px 10px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-webkit-input-placeholder,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-webkit-input-placeholder{color:#333}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input::-moz-placeholder,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input::-moz-placeholder{color:#333}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-ms-input-placeholder,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-ms-input-placeholder{color:#333}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input:-moz-placeholder,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input:-moz-placeholder{color:#333}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow textarea,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow textarea{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;height:auto;line-height:21px!important;margin-bottom:0;margin-top:0;padding:10px 10px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{border-color:#ccc!important;background-color:#fff!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow input.custom-control-input[type=checkbox]{box-sizing:border-box;padding:0;position:absolute;z-index:-1;opacity:0;margin-top:5px;margin-left:-1.5rem;overflow:visible}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{border-radius:4px!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::after{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e")}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::after{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e")}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]:checked~.label-description::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox input[type=checkbox]:checked~.label-description::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input:checked~.custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input:checked~.custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input:checked~.custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox input[type=checkbox]:checked~.label-description::before{border-color:#00d0d0!important;background-color:#00d0d0!important;color:#fff!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label::before{top:2px;box-sizing:border-box}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after{top:0!important;box-sizing:border-box!important;position:absolute;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{top:0!important;box-sizing:border-box!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::before{position:absolute;top:4px;left:-1.5rem;display:block;width:16px;height:16px;pointer-events:none;content:"";background-color:#fff;border:#adb5bd solid 1px;border-radius:50%}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-control-label::after{position:absolute;top:2px!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::before,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::before{position:absolute;top:4px;left:-1.5rem;display:block;width:16px;height:16px;pointer-events:none;content:"";background-color:#fff;border:#adb5bd solid 1px;border-radius:50%}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after{position:absolute;top:0!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after{position:absolute;top:0!important;left:-1.5rem;display:block;width:1rem;height:1rem;content:""}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-radio .custom-control-label::after{background:no-repeat 50%/50% 50%}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .custom-checkbox .custom-control-label::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedPermissions .ml-form-embedPermissionsOptionsCheckbox .label-description::after,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-interestGroupsRow .ml-form-interestGroupsRowCheckbox .label-description::after{background:no-repeat 50%/50% 50%}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-control,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-control{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-input,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-input,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-input,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-input{position:absolute;z-index:-1;opacity:0;box-sizing:border-box;padding:0}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-checkbox .custom-control-label,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-radio .custom-control-label,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-checkbox .custom-control-label,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-radio .custom-control-label{color:#000;font-size:12px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;line-height:22px;margin-bottom:0;position:relative;vertical-align:top;font-style:normal;font-weight:700}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-fieldRow .custom-select,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow .custom-select{background-color:#fff!important;color:#333!important;border-color:#ccc;border-radius:4px!important;border-style:solid!important;border-width:1px!important;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;line-height:20px!important;margin-bottom:0;margin-top:0;padding:10px 28px 10px 12px!important;width:100%!important;box-sizing:border-box!important;max-width:100%!important;height:auto;display:inline-block;vertical-align:middle;background:url(https://cdn.mailerlite.com/images/default/dropdown.svg) no-repeat right .75rem center/8px 10px;-webkit-appearance:none;-moz-appearance:none;appearance:none}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow{height:auto;width:100%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal{width:70%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal{width:30%;float:left}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-button-horizontal.labelsOn{padding-top:25px}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields{box-sizing:border-box;float:left;padding-right:10px}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow input{background-color:#fff;color:#333;border-color:#ccc;border-radius:4px;border-style:solid;border-width:1px;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px;line-height:20px;margin-bottom:0;margin-top:0;padding:10px 10px;width:100%;box-sizing:border-box;overflow-y:initial}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button{background-color:#00d0d0!important;border-color:#00d0d0;border-style:solid;border-width:1px;border-radius:6px;box-shadow:none;color:#fff!important;cursor:pointer;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:14px!important;font-weight:700;line-height:20px;margin:0!important;padding:10px!important;width:100%;height:auto}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-horizontalRow button:hover{background-color:#0caeae!important;border-color:#0caeae!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow input[type=checkbox]{box-sizing:border-box;padding:0;position:absolute;z-index:-1;opacity:0;margin-top:5px;margin-left:-1.5rem;overflow:visible}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow .label-description{color:#000;display:block;font-family:'Open Sans',Arial,Helvetica,sans-serif;font-size:12px;text-align:left;margin-bottom:0;position:relative;vertical-align:top}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label{font-weight:400;margin:0;padding:0;position:relative;display:block;min-height:24px;padding-left:24px}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label a{color:#000;text-decoration:underline}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p{color:#000!important;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:12px!important;font-weight:400!important;line-height:18px!important;padding:0!important;margin:0 5px 0 0!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow label p:last-child{margin:0}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit{margin:0 0 20px 0;float:left;width:100%}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button{background-color:#00d0d0!important;border:none!important;border-radius:6px!important;box-shadow:none!important;color:#fff!important;cursor:pointer;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:14px!important;font-weight:700!important;line-height:21px!important;height:auto;padding:10px!important;width:100%!important;box-sizing:border-box!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button.loading{display:none}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-embedSubmit button:hover{background-color:#0caeae!important}.ml-subscribe-close{width:30px;height:30px;background:url(https://cdn.mailerlite.com/images/default/modal_close.png) no-repeat;background-size:30px;cursor:pointer;margin-top:-10px;margin-right:-10px;position:absolute;top:0;right:0}.ml-error input,.ml-error select,.ml-error textarea{border-color:red!important}.ml-error .custom-checkbox-radio-list{border:1px solid red!important;border-radius:4px;padding:10px}.ml-error .label-description,.ml-error .label-description p,.ml-error .label-description p a,.ml-error label:first-child{color:red!important}#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p,#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-checkboxRow.ml-error .label-description p:first-letter{color:red!important}@media only screen and (max-width:400px){.ml-form-embedWrapper.embedDefault,.ml-form-embedWrapper.embedPopup{width:100%!important}.ml-form-formContent.horozintalForm{float:left!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow{height:auto!important;width:100%!important;float:left!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal{width:100%!important}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal>div{padding-right:0!important;padding-bottom:10px}.ml-form-formContent.horozintalForm .ml-button-horizontal{width:100%!important}.ml-form-formContent.horozintalForm .ml-button-horizontal.labelsOn{padding-top:0!important}}
</style>
<style type="${"text/css"}">.ml-mobileButton-horizontal{display:none}#mlb2-5335676 .ml-mobileButton-horizontal button{background-color:#00d0d0!important;border-color:#00d0d0!important;border-style:solid!important;border-width:1px!important;border-radius:6px!important;box-shadow:none!important;color:#fff!important;cursor:pointer;font-family:'Open Sans',Arial,Helvetica,sans-serif!important;font-size:14px!important;font-weight:700!important;line-height:20px!important;padding:10px!important;width:100%!important}@media only screen and (max-width:400px){#mlb2-5335676.ml-form-embedContainer .ml-form-embedWrapper .ml-form-embedBody .ml-form-formContent.horozintalForm{padding:0 0 10px 0!important}.ml-hide-horizontal{display:none!important}.ml-form-formContent.horozintalForm .ml-button-horizontal{display:none!important}.ml-mobileButton-horizontal{display:inline-block!important;margin-bottom:20px;width:100%}.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal>div{padding-bottom:0!important}}
</style>
<style type="${"text/css"}">@media only screen and (max-width:400px){.ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields{margin-bottom:10px!important;width:100%!important}}
</style>
<div id="${"mlb2-5335676"}" class="${"ml-form-embedContainer ml-subscribe-form ml-subscribe-form-5335676"}"><div class="${"ml-form-align-center"}"><div class="${"ml-form-embedWrapper embedForm"}"><div class="${"ml-form-embedBody ml-form-embedBodyHorizontal row-form"}"><div class="${"ml-form-embedContent"}" style="${"margin-bottom:0"}"></div>
        <form class="${"ml-block-form"}" action="${"https://static.mailerlite.com/webforms/submit/t0d8c1"}" data-code="${"t0d8c1"}" method="${"post"}" target="${"_blank"}"><div class="${"ml-form-formContent horozintalForm"}"><div class="${"ml-form-horizontalRow"}"><div class="${"ml-input-horizontal"}"><div style="${"width:100%"}" class="${"horizontal-fields"}"><div class="${"ml-field-group ml-field-email ml-validate-email ml-validate-required"}"><input type="${"email"}" class="${"form-control"}" data-inputmask="${""}" name="${"fields[email]"}" placeholder="${"Email"}" autocomplete="${"email"}"></div></div></div>
              <div class="${"ml-button-horizontal primary"}"><button type="${"submit"}" class="${"primary"}">Pre-register</button>
                <button disabled="${"disabled"}" style="${"display:none"}" type="${"button"}" class="${"loading"}"><div class="${"ml-form-embedSubmitLoad"}"></div> <span class="${"sr-only"}">Loading...</span></button></div></div></div>
          <input type="${"hidden"}" name="${"ml-submit"}" value="${"1"}">
          <div class="${"ml-mobileButton-horizontal"}"><button type="${"submit"}" class="${"primary"}">Pre-register</button>
            <button disabled="${"disabled"}" style="${"display:none"}" type="${"button"}" class="${"loading"}"><div class="${"ml-form-embedSubmitLoad"}"></div> <span class="${"sr-only"}">Loading...</span></button></div>
          <input type="${"hidden"}" name="${"anticsrf"}" value="${"true"}"></form></div>
      <div class="${"ml-form-successBody row-success"}" style="${"display:none"}"><div class="${"ml-form-successContent"}"><h4></h4>
          <p class="${"svelte-o2zv3f"}"><span style="${"color:#ccc;font-size:20px"}"><strong>Thank you for becoming a Functionlander!</strong><br></span></p>
          <p class="${"svelte-o2zv3f"}"><strong><span style="${"color:#ccc"}">You will receive a confirmation email shortly, please <em>confirm</em> your subscription.</span></strong></p></div></div></div></div></div>
<script>function ml_webform_success_5335676(){var r=ml_jQuery||jQuery;r(".ml-subscribe-form-5335676 .row-success").show(),r(".ml-subscribe-form-5335676 .row-form").hide()}
<\/script>
<img src="${"https://track.mailerlite.com/webforms/o/5335676/t0d8c1?v1647659713"}" width="${"1"}" height="${"1"}" style="${"max-width:1px;max-height:1px;visibility:hidden;padding:0;margin:0;display:block"}" alt="${"."}" border="${"0"}" class="${"svelte-o2zv3f"}">
<script src="${"https://static.mailerlite.com/js/w/webforms.min.js?v9b62042f798751c8de86a784eab23614"}" type="${"text/javascript"}"><\/script>
						</div></div></div></div></div>
</section>`;
});
const targetUrl = "https://functionland.ghost.io/ghost/api/v4/content/posts/?limit=9&key=8fb27f029cb68e715fb6be3f53";
function initialValue() {
  return { blog: /* @__PURE__ */ new Map() };
}
function makeBlogStore(args) {
  let initial = initialValue();
  let store = readable(initial, makeSubscribe(initial));
  return store;
}
function unsubscribe() {
}
function makeSubscribe(data2, _args) {
  return (set) => {
    fetchBlogData(data2, set);
    return unsubscribe;
  };
}
async function fetchBlogData(data2, set) {
  try {
    const response = await fetch(targetUrl);
    const result = await response.json();
    data2.items = result.posts;
    data2.ready = true;
    set(data2);
  } catch (error) {
    data2.error = error;
    set(data2);
  }
}
var placeholder_svelte_svelte_type_style_lang = "";
var item_svelte_svelte_type_style_lang = "";
var desktop_svelte_svelte_type_style_lang = "";
function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
  const document = getDocument();
  if (swiper.params.createElements) {
    Object.keys(checkProps).forEach((key) => {
      if (!params[key] && params.auto === true) {
        let element = swiper.$el.children(`.${checkProps[key]}`)[0];
        if (!element) {
          element = document.createElement("div");
          element.className = checkProps[key];
          swiper.$el.append(element);
        }
        params[key] = element;
        originalParams[key] = element;
      }
    });
  }
  return params;
}
function classesToSelector(classes) {
  if (classes === void 0) {
    classes = "";
  }
  return `.${classes.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function Pagination(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`
    }
  });
  swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
  }
  function setSideBullets($bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
  }
  function update() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }
      if (current > total - 1)
        current -= total;
      if (current < 0 && swiper.params.paginationType !== "bullets")
        current = total + current;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== void 0) {
          dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`).join(" "));
      if ($el.length > 1) {
        bullets.each((bullet) => {
          const $bullet = $(bullet);
          const bulletIndex = $bullet.index();
          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }
            if (bulletIndex === firstIndex) {
              setSideBullets($bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets($bullet, "next");
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        const bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);
        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }
          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              }
              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else {
              setSideBullets($firstDisplayedBullet, "prev");
              setSideBullets($lastDisplayedBullet, "next");
            }
          } else {
            setSideBullets($firstDisplayedBullet, "prev");
            setSideBullets($lastDisplayedBullet, "next");
          }
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
      }
    }
    if (params.type === "fraction") {
      $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
    }
    if (params.type === "progressbar") {
      let progressbarDirection;
      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
      } else {
        progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
      }
      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;
      if (progressbarDirection === "horizontal") {
        scaleX = scale;
      } else {
        scaleY = scale;
      }
      $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }
    if (params.type === "custom" && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      emit("paginationRender", $el[0]);
    } else {
      emit("paginationUpdate", $el[0]);
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
    }
  }
  function render() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type !== "custom") {
      emit("paginationRender", swiper.pagination.$el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el)
      return;
    let $el = $(params.el);
    if ($el.length === 0)
      return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
      $el = swiper.$el.find(params.el);
      if ($el.length > 1) {
        $el = $el.filter((el) => {
          if ($(el).parents(".swiper")[0] !== swiper.el)
            return false;
          return true;
        });
      }
    }
    if (params.type === "bullets" && params.clickable) {
      $el.addClass(params.clickableClass);
    }
    $el.addClass(params.modifierClass + params.type);
    $el.addClass(params.modifierClass + swiper.params.direction);
    if (params.type === "bullets" && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      dynamicBulletIndex = 0;
      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }
    if (params.type === "progressbar" && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }
    if (params.clickable) {
      $el.on("click", classesToSelector(params.bulletClass), function onClick(e) {
        e.preventDefault();
        let index = $(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop)
          index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }
    Object.assign(swiper.pagination, {
      $el,
      el: $el[0]
    });
    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    const $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    $el.removeClass(params.modifierClass + swiper.params.direction);
    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass)
      swiper.pagination.bullets.removeClass(params.bulletActiveClass);
    if (params.clickable) {
      $el.off("click", classesToSelector(params.bulletClass));
    }
  }
  on("init", () => {
    init();
    render();
    update();
  });
  on("activeIndexChange", () => {
    if (swiper.params.loop) {
      update();
    } else if (typeof swiper.snapIndex === "undefined") {
      update();
    }
  });
  on("snapIndexChange", () => {
    if (!swiper.params.loop) {
      update();
    }
  });
  on("slidesLengthChange", () => {
    if (swiper.params.loop) {
      render();
      update();
    }
  });
  on("snapGridLengthChange", () => {
    if (!swiper.params.loop) {
      render();
      update();
    }
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    const {
      $el
    } = swiper.pagination;
    if ($el) {
      $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
    }
  });
  on("lock unlock", () => {
    update();
  });
  on("click", (_s, e) => {
    const targetEl = e.target;
    const {
      $el
    } = swiper.pagination;
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
        return;
      const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      $el.toggleClass(swiper.params.pagination.hiddenClass);
    }
  });
  Object.assign(swiper.pagination, {
    render,
    update,
    init,
    destroy
  });
}
function Autoplay(_ref) {
  let {
    swiper,
    extendParams,
    on,
    emit
  } = _ref;
  let timeout;
  swiper.autoplay = {
    running: false,
    paused: false
  };
  extendParams({
    autoplay: {
      enabled: false,
      delay: 3e3,
      waitForTransition: true,
      disableOnInteraction: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      pauseOnMouseEnter: false
    }
  });
  function run() {
    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    let delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr("data-swiper-autoplay")) {
      delay = $activeSlideEl.attr("data-swiper-autoplay") || swiper.params.autoplay.delay;
    }
    clearTimeout(timeout);
    timeout = nextTick(() => {
      let autoplayResult;
      if (swiper.params.autoplay.reverseDirection) {
        if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.isBeginning) {
          autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
          emit("autoplay");
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
          emit("autoplay");
        } else {
          stop();
        }
      } else if (swiper.params.loop) {
        swiper.loopFix();
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit("autoplay");
      } else if (!swiper.isEnd) {
        autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
        emit("autoplay");
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
        emit("autoplay");
      } else {
        stop();
      }
      if (swiper.params.cssMode && swiper.autoplay.running)
        run();
      else if (autoplayResult === false) {
        run();
      }
    }, delay);
  }
  function start() {
    if (typeof timeout !== "undefined")
      return false;
    if (swiper.autoplay.running)
      return false;
    swiper.autoplay.running = true;
    emit("autoplayStart");
    run();
    return true;
  }
  function stop() {
    if (!swiper.autoplay.running)
      return false;
    if (typeof timeout === "undefined")
      return false;
    if (timeout) {
      clearTimeout(timeout);
      timeout = void 0;
    }
    swiper.autoplay.running = false;
    emit("autoplayStop");
    return true;
  }
  function pause(speed) {
    if (!swiper.autoplay.running)
      return;
    if (swiper.autoplay.paused)
      return;
    if (timeout)
      clearTimeout(timeout);
    swiper.autoplay.paused = true;
    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
      swiper.autoplay.paused = false;
      run();
    } else {
      ["transitionend", "webkitTransitionEnd"].forEach((event) => {
        swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
      });
    }
  }
  function onVisibilityChange() {
    const document = getDocument();
    if (document.visibilityState === "hidden" && swiper.autoplay.running) {
      pause();
    }
    if (document.visibilityState === "visible" && swiper.autoplay.paused) {
      run();
      swiper.autoplay.paused = false;
    }
  }
  function onTransitionEnd(e) {
    if (!swiper || swiper.destroyed || !swiper.$wrapperEl)
      return;
    if (e.target !== swiper.$wrapperEl[0])
      return;
    ["transitionend", "webkitTransitionEnd"].forEach((event) => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
    swiper.autoplay.paused = false;
    if (!swiper.autoplay.running) {
      stop();
    } else {
      run();
    }
  }
  function onMouseEnter() {
    if (swiper.params.autoplay.disableOnInteraction) {
      stop();
    } else {
      emit("autoplayPause");
      pause();
    }
    ["transitionend", "webkitTransitionEnd"].forEach((event) => {
      swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
    });
  }
  function onMouseLeave() {
    if (swiper.params.autoplay.disableOnInteraction) {
      return;
    }
    swiper.autoplay.paused = false;
    emit("autoplayResume");
    run();
  }
  function attachMouseEvents() {
    if (swiper.params.autoplay.pauseOnMouseEnter) {
      swiper.$el.on("mouseenter", onMouseEnter);
      swiper.$el.on("mouseleave", onMouseLeave);
    }
  }
  function detachMouseEvents() {
    swiper.$el.off("mouseenter", onMouseEnter);
    swiper.$el.off("mouseleave", onMouseLeave);
  }
  on("init", () => {
    if (swiper.params.autoplay.enabled) {
      start();
      const document = getDocument();
      document.addEventListener("visibilitychange", onVisibilityChange);
      attachMouseEvents();
    }
  });
  on("beforeTransitionStart", (_s, speed, internal) => {
    if (swiper.autoplay.running) {
      if (internal || !swiper.params.autoplay.disableOnInteraction) {
        swiper.autoplay.pause(speed);
      } else {
        stop();
      }
    }
  });
  on("sliderFirstMove", () => {
    if (swiper.autoplay.running) {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }
    }
  });
  on("touchEnd", () => {
    if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
      run();
    }
  });
  on("destroy", () => {
    detachMouseEvents();
    if (swiper.autoplay.running) {
      stop();
    }
    const document = getDocument();
    document.removeEventListener("visibilitychange", onVisibilityChange);
  });
  Object.assign(swiper.autoplay, {
    pause,
    run,
    start,
    stop
  });
}
function isObject(o) {
  return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}
function extend(target, src) {
  const noExtend = ["__proto__", "constructor", "prototype"];
  Object.keys(src).filter((key) => noExtend.indexOf(key) < 0).forEach((key) => {
    if (typeof target[key] === "undefined")
      target[key] = src[key];
    else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
      if (src[key].__swiper__)
        target[key] = src[key];
      else
        extend(target[key], src[key]);
    } else {
      target[key] = src[key];
    }
  });
}
function needsNavigation(params) {
  if (params === void 0) {
    params = {};
  }
  return params.navigation && typeof params.navigation.nextEl === "undefined" && typeof params.navigation.prevEl === "undefined";
}
function needsPagination(params) {
  if (params === void 0) {
    params = {};
  }
  return params.pagination && typeof params.pagination.el === "undefined";
}
function needsScrollbar(params) {
  if (params === void 0) {
    params = {};
  }
  return params.scrollbar && typeof params.scrollbar.el === "undefined";
}
function uniqueClasses(classNames) {
  if (classNames === void 0) {
    classNames = "";
  }
  const classes = classNames.split(" ").map((c) => c.trim()).filter((c) => !!c);
  const unique = [];
  classes.forEach((c) => {
    if (unique.indexOf(c) < 0)
      unique.push(c);
  });
  return unique.join(" ");
}
const paramsList = [
  "modules",
  "init",
  "_direction",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_preloadImages",
  "updateOnImagesReady",
  "_loop",
  "_loopAdditionalSlides",
  "_loopedSlides",
  "_loopFillGroupWithBlank",
  "loopPreventsSlide",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideBlankClass",
  "slideActiveClass",
  "slideDuplicateActiveClass",
  "slideVisibleClass",
  "slideDuplicateClass",
  "slideNextClass",
  "slideDuplicateNextClass",
  "slidePrevClass",
  "slideDuplicatePrevClass",
  "wrapperClass",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "lazy",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "_virtual",
  "zoom"
];
function getParams(obj) {
  if (obj === void 0) {
    obj = {};
  }
  const params = {
    on: {}
  };
  const passedParams = {};
  extend(params, Swiper$1.defaults);
  extend(params, Swiper$1.extendedDefaults);
  params._emitClasses = true;
  params.init = false;
  const rest = {};
  const allowedParams = paramsList.map((key) => key.replace(/_/, ""));
  Object.keys(obj).forEach((key) => {
    if (allowedParams.indexOf(key) >= 0) {
      if (isObject(obj[key])) {
        params[key] = {};
        passedParams[key] = {};
        extend(params[key], obj[key]);
        extend(passedParams[key], obj[key]);
      } else {
        params[key] = obj[key];
        passedParams[key] = obj[key];
      }
    } else if (key.search(/on[A-Z]/) === 0 && typeof obj[key] === "function") {
      params.on[`${key[2].toLowerCase()}${key.substr(3)}`] = obj[key];
    } else {
      rest[key] = obj[key];
    }
  });
  ["navigation", "pagination", "scrollbar"].forEach((key) => {
    if (params[key] === true)
      params[key] = {};
    if (params[key] === false)
      delete params[key];
  });
  return {
    params,
    passedParams,
    rest
  };
}
function initSwiper(swiperParams) {
  return new Swiper$1(swiperParams);
}
const Swiper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "swiper"]);
  const dispatch = createEventDispatcher();
  let { class: className = void 0 } = $$props;
  let containerClasses = "swiper";
  let swiperInstance = null;
  let paramsData;
  let swiperParams;
  let restProps;
  let swiperEl = null;
  let prevEl = null;
  let nextEl = null;
  let scrollbarEl = null;
  let paginationEl = null;
  let virtualData = { slides: [] };
  function swiper() {
    return swiperInstance;
  }
  const setVirtualData = (data2) => {
    virtualData = data2;
    tick().then(() => {
      swiperInstance.$wrapperEl.children(".swiper-slide").each((el) => {
        if (el.onSwiper)
          el.onSwiper(swiperInstance);
      });
      swiperInstance.updateSlides();
      swiperInstance.updateProgress();
      swiperInstance.updateSlidesClasses();
      if (swiperInstance.lazy && swiperInstance.params.lazy.enabled) {
        swiperInstance.lazy.load();
      }
    });
  };
  const calcParams = () => {
    paramsData = getParams($$restProps);
    swiperParams = paramsData.params;
    restProps = paramsData.rest;
  };
  calcParams();
  const onBeforeBreakpoint = () => {
  };
  swiperParams.onAny = (event, ...args) => {
    dispatch(event, [args]);
  };
  Object.assign(swiperParams.on, {
    _beforeBreakpoint: onBeforeBreakpoint,
    _containerClasses(_swiper, classes) {
      containerClasses = classes;
    }
  });
  swiperInstance = initSwiper(swiperParams);
  setContext("swiper", swiperInstance);
  if (swiperInstance.virtual && swiperInstance.params.virtual.enabled) {
    const extendWith = {
      cache: false,
      renderExternal: (data2) => {
        setVirtualData(data2);
        if (swiperParams.virtual && swiperParams.virtual.renderExternal) {
          swiperParams.virtual.renderExternal(data2);
        }
      },
      renderExternalUpdate: false
    };
    extend(swiperInstance.params.virtual, extendWith);
    extend(swiperInstance.originalParams.virtual, extendWith);
  }
  onDestroy(() => {
    if (typeof window !== "undefined" && swiperInstance && !swiperInstance.destroyed) {
      swiperInstance.destroy(true, false);
    }
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.swiper === void 0 && $$bindings.swiper && swiper !== void 0)
    $$bindings.swiper(swiper);
  return `<div${spread([
    {
      class: escape_attribute_value(uniqueClasses(`${containerClasses}${className ? ` ${className}` : ""}`))
    },
    escape_object(restProps)
  ], {})}${add_attribute("this", swiperEl, 0)}>${slots["container-start"] ? slots["container-start"]({ virtualData }) : ``}
  ${needsNavigation(swiperParams) ? `<div class="${"swiper-button-prev"}"${add_attribute("this", prevEl, 0)}></div>
    <div class="${"swiper-button-next"}"${add_attribute("this", nextEl, 0)}></div>` : ``}
  ${needsScrollbar(swiperParams) ? `<div class="${"swiper-scrollbar"}"${add_attribute("this", scrollbarEl, 0)}></div>` : ``}
  ${needsPagination(swiperParams) ? `<div class="${"swiper-pagination"}"${add_attribute("this", paginationEl, 0)}></div>` : ``}
  <div class="${"swiper-wrapper"}">${slots["wrapper-start"] ? slots["wrapper-start"]({ virtualData }) : ``}
    ${slots.default ? slots.default({ virtualData }) : ``}
    ${slots["wrapper-end"] ? slots["wrapper-end"]({ virtualData }) : ``}</div>
  ${slots["container-end"] ? slots["container-end"]({ virtualData }) : ``}</div>`;
});
const Swiper_slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let slideData;
  let $$restProps = compute_rest_props($$props, ["zoom", "virtualIndex", "class"]);
  let { zoom = void 0 } = $$props;
  let { virtualIndex = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  let slideEl = null;
  let slideClasses = "swiper-slide";
  let swiper = getContext("swiper");
  const updateClasses = (_, el, classNames) => {
    if (el === slideEl) {
      slideClasses = classNames;
    }
  };
  const detachEvent = () => {
    if (!swiper)
      return;
    swiper.off("_slideClass", updateClasses);
  };
  onDestroy(() => {
    if (!swiper)
      return;
    detachEvent();
  });
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.virtualIndex === void 0 && $$bindings.virtualIndex && virtualIndex !== void 0)
    $$bindings.virtualIndex(virtualIndex);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  slideData = {
    isActive: slideClasses.indexOf("swiper-slide-active") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-active") >= 0,
    isVisible: slideClasses.indexOf("swiper-slide-visible") >= 0,
    isDuplicate: slideClasses.indexOf("swiper-slide-duplicate") >= 0,
    isPrev: slideClasses.indexOf("swiper-slide-prev") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-prev") >= 0,
    isNext: slideClasses.indexOf("swiper-slide-next") >= 0 || slideClasses.indexOf("swiper-slide-duplicate-next") >= 0
  };
  return `<div${spread([
    {
      class: escape_attribute_value(uniqueClasses(`${slideClasses}${className ? ` ${className}` : ""}`))
    },
    {
      "data-swiper-slide-index": escape_attribute_value(virtualIndex)
    },
    escape_object($$restProps)
  ], {})}${add_attribute("this", slideEl, 0)}>${zoom ? `<div class="${"swiper-zoom-container"}"${add_attribute("data-swiper-zoom", typeof zoom === "number" ? zoom : void 0, 0)}>${slots.default ? slots.default({ data: slideData }) : ``}</div>` : `${slots.default ? slots.default({ data: slideData }) : ``}`}</div>`;
});
var effectCards_min = "";
var mobile_svelte_svelte_type_style_lang = "";
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let store = makeBlogStore(), unsubscribe2;
  if (!unsubscribe2) {
    unsubscribe2 = store.subscribe(updateBlogData);
  }
  onDestroy(() => {
    if (unsubscribe2) {
      unsubscribe2();
      unsubscribe2 = null;
    }
  });
  function updateBlogData(data2) {
  }
  return `
${``}`;
});
var news_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "section.svelte-1tfaosu{min-height:unset;height:unset;max-width:100vw;overflow:hidden}.wrapper.svelte-1tfaosu{padding:40px 0 80px}h4.svelte-1tfaosu{font-size:var(--section-title-font-size);line-height:var(--section-title-line-height);text-align:center;padding-bottom:2rem}p.svelte-1tfaosu{max-width:calc(100% - 120px);margin:0 auto;text-align:center;padding-bottom:20px}",
  map: null
};
const News = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<section class="${"svelte-1tfaosu"}"><div class="${"container"}"><div class="${"wrapper svelte-1tfaosu"}"><h4 class="${"svelte-1tfaosu"}">Latest News</h4>
			<p class="${"svelte-1tfaosu"}">Checkout what is new about Functionland</p>
			${validate_component(Blog, "Blog").$$render($$result, {}, {}, {})}</div></div>
</section>`;
});
var slider_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".page.svelte-1ojc8mn.svelte-1ojc8mn{display:grid;grid-template-columns:1fr 1fr;grid-gap:1rem;grid-row-gap:2rem;max-width:calc(100% - 70px);margin:0 auto;grid-template-rows:repeat(4, 100px)}picture.svelte-1ojc8mn.svelte-1ojc8mn{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}img.svelte-1ojc8mn.svelte-1ojc8mn{display:block;width:auto;max-height:100%;max-width:120px}.partner.svelte-1ojc8mn.svelte-1ojc8mn{position:relative;display:grid;grid-template-columns:1fr;grid-template-rows:1fr;align-items:center;align-content:center;justify-content:center;justify-items:center}.partner.svelte-1ojc8mn img.svelte-1ojc8mn{object-fit:contain;object-position:center;transition:all ease 0.4s;-webkit-transition:all ease 0.4s;filter:gray;-webkit-filter:grayscale(100%)}.partner.svelte-1ojc8mn:hover img.svelte-1ojc8mn{transform:scale(1.1);filter:none;-webkit-filter:grayscale(0%)}@media(min-width: 960px){.page.svelte-1ojc8mn.svelte-1ojc8mn{grid-template-columns:repeat(4, 1fr);grid-template-rows:repeat(2, 120px);transition:opacity 0.3s}.partner.svelte-1ojc8mn.svelte-1ojc8mn:hover{background-color:var(--bkg)}.swiper-slide:not(.swiper-slide-active) .page{opacity:0}.swiper-slide.swiper-slide-active .page{opacity:1}}",
  map: null
};
const Slider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let perpage;
  let pages;
  $$result.css.add(css$1);
  perpage = 8;
  pages = data$3.length % perpage === 0 ? data$3.length / perpage : Math.floor(data$3.length / perpage) + 1;
  return `
${validate_component(Swiper, "Swiper").$$render($$result, {
    modules: [Pagination, Autoplay],
    autoHeight: true,
    pagination: { clickable: true },
    autoplay: { delay: 2500, disableOnInteraction: true },
    loop: { enabled: true }
  }, {}, {
    default: () => {
      return `${each(Array(pages), (slide, i) => {
        return `${validate_component(Swiper_slide, "SwiperSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="${"page svelte-1ojc8mn"}">${each(data$3.slice(i * perpage, (i + 1) * perpage), (item) => {
              return `<div class="${"partner svelte-1ojc8mn"}"><picture class="${"svelte-1ojc8mn"}"><source${add_attribute("srcset", item.dark, 0)} media="${"(prefers-color-scheme: dark)"}">
							
							<img${add_attribute("src", item.main, 0)}${add_attribute("alt", item.title, 0)} class="${"visible svelte-1ojc8mn"}" loading="${"lazy"}" decoding="${"async"}" height="${"120"}" width="${"120"}"></picture>
						
					</div>`;
            })}</div>
		`;
          }
        })}`;
      })}`;
    }
  })}`;
});
var partners_svelte_svelte_type_style_lang = "";
const css = {
  code: "h5.svelte-5imnhy{font-size:var(--section-title-font-size);line-height:var(--section-title-line-height);text-align:center;padding-bottom:2rem}.wrapper.svelte-5imnhy{min-height:var(--section-min-height)}p.svelte-5imnhy{max-width:calc(100% - 120px);margin:0 auto;text-align:center;padding-bottom:20px}@media(min-width: 960px){section.svelte-5imnhy,.wrapper.svelte-5imnhy{min-height:unset;height:auto}section.svelte-5imnhy{padding-bottom:8rem}}",
  map: null
};
const Partners = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-5imnhy"}"><div class="${"container"}"><div class="${"wrapper svelte-5imnhy"}"><h5 class="${"svelte-5imnhy"}">Our Partners</h5>
			<p class="${"svelte-5imnhy"}">Functionland is backed by the biggest names in Web3 and investment world
			</p>
			${validate_component(Slider, "Slider").$$render($$result, {}, {}, {})}</div></div>
</section>`;
});
const MouseMove = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_innerWidth;
  $$unsubscribe_innerWidth = subscribe(innerWidth, (value) => value);
  $$unsubscribe_innerWidth();
  return ``;
});
const LazyloadVideos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const data = {
  title: "By the People, For the People.",
  desc: "",
  image: {
    src: assets + "images/home/meet_box.webp",
    type: "image/webp",
    alt: "blockchain-Attached Storage introduces the concept of local pools, where it helps keep the data close enough to the user to guarantee a high speed, and separate enough to guarantee high availability and resiliance"
  }
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Functionland: Blockchain-Attached Storage</title>`, ""}`, ""}
<main>
	${validate_component(Intro_parallax, "Parallax").$$render($$result, {}, {}, {})}
	${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	${validate_component(Headlines, "Headlines").$$render($$result, {
    data: data$2,
    presection: data
  }, {}, {})}
	${validate_component(Headlines, "Headlines").$$render($$result, {
    data: data$1,
    title: "Pros in a nutshell"
  }, {}, {})}
	${validate_component(Preorder, "Preorder").$$render($$result, {}, {}, {})}
	${validate_component(News, "News").$$render($$result, {}, {}, {})}
	${validate_component(Partners, "Partners").$$render($$result, {}, {}, {})}
	${validate_component(MouseMove, "MouseMove").$$render($$result, {}, {}, {})}
	${validate_component(LazyloadVideos, "LazyLoadVideos").$$render($$result, {}, {}, {})}
</main>`;
});
export { Routes as default, prerender };
