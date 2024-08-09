public with sharing class cabCustomerController {
    public cabCustomerController() {

    }
    @AuraEnabled(cacheable=true)
    public static Boolean validateCredentials(String username, String password){
        
        Boolean result;

        if(username==null || password==null)
        {
            result = false;
        }
        List <Cab_Customer__c> con_List=[select Id, Username__c, Password__c from Cab_Customer__c
                                         WHERE Username__c=:username Limit 1];
            
        if (con_List.size()==0) 
        {
            result=false; 
            return result;   
        }
            if(con_List[0].Password__c==password)
            {
                result=true;
            }
            else {
                result=false;
            }
            
        return result;
        
    }
}