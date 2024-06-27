import { LightningElement } from 'lwc';

export default class ConditionalRenderingElements extends LightningElement {
    myValue = 'Muneeba'
    showMe = false;
    handleChange(event){
        this.showMe = event.target.checked;
    }
}