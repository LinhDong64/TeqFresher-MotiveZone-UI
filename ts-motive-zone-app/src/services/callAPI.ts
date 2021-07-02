import axios from 'axios'

const baseUrl = 'http://localhost:1337';
export const getStrapiToken = async()=>{
  const { data } = await axios.post(`${baseUrl}/auth/local`, {
    identifier: 'author@strapi.io',
    password: 'strapi',
  });

  if(localStorage){
    localStorage.setItem('token', data.jwt);
  }else{
    console.log('The browser does not support local storage!');
  }
  console.log('From getStrapiToken',data);
}

export const sendContactForm = async (data: any) => {
  let formData = new FormData();
  const value = {
    fullName: data.fullName,
    email: data.email,
    message: data.message
  }; 

  formData.append('data', JSON.stringify(value));
  formData.append('files.file', data.file, data.file.name);
  
  const instance = axios.create({
    baseURL: baseUrl, 
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  });
  //const url = `https://mock.stg.offwork.teqnological.asia/mock/6092029dfdc7510021577547/contact`;
  const url =`/demo-contact-forms`;
  return await instance.post(url, formData).then(res=>{
    return res;
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