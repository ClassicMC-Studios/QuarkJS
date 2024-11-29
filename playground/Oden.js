let count = use(0);
count = set(count+1);

const template => () {
  return `<h1>${count}</h1>`;
}
view(template, "app");