# cat-clicker
cat-clicker was created via udacity's js design patterns class.

### self-note on closures:

given closure example:
```
elem.addEventListener('click', (function(numCopy) {
    return function() {
        alert(numCopy)
    };
})(num));
```

i avoided the closure problem by using jQuery's `.each`, but if i hadn't done that then i would've needed to handle it differently.