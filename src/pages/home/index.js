"use client";
import "../../Static/scss/Styles.scss";
import { useRouter } from "next/router";
import NavbarComponent from "@/components/navbarComponent";
import FooterComponent from "@/components/footerComponent";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

export default function LandingPage() {
  const router = useRouter();
  return (
    <>
      <div className="section">
        <div className="columns">
          <div className="column">
            <NavbarComponent title=" "/>
          </div>
        </div>
        <section className="hero">
          <div className="hero-body">
            <p className="title">Hi Álvaro,</p>
            <p className="subtitle">Welcome to Wakoopa Client Platform</p>
          </div>
        </section>

        <div className="card">
          <div className="card-content">
            <div className="content">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-12">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child notification is-primary">
                        <p className="title">
                          24 - <PeopleAltIcon />{" "}
                          <span className="subtitle">Total Panelists</span>
                        </p>
                      </article>
                      <article className="tile is-child notification is-secondary">
                        <p className="title">
                          43 - <PeopleOutlineIcon />{" "}
                          <span className="subtitle">Inactive Panelists</span>
                        </p>
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child notification is-warning">
                        <p className="title">24</p>
                        <p className="subtitle">Total Active Devices</p>

                        <hr />

                        <p className="title">
                          70% - <SmartphoneIcon />{" "}
                          <span className="subtitle">Only Smartphone</span>
                        </p>

                        <p className="title">
                          30% - <TabletMacIcon />{" "}
                          <span className="subtitle">Only Tablet</span>
                        </p>

                       <p className="title">
                          30% - <TabletMacIcon />{" "}
                          <span className="subtitle">Only Tablet</span>
                        </p>
                      </article>
                    </div>
                  </div>
                </div>
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
