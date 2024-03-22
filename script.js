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
