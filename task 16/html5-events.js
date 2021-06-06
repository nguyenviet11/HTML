function setup() {
    var textInput;
    textInput = document.getElementById('message');
    textInput.focus();
}

window.addEventListener('DOMContentLoaded', setup , false);

window.addEventListener('beforeunload', function (event){
    var messgage = 'You have changes that have not been saved';
    (event || window.event).returnValue = messgage;
    return messgage;
})