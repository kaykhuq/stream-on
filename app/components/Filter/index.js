/**
*
* Filter
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Creatable } from 'react-select';
import { createTextFilter } from '../../containers/Campaigns/common';
// import styled from 'styled-components';


class Filter extends React.Component { // eslint-disable-line react/prefer-stateless-function

  shouldComponentUpdate(nextProps) {
    const { value, options } = this.props;
    if (nextProps.value !== value || nextProps.options !== options) {
      return true;
    }
    return false;
  }

  render() {
    const {
      value,
      onChange,
      onTextChange,
      options,
      className,
      hasFilterable,
      placeholder,
      style,
    } = this.props;
    const defaultPlaceholder = hasFilterable ? 'Search or filter using tags...' : 'Search...';
    return (
      <Creatable
      className={className}
      options={options}
      noResultsText="Type text to search, press Enter to save as filter"
      placeholder={placeholder || defaultPlaceholder}
      promptTextCreator={(txt) => `Search for '${txt}'`}
      onChange={(selected) => onChange(selected)}
      onInputChange={(text) => {
        onTextChange(text);
        return text;
      }}
      onBlurResetsInput={false}
      onCloseResetsInput={false}
      newOptionCreator={({ label }) => createTextFilter(label)}
      value={value}
      multi
      style={style}
    />
    );
  }
}

Filter.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  hasFilterable: PropTypes.bool,
  placeholder: PropTypes.node,
  style: PropTypes.object,
};

export default Filter;
