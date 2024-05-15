# baconipsum
JavaScript library for baconipsum.com
# main
```js
const {baconipsum} = require('./baconipsum');

const baconi = new baconipsum();
baconi.meat_and_filler(1,1).then(info => {
    console.log(info);
}).catch(error => {
    console.error('Error:', error);
});

```
