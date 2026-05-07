import { Component, inject, OnInit } from '@angular/core';
import { IMovie } from './film.model';
import { FilmService } from './film-service';
import { DialogService } from 'primeng/dynamicdialog';
import { FilmDetail } from './modal/film-detail/film-detail';


@Component({
  selector: 'app-films',
  imports: [],
  templateUrl: './films.html',
  styleUrl: './films.scss',
})
export class Films implements OnInit {
  films: IMovie[] = [];
  selectedFilm: IMovie | null = null;
  page: number = 1;
  private dialogService: DialogService = inject(DialogService);
  private filmService: FilmService = inject(FilmService);

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getAllFilms(this.page).subscribe({
      next: (res) => {
        this.films = res.body?.data ?? [];
      },
      error: (err) => {
        console.error('Error al cargar películas:', err);
      }
    });
  }

  openFilmsDetails(film: IMovie): void {
    this.dialogService.open(FilmDetail, {
      data: { movie: film },
      header: film.attributes.title,
      width: '80vw',
      closable: true,
    });

  }
}