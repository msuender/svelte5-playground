export const createTextState = () => {
    // state needed to make it reactive
    // does not need to be an object
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