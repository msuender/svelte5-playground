export const createTextState = () => {

    let text = $state('');

    return {
        get text() {
            return text;
        },
        set text(value) {
            text = value;
        }
    }
}   