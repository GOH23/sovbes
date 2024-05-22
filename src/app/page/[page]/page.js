import MainPage from "../../../../components/MainPageSite/MainPage"

async function getData(pageNum,name,status) {
  console.log(`https://rickandmortyapi.com/api/character/?page=${pageNum}${name == undefined ? "" : `&name=${name}`}${status == undefined ? "" : `&status=${status}`}`)
  const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}${name == undefined ? "" : `&name=${name}`}${status == undefined ? "" : `&status=${status}`}`,{cache: "no-store"})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    
  }
 
  return res.json()
}
export default async function Home(props) {
  const PersonsData = await getData(props.params.page,props.searchParams.name,props.searchParams.status)
  const InfoData = await getData(props.params.page)

  return (<MainPage page={props.params.page} info={InfoData.info} data={PersonsData}/>);
}
