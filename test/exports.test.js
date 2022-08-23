import {
	isKeyCombination,
	belongsToClickableElement,
	openLinkInNewTab,
	copyTextToClipboard
} from '../index.js'
// } from 'web-browser-input'

describe('exports', function() {
	it('should export stuff', function() {
		isKeyCombination.should.be.a('function')
		belongsToClickableElement.should.be.a('function')
		openLinkInNewTab.should.be.a('function')
		copyTextToClipboard.should.be.a('function')
	})
})