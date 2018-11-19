class EditForm extends React.Component{
  render(){
    return(
      <tr>
        <form onSubmit={}>
          <td><input type='text' id='name' ref='name' placeholder='Name' /></td>
          <td><input type='number' id='age' ref='age' placeholder='Age'/></td>
          <td><input type='text' id='state' ref='state' placeholder='State' /></td>
          <td><input type='text' id='ga_site' ref='ga_site' placeholder='Site'/></td>
          <td><input type="text" id='company' ref='company' placeholder='Company'/></td>
          <td><input type='text' id='technology' ref='technology' placeholder='Technology'/></td>
          <td><input type='submit'/></td>
        </form>
      </tr>
    )
  }
}
