# `web-browser-input`

Web browser input utilities

## Install

```
npm install web-browser-input --save
```

## Use

* `belongsToClickableElement(element: Element, options?: object): boolean` — Tells whether a DOM `Element` is clickable or is placed inside a clickable DOM `Element`. "Clickable" DOM `Elements` are either `<button/>` or `<a/>`.
  * `options`:
    * `stopBefore: Element` — A parent DOM `Element` at which the search should stop (not including it).

* `isKeyCombination(event: Event, keys: string[]): boolean` — Tells whether a keyboard `event` corresponds to a combination of keyboard `keys`. Example: `isKeyCombination(event, ['Ctrl', 'Shift', 'Space']) === true/false`.

* `copyTextToClipboard(text: string)` — Copies text to clipboard.

* `openLinkInNewTab(url: string)` — Opens a link in a new tab.

* `readTextFile(file: File): string` — Reads a text file.

## Test

```
npm test
```

## GitHub Ban

On March 9th, 2020, GitHub, Inc. silently [banned](https://medium.com/@catamphetamine/how-github-blocked-me-and-all-my-libraries-c32c61f061d3) my account (erasing all my repos, issues and comments) without any notice or explanation. Because of that, all source codes had to be promptly moved to GitLab. The [GitHub repo](https://github.com/catamphetamine/web-browser-input) is now only used as a backup (you can star the repo there too), and the primary repo is now the [GitLab one](https://gitlab.com/catamphetamine/web-browser-input). Issues can be reported in any repo.

## License

[MIT](LICENSE)