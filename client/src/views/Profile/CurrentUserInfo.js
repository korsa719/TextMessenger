import React, {Component} from 'react'
import UserProfileInfoCard from './UserProfileInfoCard'

import {withStyles} from '@material-ui/core/styles'
import classnames from 'classnames'

const styles = (theme) => ({
  UserProfileInfoCard: {
    Width: '25%',
    maxWidth: '300px'
  }
})

class CurrentUserInfo extends Component {
  render () {
    const {user, classes} = this.props
    return (
      <div className={classnames(classes.UserProfileInfoCard)}>
        <UserProfileInfoCard user={user}/>
      </div>
    )
  }
}

export default withStyles(styles)(CurrentUserInfo)