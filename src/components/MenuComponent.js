import React ,{Component} from 'react';

import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';



class Menu extends Component{

    constructor(props)
    {
        super(props);
     
        console.log('Menu Component constructor invoked');
    }

    componentDidMount()
    {
        console.log('Menu Component componentDidMount invoked');
    }

   
    // renderDish(dish) {
    //     if (dish != null)
    //         return(
    //             <Dishdetail selectdish={this.state.dish}/>
               
    //         );
    //     else
    //         return(
    //             <div></div>
    //         );
    // }

    render(){
 
        // here we declare props because data comes from applicationCache.js(parent components)
        const menu=this.props.dishes.map(dish=>
            {
                return(
                    <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                      onClick={() => this.props.onClick(dish.id)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                      <CardImgOverlay>
                          <CardTitle>{dish.name}</CardTitle>
                      </CardImgOverlay>
                    </Card>
                  </div>
                );
            });

            
        return(
            <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
        );
        // console.log('Menu Component render invoked');
    }


}

export default Menu;