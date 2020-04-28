import React, { Component } from 'react';

import { RichText } from 'prismic-reactjs';


let ProfileCard = props => {

  let profileCardStyles = profileCardImage => {
    return (
        {
          backgroundImage: 'url(' + profileCardImage + ')',
          backgroundSize: 'cover',
          paddingTop: '100%'
        }
    )
  }

  let profileCardText = () => {
    return (
      {
          color: 'white',
          fontWeight: '700',
          fontFamily: 'Montserrat',
          position: 'absolute',
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-50%)'
      }
    )
  }

  return (
     <div className="profile-card col-md-6 p-0"> 
         <style>{`       
            .profile-card {
                background-color: #212121;
                background-image: url(https://www.transparenttextures.com/patterns/asfalt-light.png);
            } 

            .profile-card__title img {
                max-width: 100%;
            }
          `}</style>                              
            <div className="profile-card__image text-center" style={profileCardStyles()}>
                <div className="profile-card__text text-center mt-3" style={profileCardText()}>
                  <h1 className="profile-card__title display-1"><img src={props.profile.profile_logo.url} width="400" alt={RichText.asText(props.profile.profile_title)} /></h1>
                   <div className="font-weight-light my-5">Jersey City, New Jersey</div>
                   <div className="font-weight-normal mt-2">Contact for music production inquiries:</div>
                   <div className="font-weight-light mt-2 d-flex align-items-center justify-content-center"><span class="material-icons mr-2">email</span> moust@hemc2.com</div>
                </div>
            </div>
     </div>
  )
}


export default ProfileCard;