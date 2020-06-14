import { LightningElement, api, wire } from 'lwc';
import {fireEvent} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';
export default class CarTile extends LightningElement {

    @api car;
    @api selectedCarId;

    @wire(CurrentPageReference)
    pageRef;

    handleCarSelect(event){
        event.preventDefault();

        const carId=this.car.Id;
        console.log("main sourcer of car.ID"+this.car.Id);

        const carSelect= new CustomEvent('carselect', {detail:carId});
        this.dispatchEvent(carSelect);

        fireEvent(this.pageRef, 'carselect', this.car.Id);

    }
    get isCarSelected(){
        console.log("this.car.Id:"+this.car.Id);
            console.log("this.selectedCarId:"+this.selectedCarId);
        if(this.car.Id === this.selectedCarId){
            
            return "tile selected";
        }
        return "tile";
    }

}