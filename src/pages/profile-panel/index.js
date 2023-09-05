"use client";
import React, { useState } from "react";
import "../../Static/scss/Styles.scss";
import { useRouter } from "next/router";
import NavbarComponent from "@/components/navbarComponent";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import OverviewPage from "./components/overview";
import FunnelPage from "./components/funnel";
import ExportsPage from "./components/export";
import FooterComponent from "@/components/footerComponent";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

export default function ProfilePage() {
  const [optionSelected, setOption] = useState(1);
  const router = useRouter();

  const clickSection = (a) => {
    return setOption(a);
  };
  return (
    <>
      <div className="section">
        <div className="columns">
          <div className="column">
            <NavbarComponent title="Profile" />
          </div>
        </div>
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">
                Profile
              </a>
            </li>
          </ul>
        </nav>
        <div className="columns">
          <div className="column">
            <div class="tabs is-boxed">
              <ul>
                <li className={optionSelected === 1 && "is-active"}>
                  <a onClick={(e) => clickSection(1)}>
                    <span class="icon is-small">
                      <PeopleOutlinedIcon />
                    </span>
                    <span>Overview</span>
                  </a>
                </li>
                <li className={optionSelected === 2 && "is-active"}>
                  <a onClick={(e) => clickSection(2)}>
                    <span class="icon is-small">
                      <BarChartOutlinedIcon />
                    </span>
                    <span>Funnel</span>
                  </a>
                </li>
                <li className={optionSelected === 3 && "is-active"}>
                  <a onClick={(e) => clickSection(3)}>
                    <span class="icon is-small">
                      <ExitToAppOutlinedIcon />
                    </span>
                    <span>Exports</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="columns">
              <div className="column">
                {optionSelected === 1 && (
                  <>
                    <br />
                    <OverviewPage />
                    <br />
                  </>
                )}
                {optionSelected === 2 && (
                  <>
                    <br />
                    <FunnelPage />
                    <br />
                  </>
                )}
                {optionSelected === 3 && (
                  <>
                    <br />
                    <ExportsPage />
                    <br />
                  </>
                )}
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
