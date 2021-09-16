/** @flow */
import toast from 'react-hot-toast'

const handleError = (error) => {
  console.log(error, 'SDjskdsjd')
  let errorMessage = ''
  if (error) {
    const { data } = error
    if (typeof data !== 'object') {
      errorMessage = 'An error occurred, please try again'
    } else {
      data.errors.map((item) => {
        errorMessage = `${errorMessage}${item.message ? item.message : ''}`
        return errorMessage
      })
    }
  } else {
    errorMessage = 'An error occurred, check your internet connection'
  }
  toast.error(errorMessage)
}

export default handleError
