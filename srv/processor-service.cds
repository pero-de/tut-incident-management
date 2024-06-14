using { sap.capire.incidents as my } from '../db/schema';

service ProcessorService { 
    entity Incidents @(restrict : [
      {
        grant : [ 'READ'], 
        to : [ 'IncidentViewer']
      },
      {
        grant : [ '*'], 
        to : [ 'IncidentManager']
      }
    ]) as projection on my.Incidents;

    @readonly
    entity Customers as projection on my.Customers;
}
annotate ProcessorService.Incidents with @odata.draft.enabled; 
// annotate ProcessorService with @(requires: 'support');

extend projection ProcessorService.Customers with {
  firstName || ' ' || lastName as name: String
}