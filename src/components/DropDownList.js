import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле

class DropDownList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: "Значение"};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});  // эвент на выбор значение
    }
  
    handleSubmit(event) {
      alert('Выбранное Значние: ' + this.state.value);
      event.preventDefault();   //алоертом выводим значени, для примера
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Выберите значение:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="znac1">Значение 1</option>
              <option value="znac2">Значение 2</option>
              <option value="znac3">Значение 3</option>
              <option value="znac4">Значение 4</option>
            </select>
          </label>
          <input type="submit" value="Отправить" />
        </form>
      );
    }
  }


export { DropDownList }