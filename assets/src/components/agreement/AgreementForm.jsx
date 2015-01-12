var React = require('react')
  , ReactPropTypes = React.PropTypes;

var Bootstrap = require('react-bootstrap')
  , { Input, PageHeader } = Bootstrap;

var AgreementForm = React.createClass({
  propTypes: {
    onSave: ReactPropTypes.func.isRequired
  },

  render: function () {
    return (
        <div>
          <Input 
            type="textarea"
            label="Título" 
            name="title"/>

          <Input 
            type="textarea"
            label="Objetivos" 
            name="objetives"/>

          <Input label="Según tipo de cobertura" wrapperClassName="wrapper">
            <Input 
              type="radio"
              label="Marco"
              name="coverage"/>

            <Input 
              type="radio"
              label="Específico"
              name="coverage"/>
          </Input>

          <Input type="select" label="Según tipo de Propósito" name="purpose">
            <option value="select">select</option>
            <option value="other">other</option>
          </Input>

          <Input type="select" label="Según tipo de Localización" name="localization">
            <option value="select">select</option>
            <option value="other">other</option>
          </Input>

          <Input type="select" label="Según tipo de Institución" name="institution">
            <option value="select">select</option>
            <option value="other">other</option>
          </Input>

          <Input type="static" value="Suscripción"/>

          <Input 
            type="text"
            label="Resolución Rectoral"
            name="suscription[resolution]"
            help="Ejm. 1807-2015-R-UNA | sin resolución"/>

          <Input 
            type="date"
            label="Fecha de Suscripción"
            name="suscription[date]"
            help="Ejm. 31/12/204"/>

          <Input 
            type="text"
            label="Vigencia"
            name="suscription[validity]"
            help="Ejm. 2 días | 15 meses | 5 años | 31/12/2014 | indefinido"/>

          <Input 
            type="text"
            label="Responsables"
            name="suscription[responsible]"/>

          <Input type="select" label="Entidades Responsables" name="suscription[entity]">
            <option value="select">select</option>
            <option value="other">other</option>
          </Input>

          <Input
            type="submit"
            value="Guardar"/>

        </div>
      );

  }
});

module.exports = AgreementForm;
