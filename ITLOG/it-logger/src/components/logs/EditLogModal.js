import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/LogAction';
import PropTypes from 'prop-types';
import TechOptions from '../tech/TechOptions';

const EditLogModal = ({ current, updateLog, techs }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter all fields' });
    } else {
      console.log(message, attention, tech);
      const newLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      };
      updateLog(newLog);
      M.toast({ html: `Log Updated by ${tech}` });
      setMessage('');
      setAttention(false);
      setTech('');
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={StyleModal}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              {current ? '' : 'Log Message'}
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label htmlFor="attention">
                <input
                  id="attention"
                  type="checkbox"
                  className="field-in"
                  checked={attention}
                  onChange={e => {
                    setAttention(!attention);
                  }}
                  value={attention}
                />
                <span>Need attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

EditLogModal.propsType = {
  current: PropTypes.object.isRequired,
  updateLog: PropTypes.func.isRequired,
  techs: PropTypes.array.isRequired
};
const StyleModal = {
  width: '75%',
  height: '75%'
};
const mapStateToProps = state => ({
  current: state.log.current,
  techs: state.tech.techs
});

export default connect(
  mapStateToProps,
  { updateLog }
)(EditLogModal);
