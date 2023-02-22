We use the native button element for the component library. This means that the browser will apply default styles to the button. We want to remove these default styles so that we can control the look and feel of the button.

It also makes our custom component inherit the accessibility features of the native button element. This means we don't need to add those features ourselves.

If we were to use a div element instead of a button element, we would need to add the accessibility features ourselves like this, assuming we used a `div` element:

```html
<div role="button" tabindex="0" aria-disabled="false">
  <span>Click me</span>
</div>
```

```js
div.addEventListener('keydown', (e) => {
  // The ENTER key
  if (e.keyCode === 13) {
    // do something
  }
});
div.addEventListener('keyup', (e) => {
  // The SPACE key
  if (e.keyCode === 32) {
    // do something
  }
});

div.addEventListener('click', () => {
  // do something
});
```
