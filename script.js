document.querySelector('button').onclick = () =>{
    sendQues();
}

function sendQues() {
    let ques = document.querySelector('input').value;
    let headers = {
        Authorization: "Bearer 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"
    }
    let body = {
        model: "gpt-3.5-turbo",
        messages: [{
            "role": "user",
            "content": ques
        }]
    }
    axios.post('https://api.openai.com/v1/chat/completions', body, {
        headers: headers
    })
    .then(response => {
        let reply = response.data.choices[0].message.content;
        document.querySelector('.reply').textContent = reply;
    });
}