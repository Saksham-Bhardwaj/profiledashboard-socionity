import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../App.css';
import NavBar from './NavBarComponent';
import UserProfile from './UserProfile';
import GoogleLogin from "react-google-login";
class Profile extends React.Component {
    
    constructor(props){
      super(props);
      this.state={
        profileView:false,
        userName:"",
        userImg:"",
        userEmail:"",
      };
    }

    responseGoogleSuccess =(response)=>{
      this.setState({
        profileView:true,
        userName:response.profileObj.name ,
        userImg:response.profileObj.imageUrl,
        userEmail:response.profileObj.email,
      });
      console.log(response)
    }
    responseGoogleFailure =(response)=>{
      this.setState({profileView:false});
      console.log(response);
    }
    render(){
      return(
        <div className="bg no-marginLR">
        <div className="row no-marginLR">
          <div className="col no-marginLR no-padding">
          <NavBar/>
          </div>
        </div>
        <div className="row no-marginLR">
          {(!this.state.profileView) && (<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <div className="row">
                  <div className="col" id="wrapper">
                    <GoogleLogin
                        clientId="691713648566-fnhvaebmfefckhmgq8v86bu0q4dhmju7.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogleSuccess}
                        onFailure={this.responseGoogleFailure}
                        cookiePolicy={'single_host_origin'}   
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>)}
          {this.state.profileView && <UserProfile userEmail={this.state.userEmail} userName={this.state.userName} userImg={this.state.userImg}/>}
        </div>
      </div>
      )
  }
}

export default Profile;
