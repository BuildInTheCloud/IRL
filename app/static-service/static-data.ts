import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * This class provides the service with methods to read data.
 */
@Injectable()
export class StaticService {
  entity:any;
  dinos:any;
  /**
   * @param {Http} http - The injected Http.
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  getEntityList(jsonFileName:string): any {
    //if (this.entity) {
    //  return Promise.resolve(this.entity);
    //} else {
      return new Promise(resolve => {
        this.http.get("data/"+jsonFileName+".json")
          .map(res => res.json())
          .subscribe(data => {
            //this.entity = data.sort((a, b) => {
            //  if (a.name < b.name) { return -1; } else if (a.name > b.name) { return 1; } else { return 0; }
            //});
            //console.log(JSON.stringify(this.entity));
            this.entity = data;
            resolve(this.entity);
          })
        ;
      });
    //}
  }
  getColorList(): any {
    return this.http.get('data/colors.json')
      .map((res: Response) => res.json() )
      .catch(this.handleError)
    ;
  }
  getDinoList(): any {
    if (this.dinos) {
      return Promise.resolve(this.dinos);
    } else {
      return new Promise(resolve => {
        this.http.get('data/dinos.json')
          .map(res => res.json() )
          .subscribe(data => {
            this.dinos = data.sort((a, b) => {
              if (a.name < b.name) { return -1; } else if (a.name > b.name) { return 1; } else { return 0; }
            });
            resolve(this.dinos);
          })
        ;
      });
    }
  }
  getCommandList(): any {
    return this.http.get('data/commands.json')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }
  getFavsList(): any {
    return this.http.get('data/commands.json')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  getEntity(id: number): Observable<string[]> {
    return this.http.get('../data/color.json')
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}


