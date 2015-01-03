var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , Row = React.createFactory(Bootstrap.Row)
  , Col = React.createFactory(Bootstrap.Col)
  , PageHeader = React.createFactory(Bootstrap.PageHeader);

var SearchForm = React.createFactory(require('./SearchForm.jsx'));

var ResultList = React.createFactory(require('./ResultList.jsx'));

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