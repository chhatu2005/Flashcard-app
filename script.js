
var flashcards = [
    {
        question: "What is HTML ?",
        answer: "HTML stands for HyperText Markup Language"
    },
    {
        question: "What is CSS ?",
        answer: "CSS is used to style and design web pages"
    },
    {
        question: "What is JavaScript ?",
        answer: "JavaScript adds interactivity to web pages"
    },
    {
        question: "What is React ?",
        answer: "React is a JavaScript library for building user interfaces"
    },
    {
        question: "What is Node.js ?",
        answer: "Node.js runs JavaScript outside the browser"
    },
    {
        question: "What is a variable ?",
        answer: "A variable stores data that can be used in a program"
    },
    {
        question: "What is an array ?",
        answer: "An array stores multiple values in a single variable"
    },
    {
        question: "What is a function ?",
        answer: "A function is a reusable block of code"
    },
    {
        question: "What is the DOM ?",
        answer: "DOM represents the structure of an HTML document"
    },
    {
        question: "What is responsive design ?",
        answer: "Responsive design adapts a website to different screen sizes"
    }
];

var currentIndex = 0;

function displayCard() {
    var card = flashcards[currentIndex]

    document.getElementById("question").innerHTML = card.question
    document.getElementById("answer").innerHTML = card.answer
    document.getElementById("cardNumber").innerHTML = "Card " + (currentIndex + 1) + " of " + flashcards.length

    var progress = ((currentIndex + 1) / flashcards.length) * 100

    document.getElementById("progressFill").style.width = progress + "%"
    document.getElementById("progressPercent").innerHTML = Math.round(progress) + "%"
    document.getElementById("prevBtn").disabled = currentIndex === 0
    document.getElementById("nextBtn").disabled = currentIndex === flashcards.length - 1
    document.getElementById("flashcard").classList.remove("flipped")
}

function flipCard() {
    document.getElementById("flashcard").classList.toggle("flipped");
}

function nextCard() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++
        displayCard()
    }
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--
        displayCard()
    }
}

displayCard()
