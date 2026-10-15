
const quiz = document.getElementById("quiz");
const resultat = document.getElementById("resultat");

quiz.addEventListener("submit", function (event) {
    event.preventDefault();

    const bonnesReponses = {
        q1: "b",
        q2: "c",
        q3: "a",
        q4: "b",
        q5: "c"
    };

    let score = 0;
    let questionsSansReponse = 0;

    for (let question in bonnesReponses) {
        const reponse = quiz.querySelector(
            'input[name="' + question + '"]:checked'
        );

        if (!reponse) {
            questionsSansReponse++;
        } else if (reponse.value === bonnesReponses[question]) {
            score++;
        }
    }

    if (questionsSansReponse > 0) {
        resultat.textContent =
            "Réponds à toutes les questions avant de vérifier !";
        return;
    }

    let message = "";

    if (score === 5) {
        message = "Incroyable ! Tu es un champion de Rocket League !";
    } else if (score >= 3) {
        message = "Bien joué ! Tu connais bien Rocket League !";
    } else {
        message = "Continue à t'entraîner, tu vas progresser !";
    }

    resultat.textContent =
        "Ton score : " + score + "/5. " + message;
});

quiz.addEventListener("reset", function () {
    resultat.textContent = "";
});
