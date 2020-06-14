import { LightningElement, wire} from 'lwc';
export default class CarSearch extends LightningElement {

    carTypeId;

    onCarTypeSelectListener(event){
        this.carTypeId=event.detail;
    }

}