
import { Component, inject, OnInit } from '@angular/core';
import { IBook } from './book.model';
import { BookService } from './book-server';


@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.html',
  styleUrl: './books.scss',
})
export class Books implements OnInit {

  books: IBook[] = [];

  bookService: BookService = inject(BookService);

  page: number = 1;

  openedBookId: string | null = null;


  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAllBooks(this.page).subscribe({
      next: (res) => {
        this.books = res.body?.data ?? [];
        console.log(this.books);
      },
      error: (err) => {
        console.error('Error al cargar libros:', err);
      }
    });
  }

  toggleBook(bookId: string) {
    this.openedBookId = this.openedBookId === bookId ? null : bookId;
  }
}
