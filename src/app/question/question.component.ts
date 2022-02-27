import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  constructor(
    private router: Router,
    private questionService: QuestionService
  ) {}
  qns: any[];
  ngOnInit() {
    this.questionService.qnProgress = 0;
    this.questionService.getQuestions().subscribe((data: any) => {
      console.log(data);
      this.questionService.qns = data;
    });
  }

  Answer(qID, choice) {
    this.questionService.qns[this.questionService.qnProgress].answer = choice;
    this.questionService.qnProgress++;

    if (
      this.questionService.qns[this.questionService.qnProgress] == undefined
    ) {
      this.router.navigate(['']);
      window.location.reload();
    }
  }
}
