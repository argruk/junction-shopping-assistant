import React from "react";
import {
} from "semantic-ui-react";
import Avatar from '@material-ui/core/Avatar';
import './Profile.css';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const ProfileContent = () => {
  return (
    <div className="profileHeader">
      <div className="centered">
        <List>
          <ListItem>
            <Avatar alt="" src="#" className="MuiAvatar-root"/>
          </ListItem>
          <ListItem>
            <h1>Name</h1>
          </ListItem>
          <ListItem>
            Email
          </ListItem>
          <ListItem>
            <div>Number Of Family Members: 4</div>
          </ListItem>
          <ListItem>
            <ListItemText primary={`Activate Saving Mode`} />
            <ListItemSecondaryAction>
              <Checkbox />
            </ListItemSecondaryAction>
          </ListItem>

        </List>
      </div>
    </div>
  );
};

export default ProfileContent;
