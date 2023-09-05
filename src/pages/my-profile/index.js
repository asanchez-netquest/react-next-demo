"use client";
import "../../Static/scss/Styles.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import NavbarComponent from "@/components/navbarComponent";
import FooterComponent from "@/components/footerComponent";

export default function MyProfilePage() {
  const router = useRouter();
  return (
    <>
      <div className="section">
        <div className="columns">
          <div className="column">
            <NavbarComponent title=" " />
          </div>
        </div>
        <div className="columns is-centered is-vcentered">
          <div className="column is-7">
            <div className="card">
              <div className="card-content">
                  <br />
                <h2>My Profile</h2>
                <br />
                <br />
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">User ID</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control">
                        <input
                          class="input"
                          type="text"
                          placeholder="User ID"
                          value="002"
                          readOnly
                        />
                      </p>
                    </div>

                    <div class="field-label is-normal">
                      <label class="label">Name</label>
                    </div>
                    <div class="field">
                      <p class="control is-expanded">
                        <input class="input" type="text" placeholder="Name" value="Alvaro"/>
                      </p>
                    </div>
                    <div class="field-label is-normal">
                      <label class="label">Surname</label>
                    </div>
                    <div class="field">
                      <p class="control is-expanded">
                        <input
                          class="input"
                          type="text"
                          placeholder="Surname"
                          value="Sanchez"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <br />
                <div class="field is-horizontal">
                  <div class="field-label is-normal">
                    <label class="label">Group</label>
                  </div>
                  <div class="field-body">
                    <div class="field">
                      <p class="control is-expanded">
                        <div class="select is-fullwidth">
                          <select>
                            <option>Select</option>
                            <option selected>Group 1</option>
                            <option>Group 2</option>
                            <option>Group 3</option>
                            <option>Group 4</option>
                          </select>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div class="field is-horizontal">
                <div class="field-label"></div>
                <div class="field-body">
                  <div class="field">
                    <div class="control">
                      <center>
                        <Link
                          className="button is-rounded is-primary"
                          href="/home"
                        >
                          Submit
                        </Link>
                        <Link
                          className="button is-rounded is-text"
                          href="/home"
                        >
                          Cancel
                        </Link>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
              <br />
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
