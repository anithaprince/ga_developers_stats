
class CreateDeveloperForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      age: 0,
      state: '',
      ga_site: '',
      company: '',
      technology:'',
      developers : [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
  }
  handleChange(event) {
   this.setState({[event.target.id]: event.target.value})
  }
  handleCreateSubmit (event) {
    event.preventDefault()
    let developer={
      name: this.refs.name.value,
      age: this.refs.age.value,
      state: this.refs.state.value,
      ga_site: this.refs.ga_site.value,
      company: this.refs.company.value,
      technology: this.refs.technology.value,
    }
    console.log(developer);
    fetch('/developers', {
      body: JSON.stringify(developer),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdDeveloper => {
      //  console.log(createdDeveloper);
        return createdDeveloper.json()
      })
      .then(jsonedDeveloper => {
        console.log(jsonedDeveloper);
        // const updatedDevelopers = this.props.developers
        // updatedDevelopers.push(jsonedDeveloper)
        // this.setState({developers: updatedDevelopers})
        this.props.getDevelopers()
      })
      .catch(error => console.log(error))
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleCreateSubmit}>
          <label for='name'>Name</label>
          <div>
            <input type='text' id='name' ref='name'  onChange={this.handleChange} value={this.state.name}/>
          </div>

          <label for='age'>Age</label>
          <div>
            <input type='number' id='age' ref='age' onChange={this.handleChange} value={this.state.age}/>
          </div>

          <label for='state'>State</label>
          <div>
            <input type='text' id='state' ref='state' onChange={this.handleChange} value={this.state.state} />
          </div>

          <label for='ga_site'>GA Site</label>
          <div>
            <input type='text' id='ga_site' ref='ga_site' onChange={this.handleChange} value={this.state.ga_site}/>
          </div>

          <label for='company'>Company</label>
          <div>
            <input type='text' id='company' ref='company' onChange={this.handleChange} value={this.state.company}/>
          </div>

          <label for='technology'>Technology</label>
          <div>
            <input type='text' id='technology' ref='technology' onChange={this.handleChange} value={this.state.technology}/>
          </div>
          <div>
            <input type='submit' />
          </div>
        </form>
      </div>
    )
  }
}
