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

import { addComment, fetchDishes,fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  
  addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => { dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())

});



class Main extends Component {
      // constructor(props) {
      //   super(props);
 
      // }

      //wil be executed after mouniting get view
      componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
      }

      render(){
          const HomePage = () => {
            return(
                <Home  
                 dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMess={this.props.dishes.errMess}
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                promoLoading={this.props.promotions.isLoading}
                 promoErrMess={this.props.promotions.errMess}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}/>
            );
          }

          const DishWithId = ({match}) => {
            return(
               //filter returns a array 
                <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                   isLoading={this.props.dishes.isLoading}
                   errMess={this.props.dishes.errMess}  
                   comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                   commentsErrMess={this.props.comments.errMess}
                   addComment={this.props.addComment} />
            );
          };
      
       return (
         <div>  
           <Header/>
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} /> //pass all dishes through props 
                <Route path='/menu/:dishId' component={DishWithId} />
                <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />} />
                <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />} /> //pass all leaders information through props
                <Redirect to="/home" /> //default route
            </Switch>
           <Footer/>
         </div>
       );
     }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
