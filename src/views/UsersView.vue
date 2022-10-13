<script setup>
import useUser from "@/composables/useUser";
import useInfiniteScroll from "../composables/useInfiniteScroll";

import UserCard from "@/components/UserCard.vue";
import UserCardSkeleton from "../components/UserCardSkeleton.vue";

const { usersLoaded, fetchUsers, stepLoad, isLoading } = useUser(
  "https://randomuser.me/api/?results=10"
);

fetchUsers();

useInfiniteScroll(fetchUsers, 500);
</script>

<template>
  <div class="flex-container">
    <UserCard v-for="user in usersLoaded" :key="user" :user="user"></UserCard>

    <UserCardSkeleton
      v-for="i in stepLoad"
      :key="i"
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
