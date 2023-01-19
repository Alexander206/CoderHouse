import { useEffect, useState } from 'react'
import axios from 'axios'
import { personGenerator } from './generator'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    getPersons();
  }, [])

  const getPersons = () => {
    axios.get('http://localhost:8080/api/persons')
    .then(function (response) {
      setData(response.data);
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  const onSubmitPerson = (data) => {
    console.log('onSubmitPerson -> data', data);
    axios.post('http://localhost:8080/api/persons', data)
    .then(function (response) {
      getPersons();
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  
  return (
    <>
      <h1>Persons API</h1>
      <Form onSubmitPerson={onSubmitPerson}/>
      <List data={data}/>
    </>
  );
}

function Form(props) {
  const [person, setPerson] = useState({
    firstname: '',
    lastname: '',
    dni: '',
  })
  const onChangeAction = (event) => {
    const state = {...person};
    state[event.target.name] = event.target.value;
    setPerson(state)
  };
  const onSubmitAction = (event) => {
    event.preventDefault();
    props.onSubmitPerson({...person})
  };
  return <>
    <h3>Create person</h3>

    <form onSubmit={onSubmitAction}>
      <input id="firstname"
        name="firstname"
        onChange={onChangeAction}
        value={person.firstname}
        placeholder='Firstname'/>
      <input id="lastname"
        name="lastname"
        onChange={onChangeAction}
        value={person.lastname}
        placeholder='Lastname'/>
      <input id="dni"
        name="dni"
        onChange={onChangeAction}
        value={person.dni}
        placeholder='DNI'/>
      <button type='button' onClick={() => setPerson(personGenerator())}>Generator</button>
      <button type='submit'>Send</button>
    </form>
  </>
}

function List(props) {
  return (
    <table>
      <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>DNI</th>
      </tr>
      </thead>
      <tbody>
        {
          props.data.map((item, index) => <tr key={`${Date.now()}-${index}`}>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.dni}</td>
          </tr>)
        }
      </tbody>
    </table>
  );
}

export default App;
