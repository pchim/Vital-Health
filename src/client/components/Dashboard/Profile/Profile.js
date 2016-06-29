import React, { PropTypes } from 'react';
import Info from './Info/Info';
import RightInfo from './Info/RightInfo';
import DetailedInfo from './Info/DetailedInfo';
import BmiChart from './Charts/BmiChart';
import BpChart from './Charts/BpChart';
import WtChart from './Charts/WtChart';
import GlucoseChart from './Charts/GlucoseChart';

const Profile = ({ user }) => (
  <div className="profile-container">
    <Info user={user} />
    <DetailedInfo user={user} />
  </div>
);

Profile.propTypes = {
  user: PropTypes.object
};

export default Profile;
