import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  resourceUrl = 'https://api.potterdb.com/v1/';
  http = inject(HttpClient);

  //getAllCharacters(page: number):
}
