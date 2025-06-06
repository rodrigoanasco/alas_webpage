import { useState } from 'react'
import temp from './assets/IMG_0223.JPG'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='page'> {/*className is used to apply CSS styles to your HTML elements in react ("class" in regular html)*/}
      

      {/* The first thing being implemented is the navigation bar*/}
      <nav className='navbar'>
        
        {/* This is for the logo of ALAS (should return to the landing page)*/}
        <div className='logo'>LOGO</div>
        
        {/*The navigation bar format is a table*/}
        <table>
          <tr>
            <td>About us</td>
            <td>Events</td>
            <td>Gallery</td>
            <td>Join our Club!</td>
            <td>Collab with us!</td>
          </tr>
        </table>
      </nav>


      


      {/*Below the table goes the picture of ALAS*/}
      <div className='image1'><img src={viteLogo} alt='event1'></img></div>





      {/*Here starts the make text explaining what is the club about*/}
      <p>
        What are we? [...]
        lorem ....
      </p>



      
      {/*To the right of the text above goes the image of an event or an animation or picture, etc... (just presentation)*/}
      <div className='image2'><img src={viteLogo} alt='event1'></img></div>




      {/*Now present our events!*/}
      <h2 className='Text 3'>Take a look to our events</h2>
      <div className='image3'>
        <img src={viteLogo} alt='event1'></img> 
        <img src={viteLogo} alt='event1'></img> 
        <img src={viteLogo} alt='event1'></img>
      </div>



      {/* Button to access our events*/}
      <button className='see_gallery' onClick={() => alert('entered gallery')}>See Complete Gallery</button>


      {/* Join us text and then button */}
      <h2 className='Text4'>Join us! <br></br> yap yap yap yap yap</h2>

      <button className='join_us' onClick={() => alert('Redirected to sfss webpage')}>Join us!</button>



    </main>
  )
}

export default App
