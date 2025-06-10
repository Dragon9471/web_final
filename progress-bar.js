const totalSeconds = 60; // 倒數總秒數
let elapsed = 0;
const progressBar = document.getElementById('progress-bar-inner');
const progressLabel = document.getElementById('progress-label');
const progressBall = document.getElementById('progress-ball');

function updateProgress() {
    elapsed++;
    let left = totalSeconds - elapsed;
    if (left < 0) left = 0;
    const percent = Math.min((elapsed / totalSeconds), 1);

    progressBar.style.width = (percent * 100) + "%";

    const barOuter = progressBar.parentElement;
    const barWidth = barOuter.offsetWidth;

    const ballMin = 0;
    const ballMax = barWidth - progressBall.offsetWidth + 6; // +6微調右邊不超出

    progressBall.style.left = (ballMin + percent * (ballMax - ballMin)) + "px";

    progressBall.style.transform = `translate(-45%, -50%) rotate(${360 * percent * 2}deg)`;


    progressLabel.textContent = "Website will be available in " + left + " seconds...";

    if (elapsed < totalSeconds) {
        setTimeout(updateProgress, 1000);
    } else {
        progressLabel.textContent = "Website is now available! (Just kidding :p)";
        progressBar.style.width = "100%";
        progressBall.style.left = ballMax + "px";
        progressBall.style.transform = `translate(-45%, -50%) rotate(0deg)`;
    }
}

setTimeout(updateProgress, 300);
