// import axios from 'axios'
import Api from '@/services/Api'
// const request = axios.create({
//   baseURL: "https://api.spotify.com/v1/"
// });

export default {
  completeLogin(code){
    return Api().post("/redirect", {content: code});
  }, 
  getCurrentTrack(){
    return Api().get("/current-track");
  }
}
