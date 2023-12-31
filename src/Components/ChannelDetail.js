import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import { fetchData } from '../assets/fetchData'


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
  const {id}=useParams()
  
  console.log(channelDetail)
  console.log(videos)
  
  useEffect(()=>{
    fetchData(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]))

    fetchData(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items))
  },[id])


  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(120,9,121,1) 12%, rgba(80,116,177,1) 65%, rgba(0,212,255,1) 100%)',
          zIndex:10,
          height:'300px'
        }}>
         
        </div>
        <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>

      </Box>

      <Box display='flex' p='2'>
        <Box sx={{mr:{sm: '100px'}}}/> {/**margin to be applied only to small devices and above not to xs screens */}
          <Videos videos={videos}/>
        

      </Box>
      
    </Box>
  )
}

export default ChannelDetail
