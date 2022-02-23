import { Routes } from '@angular/router';
import { QuestionService } from './shared/question.service';

export const appRoutes: Routes = [
  { path: 'question', component: QuestionService },
  { path: '', redirectTo: '/question', pathMatch: 'full' },
];
