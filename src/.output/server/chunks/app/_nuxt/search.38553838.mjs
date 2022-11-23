import { u as useRepositoryStore, _ as _sfc_main$1 } from './repository_component.f443e0c9.mjs';
import { n as navigateTo } from '../server.mjs';
import { defineComponent, unref, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    const repositoryStore = useRepositoryStore();
    const { state } = repositoryStore;
    if (!state.value.search_way)
      navigateTo({ path: "/" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Repository_component = _sfc_main$1;
      _push(`<!--[--><div class="flex bg-neutral-800 border border-green-500 border-l-0 rounded-r-xl text-lg w-64 min-w-fit mb-6 items-center justify-center h-10 md:mb-10 lg:h-16 lg:w-80 lg:text-xl"><p class="text-white ml-4">${ssrInterpolate(_ctx.$t(unref(state).search_way, { lang: unref(state).repo_data[0].language }))}</p></div><div class="flex flex-col"><!--[-->`);
      ssrRenderList(unref(state).repo_data, (repository_data) => {
        _push(ssrRenderComponent(_component_Repository_component, { repository_data }, null, _parent));
      });
      _push(`<!--]--></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=search.38553838.mjs.map
