import { Ref } from "nuxt/dist/app/compat/capi";

type RepositoryState = {
    search_way: string;
    repo_data: Object;
};

export const useRepositoryStore = () => {
const state = useState<RepositoryState>("repository_state", () => ({
    search_way: '',
    repo_data: {},
}));
return {
    state: readonly(state),
    setRepository: setRepository(state),
};
};

const setRepository = (state: Ref<RepositoryState>) => {
    return (search_way: string, repo_data: Object) => (state.value.search_way = search_way, state.value.repo_data = repo_data);
};