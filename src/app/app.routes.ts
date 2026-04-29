import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Characters } from './pages/characters/characters';
import { Books } from './pages/books/books';
import { Films } from './pages/films/films';
import { Potions } from './pages/potions/potions';
import { Spells } from './pages/spells/spells';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: Main
    },
    {
        path: 'characters',
        component: Characters
    },
    {
        path: 'books',
        component: Books
    },
    {
        path: 'films',
        component: Films
    },
    {
        path: 'potions',
        component: Potions
    },
    {
        path: 'spells',
        component: Spells
    }
];
