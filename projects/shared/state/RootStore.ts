import { injectStores } from "@mobx-devtools/tools";
import { action, autorun, makeObservable, observable } from "mobx";

class AuthStore {
  token?: string;

  constructor() {
    makeObservable(this, {
      token: observable,
      login: action,
      logout: action,
    });

    autorun(() => console.log(this.token));
  }

  login(token: string) {
    this.token = token;
  }

  logout() {
    this.token = undefined;
  }
}

class TimerStore {
  secondsPassed = 0;
  name = "Timer";
  intervalRef = 0;

  constructor() {
    makeObservable(this, {
      secondsPassed: observable,
      increaseTimer: action,
    });
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }

  startTimer() {
    this.intervalRef = setInterval(() => this.increaseTimer(), 1000);
  }

  stopTimer() {
    clearInterval(this.intervalRef);
  }
}

export const authStore = new AuthStore();
export const timer1Store = new TimerStore();
export const timer2Store = new TimerStore();
timer1Store.startTimer();
timer2Store.startTimer();

export class RootStore {
  authStore: AuthStore;
  timer1Store: TimerStore;
  timer2Store: TimerStore;

  constructor() {
    this.authStore = authStore;
    this.timer1Store = timer1Store;
    this.timer2Store = timer2Store;
  }
}

export const rootStore = new RootStore();
injectStores({
  rootStore,
});
