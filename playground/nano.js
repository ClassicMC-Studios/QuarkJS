function useState(initialValue) {
  let state = initial value;

  function setState(newValue) {
    state = newValue;
  }

  return [state, setState];
}

// Usage example
let [count, setCount] = useState(0);

alert(count);
setCount(count + 1);
alert(count);