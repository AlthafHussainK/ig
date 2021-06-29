import { useState } from "react";
import PropTypes from 'prop-types'
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";

export default function Comments({ docId, comments: allComments, posted, commentInput }) {
  return (
    <>
      <p>Comments go here</p>
    </>
  )
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commentInput: PropTypes.object.isRequired
}