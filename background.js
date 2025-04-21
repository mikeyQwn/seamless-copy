/**
 * @param {Record<string, unknown>} message
 * @returns {Promise<any>}
 */
async function sendToContext(message) {
    const tabs = await browser.tabs.query({
        currentWindow: true,
        active: true,
    });

    if (tabs.length < 1) {
        return;
    }

    const first = tabs[0];
    if (!first.id) {
        return;
    }

    return browser.tabs.sendMessage(first.id, message);
}

browser.commands.onCommand.addListener((command) => {
    if (command === "copy-text") {
        sendToContext({});
    } else {
        console.error("[background] Could not parse current command");
    }
});
