let currentQuiz = 0;

function showQuiz(idx) {
    document.getElementById("quiz-result").textContent = "";
    document.getElementById("next-question").style.display = "none";
    const data = quizData[idx];
    document.getElementById("quiz-question").textContent = data.question;
    document.getElementById("quiz-options").innerHTML = "";
    data.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => {
            if(opt === data.answer){
                document.getElementById("quiz-result").textContent = "Correct!";
            } else {
                document.getElementById("quiz-result").textContent = "Wrong! The answer is " + data.answer + ".";
            }
            document.getElementById("next-question").style.display = "inline-block";
        }
        btn.style.margin = "8px";
        document.getElementById("quiz-options").appendChild(btn);
    });
}

document.getElementById("next-question").onclick = function() {
    currentQuiz++;
    if(currentQuiz >= quizData.length) currentQuiz = 0;
    showQuiz(currentQuiz);
};

showQuiz(currentQuiz);
