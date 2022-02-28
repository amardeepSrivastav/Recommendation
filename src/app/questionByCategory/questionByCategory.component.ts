import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../shared/question.service';

@Component({
  selector: 'app-questionByCategory',
  templateUrl: './questionByCategory.component.html',
  styleUrls: ['./questionByCategory.component.css'],
})
export class QuestionByCategoryComponent implements OnInit {
  @Input() selectedCategory: string;
  constructor(private router: Router) {}
  ngOnInit() {}

  Answer() {}
}

function input() {
  throw new Error('Function not implemented.');
}
