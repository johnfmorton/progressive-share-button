declare module "progressive-share-button" {
    export interface ProgressiveShareSuccessEvent extends Event {
        detail: any;
    }
    export interface ProgressiveShareFailEvent extends Event {
        detail: any;
    }
    class ProgressiveShareButtonClass extends HTMLElement {
        iconSize: () => string;
        osOverride: () => string | null;
        private boundShare;
        constructor();
        disconnectedCallback(): void;
        share(): void;
    }
    const ProgressiveShareButton: () => boolean;
    export { ProgressiveShareButton, ProgressiveShareButtonClass };
}
