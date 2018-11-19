class Developers extends React.Component{
  constructor (props){
    super(props)
    this.state = {
      developers: []
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
    return(
      <div class="container">
      <App2 getDevelopers={this.getDevelopers}/>
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
