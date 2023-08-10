import React,{useEffect,useState} from 'react'
import { Fragment } from 'react'
import AuthorCard from '../../components/client/author/AuthorCard'
import axios from 'axios'

const AuthorListing = () => {
  const [authors,setAuthors]=useState([])
  const fetchAutor=async()=>{
    const response=await axios.get('http://localhost:5000/api/v1/writers')
    setAuthors(response.data)
  }
  useEffect(()=>{
    fetchAutor()
  },[])
  console.log('authors',authors);
  
    return (
        <Fragment>
            <div class="page-content mt-4 mt-4">
                <div class="container">
                    <div class="row">
                       {authors?.map((author)=>{
                          return <AuthorCard author={author} />
                        })
                       }
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AuthorListing