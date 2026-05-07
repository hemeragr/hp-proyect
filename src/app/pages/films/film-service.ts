import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieResponse } from './film.model';

@Injectable({
    providedIn: 'root',
})
export class FilmService {
    resourceBaseUrl = 'https://api.potterdb.com/v1';

    http = inject(HttpClient);

    getAllFilms(page: number): Observable<HttpResponse<IMovieResponse>> {
        return this.http.get<IMovieResponse>(
            `${this.resourceBaseUrl}/movies?page[number]=${page}&page[size]=25`,
            { observe: 'response' }
        );
    }
}