export class Dialog {
    text: string;
    audio?: string;
    delay?: number = 0;
    textSpeed?: number;
    onComplete?: Function;
    onStart?: Function;
}