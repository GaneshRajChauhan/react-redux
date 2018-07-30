import React, {Component} from 'react';
import ChckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route,Redirect} from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import {connect} from 'react-redux';
class Checkout extends Component{
    state={
        ingredients:null,
        totalprice:0
        
    }

checkoutCancelledHandler=()=>{
this.props.history.goBack();
}
checkoutContinuedHandler=()=>{
    this.props.history.replace('/checkout/contact-data');
}
componentWillMount(){
    const query=new    URLSearchParams(this.props.location.search);
    const ingredients={};
    let price =0;

    for(let param of query.entries()){
        if(param[0]=='price'){
        price=param[1];
        }
        else    
        {
            ingredients[param[0]]=+param[1]
        }
     
    }
    this.setState({ingredients:ingredients,totalprice:price});
}
render()
{
    let summary=<Redirect to="/"/>
    if(this.props.ings)
    {
      summary=(
          <div>
        <ChckoutSummary 
        ingredients={this.props.ings}
        checkoutCancelled={this.checkoutCancelledHandler}
        checkoutContinued={this.checkoutContinuedHandler} />
        <Route
        path={this.props.match.path+'/contact-data'} 
        component={ContactData}
        />
        </div>
      );
    }
    return summary;
}

}
const mapStateToProps=state=>{
    return{
        ings:state.burgerBuilder.ingredients
    }
}
export default  connect(mapStateToProps) (Checkout);