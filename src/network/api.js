import axios from "./http"
export const applyForm = (params) => {
  return axios({
    url:'/wx/msg/add',
    method: "post",
    data: params
  })
}

export const getBanner = (params) => {
  return axios({
    url:'/wx/web/getBanner',
    method: "post",
    data: params
  })
}

export const getWebcontent = (params) => {
  return axios({
    url:'/wx/web/getWebcontent',
    method: "post",
    data: params
  })
}
