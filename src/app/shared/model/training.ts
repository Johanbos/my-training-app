import { Competence } from './competence';

export class Training {
    constructor(
        public name?: string,
        public competences: Competence[] = []) { }
}
