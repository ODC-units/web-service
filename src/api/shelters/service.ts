export class Service {
	serviceAttribute: string;
	serviceValue: [string];
	constructor(attribute: string, values: [string]) {
		this.serviceAttribute = attribute;
		this.serviceValue = values;
	}
}
