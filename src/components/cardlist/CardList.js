import React, { Component } from 'react'

import Card from '../card/Card'

class CardList extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:'',
            itemLevel:1,
            itemEnhancePercentage:100,
            id:'1',
        }

        this.onEnchantBtnClicked = this.onEnchantBtnClicked.bind(this)
    }

    onEnchantBtnClicked(){

        let itemLevel = this.state.itemLevel;

        this.checkItemLevel(itemLevel)

    }

    checkItemLevel(){

        if( this.state.itemLevel < 6 ){

            // console.log("----------------------")
            // console.log("Current Your Item Level is : " +this.state.itemLevel)
            // console.log("----------------------")

            let currentItemLevel = this.state.itemLevel

            this.itemEnchant(currentItemLevel)
        }
        else if( this.state.itemLevel >= 6 ){

            let itemUpgradeConfirm = window.confirm("Do you want to upgrade?");

            this.setState({itemEnhancePercentage : (this.state.itemEnhancePercentage / 1.5) });
            if(itemUpgradeConfirm){
                this.unprotectedItemEnchant( this.state.itemLevel, this.state.itemEnhancePercentage)

            }
        }
    }

    unprotectedItemEnchant(currentItemLevel,itemEnchantPercentage){

        let currentPercentage = itemEnchantPercentage;

        if(currentItemLevel == 6 ){
            currentPercentage = itemEnchantPercentage/1.5;
        } else if(currentItemLevel === 7 ){

            console.log(77)
            currentPercentage = itemEnchantPercentage/2.5;
        }
        else if(currentItemLevel === 8 ){
            console.log(88)
            currentPercentage = itemEnchantPercentage/3.5;
        }
        else if(currentItemLevel === 9 ){
            console.log(99)
            currentPercentage = itemEnchantPercentage/4.5;
        }






        let randomNumber = Math.floor((Math.random() * 100) + 1);

        console.log('random number : ' + randomNumber,'currentPercetage : '+ currentPercentage)

        if(randomNumber < currentPercentage){

            console.log('success',randomNumber);
            this.setState({ itemLevel:currentItemLevel+1 })
        }
        else{
            console.log('failed',randomNumber)
            this.setState({
                itemLevel:0,
                itemEnhancePercentage:100,
            })
        }
    }

    itemEnchant(currentItemLevel){
        this.setState({

            itemLevel: currentItemLevel + 1

        })

        // console.log("----------------------")
        // console.log("Your New Item Level is : " + this.state.itemLevel)
        // console.log("----------------------")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        // console.log("----------------------")
        // console.log("Your New Item Level increased from : " + prevState.itemLevel + " to : " + this.state.itemLevel)
        // console.log("----------------------")

    }

    render(){

        return(
            <div className="cardListWrapper">
                <Card
                    itemLevel = { this.state.itemLevel }
                    itemEnhancePercentage = { this.state.itemEnhancePercentage }
                    onEnchantBtnClicked = { this.onEnchantBtnClicked }
                />
            </div>
        )
    }
}
export default CardList