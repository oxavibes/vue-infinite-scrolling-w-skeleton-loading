import { debouncer } from "@/utils/debouncer";

const durationInMs = 500;

export default function useIntersectionObserver(target, callback) {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      debouncer(callback, durationInMs)();
    }
  });

  const startObserving = () => {
    observer.observe(target.value);
  };

  const stopObserving = () => {
    observer.disconnect();
  };

  return {
    startObserving,
    stopObserving,
  };
}
