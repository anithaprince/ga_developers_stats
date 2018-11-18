
class Developers extends React.Component{
  constructor (props){
    super(props)
    this.getDevelopers = this.getDevelopers.bind(this)
    this.state = {developers: []}
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
  componentDidMount () {
    this.getDevelopers()
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
        <Developers />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
