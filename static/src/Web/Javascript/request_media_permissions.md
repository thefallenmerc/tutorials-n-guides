# Request media permission from user

``` javascript
window.addEventListener('load', event => {
    // ask for permission
    navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        })
        .then(function(stream) {
            console.log('Permissions acquired!');
        })
        .catch(function(err) {
            console.log('Failed to acquire permission!', err);
        });
    // ask for permission end
});
```
