import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';


export default class MyCabHomePage extends NavigationMixin(LightningElement) {

    handleLogin()
    {
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

    handleSignup()
    {
        let compDef ={
            componentDef: "c:signupForm"
            };

        let encodedDef = btoa(JSON.stringify(compDef));
        this[NavigationMixin.Navigate]({
            type: "standard__webPage",
            attributes: {
                url: "/one/one.app#" + encodedDef
            }
        });
    }

}