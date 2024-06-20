import { Restaurant } from "./restaurant/restaurant.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MEAT_API } from "../app.api";
import { Observable, catchError } from "rxjs";
import { ErrorHandler } from "../app.error-handler";

@Injectable()
export class RestaurantsService {
    
    constructor(private http: HttpClient){ }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
        .pipe(catchError(ErrorHandler.handleError));
    }
}