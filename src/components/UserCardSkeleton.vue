<script setup>
import AnimatedSkeleton from "@/components/base/BaseSkeleton.vue";
</script>

<template>
  <div class="card">
    <div class="card-content">
      <AnimatedSkeleton
        height="128px"
        width="128px"
        borderRadius="50%"
      ></AnimatedSkeleton>

      <div class="card-details">
        <h2>
          <AnimatedSkeleton></AnimatedSkeleton>
        </h2>

        <div class="card-details-inner">
          <AnimatedSkeleton width="70px" height="36px"></AnimatedSkeleton>

          <AnimatedSkeleton width="70px" height="36px"></AnimatedSkeleton>

          <AnimatedSkeleton width="70px" height="36px"></AnimatedSkeleton>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
