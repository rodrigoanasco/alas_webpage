import viteLogo from '../assets/react.svg'

function events(){
    return(
        <>
        <h1>Events</h1>
        
        <h2>Upcoming Events: Name of the event here</h2>
        <img src={viteLogo} className='upcoming event flyer'></img>
        <p>Small description</p>
        <button className='Form_button' onClick={() => alert('Go to register form')}>Register in our event!</button>

        <h2>Past Events</h2>
        
        <h3>Name of the previous event</h3>
        <img src={viteLogo} className='Past event 1'></img>
        <br></br>
        <button className='gallery_pg' onClick={() => alert('Go to gallery')}>See photos of this event!</button>

        <h3>Name of the pre previous event</h3>
        <img src={viteLogo} className='Past event 2'></img>
        <br></br>
        <button className='gallery_pg' onClick={() => alert('Go to gallery')}>See photos of this event!</button>

        
        <h3>Name of the pre pre previous event</h3>
        <img src={viteLogo} className='Past event 3'></img>
        <br></br>
        <button className='gallery_pg' onClick={() => alert('Go to gallery')}>See photos of this event!</button>

        </>
    )
}

export default events