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
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.state.developer){
      this.setState({
        name: this.state.developer.name,
        age: this.state.developer.age,
        state: this.state.developer.state,
        ga_site: this.state.developer.ga_site,
        technology: this.state.developer.technology,
        id: this.state.developer.id
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
      <form onSubmit={this.handleCreateSubmit}>
        <label  for='name'>Name</label>
          <div>
            <input
              className='input'
              type='text'
              id='name'
              ref='name'
            />
          </div>
        <label  for='age'>Age</label>
          <div>
            <input
              className='input'
              type='number'
              ref='age'
              id='age'
            />
          </div>

        <label  for='ga_site'>Site</label>
          <div>
            <input
              className='input'
              type='text'
              ref='ga_site'
            />
          </div>
        <label  for='technology'>Technology</label>
          <div>
            <input
              className='input'
              type='text'
              ref='technology'
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
