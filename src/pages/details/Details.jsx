import React from 'react'
import "./Detail.scss"
import {useParams} from "react-router-dom"
import useFetch from "../../hooks/useFetch"
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideosSection from './videosSection/videoSection'

const Details = () => {
  
  const {mediaType,id}=useParams();
  const {data,loading}=useFetch(`/${mediaType}/${id}/videos`)
  const {data:credits,loading:creditsloading}=useFetch(`/${mediaType}/${id}/credits`)
  // console.log(data?.data?.results[0])
  // console.log(credits?.data?.cast)
  // console.log(loading)
  // console.log(data?.data);

  return (
    <div>
      <DetailsBanner video={data?.data?.results[0]} crew={credits?.data?.crew}/>
      <Cast data={credits?.data?.cast} loading={creditsloading}/>
      <VideosSection data={data?.data} loading={loading}/>
    </div>
  )
}
 
export default Details;