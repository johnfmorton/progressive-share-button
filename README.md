# Progressive Share Button

Progressive Share Button a web component that displays an OS-native share button. The component has many options styling and sharing options. See the documentation below for more details.
## Limitations

The Web Share API is not supported on all browsers. The component will only display the share button if the browser supports the Web Share API. If the browser does not support the Web Share API, the component will not display anything.

The current version of this component supports sharing a URL, title and text. It does not support sharing files.

## Installation

### NPM

```
npm install johnfmorton/progressive-share-button
```

### CDN

https://unpkg.com/

```html
<script src="https://unpkg.com/TBD/progressive-share-button"></script>
```



## Usage

```html
<script src="progressive-share-button.js"></script>
<progressive-share-button url="https://example.com"></progressive-share-button>

<script src="progressive-share-button.js"></script>
<progressive-share-button url="https://example.com" icon="share.svg" apple-icon="share-ios.svg" android-share="share-android.svg" text="Share this article"></progressive-share-button>
```

Or, with npm.

`npm install johnfmorton/progressive-share-button`



## Demo

[https://johnfmorton.github.io/progressive-share-button/](https://johnfmorton.github.io/progressive-share-button/)


## Options



```
<!-- example of how to use the progressive-share-button web component -->
  <progressive-share-button
    title="Progressive Share Button Web Component"
    text="Check out this cool web component that creates a share button that will only be displayed if the browser supports the Web Share API."
    url="https://example.com"
    smart-share=1
    icon-size="20"
    icon-color="#F0F"
    icon-color-hover="#F00"
    icon-color-active="#0F0"
    background-color="blue"
    background-color-hover="gray"
    border-radius="2px"
    debug=0
    style="position: relative; top:2px; left: 10px;"
  ></progressive-share-button>
```




## License

MIT

## Author

[John F. Morton](https://johnfmorton.com)
