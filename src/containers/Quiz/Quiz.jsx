import React, { Component } from 'react';
import classes from './Quiz.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        id: 1,
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        answers: [
          { text: 'Черный', id: 1 },
          { text: 'Синий', id: 2 },
          { text: 'Красный', id: 3 },
          { text: 'Белый', id: 4 }
        ]
      },
      {
        id: 2,
        question: 'В чем сила, брат?',
        rightAnswerId: 3,
        answers: [
          { text: 'В силе', id: 1 },
          { text: 'В ньютонах', id: 2 },
          { text: 'В правде', id: 3 },
          { text: 'В брате', id: 4 }
        ]
      },
      {
        id: 3,
        question: 'Что у меня в кармане?',
        rightAnswerId: 1,
        answers: [
          { text: 'Кольцо', id: 1 },
          { text: 'Ничего', id: 2 },
          { text: 'Кости гоблинсов', id: 3 },
          { text: 'Что в твоих грязных кармансах?!', id: 4 }
        ]
      }
    ]
  };

  onAnswerClickHandler = answerId => {
    console.log(answerId);

    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы.</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
