import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUsers =useLoaderData()
    console.log(loadedUsers);
    // const [users, setUsers] = useState(loadedUsers)
    const handleUpdate = (event) => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        console.log(name, email);
        const handleUpdate ={name, email}
        fetch(`http://localhost:7000/users/${loadedUsers._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(handleUpdate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount >0){
                alert('Updated users successfully')
            }
        })
    }
    return (
        <div>
            <h3>update your information {loadedUsers.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name ="name" id="" defaultValue={loadedUsers?.name}/>
                <input type="email" name ="email" id=""  defaultValue={loadedUsers?.email}/>
                <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default Update;