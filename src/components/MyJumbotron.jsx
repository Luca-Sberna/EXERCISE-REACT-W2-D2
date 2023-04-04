import { Container } from "react-bootstrap";
import { Component } from "react";

class MyJumbotron extends Component {
  render() {
    return (
      <Container className="text-center p-4 border bg-primary rounded-4 my-4 shadow w-50">
        <h1>Benvenuto nel Paradiso Dei Libri📚</h1>
        <p>Ti offriamo il meglio del momento dove e quando vuoi!🫢</p>
      </Container>
    );
  }
}

export default MyJumbotron;
