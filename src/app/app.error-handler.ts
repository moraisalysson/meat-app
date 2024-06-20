import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {  throwError } from "rxjs";

@Injectable()
export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any) {
        let errorMessage: string;
        
        if(error instanceof HttpErrorResponse) { //client-side
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
        } else { //server-side
            errorMessage = `Error code: ${error.status}\nMessage: ${error.error.message}`;
        }

        console.log(errorMessage);

        return throwError(() => errorMessage);
        
    }
}