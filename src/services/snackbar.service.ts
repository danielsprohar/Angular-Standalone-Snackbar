import { Injectable } from '@angular/core';
import { shareReplay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private readonly _message$ = new Subject<string | null>();
  readonly message$ = this._message$.asObservable().pipe(shareReplay());

  constructor() {}

  open(message: string) {
    this._message$.next(message);
  }

  close() {
    this._message$.next(null);
  }
}
