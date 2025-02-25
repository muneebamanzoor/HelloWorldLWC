public with sharing class AccController{
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccList(){
        return [SELECT Id, Name FROM ACCOUNT ORDER BY CreatedDate desc Limit 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccList(String keyword){
        String key='%'+keyword+'%';
        return [SELECT Id, Name,Phone FROM ACCOUNT WHERE Name LIKE:key ORDER BY CreatedDate desc Limit 10];
    }
    @AuraEnabled(cacheable=true)
    public static Account getSingleAccount(){
        return [SELECT Id, Name, Phone FROM ACCOUNT ORDER BY CreatedDate desc Limit 1];
    }

}