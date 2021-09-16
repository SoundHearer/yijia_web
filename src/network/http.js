import axios from 'axios'

let http = axios.create({
  baseUrl: '',
  timeout: 60000,  // 请求超时时间
  crossDomain: true,//设置cross跨域
  withCredentials: true,//设置cross跨域 并设置访问权限 允许跨域携带cookie信息
  //headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});


// 请求拦截器
http.interceptors.request.use(config => {
    return config;
  },error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use((res) => {
    if(res.status === 200) {
      return Promise.resolve(res.data)
    } else {
      return Promise.reject(res.data)
    }
  },error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在200的范围
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      // store.commit('changeNetwork', false);
    }
  }
);

export default http;
