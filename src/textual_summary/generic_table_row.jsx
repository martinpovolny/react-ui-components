import * as React from 'react';
import PropTypes from 'prop-types';
import IconOrImage from './icon_or_image';

const filterValue = val => (val == null ? '' : String(val));

const renderMultivalue = function renderMultivalue(values, onClick) {
  return (
    <table cellPadding="0" cellSpacing="0">
      <tbody>
        {
          values.map((item, i) => (
            item.link && item.external ?
              <tr key={i}>
                <td style={{ border: 0, margin: 0, padding: 0 }}>
                  <IconOrImage icon={item.icon} image={item.image} title={item.title} />
                  <a href={item.link} rel="noopener noreferrer" target="_blank">{filterValue(item.value)}</a>
                </td>
              </tr> :
              <tr onClick={e => onClick(item, e)} key={i} className={item.link ? '' : 'no-hover'} title={item.title}>
                <td style={{ border: 0, margin: 0, padding: 0 }}>
                  <IconOrImage icon={item.icon} image={item.image} title={item.title} />
                  {filterValue(item.value)}
                </td>
              </tr>
          ))
        }
      </tbody>
    </table>
  );
};

const renderValue = function renderValue(value, onClick) {
  return Array.isArray(value) ? renderMultivalue(value, onClick) : <span> {filterValue(value)}</span>;
};

export default function GenericTableRow(props) {
  const { item } = props;
  const value = renderValue(item.value, props.onClick);

  return (
    <tr onClick={e => props.onClick(item, e)} className={item.hoverClass} title={item.title}>
      <td className="label">{item.label}</td>
      <td>
        <IconOrImage icon={item.icon} image={item.image} title={item.title} />
        {value}
      </td>
    </tr>
  );
}

GenericTableRow.propTypes = {
  item: PropTypes.shape({
    hoverClass: PropTypes.string.isRequired,
    link: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number, PropTypes.bool]),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};
