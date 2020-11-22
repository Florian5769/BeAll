import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class AuthService implements CanActivate {

    constructor(
        private readonly cookieSrv: CookieService,
        private readonly router: Router,
    ) { }

    getToken(): string {
        return this.cookieSrv.get('token');
    }

    isAuthenticated(): boolean {
        // get the token
        const token = this.getToken();
        // return a boolean reflecting
        // whether or not the token is expired
        const jwtService: JwtHelperService = new JwtHelperService();
        return !jwtService.isTokenExpired(token);
    }

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.logout();
            return false;
        }
        return true;
    }

    logout(): void {
        this.cookieSrv.deleteAll();
        this.router.navigate(['/']);
    }

}