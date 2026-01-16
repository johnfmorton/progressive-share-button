/**
 * name: progressive-share-button
 * version: v1.0.4
 * description: A web componet that creates a OS-native share button.
 * author: John F. Morton <john@johnfmorton.com> (https://supergeekery.com)
 * repository: https://github.com/johnfmorton/progressive-share-button
 */
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global["progressive-share-button"] = {}));
})(this, (function(exports2) {
  "use strict";
  class ProgressiveShareButtonClass extends HTMLElement {
    iconSize;
    osOverride;
    boundShare;
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.boundShare = this.share.bind(this);
      this.iconSize = () => {
        const size = this.getAttribute("icon-size") ?? "";
        if (_isNumeric(size)) {
          return size + "px";
        } else if (size) {
          return size;
        } else {
          return "24px";
        }
      };
      this.osOverride = () => {
        const os = this.getAttribute("os") ?? "";
        if (os) {
          return os;
        } else {
          return null;
        }
      };
      function _isNumeric(value) {
        return /^-?\d+$/.test(value);
      }
      if (typeof navigator.share === "function" || _getBoolean(this.getAttribute("debug"))) {
        if (this.shadowRoot) {
          this.shadowRoot.innerHTML = `
                  <style>
                    :host {
                      display: inline-block;
                      cursor: pointer;
                    }
                    svg {
                      width: ${this.iconSize()};
                      height: ${this.iconSize()};
                      fill: currentColor;
                      vertical-align: bottom;
                    }
                    button {
                      all: unset;
                      padding: 1px 2px 1px 2px;
                      margin: 0;
                      cursor: pointer;
                    }
                  </style>
                  <button part="shareButton">
                  <slot>
                  ${_whichIcon(this.osOverride())}
                  </slot>
                  </button>`;
          this.addEventListener("click", this.boundShare);
        }
      } else {
        console.warn(
          "ProgressiveShareButton disabled due to lack of Web Share API support on this browser."
        );
      }
    }
    disconnectedCallback() {
      this.removeEventListener("click", this.boundShare);
    }
    share() {
      const debug = _getBoolean(this.getAttribute("debug"));
      const smartShare = _getBoolean(this.getAttribute("smart-share"));
      const url = this.getAttribute("url");
      let text = this.getAttribute("text");
      let title = this.getAttribute("title");
      let data = {};
      if (url) {
        data.url = url;
      }
      if (text) {
        data.text = text;
      }
      if (title) {
        data.title = title;
      }
      if (smartShare) {
        if (title && title.slice(-1) !== ".") {
          title = title + ".";
        }
        if (text && text.slice(-1) !== ".") {
          text = text + ".";
        }
        data = {
          text: `${title ? title + " " : ""}${text ? text + " " : ""}${url ? url : ""}`
        };
      }
      if (!data.url && !data.text && !data.title) {
        data.url = window.location.href;
      }
      let shareEvent = new CustomEvent(
        "progressive-share-success",
        {
          bubbles: true,
          cancelable: false,
          composed: true,
          detail: data
        }
      );
      if (navigator.share) {
        if (debug) {
          console.debug("data to be shared", data);
        } else {
          navigator.share(data).then(() => {
            this.dispatchEvent(shareEvent);
          }).catch((e) => {
            let shareEventFail = new CustomEvent("progressive-share-fail", {
              bubbles: true,
              cancelable: false,
              composed: true,
              detail: e
            });
            this.dispatchEvent(shareEventFail);
          });
        }
      } else {
        console.debug("data to be shared", data);
      }
    }
  }
  const ProgressiveShareButton = () => {
    if (typeof navigator.share === "function") {
      console.log(
        "ProgressiveShareButton support initialized. <progressive-share-button> element now available"
      );
    } else {
      console.log(
        "ProgressiveShareButton support initialized. This browser does not have Web Share API support."
      );
    }
    customElements.define(
      "progressive-share-button",
      ProgressiveShareButtonClass
    );
    return true;
  };
  const androidShareIcon = '<svg part="shareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 117" class="icon"><title>Share icon</title><desc>Circle with smaller circles radiating out</desc><path d="m78,74.75c-4.9,0-9.3,2.13-12.36,5.49l-24.05-13.5c1.06-2.19,1.67-4.64,1.67-7.24s-.58-4.91-1.58-7.06l25.06-14.09c2.98,2.72,6.93,4.4,11.27,4.4,9.24,0,16.75-7.51,16.75-16.75s-7.51-16.75-16.75-16.75-16.75,7.51-16.75,16.75c0,2.89.73,5.61,2.03,7.98l-24.73,13.91c-3.05-3.16-7.32-5.14-12.04-5.14-9.24,0-16.75,7.51-16.75,16.75s7.51,16.75,16.75,16.75c4.66,0,8.87-1.91,11.91-4.99l24.22,13.6c-.88,2.04-1.38,4.28-1.38,6.64,0,9.24,7.51,16.75,16.75,16.75s16.75-7.51,16.75-16.75-7.51-16.75-16.75-16.75Zm0-60c6.2,0,11.25,5.05,11.25,11.25s-5.05,11.25-11.25,11.25-11.25-5.05-11.25-11.25,5.05-11.25,11.25-11.25Zm-51.5,56c-6.2,0-11.25-5.05-11.25-11.25s5.05-11.25,11.25-11.25,11.25,5.05,11.25,11.25-5.05,11.25-11.25,11.25Zm51.5,32c-6.2,0-11.25-5.05-11.25-11.25s5.05-11.25,11.25-11.25,11.25,5.05,11.25,11.25-5.05,11.25-11.25,11.25Z"/></svg>';
  const iosShareIcon = '<svg part="shareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 117" class="icon"><title>Share icon</title><desc>Square with upward arrow</desc><path d="m92.32,34.13h-23.38v5.28h23.38c1.72,0,3.04,1.32,3.04,2.91v58.77c0,1.58-1.32,2.91-3.04,2.91H24.43c-1.72,0-3.04-1.32-3.04-2.9v-58.64c0-1.58,1.32-2.91,3.04-2.91h20.74v-5.28h-20.74c-4.62,0-8.32,3.7-8.32,8.19v58.77c0,4.49,3.7,8.19,8.32,8.19h67.88c4.62,0,8.32-3.7,8.32-8.19v-58.77c0-4.62-3.7-8.32-8.32-8.32h.01Z" style="stroke-width:0px;"/><path d="m55.73,9.56v69.21h5.28V9.56l13.6,10.04,3.17-4.23L58.37.98l-19.41,14.4,3.17,4.23,13.6-10.04h0Z" /></svg>';
  const winShareIcon = '<svg part="shareIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117 117" class="icon"><title>Share icon</title><desc>Square with arrow coming out to the right</desc><polygon points="91.23 109.42 6.46 109.42 6.46 38.04 12.46 38.04 12.46 103.42 85.23 103.42 85.23 93.05 91.23 93.05 91.23 109.42" style="stroke-width:0px;"/><path d="m79.5,86.98v-20.93c-7.62.28-28.89,2.31-46.16,15.73l-5.47,4.25.64-6.9c4-43.17,39.92-47.46,50.99-47.74V10.1l37.95,38.49-37.95,38.39Zm.62-49.64c-8.39,0-38.1,2.39-44.67,35.65,21.84-13.77,46.06-13.01,47.17-12.97l2.88.11v12.24l23.52-23.79-23.52-23.86v12.92l-3.23-.24c-.21-.01-.97-.06-2.15-.06Z" /></svg>';
  const _guessOs = () => {
    const userAgent = navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(userAgent)) {
      return "iOS";
    } else if (/Android/.test(userAgent)) {
      return "Android";
    } else if (/Windows/.test(userAgent)) {
      return "Windows";
    } else if (/Mac/.test(userAgent)) {
      return "Mac";
    } else {
      return "Unknown";
    }
  };
  const _whichIcon = (osOverride) => {
    let os = osOverride;
    if (osOverride === null || osOverride === "default" || osOverride === "auto") {
      os = _guessOs();
    }
    switch (os) {
      case "iOS":
      case "ios":
      case "Mac":
        return iosShareIcon;
      case "Android":
      case "android":
        return androidShareIcon;
      case "Windows":
      case "windows":
      case "Unknown":
      default:
        return winShareIcon;
    }
  };
  function _getBoolean(stringValue) {
    if (!stringValue) {
      return false;
    }
    switch (stringValue.toLowerCase().trim()) {
      case "true":
      case "1":
        return true;
      case "false":
      case "0":
        return false;
      default:
        return JSON.parse(stringValue);
    }
  }
  exports2.ProgressiveShareButton = ProgressiveShareButton;
  exports2.ProgressiveShareButtonClass = ProgressiveShareButtonClass;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
}));
