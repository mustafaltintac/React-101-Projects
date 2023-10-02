import React from 'react'
import { useParams } from 'react-router-dom'

export default function 
MemberDetails() {
    // const params=useParams()
    // const memberId=params.memberId;

    const {memberId}=useParams()
  return (
    <div>
        MemberDetails {memberId}
    </div>
  )
}
