import { Ref } from "nuxt/dist/app/compat/capi";

type RepositoryState = {
    repo_data: Object;
};

export const useRepositoryStore = () => {
const state = useState<RepositoryState>("repository_state", () => ({
    repo_data: {},
}));
return {
    state: readonly(state),
    setRepository: setRepository(state),
};
};

const setRepository = (state: Ref<RepositoryState>) => {
    return (repo_data: Object) => (state.value.repo_data = repo_data);
};