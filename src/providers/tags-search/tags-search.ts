import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoCompleteService } from "ionic2-auto-complete";

/*
  Generated class for the TagsSearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TagsSearchProvider implements AutoCompleteService {
  
  labelAttribute = 'Tags';
  
  formValueAttribute: any;
  
  getResults(term: any) {
    return ["Term 1", 'Term 2'];
  }
  
  getItemLabel?(item: any) {
    return this.labelAttribute;
  }


  constructor(public http: HttpClient) {
    
  }

}
