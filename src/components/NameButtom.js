import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле


class NameButtom extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  //изменение поля ввода текста
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  // выдаетса алерт с введенным именем (алерт для проверки работоспособности)
    handleSubmit(event) {
      alert('Введенное имя: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export { NameButtom }