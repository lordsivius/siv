import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
//import 'App.css'



const e = React.createElement;
 

class ClikButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
     return (
    <div className='div_oferflow' >
      <p>'Возврашаем значение которое нам нужно ( не интуитивно понятные механики ).'</p>
      <p>'Возврашаем значение #2 которое нам нужно ( не интуитивно понятные механики ).'</p>
      <p>'Возврашаем значение #3 которое нам нужно ( не интуитивно понятные механики ).'</p>
      </div>
     )
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

export { ClikButton } 