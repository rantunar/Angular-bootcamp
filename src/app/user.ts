export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: number  | undefined,
        public topic: string,
        public timePreference: string,
        public subscribe: boolean
    ){}
}
