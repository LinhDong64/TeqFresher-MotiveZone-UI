import axios from 'axios'

export const sendContactForm = (data: any) => {
  return axios({
    method: 'post',
    url: `https://mock.stg.offwork.teqnological.asia/
          mock/6092029dfdc7510021577547/contact`,
    data: { data }
  }).then(res => {
    return res.data;
  })
}

export const getTransactionData = () => {
  return axios({
    method: 'get',
    url: `https://mock.stg.offwork.teqnological.asia/mock/6092029dfdc7510021577547/xxxx/transaction`
  }).then(res => {
    return res.data;
  })
}

export const getDataForTransChart = () => {
  return axios({
    method: 'get',
    url: `https://mock.stg.offwork.teqnological.asia/mock/6092029dfdc7510021577547/xxxx/chart`
  }).then(res => {
    return res.data;
  })
}