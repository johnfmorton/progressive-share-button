class g extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.iconSize = () => {
      const e = this.getAttribute("icon-size");
      return i(e) ? e + "px" : e || 24 + "px";
    };
    function i(e) {
      return /^-?\d+$/.test(e);
    }
    (navigator.share || c(this.getAttribute("debug"))) && (this.shadowRoot.innerHTML = `
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
          background: none;
          border: none;
          padding: 1px 2px 1px 2px;
          margin: 0;
          cursor: pointer;
        }
        :host(:hover) {
        }
      </style>
      <button part="shareButton">
      <slot>
      ${d()}
      </slot>
      </button>
    `, this.addEventListener("click", this.share));
  }
  share() {
    const i = c(this.getAttribute("debug")), e = c(this.getAttribute("smart-share")), n = this.getAttribute("url");
    let s = this.getAttribute("text"), r = this.getAttribute("title"), o = {};
    n && (o.url = n), s && (o.text = s), r && (o.title = r), e && (r && r.slice(-1) !== "." && (r = r + "."), s && s.slice(-1) !== "." && (s = s + "."), o = {
      text: `${r ? r + " " : ""}${s ? s + " " : ""}${n || ""}`
    }), navigator.share ? i == 1 ? console.debug("data to be shared", o) : navigator.share(o).then(() => {
      console.log("Thanks for sharing!");
    }).catch(console.error) : console.debug("data to be shared", o);
  }
}
const h = () => '<svg xmlns="http://www.w3.org/2000/svg" part="shareIcon" viewBox="0 0 84.53 108.43" class="icon"><title>Share icon</title><desc>Square with upward arrow</desc><path d="m76.21,33.15h-23.38v5.28h23.38c1.72,0,3.04,1.32,3.04,2.91v58.77c0,1.58-1.32,2.91-3.04,2.91H8.32c-1.72,0-3.04-1.32-3.04-2.9v-58.64c0-1.58,1.32-2.91,3.04-2.91h20.74v-5.28H8.32c-4.62,0-8.32,3.7-8.32,8.19v58.77c0,4.49,3.7,8.19,8.32,8.19h67.88c4.62,0,8.32-3.7,8.32-8.19v-58.77c0-4.62-3.7-8.32-8.32-8.32h0Z"/><path d="m39.62,8.58v69.21h5.28V8.58l13.6,10.04,3.17-4.23L42.26,0l-19.41,14.4,3.17,4.23,13.6-10.04Z"/></svg>', l = () => '<svg id="b" xmlns="http://www.w3.org/2000/svg" part="shareIcon" viewBox="0 0 18.19 21.46" class="icon"><title>Share icon</title><desc>Circle with smaller circles radiating out</desc><g id="c"><path d="m15.1,15.29c-.89,0-1.7.38-2.28.98l-6.98-3.84c.24-.43.38-.94.38-1.49s-.14-1.03-.38-1.49l7.22-4.03c.55.48,1.25.77,2.04.77,1.7,0,3.1-1.39,3.1-3.1s-1.39-3.1-3.1-3.1-3.1,1.39-3.1,3.1c0,.67.22,1.27.58,1.78l-7.18,4.01c-.58-.62-1.39-1.03-2.3-1.03-1.7,0-3.1,1.39-3.1,3.1s1.39,3.1,3.1,3.1c.91,0,1.73-.41,2.3-1.03l6.98,3.84c-.26.46-.41.96-.41,1.51,0,1.7,1.39,3.1,3.1,3.1s3.1-1.39,3.1-3.1-1.37-3.07-3.07-3.07h0Zm0-14.54c1.32,0,2.38,1.08,2.38,2.38s-1.08,2.38-2.38,2.38-2.38-1.08-2.38-2.38,1.06-2.38,2.38-2.38ZM3.1,13.32c-1.32,0-2.38-1.08-2.38-2.38s1.08-2.38,2.38-2.38,2.38,1.08,2.38,2.38-1.06,2.38-2.38,2.38Zm12,7.44c-1.32,0-2.38-1.08-2.38-2.38s1.08-2.38,2.38-2.38,2.38,1.08,2.38,2.38-1.08,2.38-2.38,2.38Z"/></g></svg>', a = () => '<svg id="b" xmlns="http://www.w3.org/2000/svg" part="shareIcon" viewBox="0 0 112.98 100.64" class="icon" ><title>Share icon</title><desc>Square with arrow coming out to the right</desc><g id="c"><path d="m80.68,16.3l22.7,22.65-22.7,22.64v-11.44h-6.78c-18.27,0-33.35,6.91-43.25,13.14,2.34-12.07,7.94-21.2,16.75-27.16,10.12-6.84,22.02-7.83,26.67-7.94l6.6-.15v-11.73M73.93,0v21.43c-12.15.29-51.56,5.17-51.27,56.46,0,0,21.02-20.94,51.27-20.98v20.98l39.05-38.98L73.93,0ZM0,28.24v72.39h86.95v-20.98l-6.6,6.61v7.26H8.12V28.24H0Z"/></g></svg>', u = () => {
  const t = navigator.userAgent;
  return /iPhone|iPad|iPod/.test(t) ? "iOS" : /Android/.test(t) ? "Android" : /_whichIcon/.test(t) ? "Windows" : /Mac/.test(t) ? "Mac" : "Unknown";
}, d = (t) => {
  switch (u()) {
    case "iOS":
    case "Mac":
      return h();
    case "Android":
      return l();
    case "Windows":
      return a();
    default:
      return a();
  }
};
function c(t) {
  var i;
  switch ((i = t == null ? void 0 : t.toLowerCase()) == null ? void 0 : i.trim()) {
    case "true":
    case "1":
      return !0;
    case "false":
    case "0":
    case null:
    case void 0:
      return !1;
    default:
      return JSON.parse(t);
  }
}
export {
  g as default
};