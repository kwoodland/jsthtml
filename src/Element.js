export default class Element {

	constructor(attributes) {
		this._attributes = attributes;
		this._element = this._create();

		return this._element;
	}

	/**
	 * @private
	 */
	_create() {
		this._element = document.createElement(this._getValue('tag'));
		this._element.innerHTML = this._getValue('html');
		this._element.className = this._validateClasses(this._getValue('classes'));
		this._setAttributes(this._getValue('attributes'));
		this._setEvents(this._getValue('events'));
		this._setStyles(this._getValue('styles'));

		return this._element;
	}

	/**
	 * @private
	 */
	_validateClasses(classes) {
		if (Array.isArray(classes)) {
			return classes.join(' ');
		} else if (typeof classes === 'string') {
			return classes;
		}
		return '';
	}

	/**
	 * @private
	 */
	_setEvents(events) {
		events.forEach(event => {
			this._element.addEventListener(event.name, e => event.callback(e, element));
		});
	}

	/**
	 * @private
	 */
	_setAttributes(attributes) {
		for (const key in attributes) {
			this._element.setAttribute(key, attributes[key]);
		}
	}

	/**
	 * @private
	 */
	_setStyles(styles) {
		for (const key in styles) {
			this._element.style[key] = styles[key];
		}
	}

	/**
	 * @private
	 */
	_getValue(attrName) {
		const DEFAULT_VALUES = {
			tag: 'div',
			html: '',
			attributes: {},
			styles: {},
			classes: [],
			events: []
		};

		return this._attributes[attrName] ||  DEFAULT_VALUES[attrName];
	}
}