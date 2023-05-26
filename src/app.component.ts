import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from './services/snackbar.service';
import { SnackbarComponent } from './snackbar/snackbar.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, SnackbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public readonly snackbar: SnackbarService) {}

  ngOnInit(): void {}

  openSnackbar() {
    this.snackbar.open('Hello there')
  }
}
