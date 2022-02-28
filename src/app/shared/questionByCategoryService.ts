import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionByCategoryService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:5000';
  subQuestions: any[];
  qnProgress: number;
  constructor(private http: HttpClient) {}

  getQuestionsByCategory() {
    console.log('getting sub questions');
    var body = JSON.parse(localStorage.getItem('selectedCategory'));
    console.log(body);
    return this.http.get(
      this.rootUrl + '/api/subQuestions?selectedCategory=' + body
    );
  }
}
