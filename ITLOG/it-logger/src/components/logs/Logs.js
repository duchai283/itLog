import React, { useEffect } from 'react';
import LogItem from './LogItem';
import PreLoaded from '../layout/PreLoaded';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/LogAction';
import PropTypes from 'prop-types';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);
  if (loading || logs === null) {
    return <PreLoaded />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <h4>There are no logs</h4>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
