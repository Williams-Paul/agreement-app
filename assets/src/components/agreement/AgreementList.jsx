var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , { Row, Col, PageHeader, Button } = Bootstrap;

var AgreementItem = require('./AgreementItem.jsx');

var AgreementList = React.createClass({
  render: function () {
    return(
      <Row>
        <Col lg={12}>
          <PageHeader>
            Lista de Convenios
            <div className="pull-right">
              <Button bsStyle="success">Registro Convenio</Button>
            </div>
          </PageHeader>
          <AgreementItem/>
        </Col>
      </Row>
      );
  } 
}); 
module.exports = AgreementList;