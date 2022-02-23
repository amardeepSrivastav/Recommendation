import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get(this.rootUrl + '/api/Question');
  }
}
