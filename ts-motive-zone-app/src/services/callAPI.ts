import axios from 'axios'

export const sendContactForm = (data: any) => {
  return axios({
    method: 'post',
    url: `https://mock.stg.offwork.teqnological.asia/mock/6092029dfdc7510021577547/contact`,
    data: { data }
  }).then(res => {
    return res.data;
  })
}

export const getTransactionData = () => {
  return axios({
    method: 'get',
    url: `https://mock.stg.offwork.teqnological.asia/mock/6092029dfdc7510021577547/xxxx/transaction`
  }).then(async res => {
    return res.data;
  })

}

export async function getDataForChart() {
 return await axios({
    method: 'get',
    url: `https://mock.stg.offwork.teqnological.asia/mock/6092029dfdc7510021577547/xxxx/chart`
  }).then( res => {
    console.log(res.data.data);
    return res.data;
  })
}