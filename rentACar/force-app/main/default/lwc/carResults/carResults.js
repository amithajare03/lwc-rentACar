import { LightningElement, api, wire } from 'lwc';
import getResults from '@salesforce/apex/getCarTypeIdResults.getResults';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class CarResults extends LightningElement {

    @api carTypeId;
    cars;
    
    carSelectId;

    @wire(getResults, {ctId: '$carTypeId'})
    wiredCars({data, error}){
        console.log("holding car type id"+this.carTypeId);
        console.log(`data ${data}`);
        if(data){
            this.cars=data;
        }
        else if(error){
            this.showToast('ERROR', error.body.message, 'error');
        }
    }
    
    showToast(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }

    get carFound(){
        if(this.cars){
            return true;
        }
        else{
            return false;
        }
    }

    carSelectHandler(event){
        const carId=event.detail;
        console.log("from results.js car id:"+carId);
        this.carSelectId=carId;
    }

}