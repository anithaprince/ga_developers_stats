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
  this.props.handleSubmit(this.state)
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
