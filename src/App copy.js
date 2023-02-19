// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import {createProfesional} from './graphql/mutations';
import {listProfesionals} from './graphql/queries';
import {withAuthenticator, Button, Heading} from '@aws-amplify/ui-react';
import styles from '@aws-amplify/ui-react/styles.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App({signOut, user}) {

  const [profesional, setProfesional] = useState({
    nombre: '',
    apellido: '',
  });

  const [profesionals, setProfesionals] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(profesional);
    const result = await API.graphql(graphqlOperation(createProfesional, { input: profesional }));
    console.log(result);
  };

useEffect(() => {
  async function loadProfesionals() {
    const result = await API.graphql(graphqlOperation(listProfesionals));
    setProfesionals(result.data.listProfesionals.items);
    console.log(result);
  }
  loadProfesionals()
}, [])

  return (
    <>
     <Heading level={1}>Hello {user.username}</Heading>
      <form onSubmit={handleSubmit}>
        <input name="nombre" placeholder='nombre' onChange={(e) => setProfesional({ ...profesional, nombre: e.target.value})}/>
        <textarea name="apellido" placeholder='apellido' onChange={(e) => setProfesional({ ...profesional, apellido: e.target.value})}/>
        <button>Submit</button>
      </form>
      {JSON.stringify(profesionals)}

      <Button onClick={signOut} style={styles.button}>Sign out</Button>
      <Container>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
    </>
  );
}

export default withAuthenticator(App);
