class Developers extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      showEditForm: false,
      developers: [],
      developer: {}
    }
    this.getDevelopers = this.getDevelopers.bind(this)
    this.deleteDeveloper = this.deleteDeveloper.bind(this)
    this.editDeveloper = this.editDeveloper.bind(this)
    this.toggleEditForm = this.toggleEditForm.bind(this)
  }
  componentDidMount () {
    this.getDevelopers()
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
    })
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
  editDeveloper(developer, index){
    fetch('developers/' + developer.id,
    {
      body: JSON.stringify(developer),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Concept-Type':'application/json'
      }
    })
    .then(updatedDeveloper => {
      return updatedDeveloper.json()
    })
    .then(jsonedDeveloper => {
      this.getDeveloper()
    })
    .catch(error => console.log(error))
  }
  toggleEditForm(developer, index){
    console.log("anuythgkja")
    this.setState({showEditForm: !this.state.showEditForm})
  }
  render(){
    return(
      <div>
      <h2> Developers List </h2>
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
              {this.state.showEditForm ? <EditForm /> : null}
              <td><button onClick={()=> this.deleteDeveloper(developer, index)}>Delete</button></td>
              <td><button onClick={this.toggleEditForm}>Edit</button></td>
            </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )}
  }

class App extends React.Component {
  render () {
    return (
      <div>
        <CreateDeveloperForm handleCreate={this.handleCreate} handleSubmit={this.handleCreateSubmit} />
        <h1 className='title'> General Assembly Student Stats App </h1>

        <Developers />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
)
