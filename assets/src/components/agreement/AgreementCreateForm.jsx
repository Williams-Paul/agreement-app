var React = require('react')
  , AgreementForm = require("./AgreementForm.jsx")
  , AgreementToolbar = require("./AgreementToolbar.jsx")
  , Bootstrap = require('react-bootstrap')
  , { Row, Col, PageHeader, Button } = Bootstrap;

var AgreementCreateForm = React.createClass({
  render: function () {
    return(
      <Row>
        <Col lg={12}>
          <PageHeader>
            Nuevo Convenios
            <div className="pull-right">
              <AgreementToolbar/>
            </div>
          </PageHeader>
          <AgreementForm/>
        </Col>
      </Row>
      );
  }
});

module.exports = AgreementCreateForm;
