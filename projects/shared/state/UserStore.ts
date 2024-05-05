import { makeAutoObservable } from 'mobx';

export class UserStore {
    isLoggedIn: boolean = false;
    userData: any = null;

    constructor() {
        makeAutoObservable(this);
    }

    login(userDetails: any) {
        this.userData = userDetails;
        this.isLoggedIn = true;
    }

    logout() {
        this.userData = null;
        this.isLoggedIn = false;
    }
}