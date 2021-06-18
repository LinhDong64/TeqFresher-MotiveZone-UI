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
  // return axios({
  //   method: 'get',
  //   url: `https://mock.stg.offwork.teqnological.asia/mock/6092029dfdc7510021577547/xxxx/transaction`
  // }).then(async res => {
  //   return res.data.data;
  // })
  return {
    message:"200 OK"
  }

}

export async function getDataForChart() {
//  return await axios({
//     method: 'get',
//     url: `https://mock.stg.offwork.teqnological.asia/mock/6092029dfdc7510021577547/xxxx/chart`
//   }).then( res => {
//     return res.data.data;
//   })
  return {
    values:[
      {
        time:'2020-03', 
        value: '-100000'
      },
      {
        time:'2020-04', 
        value: '0'
      },
      {
        time:'2020-05', 
        value: '-200000'
      },
      {
        time:'2020-06', 
        value: '0'
      },
      {
        time:'2020-07', 
        value: '-10000'
      },
      {
        time:'2020-08', 
        value: '0'
      },
      {
        time:'2020-09', 
        value: '0'
      }, 
      {
        time:'2020-10', 
        value: '-390000'
      },
      {
        time:'2020-11', 
        value: '0'
      },

      {
        time:'2021-01', 
        value: '0'
      },
      {
        time:'2021-02', 
        value: '-100000'
      },
      {
        time:'2021-03', 
        value: '-100000'
      },
      {
        time:'2021-04', 
        value: '-54000'
      },
      {
        time:'2021-05', 
        value: '-200000'
      },
      {
        time:'2021-06', 
        value: '-218370'
      },
      {
        time:'2021-07', 
        value: '-10000'
      },
      {
        time:'2021-08', 
        value: '-628920'
      },
      {
        time:'2021-09', 
        value: '-322080'
      }, 
      {
        time:'2021-10', 
        value: '-390000'
      },
      {
        time:'2021-11', 
        value: '-320000'
      },

      // {
      //   time:'2020-01', 
      //   value: '0'
      // },
      // {
      //   time:'2020-02', 
      //   value: '-100000'
      // },
      // {
      //   time:'2020-03', 
      //   value: '-200000'
      // },
      // {
      //   time:'2020-04', 
      //   value: '0'
      // },
      // {
      //   time:'2020-05', 
      //   value: '0'
      // },
      // {
      //   time:'2020-06', 
      //   value: '-253000'
      // },
      // {
      //   time:'2020-07', 
      //   value: '-200000'
      // },
      // {
      //   time:'2020-08', 
      //   value: '0'
      // },
      // {
      //   time:'2020-09', 
      //   value: '0'
      // },
      // {
      //   time:'2020-10', 
      //   value: '-253000'
      // }
    ]
  }
}