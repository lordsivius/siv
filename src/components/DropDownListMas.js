import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле

      const tastDate = [
        {
          id: 1, // добавили id
          date: ' Тест 1',
        },
        {
          id: 2,
          date: 'Тест 2',
        },
        {
          id: 3,
          date: 'Тест 3',
        },
        {
          id: 4,
          date: 'Тест 4',
        }
      ];
   
    
 class DDLTesl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Выберите значение'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Выбраннлое значение: ' + this.state.value);
    event.preventDefault();
  }

  render() {

    const newsTemplate = this.props.data.map(function(item) {
            return (
            <option key={item.id} value={item.date}>{item.date}</option>  // в кей пишем идентефикатор. затем проходим по массиву
            )
          })

    return (
     <form onSubmit={this.handleSubmit}>
        <label>
          Выберите ваш любимый вкус:
          <select value={this.state.value} onChange={this.handleChange}>
            {newsTemplate}   {/* вызываем функцию которая описывает нащи элементы */}
          </select>
        </label>
        <input type="submit" value="Отправить" />
      </form>  

    );
  }
}

const DropDownListMas = () => {
        return (
          <React.Fragment>
            <DDLTesl data={tastDate}/>
          </React.Fragment>
        )
      }

      export { DropDownListMas }