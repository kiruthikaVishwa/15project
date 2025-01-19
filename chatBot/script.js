// script.js

const chatInput = document.querySelector('.chat-input textarea');
const sendChatBtn = document.querySelector('#sendBTN');
const chatbox = document.querySelector('.chatbox');

const createChatLi = (message, className) => {
    const chatLi = document.createElement('li');
    chatLi.classList.add('chat', className);
    chatLi.innerHTML = `<p>${message}</p>`;
    return chatLi;
};

const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, 'chat-outgoing'));
    chatInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = "I'm just a bot, but I can help!";
        chatbox.appendChild(createChatLi(botResponse, 'chat-incoming'));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 1000);
};

sendChatBtn.addEventListener('click', handleChat);

chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleChat();
    }
});

function cancel() {
    const chatbot = document.querySelector('.chatBot');
    chatbot.style.display = 'none';
}