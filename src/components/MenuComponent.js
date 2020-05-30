// Container COMPONENT (Construct only for view  )
import React from 'react';

import { Card, CardImg, CardImgOverlay,CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderMenuItem ({dish, onClick}) {
    return (
        <Card>
            <Link to={`/menu/${dish.id}`} >
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

        // here we declare props because data comes from applicationCache.js(parent components)
        //this is a another way to declare a function 
        const Menu = (props) => {

            //here we use map function beacuse the incoming props is array list
            const menu = props.dishes.map((dish) => {
                return (
                    <div className="col-12 col-md-5 m-1"  key={dish.id}>
                        <RenderMenuItem dish={dish}  />
                    </div>
                );
            });
    
            return (
                <div className="container">
                    <div className="row">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Menu</BreadcrumbItem>
                            </Breadcrumb>
                            <div className="col-12">
                                <h3>Menu</h3>
                                <hr />
                            </div>                
                    </div>
                    <div className="row">
                        {menu}
                    </div>
                </div>
            );
        }


export default Menu;