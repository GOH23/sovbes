import MainPage from "../../components/MainPageSite/MainPage"

async function getData(page) {

  const res = await fetch(`https://rickandmortyapi.com/api/character`,{cache: "no-store"})
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}
export default async function Home({searchParams }) {
  const InfoData = await getData()
  const PersonsData = await getData()
  return (<MainPage info={InfoData.info} data={PersonsData}/>);
}
