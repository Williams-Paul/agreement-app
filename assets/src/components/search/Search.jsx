var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , { Row, Col, PageHeader } = Bootstrap;

var SearchForm = require('./SearchForm.jsx');
var ResultList = require('./ResultList.jsx');

var Search = React.createClass({

  render: function () {
    return(
      <Row>
        <Col lg={12}>
          <PageHeader>
            Búsqueda de Convenios
          </PageHeader>
          
          <SearchForm/>

          <br/>
          
          <ResultList/>
        </Col>
      </Row>
    );
  }
});
module.exports = Search;