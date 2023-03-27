async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

document.getElementById('textcopy').addEventListener('click', async () => {
    let tab = await getCurrentTab();
    const {
        url,
        title
    } = tab;
    // console.log({url, title});
    await navigator.clipboard.writeText(`<${title}>
${url}`);
    window.close();
});

document.getElementById('markdowncopy').addEventListener('click', async () => {
    let tab = await getCurrentTab();
    const {
        url,
        title
    } = tab;
    // console.log({url, title});
    await navigator.clipboard.writeText(`[${title}](${url})`);
    window.close();
});
