var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Panel = ReactBootstrap.Panel;
var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Image = ReactBootstrap.Image;


class Developers extends React.Component{
  constructor (props,context){
    super(props)
    this.state = {
      developers: [],
      smShow: false,
      lgShow: false

    }
    this.getDevelopers = this.getDevelopers.bind(this)
    this.deleteDeveloper = this.deleteDeveloper.bind(this)

  }
  componentDidMount () {
    this.getDevelopers();
  }
  getDevelopers(){
    fetch('/developers')
      .then(response => response.json())
      .then(data => {
        this.setState({
          developers: data
        })
        //console.log(this.state.developer);
    }).catch(error => console.log(error))
  }
  deleteDeveloper(developer,index) {
    fetch('developers/' + developer.id,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.setState({
          developers: [
            ...this.state.developers.slice(0, index),
            ...this.state.developers.slice(index + 1)
          ]
        })
      })
  }

  render(){
    let smClose = () => this.setState({ smShow: false });
    let lgClose = () => this.setState({ lgShow: false });
    return(
    <div>
      <div className="container">
        <h2 className="developers-list"> Developers List </h2>
          <table className="fixedHeader">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">State</th>
                <th scope="col">GA Site</th>
                <th scope="col">Company</th>
                <th scope="col">Technology</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
          <tbody>
          {this.state.developers.map((developer, index) => {
            return (
              <tr>
                <th scope="row">{developer.id}</th>
                <td>{developer.name}</td>
                <td>{developer.age}</td>
                <td>{developer.state}</td>
                <td>{developer.ga_site}</td>
                <td>{developer.company}</td>
                <td>{developer.technology}</td>
                <td>
                  <ButtonToolbar>
                    <Button

                       onClick={() => this.setState({ lgShow: true })}
                     >
                     <img className="edit" src="/css/images/edit.png" />
                    </Button>
                    <MyLargeModal1 show={this.state.lgShow} onHide={lgClose}/>
                  </ButtonToolbar>
                </td>

                <td onClick={()=> this.deleteDeveloper(developer, index)}><img className="delete" src="/css/images/deletebutton.jpg" /></td>
              </tr>
              )
            })}
            </tbody>
          </table>
      </div>
      <div>
        <Panel>
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Image src="/css/images/skills.png" rounded />
              </Col>
              <Col xs={8} md={8}>
                <Panel.Heading> Are you a programmer and associated with General Assembly?</Panel.Heading>
                <Panel.Body>
                   Would you be interested in participating the study of developers to identify trends in developer education, skills and hiring practices.
                  <App2 getDevelopers={this.getDevelopers}/>
                </Panel.Body>
              </Col>
            </Row>
        </Grid>
        </Panel>
      </div>
    </div>
    )}
  }
