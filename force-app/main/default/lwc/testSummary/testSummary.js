import { LightningElement, track } from 'lwc';

export default class TestSummary extends LightningElement {
    @track field1;
    @track field2;
    @track field3;
    @track field4;

    get calculation1() {
        return this.field1 * this.field2;
        return this.field1 - this.field2;
    }

    get calculation2() {
        return this.field3 + this.field4;
    }

    handleChange(event) {
        const fieldName = event.target.label.toLowerCase().replace(/\s+/g, '');
        this[fieldName] = event.target.value;
    }
}