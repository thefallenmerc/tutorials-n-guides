# Sample app with global event listener

``` jsx
import React from 'react';
import './App.css';

export default class App extends React.Component {
    componentDidMount() {
        this.addTheListeners();
    }
    render() {

        return ( <
            div className = "App" >
            <
            /div>
        );
    }

    addTheListeners() {
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
    }
}
```
