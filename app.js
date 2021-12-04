const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<i class="fas fa-comments" style="color: rgba(108,160,255,300); font-size: 30px"></i>',
    isNotClicked: '<i class="fas fa-comments" style="color: rgba(108,160,255,300); font-size: 30px "></i>'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);