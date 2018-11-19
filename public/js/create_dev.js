
class CreateDeveloperForm extends React.Component {
  render() {
    return(
      <div className='field'>
        <form>
          <label className='label' for='name'>Name</label>
          <div className='control'>
            <input className='input' type='text' id='name' ref='name'/>
          </div>
          <label className='label' for='age'>Age</label>
          <div className='control'>
            <input className='input' type='number' id='age' ref='age'/>
          </div>
          <label className='label' for='key_skill'>Key Skill</label>
          <div className='control'>
            <input className='input' type='text' id='key_skill'ref='key_skill' />
          </div>
          <label className='label' for='phone' >Phone</label>
          <div className='control'>
            <input className='input' type='tel' id='phone' ref='phone' />
          </div>
          <label className='label 'for='avatar' >Avatar</label>
          <div className='control'>
            <input className='input' type='text' id='avatar' ref='avatar'/>
          </div>
          <div className='control'>
            <input className='button is-primary' type='submit' /> &nbsp;
            <button className="button is-link">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}
