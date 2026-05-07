import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBookResponse } from './book.model';

@Injectable({
    providedIn: 'root',
})
export class BookService {
    resourceBaseUrl = 'https://api.potterdb.com/v1';

    http = inject(HttpClient);

    getAllBooks(page: number): Observable<HttpResponse<IBookResponse>> {
        return this.http.get<IBookResponse>(
            `${this.resourceBaseUrl}/books?page[number]=${page}&page[size]=25`,
            { observe: 'response' }
        );
    }
}