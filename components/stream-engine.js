import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import Layout from '../components/layout'
import AccessDenied from './access-denied'

export default function StreamEditor ({streamDB}) {
  // If session exists, display content
  return (
    <div>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}