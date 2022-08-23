export default function belongsToClickableElement(element, { stopBefore } = {}) {
	switch (element.tagName) {
		case 'A':
		case 'BUTTON':
			return true
	}
	if (!element.parentNode) {
		return false
	}
	if (element.parentNode === stopBefore) {
		return false
	}
	return belongsToClickableElement(element.parentNode)
}