import { Component, inject, OnInit } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { IMovie } from '../../film.model';

@Component({
  selector: 'app-film-detail',
  imports: [],
  templateUrl: './film-detail.html',
  styleUrl: './film-detail.scss',
})
export class FilmDetail implements OnInit {
  instance: DynamicDialogConfig | undefined = inject(DynamicDialogConfig);
  movie?: IMovie;

  ngOnInit(): void {
    if (this.instance && this.instance.data) {
      console.warn(this.instance.data.movie);
      this.movie = this.instance.data.movie;
      console.log('dentro del modal', this.movie);
    }
  }

}
