import { injectStores } from "@mobx-devtools/tools";
import {action, autorun, makeAutoObservable, makeObservable, observable} from "mobx";

import { makePersistable } from 'mobx-persist-store';

class AuthStore {
  token?: string;

  constructor() {
    makeObservable(this, {
      token: observable,
      login: action,
      logout: action,
    });
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
  name = "Timer1";
  intervalRef = 0;

  constructor() {
    makeObservable(this, {
      secondsPassed: observable,
      increaseTimer: action,
    });
    makePersistable(this, { name: 'SampleStore', properties: ['secondsPassed'], storage: window.localStorage });

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
