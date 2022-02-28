import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../shared/question.service';
import { QuestionByCategoryService } from '../shared/questionByCategoryService';

@Component({
  selector: 'app-questionByCategory',
  templateUrl: './questionByCategory.component.html',
  styleUrls: ['./questionByCategory.component.css'],
})
export class QuestionByCategoryComponent implements OnInit {
  @Input() selectedCategory: string;
  constructor(
    private router: Router,
    private questionByCategoryService: QuestionByCategoryService
  ) {}
  ngOnInit() {
    this.questionByCategoryService.qnProgress = 0;
    this.questionByCategoryService
      .getQuestionsByCategory()
      .subscribe((data: any) => {
        console.log(data);
        this.questionByCategoryService.subQuestions = data;
      });
  }

  Answer(optionSelected) {
    console.log(optionSelected);

    this.questionByCategoryService.qnProgress++;
    if (
      this.questionByCategoryService.subQuestions[
        this.questionByCategoryService.qnProgress
      ] == undefined
    ) {
      this.router.navigate(['/question']);
    }
    //window.location.reload();
  }
}
