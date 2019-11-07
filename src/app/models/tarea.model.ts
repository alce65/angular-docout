export interface TareaInterface {
    nombre: string;
    isCompleted: boolean;
}

export class TareaModel implements TareaInterface {
    constructor(
        public nombre: string = '',
        public isCompleted: boolean = false
    ) {}
}
