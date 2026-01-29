document.addEventListener('DOMContentLoaded', () => {
    let quizData = null;
    fetch('quiz-data.json')
        .then(response => response.json())
        .then(data => {
            quizData = data;
            initSections();
        })
        .catch(error => console.error('Error loading quiz data:', error));

    function initSections() {
        const sections = document.querySelectorAll(".section")
        sections.forEach((section) => {
            section.addEventListener("click", () => {
                let sectionId = parseInt(section.getAttribute("data-section"));
                console.log("Starting quiz for section:", sectionId);
                startQuiz(sectionId);
            })
        })
    }
    function startQuiz(index) {
        const currentQuestions = quizData.sections[index].questions;
        let currentQuestionsIndex = 0;
        let score = 0;
        let answerSelected = false;
        console.log(currentQuestions);

        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("question-container").style.display = "block";

        showQuestion();


        function showQuestion() {
            const question = currentQuestions[currentQuestionsIndex];
            const questionElement = document.getElementById("question");
            const optionsElement = document.getElementById("options");

            questionElement.textContent = question.question;
            optionsElement.innerHTML = ""

            if (question.questionType === "mcq") {
                question.options.forEach((option) => {
                    const optionElement = document.createElement("div");
                    optionElement.textContent = option;
                    optionElement.addEventListener("click", () => {
                        if (!answerSelected) {
                            answerSelected = true;
                            optionElement.classList.add("selected");
                            checkAnswer(option, question.answer);
                            console.log("Selected option:", option);
                        }
                    });
                    optionsElement.appendChild(optionElement);
                })
            }
            else {
                const inputElement = document.createElement("input");
                inputElement.type = question.questionType === "number" ? "number" : "text";
                const submitButton = document.createElement("button");
                submitButton.textContent = "Submit";
                submitButton.classList.add("submit-answer");
                submitButton.onclick = () => {
                    if (!answerSelected) {
                        answerSelected = true;
                        const givenAnswer = inputElement.value.toString().trim();
                        checkAnswer(givenAnswer, question.answer.toString().trim());
                        console.log("Submitted answer:", givenAnswer);
                    }
                }
                optionsElement.appendChild(inputElement);
                optionsElement.appendChild(submitButton);
            }
            function checkAnswer(givenAnswer, correctAnswer) {
                const feedbackElement = document.createElement("div");
                feedbackElement.id = "feedback";
                if (givenAnswer === correctAnswer || correctAnswer.toString().toLowerCase() === givenAnswer.toString().toLowerCase()) {
                    score++;
                    feedbackElement.textContent = "Correct!";
                    feedbackElement.style.color = "green";
                } else {
                    feedbackElement.textContent = `Wrong! The correct answer was: ${correctAnswer}`;
                    feedbackElement.style.color = "red";
                }
                const optionsElement = document.getElementById("options");
                optionsElement.appendChild(feedbackElement);
                updateScore();
            }

            function updateScore() {
                const scoreElement = document.getElementById("score");
                scoreElement.textContent = `Score: ${score}`;
            }

            document.getElementById("next-button").addEventListener("click", () => {
                if (currentQuestionsIndex >= currentQuestions.length) {
                    console.log("Quiz finished! Your score:", score);
                    endQuiz();
                } else {
                    answerSelected = false;
                    currentQuestionsIndex++;
                    showQuestion();
                }
            })

            function endQuiz() {
                questionContainer.innerHTML = `
            <h2>Quiz Finished!</h2>
            <p>Your final score is: ${score} out of ${currentQuestions.length}</p>
            <button id="home-button">Go To Home</button>
            `;
                document.getElementById("home-button").addEventListener("click", () => {
                    questionContainer.style.display = "grid";
                    questionContainer.style.display = "none";
                });
            }
        }
    }
});