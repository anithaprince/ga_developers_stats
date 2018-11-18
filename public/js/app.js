class DeveloperForm extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:'',
      age: 0,
      state: '',
      ga_site: '',
      technology: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.developer){
      this.setState({
        name: this.props.developer.name,
        age: this.props.developer.age,
        state: this.props.developer.state,
        ga_site: this.props.developer.ga_site,
        technology: this.props.developer.technology,
        id: this.props.developer.id
      })
    }
  }
handleChange(event){
  this.setState({[event.target.id]: event.target.value})
}
handleSubmit(event){
  event.preventDefault()
  this.state.handleSubmit(this.state)
  console.log(this.state)
}
render(){
  return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <label className='label' for='name'>Name</label>
          <div>
            <input
              className='input'
              type='text'
              id='name'
              ref='name'
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
        <label className='label' for='age'>Age</label>
          <div>
            <input
              className='input'
              type='number'
              ref='age'
              onChange={this.handleChange}
              value={this.state.age}
              id='age'
            />
          </div>
        <label className='label' for='state'>State</label>
          <div>
            <input
              className='input'
              type='text'
              ref='state'
              onChange={this.handleChange}
              value={this.state.state}
            />
          </div>
        <label className='label' for='ga_site'>Site</label>
          <div>
            <input
              className='input'
              type='text'
              ref='ga_site'
              onChange={this.handleChange}
              value={this.state.ga_site}
            />
          </div>
        <label className='label' for='technology'>Technology</label>
          <div>
            <input
              className='input'
              type='text'
              ref='technology'
              onChange={this.handleChange}
              value={this.state.technology}
            />
          </div>
          <div>
            <input type='submit' />
          <button>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

class Developers extends React.Component{
  constructor (props){
    super(props)
    this.state = {developers: []}
    this.deleteDeveloper = this.deleteDeveloper.bind(this)
    this.getDevelopers = this.getDevelopers.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }
  componentDidMount () {
    this.getDevelopers()
  }
  getDevelopers(){
    fetch('/developers')
      .then(response => response.json())
      .then(data => {
        this.setState({
          developers: data
        })
        console.log(this.state.developer);
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
  handleCreate(developer){
    console.log([developer, ...this.state.developers])
    this.setState({developers: [developer, ...this.state.developers]});
  }
  handleCreateSubmit(developer){
    fetch('/developers', {
      body: JSON.stringify(developer),
      method: 'POST',
      headers:{
        'Accept':'application/json, text/plain, */*', 'Content-Type': 'application/json'
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
  handleUpdateSubmit(developer){
    fetch('/developers/' + developer.id, {
      body: JSON.stringify(developer),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type':'application/json'
      }
    })
    .then(jsonedDeveloper => {
      return updatedDeveloper.json()
    })
    .then(jsonedDeveloper => {
      this.getDevelopers()
    })
    .catch(error => console.log(error))
  }
  render(){
    return(
      <div>
      <h2> Developers List </h2>
      <ul>
      <button>Add A Developer</button>
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
