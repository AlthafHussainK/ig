import { useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import { getUserByUsername, getUserPhotosByUsername } from '../../services/firebase'

export default function Profile({ user }) {
  const reducer = (state, newState) => ({ ...state, ...newState })
  const initialState = { 
    profile: {},
    photoCollection: [],
    followerCount: 0
  }

  const [{ profile, photoCollection, followerCount }, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUsername(user.username)
      console.log('photosssssss: ', photos)
      // dispatch({ profile: user, photoCollection: photos, followerCount: user.followers.length })
    }
    if (user.username) {
      getProfileInfoAndPhotos()
    }
  }, [user.username])

  return <>
   <Header />
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