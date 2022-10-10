import { ref, readonly } from "vue";

export default function useUser(baseUrl) {
  let users = ref([]);

  let fetchUsers = async () => {
    const { results = [] } = await (await fetch(baseUrl)).json();

    users.value = users.value.concat(results);
  };

  return {
    fetchUsers,
    users: readonly(users),
  };
}
