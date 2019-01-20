import { Injectable } from '@angular/core';
import { Flug } from '../entity/flug';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Element, ElementCompact, xml2js } from 'xml-js';

@Injectable({
  providedIn: 'root'
})
export class FlugService {
  constructor(private httpClient: HttpClient) { }

  public getFluege(): Observable<Flug[]> {
    return this.httpClient.get<Flug[]>('http://www.angular.at/api/flight');
  }

  public getFlugXML(id: number): Observable<Element | ElementCompact> {
    const httpParams = new HttpParams().set('id', `${id}`);
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/xml')
      .set('Accept', 'application/xml');

    return this.httpClient.get('http://www.angular.at/api/flight', {
      params: httpParams,
      headers: httpHeaders,
      responseType: 'text'
    }).pipe(
      map(xml => xml2js(xml))
    );
  }

  public getFlug(id: number): Observable<Flug> {
    const httpParams = new HttpParams().set('id', `${id}`);

    return this.httpClient.get<Flug>('http://www.angular.at/api/flight', {
      params: httpParams
    });
  }

  public speichern(flug: Flug): Observable<undefined> {
    return this.httpClient.post<undefined>('http://www.angular.at/api/flight', flug);
  }

  public anlegen(flug: Flug): Observable<undefined> {
    return this.httpClient.put<undefined>(`http://www.angular.at/api/flight`, flug);
  }

  public entfernen(flug: Flug): Observable<undefined> {
    const httpParams = new HttpParams().set('id', `${flug.id}`);
    return this.httpClient.delete<undefined>('http://www.angular.at/api/flight', {params: httpParams});
  }

  public getFlugAbflugDatum(id: number): Observable<Date> {
    return this.getFlug(id).pipe(
      map(flug => new Date(flug.date))
    );
  }
}
