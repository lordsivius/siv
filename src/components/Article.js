import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types


class Article extends React.Component {
    // указываем начльное состония. нужно чтобы потмо его менять
    state = {
      visible: false, // определили начальное состояние
    }
  
    handleReadMoreClck = (e) => { // добавили метод обработки onClick
      e.preventDefault()
      this.setState({ visible: true })
    }
    
    render() {
      const { nomer, author, text, bigText} = this.props.data  // объявляем массив записей , должно соот ветсовать то что выводим
      const { visible } = this.state // вытащили visible из this.state иначе его не видит никто и не меняет
      return (
        <div className="article">
          <p className='news__nomer'><strong>запись № </strong>{nomer} </p>
          <p className="news__author">{author}:</p>
          <p className="news__text">{text}</p>
          { /* если не visible, то показывай   + добавили onClick   как обраюлтчик нажатия. не будет обработчика не будет и обработки нажатия*/
            !visible && <a onClick={this.handleReadMoreClck} href="#readmore" className='news__readmore'>Подробнее</a>
          }
          { /* если visible, то показывай */
            visible && <p className='news__big-text'>{bigText}</p>
          }
        </div>
      )
    }
  }
  Article.propTypes = {
    data: PropTypes.shape({
      nomer: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      bigText: PropTypes.string.isRequired
    })
  }

  export { Article } // именованный экспорт