# QuarkJS

> This JS Libray _Sucks_
>
> There is no way around that

But it is modeled after React

```html
  <div id="app"></div>
  <script>
    let [count, setCount] = useState(0);

    function add(){
      count = setCount(count+1);
    }
    function app(){
      return `
        <p>${count}</p><br/>
        <button onclick="add()">+</button>
      `
    };
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

### NanoJS

> This library is mid (basically useless)

```html
<div id="app"></div>
<script>
  let count = $(0);
  $bind(()=>{return `a ${count <= 3 ? "few": count <= 10 ? "couple":"lot"}...${count}`;},"app");
  function add(){
    count = $set(count+1);
  }
</script>
```

### Basics

Define any variable like `let myVar = $(myVal);`<br/>
Update any variable with `myVar = $set(newVal);`<br/> 
Render the variable with `$bind(()=>{return myVar;},"myId");`<br/>
Adding the styling using `$css("myUrl");`