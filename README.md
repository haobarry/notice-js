## notice-js

### Introduction
"notice-js" is a lightweight web-based notification feature designed to provide users with a simple and effective top notification experience. The project consists of only one JavaScript file, with minimal code and easy integration, suitable for various web projects.


### Usage
1. Download the `notice.js` file and copy it to your project directory.
2. Include the JavaScript file in your HTML file:

```html
<script src="notice.js"></script>
```

3. Call the following function where you want to display the notice:
   *The first parameter is required, while the second and third parameters are optional. The second parameter has four types to choose from`"info","success","error"，"warn" ` or `""`, and the third parameter is a time value in milliseconds.*

```javascript
notice.open("hello")

notice.open("hello","info",3000)

notice.open("hello",3000)
```
