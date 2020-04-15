import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types
import { Article } from './Article' // идти в components не нужно, так как мы уже в этой директории




class News extends React.Component {

    state = {
      counter: 0, // добавили свойство counter (счетчик)
    }
  
    handleCounter = () => { // добавили новый метод
      this.setState({ counter: ++this.state.counter })// в котором увеличиваем счетчик
    }
  
    renderNews = () => {
      const { data } = this.props
      let newsTemplate = null
  
      if (data.length) {
        newsTemplate = data.map(function(item) {
          return <Article key={item.id} data={item}/>
        })
      } 
      else {
        newsTemplate = <p>К сожалению новостей нет</p>
      }
  
      return newsTemplate
    }
    render() {
      const { data } = this.props // вытащили data
      const { counter } = this.state // вытащили counter
  
      return (
        <div className="news">
          {this.renderNews()}
          {  //добавляем обработчик onClick, что бы код понимал что надо считать по нажаию этой строчки
            data.length ? <strong onClick={this.handleCounter} className={'news__count'}>Всего новостей: {data.length}</strong> : null
          }
          <p>Всего кликов: { counter }</p>
        </div>
      );
    }
   }
  
   News.propTypes = {
    data: PropTypes.array.isRequired // PropTypes (с большой буквы) = библиотека prop-types
  }

  export { News } // именованный экспорт