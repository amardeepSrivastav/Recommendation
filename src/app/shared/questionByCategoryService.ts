import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:5000';
  subQuestions: any[];
  qnProgress: number;
  constructor(private http: HttpClient) {}

  getQuestionsByCategory(selectedCategory: string) {
    console.log('getting sub questions');
    return this.http.get(
      this.rootUrl + '/api/subQuestions/{{selectedCategory}}'
    );
  }
}
