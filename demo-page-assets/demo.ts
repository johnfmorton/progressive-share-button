// Path: demo-page-assets/demo.ts
// This is the entry point for the demo page. It's a TypeScript file that
//  loads in the module that we're buidling with this repo
import { ProgressiveShareButton } from '../lib/progressive-share-button'
ProgressiveShareButton()

import { ProgressiveShareSuccessEvent, ProgressiveShareFailEvent } from '../lib/progressive-share-button';
// register the progressive-share-button web component
// customElements.define('progressive-share-button', ProgressiveShareButton);

// Example of how to register the progressive-share-button web component with a custom name
// import {ProgressiveShareButtonElement}  from './lib/main.ts';
// customElements.define('progressive-share-button-custom-name', ProgressiveShareButtonElement);

document.addEventListener('progressive-share-success', (e) => {
  const { detail } = e as ProgressiveShareSuccessEvent
    // e.detail contains the share data
  // check if e.detail exists
  if (detail) {
      console.log('The progressive-share-success event was heard.', detail)
  }
})
document.addEventListener('progressive-share-fail', (e) => {
    const { detail } = e as ProgressiveShareFailEvent
    // e.detail contains the share data
    console.log('The progressive-share-fail event was heard.', detail)
})

import './style.pcss';

// From here, you can add any additional JavaScript you want to run on the demo page.
// For example, you could add a button that calls a function in the module.
