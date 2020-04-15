import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types
import { Article } from './Article' // идти в components не нужно, так как мы уже в этой директории

class Add extends React.Component {
    state = {
      nomer: '',
      name: '',
      text: '',
      bigText: '',
      agree: false, // новое значение состояния - agree (булево)
    }
  
    onBtnClickHandler = (e) => {
    e.preventDefault()
    const { nomer, name, text , bigText } = this.state  //массив элементы которого мы будем выводить
    //alert(nomer +'\n' + name + '\n' + text) // \n = перенос строки
    this.props.onAddNews({
      id: +new Date(),
      nomer,
      author: name, 
      text,
      bigText,
      })
  }
  
  handleChange = (e) => {
          const { id, value } = e.currentTarget
          this.setState({ [id]: value })
        }
  
    handleCheckboxChange = (e) => { // обработчик кликов по чекбоксу
      // чтобы установить true/false считываем свойство checked
      this.setState({ agree: e.currentTarget.checked })
    }  
  
  // для отграничения по заполнения всех переменных
    validate = () => {
      const { nomer, name, text, agree } = this.state
      if (nomer.trim() && name.trim() && text.trim() && agree) 
      {
        return true
      }
      return false
    }
  
    render() {
      const {nomer , name, text, bigText } = this.state
      return (
        <form className='add'>
          <input
            id='nomer'
            type='nomer'
            onChange={this.handleChange}
            className='add__nomer'
            placeholder='номер записи'
            value={nomer}
          />
          <input
          id="name"
            type='text'
            onChange={this.handleChange}
            className='add__author'
            placeholder='Ваше имя'
            value={name}
          />
          <textarea
            id='text'
            onChange={this.handleChange}
            className='add__text'
            placeholder='Текст новости'
            value={text}
          ></textarea>
          <textarea
            id='bigText'
            onChange={this.handleChange}
            className='add__bigtext'
            placeholder='Расширенный текст '
            value={bigText}
          ></textarea>
          <label className='add__checkrule'>
            <input type='checkbox' onChange={this.handleCheckboxChange} /> Я согласен с правилами
          </label>
          {/* кнопке добавили disabled равный (НЕ agree) */}
          <button
            className='add__btn'
            onClick={this.onBtnClickHandler}
            disabled={!this.validate()}>
           Добавить
          </button>
        </form>
      )
    }
  }
  Add.propTypes = {
    onAddNews: PropTypes.func.isRequired,
  }
  export { Add }