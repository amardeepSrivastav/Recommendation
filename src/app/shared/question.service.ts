import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:5000';
  qns: any[];
  seconds: number;
  qnProgress: number;
  constructor(private http: HttpClient) {}

  getQuestions() {
    console.log('getting questions');
    return this.http.get(this.rootUrl + '/api/Questions');
  }

  getAnswers() {
    var body = this.qns.map((x) => x.QnID);
    console.log(body);
    return this.http.post(this.rootUrl + '/api/Answers', body);
  }
}
