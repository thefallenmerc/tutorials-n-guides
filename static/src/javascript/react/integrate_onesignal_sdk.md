# How to integrate one signal SDK

1. Get your onesignal app id

2.edit `public/index.html` with following script in the `head` tag - 

``` html
<script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async=""></script>
<script>
    var OneSignal = window.OneSignal || [];
    OneSignal.push(function() {
        OneSignal.init({
            appId: "b56b2fb3-180a-4806-a2cb-e49b882996a1",
        });
    });
</script>
```
