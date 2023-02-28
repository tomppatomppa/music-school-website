import emailjs from '@emailjs/browser'

const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
  process.env

const useEmail = () => {
  const send = async (values) => {
    try {
      await emailjs.send(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        values,
        REACT_APP_USER_ID
      )
      alert(JSON.stringify('Yhteydenotto pyyntö lähetetty', null, 2))
    } catch (e) {
      console.log(e)
    }
  }
  return send
}

export default useEmail
