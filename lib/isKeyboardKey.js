export default function isKeyboardKey() {
	const event = arguments[arguments.length - 1]
	let i = 0
	let hasCtrl
	let hasAlt
	let hasShift
	let hasMeta
	while (i < arguments.length - 1) {
		const key = arguments[i]
		switch (key) {
			case 'Ctrl':
				hasCtrl = true
				if (!event.ctrlKey) {
					return false
				}
				break
			case 'Alt':
				hasAlt = true
				if (!event.altKey) {
					return false
				}
				break
			case 'Shift':
				hasShift = true
				if (!event.shiftKey) {
					return false
				}
				break
			case 'Meta':
				hasMeta = true
				if (!event.metaKey) {
					return false
				}
				break
			default:
				const keyCode = getKeyCode(key)
				if (!keyCode) {
					console.warn(`[web-browser-input] Unsupported ``isKeyboardKey()`` key: "${key}"`)
					return false
				}
				if (event.keyCode !== keyCode) {
					return false
				}
				break
		}
		i++
	}
	if (event.ctrlKey && !hasCtrl) {
		return false
	}
	if (event.altKey && !hasAlt) {
		return false
	}
	if (event.shiftKey && !hasShift) {
		return false
	}
	if (event.metaKey && !hasMeta) {
		return false
	}
	return true
}

const KEY_CODES = {
	Backspace: 8,
	Tab: 9,
	Enter: 13,
	Esc: 27,
	Space: 32,
	PageUp: 33,
	PageDown: 34,
	End: 35,
	Home: 36,
	Left: 37,
	Up: 38,
	Right: 39,
	Down: 40,
	Delete: 46
}

const INCLUDES_ENGLISH_LETTER_REG_EXP = /[A-Za-z]/

function getKeyCode(key) {
	// https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/
	if (key.length === 1) {
		if (INCLUDES_ENGLISH_LETTER_REG_EXP.test(key)) {
			// Uppercase letters have lower key codes.
			// Lowercase letters key codes are uppercase ones plus `32`.
			return key.toUpperCase().charCodeAt(0)
		}
		if (!isNaN(Number(key))) {
			return Number(key) + 48
		}
	}
	return KEY_CODES[key]
}