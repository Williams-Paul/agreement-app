var React = require('react')
  , AgreementForm = require("./AgreementForm.jsx")
  , AgreementToolbar = require("./AgreementToolbar.jsx")
  , Bootstrap = require('react-bootstrap')
  , { Row, Col, PageHeader, Button } = Bootstrap;

var AgreementActions = require('../../actions/AgreementActions');

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
          <AgreementForm
            id="agreement-form"
            onSave={this._onSave}/>
        </Col>
      </Row>
    );
  },
  _onSave: function (agreement) {
    AgreementActions.create(agreement);
  }
});

module.exports = AgreementCreateForm;
