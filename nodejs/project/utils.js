async function fetchdata(url){
    const data = await fetch(url)
    return await data.json()
}

module.exports = {fetchdata}