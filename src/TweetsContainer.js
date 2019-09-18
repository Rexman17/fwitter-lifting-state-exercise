import React, { Component } from 'react'
import TweetList from './TweetList'
import UserList from './UserList'
import { users } from './data/data'

class TweetsContainer extends Component {
  state = {
    users: users,
    clickedUser: users[0]
  }

  handleUserClick = (userId) => {
    // console.log("clickin mee", userId)
    const clickedUser = this.state.users.find((user) => {
      return user.id === userId
    })
    // update state
    this.setState({
      clickedUser
    })
  }

  handleTweetLike = (likedTweetId) => {
    // have the tweet id to updating the user's specific tweet for that id to increment the likeypoos
    const mappedTweetz = this.state.clickedUser.tweets.map((tweet) => {
      if (tweet.id === likedTweetId) {
        tweet.favorite_count++
      }
      return tweet
    })
    
    this.setState({
      clickedUser: {...this.state.clickedUser, tweets: mappedTweetz }
    })

  }

  render() {
    // console.log("In TweetsContainer, state is", this.state)
    return (
      <div className="ui main container">
        <div className="ui grid">
          <div className="six wide column">
            <h2 className="ui header">Users</h2>
            <UserList users={this.state.users} handleUserClick={this.handleUserClick} />
          </div>
          <div className="ten wide column">
            <h2 className="ui header">Tweets</h2>
            <TweetList handleTweetLike={this.handleTweetLike} user={this.state.clickedUser} />
          </div>
        </div>
      </div>
    )
  }
}

export default TweetsContainer
