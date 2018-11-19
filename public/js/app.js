class Developers extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      developers: [],
      developer: {}
    }
    this.getDevelopers = this.getDevelopers.bind(this)
    this.deleteDeveloper = this.deleteDeveloper.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
  }
  componentDidMount () {
    this.getDevelopers()
  }
  getDevelopers()
  {
    fetch('/developers')
      .then(response => response.json())
      .then(data => {
        this.setState({
          developers: data
        })
        console.log(this.state.developer);
    }).catch(error => console.log(error))
  }
  handleCreate (developer) {
    console.log([developer, ...this.state.developers])
    this.setState({developers: [developer, ...this.state.developers]})
  }
  handleCreateSubmit (developer) {
    fetch('/developers', {
      body: JSON.stringify(developer),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdDeveloper => {
        return createdDeveloper.json()
      })
      .then(jsonedDeveloper => {
        this.handleCreate(jsonedDeveloper)
      })
      .catch(error => console.log(error))
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
              <td><button onClick={()=> this.deleteDeveloper(developer, index)}>Delete</button></td>
              <td><button>Edit</button></td>
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
        <DeveloperForm />
        <Developers />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
