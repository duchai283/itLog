import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addLog } from '../../actions/LogAction';
import PropTypes from 'prop-types';
import TechOptions from '../tech/TechOptions';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTeach] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter all fields' });
    } else {
      const log = {
        message,
        attention,
        tech,
        date: new Date()
      };
      addLog(log);
      M.toast({ html: `Log added by ${tech}` });
      setMessage('');
      setAttention(false);
      setTeach('');
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={StyleModal}>
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
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTeach(e.target.value)}
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
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={attention}
                onChange={e => {
                  setAttention(!attention);
                }}
                value={!attention}
              />
              <span> Need attention</span>
            </label>
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

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

const StyleModal = {
  width: '75%',
  height: '75%'
};

const mapStateToProps = state => ({
  techs: state.tech.techs
});

export default connect(
  mapStateToProps,
  { addLog }
)(AddLogModal);
