// import axios from 'axios'
import Api from '@/services/Api'
// const request = axios.create({
//   baseURL: "https://api.spotify.com/v1/"
// });

export default {
  index(){
    console.log("I am here")
    return Api().get('users')
  },
}
