import { describe, it } from 'mocha'
import { expect } from 'chai'

import {
	isKeyCombination,
	belongsToClickableElement,
	openLinkInNewTab,
	copyTextToClipboard
} from 'web-browser-input'

describe('exports', function() {
	it('should export stuff', function() {
		expect(isKeyCombination).to.be.a('function')
		expect(belongsToClickableElement).to.be.a('function')
		expect(openLinkInNewTab).to.be.a('function')
		expect(copyTextToClipboard).to.be.a('function')
	})
})