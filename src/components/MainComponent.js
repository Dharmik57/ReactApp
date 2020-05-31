// Container COMPONENT (ALL STATE DECLARE HERE AND PASS PROPS FROM HERE )

import React ,{Component}from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent'; 


import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';

import { Switch, Route, Redirect,withRouter } from 'react-router-dom';                                   
import About from './AboutComponent';
import { connect } from 'react-redux'; //commect redux store with main component

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

class Main extends Component {
      constructor(props) {
        super(props);
 
      }

      render(){
          const HomePage = () => {
            return(
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
            );
          }

          const DishWithId = ({match}) => {
            return(
               //filter returns a array 
                <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };
      
       return (
         <div>  
           <Header/>
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} /> //pass all dishes through props 
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={Contact} />} />
                <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />} /> //pass all leaders information through props
                <Redirect to="/home" /> //default route
            </Switch>
           <Footer/>
         </div>
       );
     }
}

export default withRouter(connect(mapStateToProps)(Main));
