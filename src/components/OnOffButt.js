import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import { Tooltip } from './tooltip';

class OnOffButt extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
  
  //изменение поля ввода текста

// выдаетса алерт с введенным именем (алерт для проверки работоспособности)
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }) ,
      alert('Введенное имя: '+ this.state.isToggleOn ? 'Выключаем' : 'Включаем' )
      );
    }
  
    render() 
  {
      return (
        <Tooltip text = 'Кнопка переключения состояний'>
        <button onClick={this.handleClick}> 
          {this.state.isToggleOn ? 'Позиция ON' : ' Позиция OFF'}
        </button>
        </Tooltip>
      );
    }
  }

  export { OnOffButt } 