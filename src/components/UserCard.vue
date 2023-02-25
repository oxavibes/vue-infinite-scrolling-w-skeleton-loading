<script setup>
import { toRefs } from "vue";

const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});

let { gender, name, picture, dob, location } = toRefs(props.user);

const emit = defineEmits(["imageLoaded"]);

const onLoadImage = () => emit("imageLoaded", true);
</script>

<template>
  <div class="card">
    <div class="card-content">
      <img
        alt="User image"
        class="card-image"
        :src="picture.large"
        @load="onLoadImage"
      />

      <div class="card-details">
        <h2>
          {{ name.title }}
          {{ name.first }}
          {{ name.last }}
        </h2>

        <div class="card-details-inner">
          <span class="button">{{ location.country }}</span>

          <span class="button">{{ gender }}</span>

          <span class="button">{{ dob.age }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.card {
  min-width: 350px;
  padding: 20px;
  flex: 0 0 80%;
  position: relative;
  border: 1px solid #efefef;
  transition: all 0.3s ease;
  box-shadow: 2px 6px 25px rgba(0, 0, 0, 0.1);
}
.card:hover {
  box-shadow: 2px 6px 30px rgba(0, 0, 0, 0.2);
}

.card-content {
  gap: 30px;
  display: flex;
}

.card-image {
  display: block;
  width: 128px;
  height: 128px;
  border-radius: 50%;
}

.card-details {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.card h2 {
  font-size: 2rem;
  line-height: 1.2;
  overflow-wrap: break-word;
  margin-bottom: 1rem;
  /* padding: 0 0 30px 0; */
}

.card-details-inner {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: end;
}

.card p {
  /* margin: 0 0 30px; */
  font-size: 1.2rem;
}

.button {
  display: block;
  font-size: 1.2rem;
  background: #e76c67;
  border: 1px solid #e76c67;
  padding: 0.75rem 1rem;
  color: white;
  text-decoration: none;
  font-weight: 700;
  text-align: center;
}

.button:hover,
.button:focus {
  background: darken(#e76c67, 10%);
  border: 1px solid darken(#e76c67, 10%);
}

@media screen and (min-width: 768px) {
  .card {
    flex: 1 1 calc(50% - 20px);
  }
}

@media screen and (min-width: 1280px) {
  .card h2 {
    font-size: 2.4rem;
  }
}
</style>
