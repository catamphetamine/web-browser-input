interface BelongsToClickableElementOptions {
	stopBefore?: HTMLElement;
}

export function belongsToClickableElement(element: HTMLElement, options?: BelongsToClickableElementOptions): boolean;
export function isKeyCombination(event: Event, keys: string[]): boolean;
export function copyTextToClipboard(text: string): void;
export function openLinkInNewTab(url: string): void;