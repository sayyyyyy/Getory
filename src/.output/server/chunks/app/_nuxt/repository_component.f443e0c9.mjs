import { a as useState } from '../server.mjs';
import { readonly, defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';

const useRepositoryStore = () => {
  const state = useState("repository_state", () => ({
    search_way: "",
    repo_data: {}
  }));
  return {
    state: readonly(state),
    setRepository: setRepository(state)
  };
};
const setRepository = (state) => {
  return (search_way, repo_data) => (state.value.search_way = search_way, state.value.repo_data = repo_data);
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "repository_component",
  __ssrInlineRender: true,
  props: ["repository_data"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "repository-components cursor-pointer bg-neutral-800 rounded-md drop-shadow-md text-white m-2" }, _attrs))}><div class="repository-container-top flex ml-2"><div class="repository-container-left"><p class="text-lg">${ssrInterpolate(__props.repository_data.name)}</p></div></div><div class="repository-container-bottom flex ml-2"><div class="flex items-center"><p>${ssrInterpolate(__props.repository_data.owner.login)}</p><img class="w-10 h-10 rounded-3xl"${ssrRenderAttr("src", __props.repository_data.owner.avatar_url)}></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/repository_component.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, useRepositoryStore as u };
//# sourceMappingURL=repository_component.f443e0c9.mjs.map
