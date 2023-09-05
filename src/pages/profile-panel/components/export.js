"use client";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import DownloadIcon from "@mui/icons-material/Download";

import ComputerIcon from "@mui/icons-material/Computer";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

const columns = [
  {
    field: "date",
    headerName: "Date",
    width: 500,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "download",
    headerName: "Download",
    width: 400,
    renderCell: (params) => {
      if (params.row.download === "download") {
        return (
          <button class="button is-text is-fullwidth is-rounded">
            download <DownloadIcon />
          </button>
        );
      }
      return (
        <button class="button is-light is-fullwidth is-rounded" disabled>
          running
        </button>
      );
    },
    headerAlign: "center",
    align: "center",
  },
];

const rows = [
  {
    id: 1,
    date: "24/07/2023",
    download: "running",
  },
  {
    id: 2,
    date: "23/07/2023",
    download: "download",
  },
  {
    id: 3,
    date: "22/07/2023",
    download: "download",
  },
  {
    id: 4,
    date: "21/07/2023",
    download: "download",
  },
  {
    id: 5,
    date: "20/07/2023",
    download: "download",
  },
  {
    id: 6,
    date: "19/07/2023",
    download: "download",
  },
  {
    id: 7,
    date: "18/07/2023",
    download: "download",
  },
  {
    id: 8,
    date: "19/07/2023",
    download: "download",
  },
  {
    id: 9,
    date: "18/07/2023",
    download: "download",
  },
  {
    id: 10,
    date: "17/07/2023",
    download: "download",
  },
  {
    id: 11,
    date: "16/07/2023",
    download: "download",
  },
];

export default function ExportsPage() {
  return (
    <>
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
              New Export
            </button>
          </center>
        </div>
      </div>
      <br />
      <div className="columns is-centered is v-centered"></div>
      <div className="columns is-centered is v-centered">
        <div className="column is-9">
          <div class="card">
            <div class="card-content">
              
              <p />
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
