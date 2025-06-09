function events({name, image, link}){
    return(
        <div className="events_card">
            <h2>{name}</h2>
            <img src={image} alt={`${name}'s event`} className="profile_image"/>
            <Link className='event1' to={"/Events"}>event1</Link>
        </div>
    )
}

export default events