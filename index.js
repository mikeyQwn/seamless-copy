function main() {
    /**
     * @type {[number, number]}
     */
    let cursorPosition = [0, 0];
    /**
     * @type {HTMLElement | null}
     */
    let lastTarget = null;

    window.addEventListener("mousemove", (e) => {
        cursorPosition = [e.clientX, e.clientY];
        lastTarget = e.target;
    });

    browser.runtime.onMessage.addListener(
        /**
         * @param {unknown} req
         * @param {unknown} _sender
         * @param {unknown} sendRes
         */
        (req, _sender, sendRes) => {
            navigator.clipboard.writeText(lastTarget.textContent).then(
                () => {
                    // console.log("copied");
                },
                () => {
                    console.error("copy failed");
                },
            );
        },
    );
}

main();
