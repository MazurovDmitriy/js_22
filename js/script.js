'use strict';

let quest = {
  headerText: 'Тест по программированию',
  buttonText: 'Проверить мои результаты',
  questions: [
  { 
    title: 'Вопрос №1',
    options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
    trueIndex: 0
  },
  { 
    title: 'Вопрос №2',
    options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
    trueIndex: 1
  },
  { 
    title: 'Вопрос №3',
    options: ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'],
    trueIndex: 2
  }
  ]
};

localStorage.setItem('quest', JSON.stringify(quest));
let questObject = JSON.parse(localStorage.getItem('quest'));

let questContainer = document.getElementById("quest-container");
let html = `<form class="quest">
      <h3 class="quest__header">${questObject.headerText}</h3>
      <ol class="quest__list">`;

for ( let i = 0; i < questObject.questions.length; i++ ) {
  html += `<li class="quest__item">
          <h4 class="quest__item-header">${questObject.questions[i].title}</h4>`;
  for ( let k = 0; k < questObject.questions[i].options.length; k++ ) { 
    html += `<label class="quest__item-option">
            <input type="radio" name="option_${i}">
            <span>${questObject.questions[i].options[k]}</span></label>`;
  } 
  html += `</li>`;
} 
html += `</ol>
        <input type="button" value="${questObject.buttonText}" class="quest__button">
      </form>`;
questContainer.innerHTML = html;

//

$('.quest__button').on('click', function() {
  const questionsCount = questObject.questions.length;
  let trueAnswers = 0;
  let truePercents = 0;
  let html = '';
  for(let i = 0; i < questObject.questions.length; i++) {
    let value = $('input[name=option_' + i + ']:checked + span').first().text();
    if(value == questObject.questions[i].options[questObject.questions[i].trueIndex]) {
      trueAnswers++;
    }
  }
  if(trueAnswers > 0) {
    truePercents = parseInt((100/questionsCount)*trueAnswers);
  }
  html += '<p>Правильных ответов: ' + trueAnswers + '</p>';
  html += '<p>Баллы: ' + truePercents + ' из 100</p>';
  showPopup(html);
  $('form').get(0).reset();

  console.log('truePercents', truePercents);
  console.log('trueAnswers', trueAnswers);
});

$('.popup').on('click', function() {
  $(this).fadeOut(300);
});

$('.popup__window').on('click', function(event) {
  event.stopPropagation();
});

let  showPopup = (html) => {
  $('.popup__window').html(html);
  $('.popup').fadeIn(300);
}

