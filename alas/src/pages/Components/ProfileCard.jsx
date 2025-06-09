function ProfileCard({ role, name, description, image}) {
    return (
        <div className="profile_card">
            <h3>{role}</h3>
            <p>{name}</p>
            <p>{description}</p>
            <img src={image} alt={`${name}'s portrait`} className="profile_image"/>
        </div>
    )
}

export default ProfileCard