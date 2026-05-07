import { Component, inject, OnInit } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { IBook } from './book.model';
import { BookService } from './book-server';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './books.html',
  styleUrls: ['./books.scss'],
})
export class Books implements OnInit {
  books: IBook[] = [];
  page: number = 1;

  bookService: BookService = inject(BookService);

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAllBooks(this.page).subscribe({
      next: (res) => {
        this.books = res.body?.data ?? [];
      },
      error: (err) => {
        console.error('Error al cargar libros:', err);
      }
    });
  }
}