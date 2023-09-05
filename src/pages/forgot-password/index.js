"use client";
import "../../Static/scss/Styles.scss";
import { useRouter } from "next/router";

import FooterComponent from "@/components/footerComponent";
import Link from "next/link";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PasswordIcon from "@mui/icons-material/Password";
import Alert from '@mui/material/Alert';


export default function ForgotPasswordPage() {
  const router = useRouter();
  return (
    <>
      <div className="section">
        <div className="card">
          <div className="card-content">
            <div className="columns is-mobile is-vcentered is-centered">
              <div className="column is-3">
                <figure className="image">
                  <img
                    src="/static/images/logo_wakoopa_orange.png"
                    alt="wakoopa"
                  />
                </figure>
              </div>
              </div>
              <div className="columns is-vcentered is-centered">
              <div className="column is-6">
                <center>
                  <div className="columns is-vcentered is-centered">
                    <div className="column is-6">
                      <label className="label">
                        <AccountCircleIcon />
                        {"  "}Username
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
                      <Alert severity="info">
                        If the username is in the system, you will receive an email with a link to reset your password
                      </Alert>
                      <br />
                      <div className="buttons is-centered">
                        <Link
                          className="button is-rounded is-primary"
                          href="/login"
                        >
                         Submit
                        </Link>

                    
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <FooterComponent />
        </div>
      </div>
    </>
  );
}
