import { LightningElement } from 'lwc';

export default class Cabwizard extends LightningElement {
    currentStep='1';
    handlleOnStepClick(event)
    {
        this.currentStep=event.target.value;
    }
    get isStepOne()
    {
        return this.currentStep==='1';
    }
    get isStepTwo()
    {
        return this.currentStep==='2';
    }
    get isStepThree()
    {
        return this.currentStep==='3';
    }

    get isEnablePrev()
    {
        return this.currentStep!=='1';
    }

    get isEnableNext()
    {
        return this.currentStep !=='3';
    }

    get isEnableFinidh()
    {
        return this.currentStep =='3';
    }

    handlePrevious()
    {
        if (this.currentStep === '2') {
            this.currentStep = '1';
        } else if (this.currentStep === '3') {
            this.currentStep = '2';
        }
    }

    handleNext()
    {
        if(this.currentStep ==='1'){
            this.currentStep = '2';
        }
        else if(this.currentStep ==='2'){
            this.currentStep = '3';
        }
    }

    handleFinish()
    {
        if(this.currentStep ==='3'){
            this.currentStep ='1';
        }
    }

     // Listen for custom navigate event to update the step
    handleNavigate(event) {
        this.currentStep = event.detail.step; // Update the progress step
    }
}