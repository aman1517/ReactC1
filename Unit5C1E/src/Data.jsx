import {useState} from "react"
import React from "react"
import CandidateCard from "./components/CandidateCard"

const IntData=[
    {
        "createdAt":"2022-05-21T15:44:38.267Z",
        "name":"Christine",
        "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        "rating":17655,
        "title":"Corporate",
        "salary":66055,
        "company_name":"O'Conner, Fisher and Shanahan",
        "id":"1"
    },
    {
        "createdAt":"2022-05-21T15:44:38.267Z",
        "name":"Christine",
        "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        "rating":17659,
        "title":"Corporate",
        "salary":66042,
        "company_name":"O'Conner, Fisher and Shanahan",
        "id":"2"
    },
    {
        "createdAt":"2022-05-21T15:44:38.267Z",
        "name":"Christine",
        "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        "rating":17659,
        "title":"Corporate",
        "salary":66042,
        "company_name":"O'Conner, Fisher and Shanahan",
        "id":"3"
    },
    {
        "createdAt":"2022-05-21T15:44:38.267Z",
        "name":"Christine",
        "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        "rating":17659,
        "title":"Corporate",
        "salary":66042,
        "company_name":"O'Conner, Fisher and Shanahan",
        "id":"4"
    },
    {
        "createdAt":"2022-05-21T15:44:38.267Z",
        "name":"Christine",
        "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        "rating":17659,
        "title":"Corporate",
        "salary":66042,
        "company_name":"O'Conner, Fisher and Shanahan",
        "id":"5"
    },
    {
        "createdAt":"2022-05-21T15:44:38.267Z",
        "name":"Christine",
        "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        "rating":17659,
        "title":"Corporate",
        "salary":66042,
        "company_name":"O'Conner, Fisher and Shanahan",
        "id":"6"
    },{
        "createdAt":"2022-05-21T15:44:38.267Z",
        "name":"Christine",
        "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        "rating":17659,
        "title":"Corporate",
        "salary":66042,
        "company_name":"O'Conner, Fisher and Shanahan",
        "id":"7"
    },
    {
        "createdAt":"2022-05-21T15:44:38.267Z",
        "name":"Christine",
        "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        "rating":17659,
        "title":"Corporate",
        "salary":66042,
        "company_name":"O'Conner, Fisher and Shanahan",
        "id":"8"
    },{
        "createdAt":"2022-05-21T15:44:38.267Z",
        "name":"Christine",
        "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        "rating":17659,
        "title":"Corporate",
        "salary":66042,
        "company_name":"O'Conner, Fisher and Shanahan",
        "id":"9"
    },{
        "createdAt":"2022-05-21T15:44:38.267Z",
        "name":"Christine",
        "avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1174.jpg",
        "rating":17659,
        "title":"Corporate",
        "salary":66042,
        "company_name":"O'Conner, Fisher and Shanahan",
        "id":"10"
    }
]
function CandidateCard(){
    const [data,setData]=useState(intData)
    
  return(
      <div >
          {data.map((item)=>(
             
              <ContactCard  key={item.id} name={item.name} rating={item.rating} title={item.title} salary={item.salary}/>
          ))}
          
      </div>
  );
}
export default Data
