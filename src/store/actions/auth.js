import { axios, handleError } from '../../lib'
import toast from 'react-hot-toast'
import Cookies from 'js-cookie'

const altUserData = (data) => ({
  type: 'ALT_USER_DATA',
  data,
})

export const signUp = (data) => async (dispatch, getState) => {
  try {
    const { status, data: response, message } = await axios.post(
      '/auth/signup',
      {
        ...data,
        phone_number: data.phone_number.includes('+234')
          ? data.phone_number
          : `+234${data.phone_number.slice(1, data.phone_number.length)}`,
      },
    )
    if (status === 201) {
      toast.success(message)
      dispatch(altUserData(response.user))
      Cookies.set('token', response.token.token)
    }
    return { status }
  } catch ({ response }) {
    handleError(response)
  }
}

export const signIn = (data) => async (dispatch, getState) => {
  try {
    const { response } = await axios.post('/auth/login', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const createOrder = (data) => async (dispatch, getState) => {
  try {
    const { response } = await axios.post('/user/create_order', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const getOrder = (data) => async (dispatch, getState) => {
  try {
    const { response } = await axios.get('/user/orders', data)
  } catch ({ response }) {
    handleError(response)
  }
}

export const getOrderByTrackingNo = (data) => async (dispatch, getState) => {
  try {
    const { response } = await axios.post('/internal/order_details', data)
  } catch ({ response }) {
    handleError(response)
  }
}
