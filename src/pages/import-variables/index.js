"use client";
import "../../Static/scss/Styles.scss";
import { useRouter } from "next/router";
import NavbarComponent from "@/components/navbarComponent";
import FooterComponent from "@/components/footerComponent";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";

const columns = [
  { field: "title", headerName: "Title", width: 400 },
  { field: "status", headerName: "Status", width: 100 },
  { field: "total_rows", headerName: "Total Rows", width: 100 },
  { field: "columns", headerName: "Columns", width: 100 },
  { field: "panel", headerName: "Panel", width: 100 },
  { field: "creator", headerName: "Creator", width: 150 },
  { field: "imported_at", headerName: "Imported At", width: 150 }
  
];

const rows = [
  { id:1, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:2, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:3, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:4, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:5, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:6, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:7, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:8, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:9, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:10, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:11, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:12, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:13, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:14, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"},
  { id:15, title: "test demo.csv", status: "preview", total_rows: "5", columns: "-", panel: "-", creator: "Wakoopa Admin", imported_at: "25/11/2020"}
];

export default function ImportVariablesPage() {
  const router = useRouter();
  return (
    <>
      <div className="section">
        <div className="columns">
          <div className="column">
            <NavbarComponent title="Import Variables" />
          </div>
        </div>
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">
                Import Variables
              </a>
            </li>
          </ul>
        </nav>
        <div className="columns is-vcentered is-centered">
          <div className="column"></div>
          <div className="column">
            <div class="buttons">
              <button class="button is-primary">New</button>
              <button class="button is-warning" disabled>
                View
              </button>
              <button class="button is-text" disabled>
                Delete
              </button>
            </div>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              slots={{ toolbar: GridToolbar }}
            />
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
