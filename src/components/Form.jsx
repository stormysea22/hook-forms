

const UserForm = ({ inputs, handleSubmit, handleChange }) => {

    return (
        <form className="col-5" onSubmit={handleSubmit}>
            <div className="form-group" >
                <label htmlFor="firstName">First Name</label><br></br>
                <input
                    onChange={handleChange}
                    type="text"
                    name="firstName"
                    value={inputs.firstName}
                /><br></br>
                <span className="text-danger">
                    {inputs.firstName.length < 2 ? "First name should be longer then 2 characters." : ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="LastName">Last Name</label><br></br>
                <input
                    onChange={handleChange}
                    type="text"
                    name="lastName"
                    value={inputs.lastName}
                /><br></br>
                <span className="text-danger">
                    {inputs.lastName.length < 2 ? "Last name should be longer then 2 characters." : ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label><br></br>
                <input
                    onChange={handleChange}
                    type="text"
                    name="email"
                    value={inputs.email}
                /><br></br>
                <span className="text-danger">
                    {inputs.email.length < 2 ? "email should be longer then 2 characters." : ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label><br></br>
                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={inputs.password}
                /><br></br>
                <span className="text-danger">
                    {inputs.password.length < 8 ? "Password should be longer then 8 characters." : ""}
                </span>
            </div>
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label><br></br>
                <input
                    onChange={handleChange}
                    type="password"
                    name="confirmPassword"
                    value={inputs.confirmPassword}
                /><br></br>
                <span className="text-danger">
                    {inputs.confirmPassword === inputs.password ? "" : "Passwords should match."}
                </span>
                <input
                    type="submit"
                    value="Submit"
                    className="btn btn-warning btn-outline-dark"
                />
            </div>
        </form>
    );
};

export default UserForm;