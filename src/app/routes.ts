import { Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './shared/question.service';

export const appRoutes: Routes = [
  { path: 'question', component: QuestionComponent },
  { path: '', redirectTo: '/question', pathMatch: 'full' },
];
