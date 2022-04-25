export const fakePromise = (delay) =>
  new Promise((res) => setTimeout(res, delay || 500));
