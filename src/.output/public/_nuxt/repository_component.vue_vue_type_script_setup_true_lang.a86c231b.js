import{v as n,x as i,k as c,o as l,l as d,m as o,t as a}from"./entry.69264355.js";const f=()=>{const t=n("repository_state",()=>({search_way:"",repo_data:{}}));return{state:i(t),setRepository:p(t)}},p=t=>(s,e)=>(t.value.search_way=s,t.value.repo_data=e),_={class:"repository-container-top flex ml-2"},m={class:"repository-container-left"},u={class:"text-lg"},y={class:"repository-container-bottom flex ml-2"},h={class:"flex items-center"},v=["src"],g=c({__name:"repository_component",props:["repository_data"],setup(t){const s=e=>{window.location.href=e};return(e,r)=>(l(),d("div",{class:"repository-components cursor-pointer bg-neutral-800 rounded-md drop-shadow-md text-white m-2",onClick:r[0]||(r[0]=w=>s(t.repository_data.html_url))},[o("div",_,[o("div",m,[o("p",u,a(t.repository_data.name),1)])]),o("div",y,[o("div",h,[o("p",null,a(t.repository_data.owner.login),1),o("img",{class:"w-10 h-10 rounded-3xl",src:t.repository_data.owner.avatar_url},null,8,v)])])]))}});export{g as _,f as u};
