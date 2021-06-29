import { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { updateLoggedInUserFollowing, updateFollowedUserFollowers } from '../../services/firebase'

export default function SuggestedProfile({ spDocId, username, profileId, userId }) {
  const [followed, setFollowed] = useState(false)

  async function handleFollowUser() {
    setFollowed(true)

    await updateLoggedInUserFollowing(loggedInUserDocId, profileId, false) 

    await updateFollowedUserFollowers(spDocId, userId)

  }

  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <img 
          className="rounded-full w-8 flex mr-3"
          src={`/images/avatars/${username}.jpg`}
          alt=""
        />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <div>
        <button 
          className="font-bold text-xs text-blue-medium"
          type="button"
          onClick={handleFollowUser} 
        >
          Follow
        </button>
      </div>
    </div>
  ) : null
}

SuggestedProfile.propTypes = {
  spDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  loggedInUserDocId: PropTypes.string.isRequired
}