class u extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.iconSize = () => {
      const s = this.getAttribute("icon-size") ?? "";
      return o(s) ? s + "px" : s || 24 + "px";
    };
    function o(s) {
      return /^-?\d+$/.test(s);
    }
    typeof navigator.share == "function" || a(this.getAttribute("debug")) ? this.shadowRoot && (this.shadowRoot.innerHTML = `
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
                    :host(:hover) {
                    }
                  </style>
                  <button part="shareButton">
                  <slot>
                  ${f()}
                  </slot>
                  </button>`, this.addEventListener("click", this.share)) : console.warn("ProgressiveShareButton disabled due to lack of Web Share API support on this browser.");
  }
  share() {
    const o = a(this.getAttribute("debug")), s = a(this.getAttribute("smart-share")), n = this.getAttribute("url");
    let r = this.getAttribute("text"), i = this.getAttribute("title"), t = {};
    n && (t.url = n), r && (t.text = r), i && (t.title = i), s && (i && i.slice(-1) !== "." && (i = i + "."), r && r.slice(-1) !== "." && (r = r + "."), t = {
      text: `${i ? i + " " : ""}${r ? r + " " : ""}${n || ""}`
    }), !t.url && !t.text && !t.title && (t.url = window.location.href);
    let c = new CustomEvent("progressive-share-success", {
      bubbles: !0,
      cancelable: !1,
      composed: !0,
      detail: t
    });
    navigator.share ? o == 1 ? console.debug("data to be shared", t) : navigator.share(t).then(() => {
      this.dispatchEvent(c);
    }).catch((l) => {
      let h = new CustomEvent(
        "progressive-share-fail",
        {
          bubbles: !0,
          cancelable: !1,
          composed: !0,
          detail: l
        }
      );
      this.dispatchEvent(h);
    }) : console.debug("data to be shared", t);
  }
}
function d() {
  return typeof navigator.share == "function" ? console.log(
    "ProgressiveShareButton support initialized. <progressive-share-success /> element now available"
  ) : console.log(
    "ProgressiveShareButton support initialized. This browser does not have Web Share API support support."
  ), customElements.define(
    "progressive-share-button",
    u
  ), !0;
}
const v = '<svg xmlns="http://www.w3.org/2000/svg" part="shareIcon" viewBox="0 0 84.53 108.43" class="icon"><title>Share icon</title><desc>Square with upward arrow</desc><path d="m76.21,33.15h-23.38v5.28h23.38c1.72,0,3.04,1.32,3.04,2.91v58.77c0,1.58-1.32,2.91-3.04,2.91H8.32c-1.72,0-3.04-1.32-3.04-2.9v-58.64c0-1.58,1.32-2.91,3.04-2.91h20.74v-5.28H8.32c-4.62,0-8.32,3.7-8.32,8.19v58.77c0,4.49,3.7,8.19,8.32,8.19h67.88c4.62,0,8.32-3.7,8.32-8.19v-58.77c0-4.62-3.7-8.32-8.32-8.32h0Z"/><path d="m39.62,8.58v69.21h5.28V8.58l13.6,10.04,3.17-4.23L42.26,0l-19.41,14.4,3.17,4.23,13.6-10.04Z"/></svg>', g = '<svg id="b" xmlns="http://www.w3.org/2000/svg" part="shareIcon" viewBox="0 0 18.19 21.46" class="icon"><title>Share icon</title><desc>Circle with smaller circles radiating out</desc><g id="c"><path d="m15.1,15.29c-.89,0-1.7.38-2.28.98l-6.98-3.84c.24-.43.38-.94.38-1.49s-.14-1.03-.38-1.49l7.22-4.03c.55.48,1.25.77,2.04.77,1.7,0,3.1-1.39,3.1-3.1s-1.39-3.1-3.1-3.1-3.1,1.39-3.1,3.1c0,.67.22,1.27.58,1.78l-7.18,4.01c-.58-.62-1.39-1.03-2.3-1.03-1.7,0-3.1,1.39-3.1,3.1s1.39,3.1,3.1,3.1c.91,0,1.73-.41,2.3-1.03l6.98,3.84c-.26.46-.41.96-.41,1.51,0,1.7,1.39,3.1,3.1,3.1s3.1-1.39,3.1-3.1-1.37-3.07-3.07-3.07h0Zm0-14.54c1.32,0,2.38,1.08,2.38,2.38s-1.08,2.38-2.38,2.38-2.38-1.08-2.38-2.38,1.06-2.38,2.38-2.38ZM3.1,13.32c-1.32,0-2.38-1.08-2.38-2.38s1.08-2.38,2.38-2.38,2.38,1.08,2.38,2.38-1.06,2.38-2.38,2.38Zm12,7.44c-1.32,0-2.38-1.08-2.38-2.38s1.08-2.38,2.38-2.38,2.38,1.08,2.38,2.38-1.08,2.38-2.38,2.38Z"/></g></svg>', p = '<svg id="b" xmlns="http://www.w3.org/2000/svg" part="shareIcon" viewBox="0 0 112.98 100.64" class="icon" ><title>Share icon</title><desc>Square with arrow coming out to the right</desc><g id="c"><path d="m80.68,16.3l22.7,22.65-22.7,22.64v-11.44h-6.78c-18.27,0-33.35,6.91-43.25,13.14,2.34-12.07,7.94-21.2,16.75-27.16,10.12-6.84,22.02-7.83,26.67-7.94l6.6-.15v-11.73M73.93,0v21.43c-12.15.29-51.56,5.17-51.27,56.46,0,0,21.02-20.94,51.27-20.98v20.98l39.05-38.98L73.93,0ZM0,28.24v72.39h86.95v-20.98l-6.6,6.61v7.26H8.12V28.24H0Z"/></g></svg>', w = () => {
  const e = navigator.userAgent;
  return /iPhone|iPad|iPod/.test(e) ? "iOS" : /Android/.test(e) ? "Android" : /Windows/.test(e) ? "Windows" : /Mac/.test(e) ? "Mac" : "Unknown";
}, f = () => {
  switch (w()) {
    case "iOS":
    case "Mac":
      return v;
    case "Android":
      return g;
    case "Windows":
    case "Unknown":
    default:
      return p;
  }
};
function a(e) {
  var o;
  if (!e)
    return !1;
  switch ((o = e == null ? void 0 : e.toLowerCase()) == null ? void 0 : o.trim()) {
    case "true":
    case "1":
      return !0;
    case "false":
    case "0":
      return !1;
    default:
      return JSON.parse(e);
  }
}
const b = (() => {
  d();
})();
export {
  d as ProgressiveShareButton,
  u as ProgressiveShareButtonElement,
  b as default
};
