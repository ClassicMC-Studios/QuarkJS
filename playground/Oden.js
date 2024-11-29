let count = state(0);
count = set("++");

const template => () {
  return `<h1>${count}</h1>`;
}
extend(template, "app");