import React ,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component{
   renderComments(selectedcomment)
    {
        const rencomment = selectedcomment.map((c) => 
    
            <li key={c.id}>
             <p>{c.comment}</p>
             <p>-- {c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p>
           </li>  
              
    );
        if(selectedcomment != null)
          return rencomment
        else
            return(
                <div></div>
            );
    }


    render(){
        const dish = this.props.dish

        if (dish != null)
        return( 
        <div className = "container">
          <div className = "row">
           
            {/* Display the list of dishes */}
            <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}>
                    <CardImg width="100%" top src={dish.image} alt={dish.name} />
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>   
                </Card> 
            </div> 
        
            {/* Display the selcted dish and comment  */}
            <div  className="col-12 col-md-5 m-1">
               <h4>Comments:</h4>
                <ul className="list-unstyled">
                    {this.renderComments(dish.comments)}
                </ul>
            </div> 
        
        </div>
        </div>
        
        );
        
        else
        return(
            <div></div>
        );
    }
}

export default Dishdetail;