import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacterResponse } from './character.model';

export interface ICharacterFilters {
  name_cont?: string;
  nationality_eq?: string;
  blood_status_cont?: string;
  house_eq?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  resourceBaseUrl = 'https://api.potterdb.com/v1';
  http = inject(HttpClient);

  getAllCharacters(
    page: number,
    filters?: ICharacterFilters
  ): Observable<HttpResponse<ICharacterResponse>> {
    let params = new HttpParams()
      .set('page[number]', page)
      .set('page[size]', 25);

    if (filters?.name_cont) {
      params = params.set('filter[name_cont]', filters.name_cont);
    }

    if (filters?.nationality_eq) {
      params = params.set('filter[nationality_eq]', filters.nationality_eq);
    }

    if (filters?.blood_status_cont) {
      params = params.set('filter[blood_status_cont]', filters.blood_status_cont);
    }

    if (filters?.house_eq) {
      params = params.set('filter[house_eq]', filters.house_eq);
    }

    return this.http.get<ICharacterResponse>(
      `${this.resourceBaseUrl}/characters`,
      {
        params,
        observe: 'response',
      }
    );
  }
}