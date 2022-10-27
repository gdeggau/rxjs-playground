import { Observable, of } from "rxjs";

ourOwnOf("Alice", "Ben", "Charlie").subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("Completed"),
});

// const names$ = new Observable<string>((subscriber) => {
//   subscriber.next("Alice");
//   subscriber.next("Charlie");
//   subscriber.next("Ben");
//   subscriber.complete();
// });

// names$.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log("Completed"),
// });

function ourOwnOf(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    args.forEach((arg) => {
      subscriber.next(arg);
    });
    subscriber.complete();
  });
}
