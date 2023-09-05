"use client";

import "../../Static/scss/Styles.scss";
import NavbarComponent from "@/components/navbarComponent";
import FooterComponent from "@/components/footerComponent";
import ComputerIcon from "@mui/icons-material/Computer";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import LanguageIcon from '@mui/icons-material/Language';
import AppsIcon from '@mui/icons-material/Apps';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const columns = [
  {
    field: "domain",
    headerName: "Top",
    width: 350, minWidth: 200, maxWidth: 500,
    headerAlign: "center",
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    domain: "https://google.es",
  },
  {
    id: 2,
    domain: "https://as.es",
  },
  {
    id: 3,
    domain: "https://www.netquest.es",
  },
  {
    id: 4,
    domain: "https://www.investigaciondemercados.es",
  },
  {
    id: 5,
    domain: "https://www.elmundo.es",
  },
  {
    id: 6,
    domain: "https://www.wakoopa.es",
  },
];

export default function RankingsPage() {
  return (
    <>
      <div className="section">
        <div className="columns">
          <div className="column">
            <NavbarComponent title="Rankings" />
          </div>
        </div>
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">
                Rankings
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
                New Rankings Report
              </button>
            </center>
          </div>
        </div>

     <hr />
        <br />
        <br />
        <div className="columns is-centered is-vcentered">
          <div className="column is-4">
            <center>
              {" "}
              <h2>Top 500 Domains</h2>{" "}
            </center>
            <br />

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
              disableColumnFilter
            />
          </div>
          <div className="column is-4">
            <center>
              {" "}
              <h2>Top 500 Apps</h2>{" "}
            </center>
            <br />
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
              disableColumnFilter
            />
          </div>
          <div className="column is-4">
            <center>
              {" "}
              <h2>Top 500 Search Terms</h2>{" "}
            </center>
            <br />
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
              disableColumnFilter
            />
          </div>
        </div>
      </div>
      <div className="section">
        <FooterComponent />
      </div>
    </>
  );
}
