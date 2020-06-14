public with sharing class getCarTypeIdResults {
   
    @AuraEnabled(cacheable=TRUE)
    public static List<Car__c> getResults(String ctId){
        System.debug(ctId);
            if(String.isEmpty(ctId)){

                return [select Name, Car_Type__c, Contact__c,Picture__c, Per_Day_Rent__c,
                        Geolocation__latitude__s, Geolocation__longitude__s
                        FROM Car__c 
                        WHERE Available_For_Rent__c=TRUE ];
                
    
            }else{
                return  [select Name, Car_Type__c, Contact__c,Picture__c, Per_Day_Rent__c,
                        Geolocation__latitude__s, Geolocation__longitude__s
                        FROM Car__c 
                        WHERE Available_For_Rent__c=TRUE AND
                        Car_Type__c =: ctId];
    
                        
            }
        
}
}

