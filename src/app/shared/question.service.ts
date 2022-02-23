import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {
  //---------------- Properties---------------
  readonly rootUrl = 'http://localhost:5000';
  qns: any[];
  seconds: number;
  timer;
  qnProgress: number;
  correctAnswerCount: number = 0;
  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get(this.rootUrl + '/api/Questions');
  }

  getAnswers() {
    var body = this.qns.map((x) => x.QnID);
    console.log(body);
    return this.http.post(this.rootUrl + '/api/Answers', body);
  }
}
