# This JS Libray _Sucks_

> There is no way around that

But it is modeled after React

```js
let [count, setCount] = useState(0);
        
function increment(){
    count = setCount(count+1);
}
function app(){
    return `
        <p>${count}</p>
        <button onclick="increment()">Add</button>
    `
};exportApp();
```
