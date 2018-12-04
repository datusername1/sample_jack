import React from 'react';
import style from '../styles/MeetOurTeam.css';

const MeetOurTeam = function(props) {
  return (
    <div className="row small-up-1 medium-up-2 large-up-3">
      {props.agents.map(agent => (
        <div className={`column ${style.column}`}>
          <div className={`callout ${style.callout}`}>
            <p className={`agentName ${style.agentName}`}>{`${
              agent.firstName
            } ${agent.lastName}`}</p>
            <p>
              <img className={`imgs ${style.image}`} src={agent.img} />
            </p>
            <p className={`job ${style.job}`}>{agent.job}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeetOurTeam;
