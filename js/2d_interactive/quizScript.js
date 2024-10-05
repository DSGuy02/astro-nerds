const questions = {
    beginner: [
        {
            question: "What is an asteroid?",
            answers: [
                { text: "A smaller piece of rock or ice that enters the Earth's atmosphere.", correct: false },
                { text: "A larger rock typically found in the stretch of space between Mars and Jupiter.", correct: true },
                { text: "An irregular ball of icy slush, frozen gases, and dark minerals found in the darkest, coldest areas of our solar system", correct: false },
                { text: "A smaller piece of rock or ice that survives entry into Earth's atmosphere and touches down.", correct: false }
            ]
        },
        {
            question: "What is a comet made of ?",
            answers: [
                { text: "Ice made from frozen gases, water and dust.", correct: true },
                { text: "Moon dust.", correct: false },
                { text: "Fire and ice.", correct: false },
            ]
        },
        {
            question: "How many asteroids do scientists think exist in the asteroid belt?",
            answers: [
                { text: "Dozens", correct: false },
                { text: "Hundreds", correct: false },
                { text: "Millions", correct: true },
                { text: "Billions", correct: false }
            ]
        },
        {
            question: "What is the definition of a Near-Earth Object (NEO) ?",
            answers: [
                { text: "Comets and asteroids nudged by gravitational attraction into orbits that allow them to enter Earth's neighborhood.", correct: true },
                { text: "All celestial objects within the solar system.", correct: false },
                { text: "All man-made satellites orbiting the Earth.", correct: false },
                { text: "Any objects that have directly impacted Earth.", correct: false }
            ]
        },
        {
            question: "Meteors are bright streaks of light and smoke that are heated by:",
            answers: [
                { text: "Air condensation.", correct: false },
                { text: "Air friction.", correct: false },
                { text: "Air compression.", correct: false },
                { text: "Both B and C.", correct: true }
            ]
        }
    ],
    intermediate: [
        {
            question: "A shooting star is comes from which of the following ?",
            answers: [
                { text: "Asteroid", correct: false },
                { text: "Comet", correct: false },
                { text: "Meteoroid", correct: true },
                { text: "None of the above.", correct: false }
            ]
        },
        {
            question: "How do scientists calculate the likelihood of a NEO colliding with Earth?",
            answers: [
                { text: "By monitoring the object's brightness in the sky", correct: false },
		{ text: "By plotting the NEO's orbital path and analyzing gravitational influences", correct: true },
                { text: "By using the object's size and speed", correct: false }
            ]
        },
	{
            question: "What is the difference between meteor and meteoroid?",
            answers: [
                { text: "A meteor vaporizes before it hits the earth unlike Meteorite", correct: true },
                { text: "A meteorite vaporizes before it hits the earth unlike Meteor", correct: false },
                { text: "There is no difference", correct: false },
                { text: "A meteorite comes from Asteroid while Meteor comes from Meteoroid.", correct: false }
            ]
        },
	{
            question: "How are NEOs classified by their orbits (Apollo, Amor, Atira)?",
            answers: [
                { text: "Apollo asteroids cross Earth's orbit, Amor asteroids approach but don't cross, Atira asteroids stay inside Earth's orbit", correct: true },
                { text: "Apollo asteroids orbit outside of Mars, Amor asteroids orbit between Earth and Mars, Atira asteroids orbit inside Earth's atmosphere", correct: false },
                { text: "Apollo asteroids orbit only between Jupiter and Saturn, Amor asteroids orbit near Mars, Atira asteroids orbit the Sun", correct: false },
                { text: "Apollo asteroids are spherical, Amor asteroids are irregularly shaped, Atira asteroids are the largest", correct: false }
            ]
        },
	{
            question: "Why does NASA track NEO?",
            answers: [
                { text: "To collect samples for research purposes.", correct: false },
                { text: "To find possible new planets for human colonization.", correct: false },
                { text: "To establish communication with alien civilizations.", correct: false },
                { text: "To understand their compositions, structures, sizes, and potential impact threats to Earth.", correct: true }
            ]
        },
	
    ],
    advanced: [
        {
            question: "How does the Yarkovsky effect influence the orbit of asteroids?",
            answers: [
                { text: "It slows down an asteroid as it moves through Earth's atmosphere", correct: false },
                { text: "It causes gradual changes in an asteroid's orbit due to the way it absorbs and emits heat", correct: false },
                { text: "It speeds up an asteroid when it is close to the Sun", correct: true },
                { text: "It deflects asteroids away from planets using the Sun's radiation", correct: false }
            ]
        },
        {
            question: "What was the Tunguska event and why is it significant in studying NEOs?",
            answers: [
                { text: "A meteorite exploded over Siberia in 1908, providing insight into airburst impacts", correct: true },
                { text: "It was the first recorded asteroid impact in the ocean", correct: false },
                { text: "It was the largest asteroid impact to hit North America", correct: false },
                { text: "The event marks the discovery of the first NEO", correct: false }
            ]
        },
        {
            question: "What methods are used to deflect or mitigate the threat of a NEO collision with Earth?",
            answers: [
                { text: "Nuclear explosion near the object", correct: false },
                { text: "Kinetic impactor (hitting the object with a spacecraft)", correct: false },
                { text: "Gravity tractor (using a spacecraft's gravity to alter its path)", correct: false },
                { text: "All of the above", correct: true }
            ]
        },
	{
            question: "What role does the European Space Agency (ESA) play in monitoring near-Earth objects?",
            answers: [
                { text: "It leads all global efforts in asteroid mining", correct: false },
                { text: "It is responsible for detecting and tracking NEOs through its Space Situational Awareness (SSA) program", correct: true },
                { text: "It manages a network of satellites that predict asteroid impacts", correct: false },
                { text: "It is responsible for analyzing all asteroid samples brought back to Earth", correct: false }
            ]
        },
	{
            question: "What is the primary goal of NASA's DART (Double Asteroid Redirection Test) mission?",
            answers: [
                { text: "To destroy a potentially hazardous asteroid", correct: false },
                { text: "To redirect the path of an asteroid by crashing a spacecraft into it", correct: true },
                { text: "To land astronauts on an asteroid", correct: false },
                { text: "To retrieve a sample from a near-Earth asteroid", correct: false }
            ]
        },
    ]
};


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quizMenu= document.getElementById("quiz-menu");
const quizContainer = document.getElementById("quiz-container");

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = parseInt(sessionStorage.getItem('score')) || 0;

