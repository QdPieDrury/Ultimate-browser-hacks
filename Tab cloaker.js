const ask = Fuction() {
    let Tabtitle = prompt('What do you want the tab title to be');
    if (Tabtitle === NaN) {
    alert('please enter a correct title');
    ask()
    }
    if (Tabtitle != NaN) {
        document.title=Tabtitle
    }
}
