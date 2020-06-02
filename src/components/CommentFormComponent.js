import React,{Component} from 'react';
import { CustomInput,Button, Modal, ModalHeader, ModalBody, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{

    constructor(props) {
        super(props);
    
      
        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        
    }
  

     render(){

        return(
            <div>
                <Button  outline onClick={this.toggleModal} color="secondary"><span className="fa fa-edit fa-lg"></span>Submit Comment</Button>{' '}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>

                        {/* Form start here  */}
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                
                                <Col>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" name="rating"
                                        className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Control.select>
                                </Col>
                                
                            </Row>
                            <Row className="form-group">
                                
                                <Col>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                            <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                     
                                </Col>
                                 
                            </Row>
                            <Row className="form-group">
                            <Col>
                                <Label for="comment">Comment</Label>
                                
                                <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                                
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                      Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                        
                    </ModalBody>
                </Modal>
            </div>
        );
     }


}

export default CommentForm;