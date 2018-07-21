import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BurgerBuilder from '../../components/Burger/BuildControls/BuildControls'
const INGREDIENT_PRICE={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}
class BurgerBUilder extends Component{
    // constructor(props){
    //     super(props)={...};
    //     this.state
    // }



    state={
        ingridients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    };
    
    addIngredientHandler=(type)=>{
        const oldCount=this.state.ingridients[type];
        const updatedCount=oldCount+1;
        const updatedIngredients={
            ...this.state.ingridients
        };
        updatedIngredients[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICE[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingridients:updatedIngredients});
        console.log(updatedIngredients);
    }
    removeIngredientHandler=(type)=>{
        const oldCount=this.state.ingridients[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngredients={
            ...this.state.ingridients
        };
        updatedIngredients[type]=updatedCount;
        const priceDeduction=INGREDIENT_PRICE[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDeduction;
        this.setState({totalPrice:newPrice,ingridients:updatedIngredients});
        console.log(updatedIngredients);
    }
    render(){
        const disabledInfo={
          ...this.state.ingridients
        };
        for (let key in disabledInfo) {
          disabledInfo[key]=disabledInfo[key]<=0
            
        }
        return (
             <Aux>
                 <Burger ingredients={this.state.ingridients}/>
              <BurgerBuilder
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
              disabled={disabledInfo}
              price={this.state.totalPrice}
              />

             </Aux>

        );
    }
}
export default BurgerBUilder;