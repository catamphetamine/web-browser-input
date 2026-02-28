import { describe, it } from 'mocha'
import { expect } from 'chai'

import isKeyCombination from './isKeyCombination.js'

describe('isKeyCombination', () => {
	it('should tell if it\'s a key combination', () => {
		expect(
			isKeyCombination(
				{
					ctrlKey: true,
					keyCode: 13
				},
				['Ctrl', 'Enter']
			)
		).to.equal(
			true
		)
	})
})