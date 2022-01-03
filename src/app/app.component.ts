import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StartState } from './store/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public _count = 0;

  constructor(private store: Store<StartState>) {
    this.store.subscribe(
      d => console.log(d.n)

    )
    console.log(this._count);
  }

  ngOnInit(): void {
    this._increament()
    this._decreament()
  }

  public _increament() {

  }
  public _decreament() {


  }
}
