var React = require('react')
  , Bootstrap = require('react-bootstrap')
  , Input = React.createFactory(Bootstrap.Input)
  , Row = React.createFactory(Bootstrap.Row)
  , Col = React.createFactory(Bootstrap.Col)
  , Button = React.createFactory(Bootstrap.Button);

var SearchForm = React.createClass({

  render: function () {
    return(
      <form>
        <Input 
            type="text"
            label="Título" 
            name="title"/>
        <Input 
            type="select"
            label="Entidades" 
            defaultValue=""
            name="unit">
            <option value="">Todas las entidades</option>
            <option value="rector">Rector</option>
            <option value="academic">Vicerector Académico</option>
            <option value="administrativo">Vicerector Administrado</option>
            <option value="other">Otros</option>
        </Input>

        <Input wrapperClassName="wrapper">
          <Row>
            <Col xs={3}>
              <Input 
                  type="select"
                  label="Vigencia" 
                  defaultValue=""
                  name="unit">
                  <option value="">Vigente/Expirado</option>
                  <option value="1">Vigente</option>
                  <option value="2">Expirado</option>
              </Input>
            </Col>

            <Col xs={3}>
              <Input 
                  type="select"
                  label="Cobertura" 
                  defaultValue=""
                  name="unit">
                  <option value="">Marco/Específico</option>
                  <option value="1">Marco</option>
                  <option value="2">Específico</option>
              </Input>
            </Col>

            <Col xs={3}>
              <Input 
                  type="select"
                  label="Localizacion" 
                  defaultValue=""
                  name="unit">
                  <option value="">Seleccione una localización</option>
                  <option value="1">INternacional</option>
                  <option value="2">Nacional</option>
                  <option value="2">Local</option>
              </Input>
            </Col>

            <Col xs={3}>
              <Input 
                  type="select"
                  label="Año" 
                  defaultValue=""
                  name="unit">
                  <option value="">Eliga un año</option>
              </Input>
            </Col>
          </Row>
        </Input>

        <Row>
          <Input
            type='submit'
            value='Submit button'
            wrapperClassName="col-xs-6 col-xs-offset-3"
            bsStyle="info"
            className="col-xs-12 info"/>
        </Row>
      </form>
    );
  }
});
module.exports = SearchForm;