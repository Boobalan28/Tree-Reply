const messageInput = document.querySelector('#text');
const reply = document.querySelectorAll('#btn');
const message = document.querySelector('#msg');


function onclick(e) {
    if (messageInput.value === '') {
        alert('Input field is empty');
    } else {
        var msg = document.createElement('h1');
        msg.innerHTML = `${messageInput.value} <button id='btn' onclick='Reply()'>Reply</button>`;
        message.appendChild(msg)
        messageInput.value = '';
    }
}

function Reply() {
    if (messageInput.value === '') {
        alert('Input field is empty');
    } else {
        onclick();
    }
}
for (var i = 0; i < reply.length; i++) {
    reply[i].addEventListener('click', Reply)
}


