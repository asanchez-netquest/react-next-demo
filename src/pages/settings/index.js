"use client";
import "../../Static/scss/Styles.scss";
import NavbarComponent from "@/components/navbarComponent";
import FooterComponent from "@/components/footerComponent";
import { DataGrid,GridToolbar } from "@mui/x-data-grid";

const columns = [
  { field: "name", headerName: "Name", width: 300 },
  { field: "group_name", headerName: "Group Name", width: 200 },
  { field: "active", headerName: "Active", width: 200 },
  { field: "updated_at", headerName: "Updated At", width: 200 },
  { field: "created_at", headerName: "Created At", width: 200 }
  
];

const rows = [
  { id:1, name: "John Smith", group_name: "Admin", active: "Active", updated_at: "02/08/2020", created_at: "01/06/2019"},
  { id:2, name: "John Smith", group_name: "Admin", active: "Active", updated_at: "02/08/2020", created_at: "01/06/2019"},
  { id:3, name: "John Smith", group_name: "Admin", active: "Active", updated_at: "02/08/2020", created_at: "01/06/2019"},
  { id:4, name: "John Smith", group_name: "Admin", active: "Active", updated_at: "02/08/2020", created_at: "01/06/2019"},
  { id:5, name: "John Smith", group_name: "Admin", active: "Active", updated_at: "02/08/2020", created_at: "01/06/2019"},
  { id:6, name: "John Smith", group_name: "Admin", active: "Active", updated_at: "02/08/2020", created_at: "01/06/2019"},
  { id:7, name: "John Smith", group_name: "Admin", active: "Active", updated_at: "02/08/2020", created_at: "01/06/2019"},
  { id:8, name: "John Smith", group_name: "Admin", active: "Active", updated_at: "02/08/2020", created_at: "01/06/2019"},
  { id:9, name: "John Smith", group_name: "Admin", active: "Active", updated_at: "02/08/2020", created_at: "01/06/2019"},
  { id:10, name: "John Smith", group_name: "Admin", active: "Active", updated_at: "02/08/2020", created_at: "01/06/2019"},
  { id:11, name: "John Smith", group_name: "Admin", active: "Active", updated_at: "02/08/2020", created_at: "01/06/2019"},
  ];

export default function SettingsPage() {
  return (
    <>
      <div className="section">
        <div className="columns">
          <div className="column">
            <NavbarComponent title="Settings" />
          </div>
        </div>
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">
               Settings
              </a>
            </li>
          </ul>
        </nav>
        <div className="columns is-vcentered is-centered">
          <div className="column"></div>
          <div className="column">
            <div class="buttons">
              <button class="button is-primary is-rounded">New</button>
              <button class="button is-warning is-rounded" disabled>
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
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10]}
              slots={{ toolbar: GridToolbar }}
              checkboxSelection
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
