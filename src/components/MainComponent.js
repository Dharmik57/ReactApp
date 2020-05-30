// Container COMPONENT (ALL STATE DECLARE HERE AND PASS PROPS FROM HERE )

import React ,{Component}from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent'; 
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';

import { Switch, Route, Redirect } from 'react-router-dom';                                   
import About from './AboutComponent';

class Main extends Component {
      constructor(props) {
        super(props);
        this.state = {
          dishes: DISHES,
          comments: COMMENTS,
          promotions: PROMOTIONS,
          leaders: LEADERS
          
        };
      }

      render(){
          const HomePage = () => {
            return(
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                leader={this.state.leaders.filter((leader) => leader.featured)[0]}/>
            );
          }

          const DishWithId = ({match}) => {
            return(
               //filter returns a array 
                <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };
      
       return (
         <div>  
           <Header/>
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} /> //pass all dishes through props 
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={Contact} />} />
                <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} />} /> //pass all leaders information through props
                <Redirect to="/home" /> //default route
            </Switch>
           <Footer/>
         </div>
       );
     }
}

export default Main;
