import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetProgRequest } from "../redux-saga/Action/ProgAction"
import { GetContRequest } from "../redux-saga/Action/ContAction"
import styles from '../component/pages/njs.module.scss'
import { useRouter } from "next/router"
import Link from "next/link"

export default function RegularBootcamp() {
  const router = useRouter()
  const { contId } = router.query
  return (
    <div>
      <h1></h1>
    </div>
  )
}
