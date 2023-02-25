<script setup>
import { ref } from "vue";
import UserCard from "./UserCard.vue";
import UserCardSkeleton from "./UserCardSkeleton.vue";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

const hasImageLoaded = ref(false);
</script>

<template>
  <UserCard
    v-bind="props"
    v-show="hasImageLoaded"
    @image-loaded="(value) => (hasImageLoaded = value)"
  ></UserCard>

  <UserCardSkeleton v-show="!hasImageLoaded"></UserCardSkeleton>
</template>
