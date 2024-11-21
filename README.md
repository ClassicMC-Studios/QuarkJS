# This JS Libray _Sucks_

> There is no way around that

But it is modeled after React

```html
<!-- BCSS + Colors for styling -->
  <div id="app" class="true-center text-center"></div>
  <script>
    let [count, setCount] = useState(0);

    function add(){
      count = setCount(count+1);
    }
    function app(){
      return `
        <p class="f-xl">${count}</p><br/>
        <button class="p f-m hover-bg-null no-border r" onclick="add()">+</button>
      `
    };
    // Id of element to render, the function for templating.
    extend("app",app);
  </script>
```

### Basics

Define __any__ variable using the template `let [var, setVar] = useState(type)`<br/>
To update a variable use `var = setVar(newValue);`<br/>
To make a template make any function and have it return _HTML in backticks_.<br/>
To render a variable just use regular backtick syntax ``<p>${var}</p>``<br/>
To serve this to a div with an id use the function `extend("id",templateFunc);`

### Why so complicated??

Because it allows updates to happen __only__ when the application updates.

This saves preformance and __boosts__ computer speed.