import React, { useEffect } from 'react';
import TechListItem from './TeachListItem';
import { getTechs } from '../../actions/TechAction';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();

    //eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <div className="collection-header">
          <h4 className="center">Technician List</h4>
        </div>
        <ul className="collection">
          {techs && !loading && techs.length === 0 ? (
            <p>There are no technician right now</p>
          ) : (
            techs !== null &&
            techs.map(tech => <TechListItem key={tech.id} tech={tech} />)
          )}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propsTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechListModal);
