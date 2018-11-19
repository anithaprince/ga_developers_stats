
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
  document.getElementById('container')
)
