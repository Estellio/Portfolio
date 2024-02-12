function rain() {
    let body = document.querySelector('body');
    let html = document.documentElement;
    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    console.log(height);
    let amount = 70;
    let i = 0;
    while (i < amount) {
        let drop = document.createElement('i');
        drop.className = 'rain';
        let size = Math.random() * 7;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;

        drop.style.width = 1.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 9 + duration + 's';

        body.append(drop);
        i++;
    }
}