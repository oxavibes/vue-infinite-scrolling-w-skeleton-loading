import { ref, computed, readonly } from "vue";

export default function useUser(baseUrl) {
  let users = ref([]);
  let isLoading = ref(false);

  // How much items to load in each step
  const stepLoad = 10;

  // How many items are loaded (starts with stepLoad value)
  const loaded = ref(0);

  // The collection lazy loaded
  const usersLoaded = computed(() => users.value.slice(0, loaded.value));

  let fetchUsers = async () => {
    loaded.value += stepLoad;

    isLoading.value = true;

    const { results = [] } = await (await fetch(`${baseUrl}`)).json();

    setTimeout(() => {
      isLoading.value = false;

      users.value = [...users.value, ...results];
    }, 500);
  };

  return {
    stepLoad,
    fetchUsers,
    users: readonly(users),
    usersLoaded: readonly(usersLoaded),
    isLoading: readonly(isLoading),
  };
}
