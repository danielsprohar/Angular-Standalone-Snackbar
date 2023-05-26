import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { finalize, Subject, takeUntil, timer } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-snackbar',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackbarComponent implements OnInit {
  private readonly destroy$ = new Subject<void>();
  private readonly timer$ = timer(3000);
  readonly message$ = this.snackbar.message$.pipe(
    takeUntil(this.timer$),
    finalize(() => {
      this.snackbar.close();
      this.destroy$.next();
    })
  );

  constructor(private readonly snackbar: SnackbarService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  ngOnInit(): void {
    this.timer$.pipe(takeUntil(this.destroy$)).subscribe();
  }
}
