// const Generator = require('./Generator');
import Generator from './Generator';

const buttonCallback = (event, element) => {
	console.log('Clicked element: ', element, event);
};

const structure = {
	element: 'div',
	classes: ['bg-info'],
	html: 'bg-info',
	children: [
		{
			element: 'div',
			classes: ['bg-secondary', 'ml-5'],
			html: 'bg-secondary'
		},
		{
			element: 'div',
			classes: ['bg-warning', 'ml-5'],
			html: 'bg-warning',
			children: [
				{
					element: 'div',
					classes: ['bg-danger', 'ml-5'],
					html: 'bg-danger',
					children: [
						{
							element: 'button',
							classes: ['btn', 'btn-light', 'ml-5', 'm-3', 'p-2'],
							html: 'Scary danger button',
							events: [
								{name: 'click', callback: buttonCallback}
							]
						}
					]
				}
			]
		}
	]
};

const dom = new Generator(structure).create();

document.getElementById('test-div').appendChild(dom);