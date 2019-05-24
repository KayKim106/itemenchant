import React, { Component } from 'react'

class Card extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:'',
        }
        this.myRef = React.createRef()
    }


    componentWillMount(){

        // console.log('Component Will mount')

    }

    componentDidMount(){

        // console.log('Component Did Mount')

    }

    componentWillReceiveProps(nextProps, nextContext) {

        console.log('component Will Receive Props')

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        return true;
    }

    componentWillUpdate( nextProps, nextState){


        // console.log('component WIll Update')
        // console.log('next Props : ' + nextProps)
        // console.log('next state : ' + nextState.name)

    }

    componentDidUpdate(prevProps, prevState, snapshot){

        // console.log('component Did Update')
        //
        // console.log('Prev Props : ' + prevProps)
        // console.log('Prev state : ' + prevState.name,'current State : ' + this.state.name)

        // console.log(this.myRef.current.value);

    }

    componentWillUnmount() {


    }

    onNameChange=(event)=>{
        // console.log('on Name Change Clicked , and this is the input value : ',event.target.value);

        let name = event.target.value;

        this.setState({ name })

    };



    

    render(){

        // console.log("Component render");
        return(
            <div className="cardWrapper">
               <ul>
                   <li>Item Name : Item 1</li>
                   <li>Item Current Level : { this.props.itemLevel }</li>
                   <li>Item Enhance percentage : {this.props.itemEnhancePercentage}</li>
               </ul>

            <button onClick = {this.props.onEnchantBtnClicked}>Enchant</button>

            {/*<input type="text" value={this.state.name} ref={this.myRef} onChange={this.onNameChange}/>*/}
            </div>
        )
    }
}
export default Card