# Setting redirect conditionally in a component

1. You have to be using `react-router-dom`
2. In any component do this for redirection - 

```javascript
    this.props.history.push('/home'); // to redirect to home in class based component
    props.push('/home'); // to redirect to home from a functional component
```