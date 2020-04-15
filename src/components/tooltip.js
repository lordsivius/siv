import React from 'react' // мы обязаны импортировать необходимые пакеты в каждом файле
import PropTypes from 'prop-types' // у Article это react и prop-types
import ReactDOM from "react-dom"

class Tooltip extends React.Component {
    constructor (props) {
    super (props)
    this.toggle = this.toggle.bind(this)
    this.state = {opacity:false}
    }
    
    toggle () {
     // const tooltipNode = ReactDOM.findDomMode(this)
      const { opacity,} = this.props
    this.setState ({
    opacity: !this.state.opacity,
 
    })
    }
    
    render () {
    const style = {
    zIndex: (this.state.opacity) ? 1000 : -1000,
    opacity: +this.state.opacity,  // перрвод в цифру
    top: (this.state.opacity || 0) + 20,
    left: (this.state.opacity || 0) - 20,
    color:  "blue",
   
    }
    return (
    <div style={{display: "inline"}}>
    <span style={{color: "blue"}}
    onMouseEnter = {this.toggle}
    onMouseOut={this.toggle} >
    {this.props.children}
    </span> 
    <div  style={style}> 
    {this.props.text}
    </div>
    </div>
    )
    }
    }

    class TooltipText extends React.Component {
        render() {

            return (
                <div>  Ткст служит для о тработки всплывающей подсказки   <Tooltip  text="Всплывающая подсказка" > Наведи сюда> </Tooltip></div>
            )
        }
    }



    export { TooltipText, Tooltip } 