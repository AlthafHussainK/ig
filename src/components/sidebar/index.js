import useUser from "../../hooks/use-user"
import User from './user'
import Suggestions from './suggestions'

export default function Sidebar() {
  const {
     user: { docId, fullname, username, userId, following } 
    } = useUser()

  return (
    <div className="p-4">
      <User username={username} fullname={fullname} />
      <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
    </div>
  )
}