// Container COMPONENT (ALL STATE DECLARE HERE AND PASS PROPS FROM HERE )

import React ,{Component}from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent'; 
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';

import { Switch, Route, Redirect } from 'react-router-dom';                                   

class Main extends Component {
      constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES,
       
        };
      }

  
    

     render(){
      const HomePage = () => {
        return(
            <Home 
            />
        );
      }
      
       return (
         <div>  
           <Header/>
           <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" /> //default route
          </Switch>
           {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
           <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/> */}
           <Footer/>
         </div>
       );
     }
}

export default Main;
