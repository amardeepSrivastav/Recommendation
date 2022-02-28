import { Routes } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { QuestionByCategoryComponent } from './questionByCategory/questionByCategory.component';
import { QuestionService } from './shared/question.service';

export const appRoutes: Routes = [
  { path: 'question', component: QuestionComponent },
  { path: 'subQuestion', component: QuestionByCategoryComponent },
  { path: '', redirectTo: '/question', pathMatch: 'full' },
];
