export function debouncer(callback, wait) {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback(...args), wait);
  };
}
