# Code Blocks

## Python

```python
# Dies ist ein Python-Code-Block
for i in range(10):
    print(i)

class Block:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Block({self.name})"

    
block = Block("Hello World")

print(block)
```

## HTML

```html
<!-- Dies ist ein HTML-Code-Block -->
<html>
    <head>
        <title>Titel</title>
    </head>
    <body>
        <h1>Titel</h1>
    </body>
</html>
```

## CSS

```css
/* Dies ist ein CSS-Code-Block */
h1 {
    color: red;
}

h2 {
    color: blue;
}
```

## JavaScript

```js
// Dies ist ein JavaScript-Code-Block
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

var block = {
    name: "Hello World",
    print: function() {
        console.log(this.name);
    }
}
```

## JSON

```json
{
    "name": "John Doe",
    "age": 42,
    "address": {
        "street": "Main Street",
        "number": 42
    }
}
```

## YAML

```yaml
# Dies ist ein YAML-Code-Block
name: John Doe
age: 42
address:
    street: Main Street
    number: 42
```

## TOML

```toml
# Dies ist ein TOML-Code-Block
name = "John Doe"
age = 42
address = { street = "Main Street", number = 42 }
```

## Diff

```diff
# Dies ist ein Diff-Code-Block
- Dies ist eine Zeile, die entfernt wurde
+ Dies ist eine Zeile, die hinzugefügt wurde
+ Dies ist eine weitere Zeile, die hinzugefügt wurde
```