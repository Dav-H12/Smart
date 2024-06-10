import { useRef } from 'react'
import Nav from './components/Nav/Nav'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Footer from './components/Footer/Footer'
import { why } from './Db'
import './App.css'

function App({lessons}) {
    const lessonsRef =useRef(null)
    const whyRef =useRef(null)
    const TrainersRef =useRef(null)
    const AboutusRef =useRef(null)

    const scrolltolessons = ()=>{
      lessonsRef.current.scrollIntoView({})
    }
    
    const scrolltoWhy = ()=>{
      whyRef.current.scrollIntoView({})
    }
    
    const scrolltoTrainers = ()=>{
      TrainersRef.current.scrollIntoView({})
    }
    
    
    const scrolltoAboutus= ()=>{
      AboutusRef.current.scrollIntoView({})
    }

    


  return (
   <div className='App'>
       
      <>
        <Nav scrolltolessons={scrolltolessons} scrolltoWhy ={scrolltoWhy }  scrolltoTrainers ={ scrolltoTrainers } scrolltoAboutus={scrolltoAboutus}/>
      </>
      <>
        <Header />
      </>
      <>
        <Section lessons={lessons} why={why} lessonsRef={lessonsRef} whyRef={whyRef} />
      </>
      <>
        <Footer TrainersRef={TrainersRef} AboutusRef={AboutusRef}/>
      </>

   
  

   




   </div>
  )
}

export default App