document.getElementById("beginner-level").addEventListener("click", () => startQuiz("beginner"));
document.getElementById("intermediate-level").addEventListener("click", () => startQuiz("intermediate"));
document.getElementById("advanced-level").addEventListener("click", () => startQuiz("advanced"));

function startQuiz(level) {
    quizMenu.style.display = "none";
    quizContainer.style.display = "block"; 

    currentQuestions = questions[level]; 
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion(); 
}

// Function to handle text-to-speech
function speakText(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = 'en-US'; // Set the language to English
    speech.pitch = 1; // Set pitch (1 is default, higher is more high-pitched)
    speech.rate = 1; // Set the rate (speed) of speech (1 is default)
    speech.volume = 1; // Set the volume level (1 is max)
    window.speechSynthesis.speak(speech); // Trigger the speech synthesis
}

function showQuestion() {
    resetState();
    let currentQuestion = currentQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    speakText(questionNo + ". " + currentQuestion.question); 

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        speakText(answer.text);
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score += 5; 
        sessionStorage.setItem('score', score);
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    const totalQuestions = currentQuestions.length;
    const totalScore = totalQuestions * 5;
    questionElement.innerHTML = `You scored ${score}/${totalScore} points!`; 
    nextButton.innerHTML = "Back to Quiz Menu"; 
    nextButton.style.display = "block"; 
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showScore(); 
    }
}
function displayCurrentDate() {
    const dateElement = document.getElementById("quiz-date");

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);

    // Display the date in the quiz-date div
    dateElement.innerHTML = `Today's Quiz: ${currentDate}`;
}

window.onload = displayCurrentDate;

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuestions.length) {
        handleNextButton();
    } else {
        quizContainer.style.display = "none"; 
        quizMenu.style.display = "block";
        sessionStorage.setItem('score', score); 
    }
});

