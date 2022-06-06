import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({addPokemon}) {

  const [formObject, setFormObject] = useState({
    name : "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })

  function handleFormChange(e) {
    setFormObject({...formObject, 
    [e.target.name] : e.target.value})
  }

  function handleFormSubmit(e) {
    e.preventDefault()

    const formObjectForPost = {
      name : formObject.name,
      hp: formObject.hp,
      sprites: {
        front: formObject.frontUrl,
        back: formObject.backUrl
      },
    }

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(formObjectForPost)
    })
    .then((r) => r.json())
    .then((newPokemon) => addPokemon(newPokemon))
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleFormSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" value={formObject.name} onChange={handleFormChange}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={formObject.hp} onChange={handleFormChange}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formObject.frontUrl}
            onChange={handleFormChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formObject.backUrl}
            onChange={handleFormChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
