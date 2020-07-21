import React from "react";
import 'mdbreact/dist/css/mdb.css';
class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName:this.props.userName,
            userImg:this.props.userImg,
            userEmail:this.props.userEmail,
        }
    }
    render(){
        return(
    <div className="container">
    <div className="row text-center">
        <div className="col-sm-12 col-md-8 col-lg-6 mx-auto">
            <div className="card m-b-30" id="specialCard">
                {/* <div className="card-header bg-white text-center">
                    <h5 className="card-title text-black mb-0">{this.state.userName}</h5>
                </div> */}
                <div className="card-body">
                    <div className="xp-social-profile">
                        <div className="xp-social-profile-top">
                            <div className="row">
                                <div className="col-3">
                                    <div className="xp-social-profile-star py-3">
                                        <i className="mdi mdi-star font-24"></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="xp-social-profile-avatar text-center">
                                        <img src={this.state.userImg} alt="user-profile" className="rounded-circle img-fluid"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xp-social-profile-middle text-center">
                            <div className="row">
                                <div className="col auto">
                                    <div className="xp-social-profile-title">
                                        <h5 className="my-1 text-black">{this.state.userName}</h5>
                                    </div>
                                    <div className="xp-social-profile-desc">
                                        <p className="text-muted" >@{this.state.userName}   |   {this.state.userEmail}<br/>And small description of user's field of expertise</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xp-social-profile-bottom text-center">
                            <div className="row">
                                <div className="col auto">
                                    <button type="button" className="btn btn-info">+Follow</button>
                                </div>
                                <div className="col auto">
                                <button type="button" className="btn btn-primary" disabled>Samples</button>
                                </div>
                                <div className="col auto">
                                <button type="button" className="btn btn-success">Hire</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        );
    }
}

export default UserProfile;