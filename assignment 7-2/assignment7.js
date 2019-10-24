const listItems = document.querySelector("#listItems");

        for (let questionItem in activeQuestions){
            console.log(questionItem);
            console.log(activeQuestions[questionItem]);
        
        const currentQuestionHeader = document.querySelector("#currentQuestionHeader");


        const currentQuestion = 1;
        const combinedString = `I am a string and ${currentQuestion}`;
        const currentQuestionData = activeQuestions[currentQuestion - 1];

        const list= document.createElement("list");
        listItems.appendChild(list);

        const label = document.createElement("label");
        list.appendChild(label);

        const input = document.createElement("input");
        label.appendChild(input);
        label.setAttribute("type", "radio");
        label.setAttribute("name", "options");

        const text = document.createTextNode("Your text");
        label.appendChild(text);
    }