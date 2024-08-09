import { LightningElement } from 'lwc';
import Cab_Reservation__c from '@salesforce/schema/Cab_Reservation__c';
import NAME from '@salesforce/schema/Cab_Reservation__c.Name';
import Travel_Date_and_Time from '@salesforce/schema/Cab_Reservation__c.Travel_Date_Time__c';
import Travel_From from '@salesforce/schema/Cab_Reservation__c.Travel_From__c';
import Travel_To from '@salesforce/schema/Cab_Reservation__c.Travel_To__c';
import Adhar_Card_Number from '@salesforce/schema/Cab_Reservation__c.Aadhar_Number__c';
import Customer_email from '@salesforce/schema/Cab_Reservation__c.Customer_Email__c';
import No_Of_Travellers from '@salesforce/schema/Cab_Reservation__c.Number_of_travellers__c';
import vehical from '@salesforce/schema/Cab_Reservation__c.Vehicle__c';
import Price_Per_KM from '@salesforce/schema/Cab_Reservation__c.Price_per_Km__c';
import Driver from '@salesforce/schema/Cab_Reservation__c.Driver__c';
import Driver_Email from '@salesforce/schema/Cab_Reservation__c.Driver_Email__c';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';



export default class CabReservation extends LightningElement {
    recordId;
    showmodal=false;
    objectApiName = Cab_Reservation__c;
    fields=[NAME,Travel_Date_and_Time,Travel_From,Travel_To,Adhar_Card_Number,
        Customer_email,No_Of_Travellers,vehical,Price_Per_KM,Driver,Driver_Email
    ];


    handlesucess(event)
    {        
        this.recordId=event.detail.id; //for fetching details on modal pop-up
        this.showmodal=true;

        const evt= new ShowToastEvent({

            title: 'Sucessful',
            message: 'Cab Reservation has been created',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }

    closemodal() // to close modal pop-up
    {

        this.showmodal=false;
    }

    savemodal()
    {
        this.showmodal=false;

        // Dispatch a custom event to notify the parent to move to step 3
        const navigateEvent = new CustomEvent('navigate', {
            detail: { step: '3' },
        });
        this.dispatchEvent(navigateEvent);
    }
}