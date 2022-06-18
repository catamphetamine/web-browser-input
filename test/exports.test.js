import {
	isKeyboardkey,
	isClickable,
	openLinkInNewTab,
	copyTextToClipboard
} from '../index.js'
// } from 'web-browser-input'

describe('exports', function() {
	it('should export stuff', function() {
		isKeyboardkey.should.be.a('function')
		isClickable.should.be.a('function')
		openLinkInNewTab.should.be.a('function')
		copyTextToClipboard.should.be.a('function')
	})
})