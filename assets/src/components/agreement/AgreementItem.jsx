var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , { Button }= Bootstrap;

var AgreementItem = React.createClass({
  render: function () {
    return(
      <div className="agreement-item">
        <h3> Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão.</h3>

        <dl className="dl-horizontal">
          <dt>Reponsable</dt>
          <dd>Rectores de las universidades</dd>
          <dt>Entidades responsables</dt>
          <dd>todas</dd>
          <dt>Fecha de suscripción</dt>
          <dd>invalid date</dd>
          <dt>Vigencia</dt>
          <dd>invalid date</dd>
        </dl>

        <Button bsStyle="primary">Ver</Button>
        <Button bsStyle="info">Editar</Button>
        <Button bsStyle="danger">Eliminar</Button>
      </div>
      );
  } 
}); 
module.exports = AgreementItem;