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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, HelloComponent, QuestionComponent],
  bootstrap: [AppComponent],
  providers: [QuestionService],
})
export class AppModule {}
