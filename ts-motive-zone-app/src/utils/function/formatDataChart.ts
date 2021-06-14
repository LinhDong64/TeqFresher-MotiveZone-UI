export default function formatData(data: any, year:number){
  let result:any = [];
  data.map((item:any)=>{
    let temp = item.time.split('-');
    if(+temp[0] === year){
      result.push({year: +temp[0], month: +temp[1],...item});
    }
  })
 return result;
}