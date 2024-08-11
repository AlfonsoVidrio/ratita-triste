document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    audio.loop = true;

    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const buttonsContainer = document.getElementById('buttonsContainer');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const resetButton = document.getElementById('resetButton');
    let scale = 1;

    noButton.addEventListener('click', () => {
        scale += 0.2;
        yesButton.style.transform = `scale(${scale})`;
        audio.play().catch(error => {
            console.log('Error al reproducir el audio:', error);
        });
    });

    yesButton.addEventListener('click', () => {
        audio.pause();
        audio.currentTime = 0;

        buttonsContainer.style.display = 'none';
        thankYouMessage.style.display = 'block';
        resetButton.style.display = 'block';
    });

    resetButton.addEventListener('click', () => {
        location.reload();
    });
});