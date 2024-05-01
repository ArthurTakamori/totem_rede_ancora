// function to avoid unnecessary requests in the typing range. hence the delay.

const debounce = (func, delay) => {
  let timer;

  // anonymous function with spreading operator to make it reusable
  return (...args) => {
    // clear scheduled action
    clearTimeout(timer);

    // stores the timer identifier stores the timer identifier
    timer = setTimeout(() => func(...args), delay);
  };
};

export default debounce;
