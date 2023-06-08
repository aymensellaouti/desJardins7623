import { Component, OnDestroy } from "@angular/core";
import { Observable, Subscription, filter, map, timer } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-test-observable",
  templateUrl: "./test-observable.component.html",
  styleUrls: ["./test-observable.component.css"],
})
export class TestObservableComponent /* implements OnDestroy */ {
  firstObservable$: Observable<number>;
  /*   mySetTimout$ = timer(1000);
  mySetInterval$ = timer(0, 1000); */
  subscriptions: Subscription[] = [];
  constructor(private toaster: ToastrService) {
    this.firstObservable$ = new Observable((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    this.firstObservable$.subscribe({
      next: (data) => {
        console.log("First Subscriber" + data);
      },
    });
    this.firstObservable$.pipe(map((element) => element * 3)).subscribe({
      next: (data) => {
        this.toaster.info("Second Subscriber " + data);
      },
      complete: () => {
        this.toaster.info("Second Subscriber Boom");
      },
    });
  }

  /*  this.subscriptions.push(this.firstObservable$.subscribe((val) => {
      console.log(val);
    }));
    setTimeout(
      () => {
          this.subscriptions.push(
              this.firstObservable$
              .pipe(
        map( element => element  * 3),
        filter( element => element % 2 == 0)
              )
              .subscribe({
        next: (value) => this.toaster.info('' + value),
        complete: () => this.toaster.success('Fin du Game :)')
              }
              ));
        }, 1500);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(
      (subscription: Subscription) => subscription.unsubscribe()
    )
  } */
}
