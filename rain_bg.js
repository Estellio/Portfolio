function rain() {
    let body = document.querySelector('body');
    let amount = 70;
    let i = 0;
    while (i < amount) {
        let drop = document.createElement('i');
        drop.className = 'rain';
        let size = Math.random() * 6;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;

        drop.style.width = 1.9 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 9 + duration + 's';

        body.append(drop);
        i++;
    }
}