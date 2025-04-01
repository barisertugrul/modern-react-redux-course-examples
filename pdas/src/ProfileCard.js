import React from 'react'

function ProfileCard({ title, handle, image, description }) {
  return (
    <div className='card full-height'>
        <div className='card-image'>
            <div className='media is-vcentered is-centered is-justify-content-center'>
                <div className='media-center'>
                    <figure className='image is-48x48'>
                        <img src={image} alt='PDA Logo' />
                    </figure>
                </div>
            </div>
        </div>
        <div className='card-content'>
            <div className='media-content'>
                <p className='title is-4 has-text-primary'>{title}</p>
                <p className='subtitle is-6 has-text-primary-dark'>@{handle}</p>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard