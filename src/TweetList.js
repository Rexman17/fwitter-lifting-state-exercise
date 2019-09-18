import React from 'react'
import TweetItem from './TweetItem'

function TweetList(props) {
  console.log(props, "in TweetList")
  return (
    <div className="ui segment">
      <div className="ui feed">
        {props.user.tweets.map(tweet => <TweetItem key={tweet.id} handleTweetLike={props.handleTweetLike} handle={props.user.handle} photo={props.user.photo} tweet={tweet} />)}
      </div>
    </div>
  )
}

export default TweetList
