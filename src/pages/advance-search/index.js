"use client";
import * as React from "react";
import "../../Static/scss/Styles.scss";
import NavbarComponent from "@/components/navbarComponent";
import FooterComponent from "@/components/footerComponent";

import ComputerIcon from "@mui/icons-material/Computer";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import LanguageIcon from "@mui/icons-material/Language";
import AppsIcon from "@mui/icons-material/Apps";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  {
    field: "item",
    headerName: "Item",
    width: 300,
    minWidth: 300,
    maxWidth: 500,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "view1",
    headerName: "Instagram (iOS)",
    width: 300,
    minWidth: 300,
    maxWidth: 500,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "view2",
    headerName: "Facebook (Android)",
    width: 150,
    minWidth: 150,
    maxWidth: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "view3",
    headerName: "Twitter (iOS)",
    width: 150,
    minWidth: 150,
    maxWidth: 300,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "total",
    headerName: "Total Uniques",
    width: 250,
    minWidth: 250,
    maxWidth: 300,
    headerAlign: "center",
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    item: "Unique Panelists",
    view1: "300",
    view2: "600",
    view3: "125",
    total: "1025",
  },
  {
    id: 2,
    item: "Overlap",
    view1: "100",
    view2: "400",
    view3: "250",
    total: "Overlap 3 sites",
  },
  {
    id: 3,
    item: "Reach",
    view1: "",
    view2: "",
    view3: "",
    total: "82%",
  },
  {
    id: 4,
    item: "Views",
    view1: "",
    view2: "",
    view3: "",
    total: "Sum of all page views",
  },
  {
    id: 5,
    item: "Visits",
    view1: "145",
    view2: "687",
    view3: "100",
    total: "Sum all Visits",
  },
  {
    id: 6,
    item: "Duration",
    view1: "300",
    view2: "400",
    view3: "500",
    total: "Sum of all duration",
  },
  {
    id: 7,
    item: "Average of Visits",
    view1: "",
    view2: "",
    view3: "",
    total: "Average of all visits",
  },
  {
    id: 8,
    item: "Average of Duration",
    view1: "",
    view2: "",
    view3: "",
    total: "Average of all Duration",
  },
  {
    id: 9,
    item: "Bounce Rate",
    view1: "",
    view2: "",
    view3: "",
    total: "Bounce Rate",
  },
];

export default function AdvanceSearchPage() {
  const [state, setState] = React.useState({
    apps: true,
    web: false,
    search: true,
  });
  const [devices, setDevices] = React.useState(() => ["phone"]);

  const handleDevices = (event, newDevices) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <>
      <div className="section">
        <div className="columns">
          <div className="column">
            <NavbarComponent title="Advance Search" />
          </div>
        </div>
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">
                Advance Search
              </a>
            </li>
          </ul>
        </nav>
        <div className="columns is-centered">
          <div className="column is-3">
            <label className="label">Devices</label>
            <div class="field has-addons">
              <p class="control">
                <button class="button is-rounded">
                  <span class="icon is-small">
                    <ComputerIcon />
                  </span>
                  <span>Desktop</span>
                </button>
              </p>
              <p class="control">
                <button class="button is-rounded">
                  <span class="icon is-small">
                    <AppleIcon />
                  </span>
                  <span>iOS</span>
                </button>
              </p>
              <p class="control">
                <button class="button is-rounded">
                  <span class="icon is-small">
                    <AndroidIcon />
                  </span>
                  <span>Android</span>
                </button>
              </p>
            </div>
            <label className="label">Websites/Apps</label>
            <div class="field has-addons">
              <p class="control">
                <button class="button is-rounded">
                  <span class="icon is-small">
                    <LanguageIcon />
                  </span>
                  <span>Websites</span>
                </button>
              </p>
              <p class="control">
                <button class="button is-rounded">
                  <span class="icon is-small">
                    <AppsIcon />
                  </span>
                  <span>Apps</span>
                </button>
              </p>
            </div>
          </div>

          <div className="column is-2">
            <label className="label">Panel</label>

            <div className="control">
              <div className="select is-multiple is-primary is-fullwidth">
                <select multiple size="4">
                  <option>Panel 1</option>
                  <option>Panel 2</option>
                  <option>Panel 3</option>
                  <option>Panel 4</option>
                  <option>Panel 5</option>
                  <option>Panel 6</option>
                  <option>Panel 7</option>
                  <option>Panel 8</option>
                </select>
              </div>
            </div>
          </div>

          <div className="column is-3">
            <label class="label">Date From</label>
            <div class="control">
              <input className="input is-primary is-rounded" type="date" />
            </div>
            <label class="label">Date To</label>
            <div class="control">
              <input className="input is-primary is-rounded" type="date" />
            </div>
            <small>* Date Range can´t be higher than 6 months</small>
          </div>
        </div>

        <div className="columns is-vcentered is-centered">
          <div className="column is-3">
            <center>
              <button className="button is-primary is-rounded is-fullwidth">
                New Search
              </button>
            </center>
          </div>
        </div>

        <div className="columns is-centered is v-centered">
          <div className="column"></div>
          <div className="column is-11">
            <div class="card">
              <div class="card-content">
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  slots={{ toolbar: GridToolbar }}
                />
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
      <div className="section">
        <FooterComponent />
      </div>
    </>
  );
}
