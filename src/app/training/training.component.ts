import { Component, OnInit } from '@angular/core';
import { Training } from '../shared/model/training';
import { TrainingService } from '../shared/service/training.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  training: Training = { name: '', competences: [] };
  loading = true;
  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.trainingService.getTraining().subscribe((data) => {
      this.training = data;
      this.loading = false;
    });
  }
}
