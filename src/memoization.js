const memoizedAdd = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log("Cached response");
      return cache[value];
    } else {
      console.log("calculating result");
      let result = value + 10;
      cache[value] = result;
      return cache[value];
    }
  };
};

const memoizedObj = new memoizedAdd();

console.log(memoizedObj(10));
console.log(memoizedObj(100));
console.log(memoizedObj(100));
