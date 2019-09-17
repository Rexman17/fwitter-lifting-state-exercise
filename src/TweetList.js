import React from 'react'
import TweetItem from './TweetItem'

function TweetList(props) {
  console.log("tweetlist props", props)
  return (
    <div className="ui segment">
      <div className="ui feed">
        {props.tweets.map(tweet => <TweetItem key={tweet.id} tweet={tweet} handleTweetLike={props.handleTweetLike}  handle={props.user.handle} photo={props.user.photo}
/>)}
      </div>
    </div>
  )
}

export default TweetList
