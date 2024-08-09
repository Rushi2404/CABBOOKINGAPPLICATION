import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';



export default class SignupForm extends NavigationMixin(LightningElement) {

    
    
    handlesuccess(event)
    {
        

        const toastEvent = new ShowToastEvent({
            title: 'Successful',
            message: 'User created Successfully',
            variant: 'success'
        });
        this.dispatchEvent(toastEvent);
            
            
        let compDef ={
                componentDef: "c:loginCab"
            };
    
            let encodedDef = btoa(JSON.stringify(compDef));
            this[NavigationMixin.Navigate]({
                type: "standard__webPage",
                attributes: {
                    url: "/one/one.app#" + encodedDef
                }
            });
        
    }

    handleSubmit()
        {
            
            
        };
}