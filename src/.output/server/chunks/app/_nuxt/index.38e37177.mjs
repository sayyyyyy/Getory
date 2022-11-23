import { u as useRepositoryStore, _ as _sfc_main$2 } from './repository_component.f443e0c9.mjs';
import { u as useNuxtApp, c as createError } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref, computed, reactive, onServerPrefetch } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { hash } from 'ohash';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'vue-i18n';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const getDefault = () => null;
function useAsyncData(...args) {
  var _a, _b, _c, _d, _e, _f, _g;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  options.server = (_a = options.server) != null ? _a : true;
  options.default = (_b = options.default) != null ? _b : getDefault;
  options.lazy = (_c = options.lazy) != null ? _c : false;
  options.immediate = (_d = options.immediate) != null ? _d : true;
  const nuxt = useNuxtApp();
  const getCachedData = () => nuxt.isHydrating ? nuxt.payload.data[key] : nuxt.static.data[key];
  const hasCachedData = () => getCachedData() !== void 0;
  if (!nuxt._asyncData[key]) {
    nuxt._asyncData[key] = {
      data: ref((_g = (_f = getCachedData()) != null ? _f : (_e = options.default) == null ? void 0 : _e.call(options)) != null ? _g : null),
      pending: ref(!hasCachedData()),
      error: ref(nuxt.payload._errors[key] ? createError(nuxt.payload._errors[key]) : null)
    };
  }
  const asyncData = { ...nuxt._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    if (nuxt._asyncDataPromises[key]) {
      if (opts.dedupe === false) {
        return nuxt._asyncDataPromises[key];
      }
      nuxt._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial && hasCachedData()) {
      return getCachedData();
    }
    asyncData.pending.value = true;
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxt));
        } catch (err) {
          reject(err);
        }
      }
    ).then((result) => {
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      if (options.transform) {
        result = options.transform(result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      asyncData.data.value = result;
      asyncData.error.value = null;
    }).catch((error) => {
      var _a2, _b2;
      if (promise.cancelled) {
        return nuxt._asyncDataPromises[key];
      }
      asyncData.error.value = error;
      asyncData.data.value = unref((_b2 = (_a2 = options.default) == null ? void 0 : _a2.call(options)) != null ? _b2 : null);
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      nuxt.payload.data[key] = asyncData.data.value;
      if (asyncData.error.value) {
        nuxt.payload._errors[key] = createError(asyncData.error.value);
      }
      delete nuxt._asyncDataPromises[key];
    });
    nuxt._asyncDataPromises[key] = promise;
    return nuxt._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxt.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    onServerPrefetch(() => promise);
  }
  const asyncDataPromise = Promise.resolve(nuxt._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _key = opts.key || hash([autoKey, unref(opts.baseURL), typeof request === "string" ? request : "", unref(opts.params)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return unref(r);
  });
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    watch: [
      _fetchOptions,
      _request,
      ...watch || []
    ]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    return $fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "programming_lang_btn",
  __ssrInlineRender: true,
  props: ["lang_data"],
  setup(__props) {
    useRepositoryStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "programming-lang-btn-components cursor-pointer m-2 bg-neutral-800 rounded-2xl drop-shadow-xl text-white flex flex-col justify-center items-center w-32 h-28 shrink-0 text-base md:w-40 md:h-36 lg:w-44 lg:h-40 lg:ml-6 lg:text-xl" }, _attrs))}><img class="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"${ssrRenderAttr("src", `/img/${__props.lang_data.img}`)}><p class="text-center mt-3">${ssrInterpolate(__props.lang_data.lang)}</p></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/programming_lang_btn.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + globalThis.__publicAssetsURL("search_icon.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const programming_languages = [
      { lang: "HTML", img: "HTML.png", search_name: "html" },
      { lang: "TypeScript", img: "TypeScript.png", search_name: "ts" },
      { lang: "C++", img: "C++.png", search_name: "c%2B%2B" },
      { lang: "CSS", img: "CSS.png", search_name: "css" },
      { lang: "D", img: "D.png", search_name: "d" },
      { lang: "Dart", img: "Dart.png", search_name: "dart" },
      { lang: "Go", img: "Go.png", search_name: "go" },
      { lang: "JavaScript", img: "JavaScript.png", search_name: "js" },
      { lang: "Kotlin", img: "Kotlin.png", search_name: "kotlin" },
      { lang: "PHP", img: "PHP.png", search_name: "php" },
      { lang: "Python", img: "Python.png", search_name: "python" },
      { lang: "Ruby", img: "Ruby.png", search_name: "ruby" },
      { lang: "Rust", img: "Rust.png", search_name: "rust" },
      { lang: "Vue", img: "Vue.png", search_name: "vue" },
      { lang: "Swift", img: "Swift.svg", search_name: "swift" }
    ];
    const childRef = ref();
    const repositoryStore = useRepositoryStore();
    const { state } = repositoryStore;
    const API_URL = "https://api.github.com/";
    const getRandomRepo = () => {
      useFetch(API_URL + "repositories", "$pqtWcjQkdb").then((response) => {
        repositoryStore.setRepository("random_search", response.data._rawValue);
      });
    };
    getRandomRepo();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProgrammingLangBtn = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-screen" }, _attrs))}><div class="flex bg-neutral-800 border border-green-500 border-l-0 rounded-r-xl text-lg w-80 min-w-fit mb-6 items-center justify-center h-10 md:mb-10 lg:h-16 lg:w-1/3 lg:text-xl"><p class="text-white">${ssrInterpolate(_ctx.$t("searched_by_lang"))}</p><input type="text" autocomplete="off" class="bg-inherit text-white border-b-2 border-gray-500/100 ml-4 h-5 w-28 lg:w-36"><img${ssrRenderAttr("src", _imports_0)} class="w-5 h-5 ml-2 mr-2"></div><div class="flex overflow-x-scroll relative mb-10 w-screen md:mb-16"><!--[-->`);
      ssrRenderList(programming_languages, (programming_language) => {
        _push(ssrRenderComponent(_component_ProgrammingLangBtn, {
          ref_for: true,
          ref_key: "childRef",
          ref: childRef,
          lang_data: programming_language
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex bg-neutral-800 border border-green-500 border-l-0 rounded-r-xl text-lg w-48 mb-6 items-center justify-center h-10 md:mb-10 lg:h-16 lg:w-64 lg:text-xl"><p class="text-white">${ssrInterpolate(_ctx.$t("latest_repo"))}</p></div><div class="flex flex-col"><!--[-->`);
      ssrRenderList(unref(state).repo_data, (repository_data) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          ref_for: true,
          ref_key: "childRef",
          ref: childRef,
          repository_data
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.38e37177.mjs.map
