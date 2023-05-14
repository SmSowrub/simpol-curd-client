
import './App.css'

function App() {
 
const handleSubmit=(event)=>{
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user={name, email}
    console.log(user);
    fetch('http://localhost:7000/users',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        alert('new user added')
      }
      // form.reset();
    })
}
  return (
       <div style={{ margin: 'center', textAlign: 'center' }}>
      <h1>Simple curd runnig</h1>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" required />
        <input type="email" name="email" id="" required />
        <input type="submit" value='submit' />
      </form>
      </div>
    
  )
}

export default App
