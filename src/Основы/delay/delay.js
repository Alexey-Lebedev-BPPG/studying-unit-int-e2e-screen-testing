const delay = (callback, ms) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(callback());
    }, ms)
  );

export default delay;
