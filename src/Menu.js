import React, { createElement } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import inflection from 'inflection';
import { MenuItemLink, getResources, Responsive, translate } from 'react-admin';
import { withRouter } from 'react-router-dom';
import LabelIcon from '@material-ui/icons/Label';

const Menu = ({ resources, onMenuClick, translate, logout }) => (
  <div>
    {resources.map(resource => (
      <MenuItemLink
        to={`/${resource.name}`}
        primaryText={translatedResourceName(resource, translate)}
        leftIcon={createElement(resource.icon)}
        onClick={onMenuClick}
      />
    ))}
    <MenuItemLink
      to="/custom-route"
      primaryText="Miscellaneous"
      leftIcon={<LabelIcon />}
      onClick={onMenuClick}
    />
    <Responsive
      small={logout}
      medium={null} // Pass null to render nothing on larger devices
    />
  </div>
);

const translatedResourceName = (resource, translate) =>
  translate(`resources.${resource.name}.name`, {
    smart_count: 2,
    _:
      resource.options && resource.options.label
        ? translate(resource.options.label, {
            smart_count: 2,
            _: resource.options.label,
          })
        : inflection.humanize(inflection.pluralize(resource.name)),
  });


const mapStateToProps = state => ({
  resources: getResources(state),
});

const enhance = compose(
  translate,
  connect(
    mapStateToProps,
    {}, // Avoid connect passing dispatch in props,
    null,
    {
      areStatePropsEqual: (prev, next) =>
        prev.resources.every(
          (value, index) => value === next.resources[index] // shallow compare resources
        ) && prev.pathname == next.pathname,
    }
  ),
  connect(mapStateToProps)
  // withStyles(styles)
);

export default enhance(Menu);
