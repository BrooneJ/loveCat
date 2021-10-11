export const throttling = () => {
    let throttleCheck;

    return {
        throttle(callback, miliseconds) {
            if (!throttleCheck) {
                throttleCheck = setTimeout(() => {
                    callback(...arguments);
                    throttleCheck = false;
                }, miliseconds);
            }
        }
    }
}