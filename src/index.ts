import { Observable } from "rxjs";

const observable$ = new Observable<string>((subscriber) => {
  console.log("Executed");

  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 2000);
  setTimeout(() => subscriber.next("Charlie"), 4000);
});

console.log("Subscription 1 starts");
observable$.subscribe((value: any) => console.log("Subscription 1: ", value));

setTimeout(() => {
  console.log("Subscription 2 starts");
  observable$.subscribe((value: any) => console.log("Subscription 2: ", value));
}, 1000);
