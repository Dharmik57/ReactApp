// Container COMPONENT (Construct only for view  )
import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



    //here incoming is props object so declare inside bracket
   function RenderDish({dish})
    {
        return(
        <div  className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" top src={dish.image} alt={dish.name} />
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>   
            </Card> 
        </div> 
        );
    }

   function RenderComments({selectedcomment})
    {
        const rencomment = selectedcomment.map((c) => 
            <li>
             <p>{c.comment}</p>
             <p>-- {c.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p>
           </li>     
        );

        if(selectedcomment != null)
          return (
                <div  className="col-12 col-md-5 m-1">
                <h4>Comments:</h4>
                <ul className="list-unstyled">
                {rencomment}
                </ul>
                </div>
            );
        else
            return(
                <div></div>
            );
    }


 const Dishdetail=(props)=>{

    if (props.dish != null)
        return( 
            <div className = "container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                
                <div className = "row">
                    {/* Display the list of dishes */}
                    <RenderDish dish={props.dish}/>
                    {/* Display the selcted dish and comment  */}
                    <RenderComments selectedcomment={props.comments}/>
                </div>
            </div>
        );
    else
        return(
            <div></div>
        );
 }


export default Dishdetail;