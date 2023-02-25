<script setup>
import { ref, onBeforeMount, onMounted, onUnmounted } from "vue";

//Components
import UserCardWrapper from "@/components/UserCardWrapper.vue";
import UserCardSkeleton from "@/components/UserCardSkeleton.vue";

//Composables
import useUser from "@/composables/useUser";
import useIntersection from "@/composables/useIntersectionObserver";

const { usersLoaded, fetchUsers, stepLoad, isLoading } = useUser(
  "https://randomuser.me/api/"
);

const lastElementRef = ref(null);

const { startObserving, stopObserving } = useIntersection(
  lastElementRef,
  fetchUsers
);

onBeforeMount(() => {
  fetchUsers();
});

onMounted(() => {
  startObserving();
});

onUnmounted(() => {
  stopObserving();
});
</script>

<template>
  <div class="flex-container">
    <UserCardWrapper
      v-for="user in usersLoaded"
      :key="user"
      :user="user"
    ></UserCardWrapper>

    <UserCardSkeleton
      :key="step"
      v-show="isLoading"
      v-for="step in stepLoad"
    ></UserCardSkeleton>

    <div class="last-ref" ref="lastElementRef"></div>
  </div>
</template>

<style scoped>
.flex-container {
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.flex-container .last-ref {
  flex: 0 0 100%;
}
</style>
