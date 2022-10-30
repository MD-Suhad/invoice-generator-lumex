import React from "react";
import { Button, Col, FloatingLabel, Form, input, InputGroup, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import  './Service.css';

const Service = () => {
  return (
    <Form>
      <Row className="row-container">
        <Col xs={12} md={9} className="colum-container">
        <Row>
      <Col xs={12} md={6}>
        <div>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Add Your Logo</Form.Label>
            <Form.Control style={{height:'120px',width:"180px"}}  type="file" />
          </Form.Group>
        </div>
        <div class="form-floating gy-3">
          <textarea
            class="form-control"
            placeholder="Who is this invoice from?(required)"
            id="floatingTextarea"
            required
          ></textarea>
          <label for="floatingTextarea"></label>
        </div>

        
        <Row className="mt-3 my-3">
          <Col xs={12} md={6}>
          <h5>Bill To</h5>
          <div className="row "></div>
          <div className="col">
              <input
                type="text"
                class="form-control"
                placeholder="Who is this invoice from? (required)"
                aria-label=""
              />
            </div>
             </Col>
             <Col xs={12} md={6}>
             <h5>Ship To</h5>
            <div className="">
              <input
                type="text"
                class="form-control"
                placeholder="(optional)"
                aria-label="Last name"
              />
            </div>
             </Col>
       </Row>

        <Row>
          <Col xs={12} md={12}>
            

          </Col>
        </Row>










      </Col>

      <Col xs={12} md={6}>
        <h2>INVOICE</h2>
        <InputGroup hasValidation>
          <InputGroup.Text>#</InputGroup.Text>
          <Form.Control type="number" required isInvalid />
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </InputGroup>
        <Row style={{display:"flex",justifyContent:"right"}}>  
          <Col xs={12} md={8}>
          <div class="row mt-3">
          <label
            for="colFormLabelLg"
            class="col-sm-2"
          >
            Date
          </label>
          <div class="col-sm-10">
            <input
              type="date"
              class="form-control"
              id="colFormLabelLg"
              placeholder=""
            />
          </div>
        </div>
          </Col>
        </Row>
        <Row style={{display:"flex",justifyContent:"right"}}>  
          <Col md={8}>
          <div class="row">
          <label
            for="colFormLabelLg"
            class="col-sm-2"
          >
            Payments Terms
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="colFormLabelLg"
              placeholder="terms and conditions"
            />
          </div>
        </div>
          </Col>
        </Row>
        <Row style={{display:"flex",justifyContent:"right"}}>  
          <Col xs={12} md={8}>
          <div class="row">
          <label
            for="colFormLabelLg"
            class="col-sm-2"
          >
            Due Date
          </label>
          <div class="col-sm-10">
            <input
              type="date"
              class="form-control"
              id="colFormLabelLg"
              placeholder=""
            />
          </div>
        </div>
          </Col>
        </Row>
        <Row style={{display:"flex",justifyContent:"right"}}>  
          <Col xs={12} md={8}>
          <div class="row">
          <label
            for="colFormLabelLg"
            class="col-sm-2"
          >
            PO Number
          </label>
          <div class="col-sm-10">
            <input
              type="number"
              class="form-control"
              id="colFormLabelLg"
              placeholder=""
            />
          </div>
        </div>
          </Col>
        </Row>
      
       </Col>

       <Row className="">
        <Col md={6} className="">
        <InputGroup className="mb-3 bg-blue">
        <InputGroup.Text 
         className="bg-dark"
        id="inputGroup-sizing-default">
          item
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby=""
        />
      </InputGroup>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
        </Col>
        <Col md={2} className="">
        <InputGroup className="mb-3">
          
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Quantity
        </InputGroup.Text>
        
        <Form.Control
          aria-label="Default"
          aria-describedby=""
        />
      </InputGroup>
          
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
          </Col>
        <Col md={2} className="">
        <InputGroup className="mb-3">
          
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Rate
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
          
          </InputGroup>
          <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm"></InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
          </Col>
        <Col md={2} className="">
        <InputGroup className="mb-3">
          
        <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Amount
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
          
          </InputGroup>
          <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <InputGroup.Text>0.00</InputGroup.Text>
        <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
      </InputGroup>
          </Col>
       </Row>

       <Row>
        <Col md={3} >
          <Button>+Line Item</Button>
        </Col>
       </Row>
       <Row>
        <Col md={4} className="w-30"
        
        >
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Notes" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Col>
        <Col md={7} className="px-5 mx-4">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Subtotal" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Col>
        <Col md={1}>

        </Col>
       </Row>
       <Row className="my-3">
        <Col md={5} className="">
        <FloatingLabel
        controlId="floatingTextarea"
        label="Relevant information not already covered "
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
        </Col>
        <Col md={6}>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Discount" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Col>
       </Row>
       <Row>
       <Col md={4} className="w-30"
        
        >
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Terms" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Col>

        <Col md={6} className="mx-5">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Total" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Col>
        <Col md={2}>

        </Col>
       </Row>

       <Row className="my-3">
       <Col md={5} className="">
        <FloatingLabel
        controlId="floatingTextarea"
        label="Terms And Conditions"
        className="mb-3"
      >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
      </FloatingLabel>
        </Col>
        <Col md={5} className="mx-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Amount paid" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Col>

        <Col>
        <InputGroup className="">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
       
      </InputGroup>
        </Col>

       </Row>







            </Row>
        </Col>

        

        























        <Col xs={12} md={3}>
        <div>
        <Button>Send Invoice</Button>
              <h4>Download Invoice</h4>
        </div>
       <div>
       <div>
        <h5>CURRENCY</h5>
        <Form.Select aria-label="Default select example">
      <option>USD ($)</option>
      <option value="1">BDT (Tk)</option>
      <option value="2">AMD</option>
      <option value="3">SRD ($)</option>
      <option value="3">UYI</option>
    </Form.Select>
        </div>
        <div>
        <h5>TYPE</h5>
        <Form.Select aria-label="Default select example">
      <option>Invoice</option>
      <option value="1">Credit Note</option>
      <option value="2">Quote</option>
      <option value="3">Purchase Order</option>
      <option value="4">Receipt</option>
    </Form.Select>
        </div>
       </div>

        </Col>
      </Row>
    </Form>
  );
};

export default Service;







































































// import React from "react";
// import Carousel from "react-bootstrap/Carousel";
// import Carousel1 from "../../../Assets/images/carousel.jpg";
// import Carousel2 from "../../../Assets/images/carousel1.jpg"
// import Carousel3 from "../../../Assets/images/carousel2.jpg";

// function IndividualIntervalsExample() {
//   return (
//     <Carousel
//     >
//       <Carousel.Item interval={1000} className="carouselItem">
//         <img className="d-block w-100" src={Carousel3} alt="First slide" />
//         <Carousel.Caption style={{paddingBottom: '400px',paddingRight: '500px'}}>
//           <h2>Make Your Statement In Style</h2>
//           <p>With fashion anything goes and more often than not people push themselves to stand out amongst the crowd and make a statement.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item interval={500} className="carouselItem">
//         <img className="d-block w-100" src={Carousel1} alt="Second slide" />
//         <Carousel.Caption>
//           <h3>Simplicity Wins Over Complexity</h3>
//           <p>Fashion doesn't have rigid rules to box any particular style. Most people opt for complementary colors that still allow them to blend in.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item className="carouselItem">
//         <img className="d-block w-100" src={Carousel2} alt="Third slide" />
//         <Carousel.Caption>
//           <h3>Simplicity Wins Over Complexity</h3>
//           <p>
//           Fashion doesn't have rigid rules to box any particular style. Most people opt for complementary colors that still allow them to blend in.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default IndividualIntervalsExample;
