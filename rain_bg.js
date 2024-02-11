function rain() {
    let amount = 70;
    let body = document.querySelector('body');
    let i = 0;
    while (i < amount) {
        let drop = document.createElement('i');
        drop.className = 'rain';
        let size = Math.random() * 7;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;

        drop.style.width = 0.9 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 9 + duration + 's';

        body.append(drop);
        i++;
    }
}