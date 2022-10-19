<script setup>
import useUser from "@/composables/useUser";
import useInfiniteScroll from "@/composables/useInfiniteScroll";

import UserCardSkeleton from "@/components/UserCardSkeleton.vue";
import UserCardWrapper from "../components/UserCardWrapper.vue";

const { usersLoaded, fetchUsers, stepLoad, isLoading } = useUser(
  "https://randomuser.me/api/"
);

fetchUsers();

useInfiniteScroll(fetchUsers, 500);
</script>

<template>
  <div class="flex-container">
    <UserCardWrapper
      v-for="user in usersLoaded"
      :key="user"
      :user="user"
    ></UserCardWrapper>

    <UserCardSkeleton
      v-for="step in stepLoad"
      :key="step"
      v-show="isLoading"
    ></UserCardSkeleton>
  </div>
</template>

<style scoped>
.flex-container {
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
