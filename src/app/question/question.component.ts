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
    if (parseInt(localStorage.getItem('seconds')) > 0) {
      this.questionService.seconds = parseInt(localStorage.getItem('seconds'));
      this.questionService.qnProgress = parseInt(
        localStorage.getItem('qnProgress')
      );
      this.questionService.qns = JSON.parse(localStorage.getItem('qns'));
      if (this.questionService.qnProgress == 8)
        this.router.navigate(['/question']);
      else this.startTimer();
    } else {
      this.questionService.seconds = 0;
      this.questionService.qnProgress = 0;
      this.questionService.getQuestions().subscribe((data: any) => {
        this.questionService.qns = data;
        this.startTimer();
      });
    }
  }
  startTimer() {
    this.questionService.timer = setInterval(() => {
      this.questionService.seconds++;
      localStorage.setItem('seconds', this.questionService.seconds.toString());
    }, 1000);
  }

  Answer(qID, choice) {
    this.questionService.qns[this.questionService.qnProgress].answer = choice;
    localStorage.setItem('qns', JSON.stringify(this.questionService.qns));
    this.questionService.qnProgress++;
    localStorage.setItem(
      'qnProgress',
      this.questionService.qnProgress.toString()
    );
    if (this.questionService.qnProgress == 10) {
      clearInterval(this.questionService.timer);
      this.router.navigate(['/result']);
    }
  }
}
