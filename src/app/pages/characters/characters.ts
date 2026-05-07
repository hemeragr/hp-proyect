import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';


import { ICharacter } from './character.model';
import { CharacterService } from './character-service';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    PaginatorModule,

  ],
  templateUrl: './characters.html',
  styleUrl: './characters.scss',
})
export class Characters implements OnInit {
  characters: ICharacter[] = [];
  page: number = 1;
  isLoading: boolean = true;
  first: number = 0;
  rows: number = 0;
  totalRecords: number = 5;


  private fb = inject(FormBuilder);
  private characterService = inject(CharacterService);

  filterForm = this.fb.nonNullable.group({
    name_cont: [''],
    nationality_eq: [''],
    blood_status_cont: [''],
    house_eq: [''],
  });

  bloodOptions = [
    { label: 'Sangre pura', value: 'pure-blood' },
    { label: 'Sangre mestiza', value: 'half-blood' },
    { label: 'Sangre sucia', value: 'muggle-born' },
  ];

  houseOptions = [
    { label: 'Gryffindor', value: 'Gryffindor' },
    { label: 'Hufflepuff', value: 'Hufflepuff' },
    { label: 'Ravenclaw', value: 'Ravenclaw' },
    { label: 'Slytherin', value: 'Slytherin' },
  ];

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterService
      .getAllCharacters(this.page, this.filterForm.getRawValue())
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.characters = res.body?.data ?? [];
          this.totalRecords = res.body?.meta.pagination.records ?? 0; this.rows = this.characters.length;
        },
        error: (err) => {
          console.error('Error al cargar personajes:', err);

        },
      });
  }

  search(): void {
    this.page = 1;
    this.getCharacters();
  }

  clearFilters(): void {
    this.filterForm.reset({
      name_cont: '',
      nationality_eq: '',
      blood_status_cont: '',
      house_eq: '',
    });

    this.page = 1;
    this.getCharacters();
  }

  onPageChange(event: PaginatorState) {
    this.page = (event.page ?? 0) + 1;
    this.characters = [];
    this.isLoading = true;
    this.getCharacters();
  }
}