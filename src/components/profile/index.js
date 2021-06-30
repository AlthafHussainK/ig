import { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import { getUserPhotosByUsername } from '../../services/firebase'
import Photos from './photos'

export default function Profile({ user }) {
  const reducer = (state, newState) => ({ ...state, ...newState })
  const initialState = { 
    profile: {},
    photosCollection: [],
    followerCount: 0
  }

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUsername(user.username)
      dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length })
    }
    getProfileInfoAndPhotos()
  }, [user.username])

  return <>
   <Header />
   <Photos photos={photosCollection} />
   <p>{user.username}' Profile</p>
  </>
}

Profile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number,
    emailAddress: PropTypes.string,
    followers: PropTypes.array,
    following: PropTypes.array,
    fullname: PropTypes.string,
    userId: PropTypes.string,
    username: PropTypes.string
  })
};