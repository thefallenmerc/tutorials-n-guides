# Handle online offline event

``` javascript
    window.addEventListener('load', event => {
        // offline online indicator
        function handleNetworkChange(event) {
            if (navigator.onLine) {
                document.body.classList.remove("offline");
            } else {
                document.body.classList.add("offline");
            }
        }
        window.addEventListener("online", handleNetworkChange);
        window.addEventListener("offline", handleNetworkChange);
        // offline online indicator end
    });
```
