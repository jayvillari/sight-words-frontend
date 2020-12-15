import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import CardColumns from "react-bootstrap/CardColumns";
import ListGroup from "react-bootstrap/ListGroup";

class Instructions extends Component {
  render() {
    return (
      <>
        <div class="header">
          <h3>How to Play</h3>
          <p>
            Adult and Child games can be played either Manually, where the user
            decides if the answer is Correct, Incorrect or you would like to
            skip that word. Users can also choose to Autoplay, where the user
            says the word and the app recorgizes the correct word through voice
            recognition.
          </p>
        </div>
        <Container fluid>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Header>Child Game</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Tracks correct, incorrect and skipped words
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Replays incorrect or skipped words
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Offers up to the first 100 Kindergarten sight words
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Header>Adult Game</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Tracks correct, incorrect and skipped words
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Replays incorrect or skipped words
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Offers hundreds of SAT words and correct definitions
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Instructions;
