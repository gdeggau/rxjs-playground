import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  console.log("Executed");

  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 2000);
  setTimeout(() => subscriber.next("Charlie"), 4000);
});

const subscription = observable$.subscribe((value: any) => console.log(value));

setTimeout(() => {
  console.log("unsubscribe");
  subscription.unsubscribe();
}, 3000);
