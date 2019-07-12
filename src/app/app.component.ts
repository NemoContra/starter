import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MyServerResponse } from './models/my-server-response';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  topicResponse$: Observable<MyServerResponse<string[] | string>> =
    this.httpClient.get<string[]>('api/topic').pipe(
      map(res => this.mapToMyServerResponse<string[]>(res)),
      catchError((err: HttpErrorResponse) => {
        return of(new MyServerResponse<string>('error', err.message));
      })
    );

  constructor(private httpClient: HttpClient) {
    this['kdsl']();
  }

  private mapToMyServerResponse<T>(payload: T): MyServerResponse<T> {
    return new MyServerResponse<T>('success', payload);
  }

}
