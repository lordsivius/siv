import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле


class RadioButt extends React.Component {
    state = {
      selected: 'radio-1'
    };
    
    render () {
      return (
        <div>
          <input type='radio' id='radio-1' name='myRadio' value='radio-1'
            checked={this.state.selected === 'radio-1'} onChange={(e) => this.setState({ selected: e.target.value })} /> Текст кнопки 1
          <br />
          <input type='radio' id='radio-2' name='myRadio' value='radio-2' 
            checked={this.state.selected === 'radio-2'} onChange={(e) => this.setState({ selected: e.target.value })} />Текст кнопки 2
                 <br />
          <input type='radio' id='radio-3' name='myRadio' value='radio-3' 
            checked={this.state.selected === 'radio-3'} 
            onChange={(e) => this.setState({ selected: e.target.value })}>   
            </input> Текст кнопки 3
          <p> а сдесь просто тексn.  </p>  
        </div>
      );
    }
  };



export { RadioButt } 