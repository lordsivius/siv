import React from 'react';
import ReactDOM from "react-dom"
import { Add } from './components/Add' // ./ = текущая директория,
import { News } from './components/News' // далее мы идем в директорию components и в нужный компонент
//import newsData from './data/newsData' // импорт по дефолту
import { NameButtom } from './components/NameButtom'
import { RadioButt } from './components/RadioButt'
import { OnOffButt } from './components/OnOffButt'
import { ClikButton } from './components/ClikButton'
import { DropDownListMas } from './components/DropDownListMas'
import {ImageApp} from './components/image'
import {TooltipText} from './components/tooltip'
import './App.css'


class App extends React.Component {
  state = {
    news: null, // было newsData
    isLoading: false, // статус для манипуляций "прелоадером" ("Загружаю..." в нашем случае)
  }
  
  handleAddNews = (data) => {
    console.log('я вызвана из Add, но имею доступ к this.state у App!', this.state) //оставил чтобы следить в консоле
    // сначала мы формируем массив, на основе
    // всего того, что уже было в новостях
    // и кладем это все в новый массив + 
    // новую новость кладем в начало массива
    const nextNews = [data, ...this.state.news]
    // затем обновляем новый массив новостей в this.state.news
    this.setState({ news: nextNews })
  }
  
  componentDidMount() {
    // ставим isLoading true, 
    // то есть запрос за даннмыи начался
    // фактически он начнется в строке с fetch,
    // но на переход от одной строки к другой
    // пройдут миллисекунды
    this.setState({ isLoading: true })
    fetch('http://localhost:3000/data/newsData.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTimeout(() => { // добавили задержку
          this.setState({ isLoading: false, news: data })
        }, 1000) // в три секунды
        // запрос завершился успешно,
        // делаем isLoading: false
        // в news кладем пришедшие данные
      })
  }

  render() {
    const { news, isLoading } = this.state // все необходимое взяли из state
    return (
      <React.Fragment>
        <ImageApp />
        <TooltipText />
        <strong>Новые компоненты. каждый компонент отдельный фаил </strong> 
        <p></p>
        <strong>Поле с вводом значени + кнопка с алертом этого значения</strong>
        <NameButtom />
        <p></p>
        <strong>3 кнопки с выбором одной из них</strong>
        <RadioButt></RadioButt>
        <p></p>
        <strong>Кнопка с изменяюшимся состоянием и выводом алерта </strong>
        <OnOffButt></OnOffButt>
        <p></p>
        <strong>Кнопка выводящая надпись </strong>
        <ClikButton/>
        <br></br>
        <p>Выпадающий список </p>
        <DropDownListMas />
        <br></br>
        <p>Формы могут быть полезны в будушем</p>
        <Add onAddNews={this.handleAddNews} />
        <h3>Новости</h3>
        {isLoading && <p>Загружаю...</p>}
        {Array.isArray(news) && <News data={news} />}

      </React.Fragment>
    )
  }
}

export default App