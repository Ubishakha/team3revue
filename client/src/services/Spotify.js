import Api from '@/services/Api'

export default {
  completeLogin(code){
    return Api().post("/redirect", {content: code});
  }, 
  getCurrentTrack(){
    return Api().get("/current-track");
  }
}
