import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Container,
  Col,
  Button,
  Jumbotron,
  Row,
} from "reactstrap";

const Projects = (props) => {
  return (
      
      <Container>
          <div>
      <Jumbotron>
        <h1 className="display-3">Projects</h1>
        <p className="lead">Bootcamp assignments, group projects, and some just for fun.</p>
        <hr className="my-2" />
      </Jumbotron>
    </div>
    <Row>
        <Col md = {4}>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Study Buddy</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
          Study Buddy is an app designed to help students connect with each other to set up study times either virtually or in person.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>

      <Col md = {4}>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Study Buddy (React)</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Study Buddy App redone in React with added features.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>

      <Col md = {4}>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Weather Dashboard</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
          Weather dashboard for user to search current forecast by typing city name into search bar
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>

      </Row>

<br />

      <Row>
        <Col md = {4}>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Budget Tracker</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>

      <Col md = {4}>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Day Planner</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
          Daily planner for user to plan out day by the hour. Color coded so user has visual if time block is in past, present, or future. User is able to store hourly plans in local storage.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>

      <Col md = {4}>
      <Card>
        <CardImg
          top
          width="100%"
          src="/assets/318x180.svg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle tag="h5">Project 6</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>

      </Row>
      </Container>

      
    
  );
};

export default Projects;
