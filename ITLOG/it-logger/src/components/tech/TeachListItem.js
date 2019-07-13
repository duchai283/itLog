import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/TechAction';

const TeachListItem = ({ tech, deleteTech }) => {
  return (
    <li className="collection-item">
      {tech.firstName} {tech.lastName}
      <a href="#!" className="secondary-content">
        <i
          className="material-icons grey-text"
          onClick={() => deleteTech(tech.id)}
        >
          delete
        </i>
      </a>
    </li>
  );
};

TeachListItem.propTypes = {
  tech: PropTypes.object.isRequired
};

export default connect(
  null,
  { deleteTech }
)(TeachListItem);
