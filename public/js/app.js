var Jumbotron = ReactBootstrap.Jumbotron;


class MyJumbotron extends React.Component {
  render () {
    return (
      <Jumbotron>
      <h1>2018 General Assembly Developer Skills Report</h1>
      <p>The future of work will be very different. Irrespective of your job, it will become important for
      everyone to learn how to code. Coding helps enrich your computational thinking, which is powerful in making decisions.
      The traditional resume will go away and hiring will happen based on your skills first.</p>

      <p>We are launching this app with the goal of matching every developer to the right job. The the starting point for anyone aspiring to be a developer is
      finding the expert that can provide trainings in coding, data, design and digital marketing. And General Assembly is the place for it.</p>

      <p>Since 2011, General Assembly has transformed tens of thousands of careers through pioneering, experiential education in today’s most in-demand skills.
      Award-winning curriculum and expert instructors, on campus and online makes General Assembly Exceptional. </p>

      <p>We surveyed the GA's  professional community and past students to get a pulse on developer skills and job market tends.
      (Which GA site did they attend, what is the average age of a student, how did they learn coding, which languages and frameworks did they land job in etc.)
      There are some great insights, from over 100 responses, that we are happy to share with you today.
      Did you know that 1 in 4 developers learned to code before they could drive?</p>

      <p>We hope you find the 2018 General Assembly Developer Skills Report insightful and will help you make the right programming decisions.
      </p>
      </Jumbotron>
)}}

class App extends React.Component {
  render () {
    return (
      <div>
        <h1 className='title'> <img src="/css/images/ga.png" /> Developers Skills Stats </h1>
        <div className="topnav">
          <a className="active" href="#home">Home</a>
          <a className="#about">About</a>
          <a className="#news">Data</a>
          <a className="#reports">Reports</a>
          <a className="#contact">Contact</a>
        </div>
        <div className="container">
          <MyJumbotron />
        </div>
        <Developers />

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
)
