// canActivateViaAuthGuard.ts
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { of } from 'rxjs';

@Injectable()
export class NeverActivateGuard implements CanActivate {

    constructor() {
    }

    canActivate() {
        return of(false);
    }
}