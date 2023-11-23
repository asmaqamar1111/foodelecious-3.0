/* eslint-disable jsx-a11y/anchor-is-valid */
import {useNavigate} from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    return (
      <div id="app" className="app app-full-height app-without-header">
        

        <div class="register">
  <div class="register-content">
    <form>
      <h1 class="text-center">Sign Up</h1>
      <p class="text-inverse text-opacity-50 text-center">One Admin ID is all you need to access all the Admin services.</p>
      
      <div class="mb-3">
        <label class="form-label">Name <span class="text-danger">*</span></label>
        <input type="text" class="form-control form-control-lg bg-white bg-opacity-5" placeholder="e.g John Smith"/>
      </div>

      <div class="mb-3">
        <label class="form-label">Email Address <span class="text-danger">*</span></label>
        <input type="text" class="form-control form-control-lg bg-white bg-opacity-5" placeholder="username@address.com"/>
      </div>

      <div class="mb-3">
        <label class="form-label">Password <span class="text-danger">*</span></label>
        <input type="password" class="form-control form-control-lg bg-white bg-opacity-5"/>
      </div>

      <div class="mb-3">
        <label class="form-label">Confirm Password <span class="text-danger">*</span></label>
        <input type="password" class="form-control form-control-lg bg-white bg-opacity-5"/>
      </div>

      <div class="mb-3">
        <label class="form-label">Country <span class="text-danger">*</span></label>
        <select class="form-select form-select-lg bg-white bg-opacity-5">
          <option>United States</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Gender <span class="text-danger">*</span></label>
        <select class="form-select form-select-lg bg-white bg-opacity-5">
          <option>Female</option>
        </select>
      </div>

      <div class="mb-3">
        <label class="form-label">Date of Birth <span class="text-danger">*</span></label>
        <div class="row gx-2">
          <div class="col-6">
            <select class="form-select form-select-lg bg-white bg-opacity-5">
              <option>Month</option>
            </select>
          </div>
          <div class="col-3">
            <select class="form-select form-select-lg bg-white bg-opacity-5">
              <option>Day</option>
            </select>
          </div>
          <div class="col-3">
            <select class="form-select form-select-lg bg-white bg-opacity-5">
              <option>Year</option>
            </select>
          </div>
        </div>
      </div>

      <div class="mb-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="customCheck1"/>
          <label class="form-check-label" for="customCheck1">
            I have read and agree to the <a href="#/" style={{color:'#e75300'}}>Terms of Use</a> and <a href="#/" style={{color:'#e75300'}}>Privacy Policy</a>.
          </label>
        </div>
      </div>

      <div class="mb-3">
        <button type="submit" class="btn btn-outline-theme btn-lg d-block w-100">Sign Up</button>
      </div>

      <div class="text-inverse text-opacity-50 text-center">
        Already have an Admin ID? <a href=""style={{color:'#e75300'}} onClick={() => navigate('/Login')}>Sign In</a>
      </div>
    </form>
  </div>
</div>

       
      </div>
    );
  }
  
  export default Register;
  