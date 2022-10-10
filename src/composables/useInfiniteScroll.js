import { ref, onBeforeMount, onBeforeUnmount } from "vue";

export default function useInfiniteScroll(callback, wait = 500) {
  let handleScrollDebounced = ref(null);

  const debounce = (callback, wait) => {
    let timeoutId = null;

    return (...args) => {
      window.clearTimeout(timeoutId);

      timeoutId = window.setTimeout(() => {
        callback.apply(null, args);
      }, wait);
    };
  };

  let handleScroll = () => {
    let { documentElement } = document;

    let isBottomOfWindow =
      documentElement.scrollTop + window.innerHeight ===
      documentElement.offsetHeight;

    if (isBottomOfWindow) callback();
  };

  onBeforeMount(() => {
    handleScrollDebounced.value = debounce(handleScroll, wait);

    window.addEventListener("scroll", handleScrollDebounced.value);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScrollDebounced.value);
  });
}
