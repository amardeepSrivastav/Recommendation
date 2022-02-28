import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { QuestionComponent } from './question/question.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { QuestionService } from './shared/question.service';
import { HttpClientModule } from '@angular/common/http';
import { QuestionByCategoryComponent } from './questionByCategory/questionByCategory.component';
import { QuestionByCategoryService } from './shared/questionByCategoryService';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    QuestionComponent,
    QuestionByCategoryComponent,
  ],
  bootstrap: [AppComponent],
  providers: [QuestionService, QuestionByCategoryService],
})
export class AppModule {}
