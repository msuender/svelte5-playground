export const createTextState = () => {
    // state needed to make it reactive
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