public with sharing class carSearchFormController {
    
    @AuraEnabled(cacheable=true)
    public static List<Car_Type__c>  getCarType(){
        return[select id, name from Car_Type__c];
    }
}
