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
      <ul>
        {this.state.developers.map((developer, index) => {
          return (
            <li>
              <h3>Name: {developer.name}</h3>
              <p> Id: {developer.id}</p>
              <p> Age: {developer.age}</p>
              <p> State: {developer.state}</p>
              <p> GA Site: {developer.ga_site}</p>
              <p> Company: {developer.company}</p>
              <p> Technology: {developer.technology}</p>
              <button onClick={()=> this.deleteDeveloper(developer, index)}>Delete</button>
              <button>Edit</button>
            </li>
          )
        })}
      </ul>
    </div>
    )
  }
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
  document.querySelector('.container')
)
