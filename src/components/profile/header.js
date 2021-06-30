import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
import useUser from '../../hooks/use-user'
import { isUserFollowingProfile } from '../../services/firebase'


export default function Header({ 
  photosCount,  
  followerCount, 
  setFollowerCount,
  profile: { docId: profileDocId, userId: profileUserId, fullname, following = [] } 
  }) {
  const { user } = useUser()
  const [isFollowingProfile, setIsFollowingProfile] = useState(false)

  useEffect(() => {
    const isLoggedInUserFollowingProfile = async () => {
      const isFollowing = await isLoggedInUserFollowingProfile(user.username, profileUserId)
      setIsFollowingProfile(isFollowing)
    }

    if (user.username && profileUserId) {
      isLoggedInUserFollowingProfile()
    }
  }, [user.username, profileUserId])

  return null
}

Header.propTypes = {
  photosCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  setFollowerCount: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    docId: PropTypes.string,
    userId: PropTypes.string,
    fullname: PropTypes.string,
    following: PropTypes.string,
  }).isRequired 
}