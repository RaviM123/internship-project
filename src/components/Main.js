import React, {useState, useEffect} from 'react'

function Main(){
  const [user,setuser] = useState([]);
  const fetchData = () => {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=a8ae8308bceefd8d9b2f65fdd6a3fc0a`)
    .then((response)=>{
      return response.json();
    }).then((data)=>{
      let ravi = data.results;
      setuser(ravi)
    })
  }
  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className='movies-list'>
      { user.map(data =>(
       <div class="movies-card text-white bg-dark">

    <img class="card-img-top movies-img"  src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="..." />
    <div class="card-body">
      <h5 class="card-title movies-title">{data.original_title}</h5>
      {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p> */}
      {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
      <button type="button" class="btn btn-secondary btn-lg movies-button" disabled>Button</button>
    </div>
    </div>
    ))
      }
    </div>
  )
}


export default Main;