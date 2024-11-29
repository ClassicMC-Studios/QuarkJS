let count = state(0);
set(count, "++");

const template => () {
  return `<h1>${count}</h1>|
}
extend(template, "app");