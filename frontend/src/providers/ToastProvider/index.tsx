import React from 'react'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {}

const ToastProvider = (props: Props) => {
  return (
    <ToastContainer position='bottom-left' />
  )
}

export default ToastProvider