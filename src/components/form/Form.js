import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const Formulario = () => {
  // State for respuestas
  const [respuestas, setRespuestas] = useState({
    ancestro: "",
    fallecioAntes1861: "",
    renuncioCiudadania: "",
    solovarones: "",
    naciodespues1948: "",
  });

  const [puede, setPuede] = useState(false);

  // destructuring for respuestas state
  const {
    ancestro,
    fallecioAntes1861,
    renuncioCiudadania,
    solovarones,
    naciodespues1948,
  } = respuestas;

  const handleChange = (e) => {
    setRespuestas({
      ...respuestas,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar respuestas
    if (ancestro === "No") {
      setPuede(false);
      console.log("No Podes");
    }

    if (ancestro === "Si" && fallecioAntes1861 === "No") {
      if (renuncioCiudadania === "No" && solovarones === "Si") {
        console.log("Si podes");
        setPuede(true);
      }
    }

    if (ancestro === "Si" && fallecioAntes1861 === "Si") {
      console.log("No Podes");
      setPuede(false);
    }

    if (ancestro === "Si" && fallecioAntes1861 === "No") {
      if (renuncioCiudadania === "Si") {
        console.log("No Podes ya que renuncio a la ciudadania italiana");
        setPuede(false);
      }
    }

    if (ancestro === "Si" && fallecioAntes1861 === "No") {
      if (renuncioCiudadania === "No" && solovarones === "No") {
        if (naciodespues1948 === "Si") {
          console.log("Si Podes");
          setPuede(true);
        }
      }
    }

    if (ancestro === "Si" && fallecioAntes1861 === "No") {
      if (renuncioCiudadania === "No" && solovarones === "No") {
        if (naciodespues1948 === "No") {
          console.log("Si podes, pero debe ser tramitada via judicial");
          setPuede(true);
        }
      }
    }
  };

  return (
    <div className="app__form">
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formTieneAncestro">
          <Form.Label>¿Tengo un Ancestro Italiano?</Form.Label>
          <Form.Control
            value={ancestro}
            name="ancestro"
            as="select"
            onChange={(e) => handleChange(e)}
          >
            <option>--</option>
            <option>Si</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formFechaFallecimiento">
          <Form.Label>¿Falleció antes del 17-03-1861?</Form.Label>
          <Form.Control
            as="select"
            value={fallecioAntes1861}
            name="fallecioAntes1861"
            onChange={(e) => handleChange(e)}
          >
            <option>--</option>
            <option>Si</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formRenuncioCiudadania">
          <Form.Label>
            ¿Renunció a la Ciudadania Italiana o se Naturalizó Argentino antes
            de nacer su hijo/a?
          </Form.Label>
          <Form.Control
            as="select"
            value={renuncioCiudadania}
            name="renuncioCiudadania"
            onChange={(e) => handleChange(e)}
          >
            <option>--</option>
            <option>Si</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formRenuncioCiudadania">
          <Form.Label>¿Solo hay descendientes varones?</Form.Label>
          <Form.Control
            as="select"
            value={solovarones}
            name="solovarones"
            onChange={(e) => handleChange(e)}
          >
            <option>--</option>
            <option>Si</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formRenuncioCiudadania">
          <Form.Label>
            ¿El hijo/a de la primer mujer en la línea de descendencia nacio
            después del 01-01-1948?
          </Form.Label>
          <Form.Control
            as="select"
            value={naciodespues1948}
            name="naciodespues1948"
            onChange={(e) => handleChange(e)}
          >
            <option>--</option>
            <option>Si</option>
            <option>No</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit">¿Puedo ser Ciudadano Italiano?</Button>
      </Form>
    </div>
  );
};

export default Formulario;
