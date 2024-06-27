import { LightningElement } from 'lwc';

export default class BindHTML extends LightningElement {
    myValue = 'World';
    handleChange(event){
        this.myValue=event.target.value;
    }
}