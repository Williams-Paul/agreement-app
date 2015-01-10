var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , Jumbotron = Bootstrap.Jumbotron;

var ResultList = React.createClass({

  render: function () {
    return(
      <div>
        <Jumbotron>
          <h1>Vamos! Obtenga su Búsqueda</h1>
          <p>Ingrese sus atributos en el formulario de arriba para encontrar sus convenios.</p>
        </Jumbotron>
      </div>
    );
  }
});
module.exports = ResultList;