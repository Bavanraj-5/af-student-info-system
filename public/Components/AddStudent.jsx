import React, { Component } from 'react';

export default class AddStudent extends Component{

    constructor(props){
        super(props);

        this.state = {
            studentID : '',
            name : '',
            email : '',
            password : ''
        }
    }

    handleOnSubmit(e){
        e.preventDefault();

        const new_student = {
            studentID: document.getElementById('studentID').value,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };

        this.props.handleSubmit({
            student: new_student
        });
    }

    render(){
        return(
        <div className='container bg-dark'>
            <div className='row'>
                <div className='card' style={{margin:'10px'} }>
                    <div className='card-header'>
                        <h1 className='modal-header'>Add Student</h1>
                    </div>
                    <div className='card-body'>
                        <center>
                        <form onSubmit={value => this.handleOnSubmit(value)}>
                            <label htmlFor="studentID">Student ID</label>
                            <input type="text" className='form-control' name='studentID' id='studentID' required />
                            <label htmlFor="name">Name with Initials</label>
                            <input type="text" className='form-control' name='name' id='name' required />
                            <label htmlFor="email">Student Email</label>
                            <input type="email" className='form-control' name='email' id='email' required />
                            <label htmlFor="studentID">Password</label>
                            <input type="password" className='form-control' name='password' id='password' required />
                            <br/><br/>
                            <div className='form-group'>
                                <button type='submit' className='btn btn-success form-control'>Add</button>
                                <br/><br/>
                                <button type='reset' className='btn btn-danger form-control'>Cancel</button>
                            </div>
                        </form>
                        </center>
                    </div>
                </div>
            </div>
        </div>
        );
    }

}