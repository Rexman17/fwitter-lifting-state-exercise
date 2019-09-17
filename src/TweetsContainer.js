import React, { Component } from 'react'
import TweetList from './TweetList'
import UserList from './UserList'
import { users } from './data/data'

class TweetsContainer extends Component {
  state = {
    users: users,
    tweets: []
  }

  showUserTweets = (userId) => {
    const selectedUser = this.state.users.find((user) => user.id === userId)

    this.setState({
      tweets: selectedUser.tweets,
      user: selectedUser
    })
  }

  tweetLike = (likedTweet) => {
    const tweets = this.state.tweets.map((tweet) => {
    if (tweet.id === likedTweet.id) {
      return {...tweet, favorite_count: tweet.favorite_count + 1}
    } else {
      return tweet;
    }
  })

  this.setState({ tweets })
  }


  render() {
    return (
      <div className="ui main container">
        <div className="ui grid">
          <div className="six wide column">
            <h2 className="ui header">Users</h2>
            <UserList users={this.state.users} showUserTweets={this.showUserTweets} />
          </div>
          <div className="ten wide column">
            <h2 className="ui header">Tweets</h2>
            <TweetList user={this.state.user} tweets={this.state.tweets} handleTweetLike={this.tweetLike} />
          </div>
        </div>
      </div>
    )
  }
}

export default TweetsContainer
