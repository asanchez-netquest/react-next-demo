"use client";
import "../../Static/scss/Styles.scss";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FooterComponent from "@/components/footerComponent";
import PasswordIcon from "@mui/icons-material/Password";
import Alert from '@mui/material/Alert';

export default function LoginPage() {
  return (
    <>
      <div className="section">
        <div className="columns is-mobile is-vcentered">
          <div className="column">
            <br />
            <br />
            <br />
            <br />
            
          </div>
        </div>

        <div className="card">
          <div className="card-content">
            <div className="columns is-mobile is-vcentered is-centered">
              <div className="column is-4">
                <figure className="image">
                  <img
                    src="/static/images/logo_wakoopa_orange.png"
                    alt="wakoopa"
                  />
                </figure>
              </div>

              <div className="column">
                <center>
                  <div className="columns is-vcentered is-centered">
                    <div className="column is-6">
                      <label className="label">
                        <AccountCircleIcon />
                        {'  '}Username
                      </label>
                      <div className="control">
                        <input
                          type="text"
                          className="input is-primary is-rounded"
                          id="validationDefault01"
                          placeholder="user@wakoopa.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="columns is-vcentered is-centered">
                    <div className="column is-6 is-centered">
                      <label className="label">
                        <PasswordIcon />
                        {'  '}Password
                      </label>
                      <div className="control">
                        <input
                          type="password"
                          className="input is-primary is-rounded"
                          id="validationDefault02"
                          placeholder="password"
                        />
                        
                        
                      </div>
                    </div>
                  </div>
                  
                  <div className="columns is-vcentered is-centered">
                    <div className="column is-6 is-centered">
                    <Alert severity="error">Incorrect username or password</Alert>
                    <br />
                      <div className="buttons is-centered">
                        <Link className="button is-rounded is-primary" href="/home">
                          Sign In
                        </Link>

                        <Link className="button is-rounded is-text" href="/forgot-password">
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
      <FooterComponent />
        </div>
    </>
  );
}
