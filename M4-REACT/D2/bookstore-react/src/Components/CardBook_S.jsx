import React from "react";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";

const CardBook_S = (props) => (
  <>
    <Card>
      <Row key={props.asin} className="no-gutters">
        <Col xs={12} md={4}>
          <Card.Img className="img-fluid" src={props.img} />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{props.category}</small>
          </Card.Footer>
        </Col>
      </Row>
    </Card>
  </>
);

export default CardBook_S;

/**`<div id="${curr.asin}" class="card mb-3" style="max-width: 380px; max-height: 200px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <a href="./details.html?details=${curr.asin}">
                <img class="img-fluid my-img" src="${curr.img}" alt="${curr.title}">
            </a>  
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h6 class="card-title">${curr.title}</h6>
              <p class="card-text">
              <small class="font-weight-light">Category</small><br>  
              <small class="text-muted text-monospace">${curr.category}</small>
                </p>
              <div class="btn-group" role="group" aria-label="...">
                <button id="addToCard" onclick="passToWishList(${curr.asin})" type="button" class="btn btn-warning"><i class="fas fa-shopping-cart"></i> <span class="">${curr.price}</span></button>
                <button id="skip" type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>` */
