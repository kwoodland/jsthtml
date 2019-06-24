export default class Generator {

	constructor(structure) {
		this.structure = structure;
		this.dom = this.build(structure);
	}

	create() {
		this.dom = this.build(this.structure);
		return this.dom;
	}

	createElement({ tag = 'div', html = '', classes = [], events = [] }) {
		let element = document.createElement(tag);
		element.innerHTML = html || '';
		element.className = classes.join(' ');
		events.forEach(event => {
			element.addEventListener(event.name, e => event.callback(e, element));
		});
		return element;
	}

	build(structure) {
		let element = this.createElement(structure);
		if (structure.children) {
			structure.children.forEach(childStructure => {
				element.appendChild(this.build(childStructure));
			});
		}
		return element;
	}
}