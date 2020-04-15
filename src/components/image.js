import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types
import image1src from "./img/image1.jpg"
import image2src from "./img/image1.jpg"




class GridComponent extends React.Component {
    render() {
      const { image, link, title, text } = this.props;
      return (
        <div >
  
          <img src={image} alt="pics" width="100px" height="100px"/>
  
          <div >
            <a href={link}>
              <h3>{title}</h3>
              <p>{text}</p>
            </a>
          </div>
  
        </div>
      )
    }
  }
  
  class ImageApp extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        pictures: [
        image1src,
        image2src
        ]
      }
    }
  
    render() {
      const { pictures } = this.state;
      return ( 
        <main>
          <div className="wrapper">
            <div className="home">
              {
                pictures.map((imgSrc, i) => <GridComponent title={`Картинка ${i+1}`} text="Текст ." image={imgSrc}/>)
              }
            </div>
          </div>
        </main>
      );
    }
  }

  export { ImageApp }