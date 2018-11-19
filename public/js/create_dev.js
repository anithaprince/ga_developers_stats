
class CreateDeveloperForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      age: 0,
      state: '',
      ga_site: '',
      company: '',
      technology:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
   this.setState({[event.target.id]: event.target.value})
  }
  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
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
