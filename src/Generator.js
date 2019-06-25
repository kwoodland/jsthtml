import Element from './Element';

export default class Generator {

	constructor(structure) {
		this.dom = this._build(structure);
	}

	create() {
		return this.dom;
	}

	/**
	 * @private
	 */
	_createElement(attributes) {
		return new Element(attributes);
	}

	/**
	 * @private
	 */
	_build(structure) {
		const element = this._createElement(structure);
		if (structure.children) {
			structure.children.forEach(child => element.appendChild(this._build(child)));
		}
		return element;
	}
}