import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CaptureFormService {
  url = 'http://127.0.0.1:5000/api';

  constructor(
    private http: HttpClient
  ) {
  }

  queryGender(req?: any): Observable<any> {
    return this.http.get(`${this.url}/Listargenero`, {});
  }

  queryDocumentType(req?: any): Observable<any> {
    return this.http.get(`${this.url}/listtdoc`, {});
  }

  querySubDocumentType(req?: any): Observable<any> {
    return this.http.get(`${this.url}/listsubTipoDoc`, {});
  }

  queryOccupation(req?: any): Observable<any> {
    return this.http.get(`${this.url}/Listarocupacion`, {});
  }

  queryPais(req?: any): Observable<any> {
    return this.http.get(`${this.url}/listpais`, {});
  }

}
