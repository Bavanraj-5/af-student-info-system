import React,{Component} from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';
const keys=require('../../../config/keys');
const JWT_KEY=keys.JWT_KEY;


export default class instr_login extends Component {



    constructor(props){
        super(props);

        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeID=this.onChangeID.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);

        this.state={
            instructorID:'',
            email:'',
            password:'',
            userType:''
        };

    }


    onChangeID(e){
        this.setState({
            instructorID:e.target.value
        })
    }


    onChangeUserType(e){
        this.setState({
            userType:e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password:e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        const new_student={
            instructorID:this.state.instructorID,
            password:this.state.password
        };


        if(!new_student.instructorID){
            alert('Enter instructor ID');
        }else if (!new_student.password){
            alert('Enter Password');
        }else if(!new_student.instructorID && !new_student.password){
            alert('Enter instructor Credentials')
        }else {
            axios.post('http://localhost:5000/api/instructors/login',new_student)
                .then(res=> {
                    console.log(res);
                    this.props.history.push('/InstructorHeader')
                });
        }
    }



    render(){

        return(
            <div>
                <h2 align="center">Instructor Login</h2> <br/>
                <div>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group col-7">
                            <label htmlFor="exampleInputEmail1"><b>Instructor ID</b></label>
                            <input type="text" className="form-control" id="instructorID"
                                   aria-describedby="emailHelp" value={this.state.studentID} onChange={this.onChangeID} placeholder="Instructor ID"/>

                        </div>
                        <div className="form-group col-7">
                            <label htmlFor="exampleInputPassword1"><b>Password</b></label>
                            <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} id="password"
                                   placeholder="Password"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>


            </div>
        );
    }

}