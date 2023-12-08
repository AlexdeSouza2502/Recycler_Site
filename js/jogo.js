
        var questions = [
            {
                question: "Qual destes materiais é reciclável?",
                options: ["Vidro", "Isopor", "Papel higiênico", "Papel alumínio"],
                answer: 1
            },
            {
                question: "Qual destes objetos não deve ser descartado na lixeira comum?",
                options: ["Lata de refrigerante", "Garrafa plástica", "Caixa de papelão", "Pilha usada"],
                answer: 4
            },
            {
                question: "Qual é a cor da lixeira para descarte de papel?",
                options: ["Azul", "Amarela", "Verde", "Vermelha"],
                answer: 3
            },
            {
                question: "O que significa a sigla PET na reciclagem?",
                options: ["Polietileno de baixa densidade", "Polipropileno", "Polietileno tereftalato", "Poliestireno"],
                answer: 3
            }
        ];

        var currentQuestion = 0;
        var score = 0;

        function loadQuestion() {
            var questionElem = document.getElementById('question');
            var optionsElem = document.getElementsByClassName('option');
            var resultElem = document.getElementById('result');
            var submitBtn = document.getElementById('submit-btn');

            questionElem.innerHTML = questions[currentQuestion].question;

            for (var i = 0; i < optionsElem.length; i++) {
                optionsElem[i].innerHTML = questions[currentQuestion].options[i];
            }

            resultElem.innerHTML = "";
            submitBtn.disabled = false;
        }

        function checkAnswer() {
            var selectedOption = document.querySelector('input[name="answer"]:checked');
            var resultElem = document.getElementById('result');
            var submitBtn = document.getElementById('submit-btn');

            if (selectedOption) {
                var selectedAnswer = parseInt(selectedOption.value);

                if (selectedAnswer === questions[currentQuestion].answer) {
                    score++;
                    resultElem.innerHTML = "Resposta correta!";
                } else {
                    resultElem.innerHTML = "Resposta incorreta!";
                }

                submitBtn.disabled = true;
                currentQuestion++;

                if (currentQuestion < questions.length) {
                    setTimeout(loadQuestion, 1000);
                } else {
                    resultElem.innerHTML = "Quiz finalizado! Pontuação: " + score + "/" + questions.length;
                }
            }
        }

        // Carrega a primeira pergunta ao iniciar o jogo
        window.onload = loadQuestion;
    