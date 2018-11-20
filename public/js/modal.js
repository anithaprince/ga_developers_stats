var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;

class MyLargeModal extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Developer Trend Study </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateDeveloperForm getDevelopers={this.props.getDevelopers} onHide={this.props.onHide}/>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class MyLargeModal1 extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
        bsSize="large"
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Edit Form </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm  onHide={this.props.onHide} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class App2 extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      smShow: false,
      lgShow: false
    };
  }
  render() {
    let smClose = () => this.setState({ smShow: false });
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <ButtonToolbar>

        <Button
          bsStyle="primary"
          onClick={() => this.setState({ lgShow: true })}
        >
          Add You Developer Data - Start Survey
        </Button>
        <MyLargeModal show={this.state.lgShow} onHide={lgClose} getDevelopers={this.props.getDevelopers}/>
      </ButtonToolbar>
    );
  }
}
