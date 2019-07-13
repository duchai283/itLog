import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/TechAction';

const TechOptions = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <React.Fragment>
      {!loading &&
        techs !== null &&
        techs.map(t => (
          <option value={`${t.firstName} ${t.lastName}`} key={t.id}>
            {t.firstName} {t.lastName}
          </option>
        ))}
    </React.Fragment>
  );
};

TechOptions.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(
  mapStateToProps,
  { getTechs }
)(TechOptions);
