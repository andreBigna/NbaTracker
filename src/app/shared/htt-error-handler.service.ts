import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorHandlerService {
  constructor() {}

  public HandleError(error: HttpErrorResponse) {
    alert('Something went wrong. please retry later');
    console.log(error);

    return throwError(() => {
      new Error();
    });
  }
}
