function askForTabTitle() {
    let tabTitle = prompt('What do you want the tab title to be?');
    if (tabTitle === null || tabTitle.trim() === '') {
        alert('Please enter a valid title.');
        askForTabTitle();
    } else {
        document.title = tabTitle;
    }
}
function askForTabIcon() {
    let iconUrl = prompt('Enter the URL of the icon you want to use for the tab (favicon):');
    if (iconUrl === null || iconUrl.trim() === '') {
        alert('Please enter a valid icon URL.');
        askForTabIcon();
    } else {
        let link = document.querySelector("link[rel~='icon']");
        if (!link) {
            link = document.createElement('link');
            link.rel = 'icon';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
        link.href = iconUrl;
    }
}
askForTabTitle();
askForTabIcon();
