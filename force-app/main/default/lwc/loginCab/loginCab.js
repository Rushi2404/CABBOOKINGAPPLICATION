import { LightningElement } from 'lwc';
import validateCredentials from '@salesforce/apex/cabCustomerController.validateCredentials';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';



export default class LoginCab extends NavigationMixin(LightningElement) {
    username='';
    password='';

    handleUsernameChange(event)
    {
        this.username=event.target.value;
    }

    handlePasswordChange(event)
    {
        this.password=event.target.value
    }

    handleLogin()
    {
        validateCredentials({username:this.username, password:this.password})
        .then (result => {
            if(result)
            {
                let cmpDef = {
                    componentDef: "c:cabwizard"
                };
        
                let encodedDef = btoa(JSON.stringify(cmpDef));
                this[NavigationMixin.Navigate]({
                    type: "standard__webPage",
                    attributes: {
                        url: "/one/one.app#" + encodedDef
                    }
                });
                const toastEvent=new ShowToastEvent({
                    title: 'Success',
                    message: 'Login Successful',
                    variant: 'success'
                });
                this.dispatchEvent(toastEvent);
            }
            else{
                console.log(result);
                const toastEvent=new ShowToastEvent({
                    title: 'Error',
                    message: 'Username or Password is incorrect',
                    variant: 'error'
                });
                this.dispatchEvent(toastEvent);
            }
        })
    }
}