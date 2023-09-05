"use client";

import "../../Static/scss/Styles.scss";
import ComputerIcon from "@mui/icons-material/Computer";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import NavbarComponent from "@/components/navbarComponent";
import FooterComponent from "@/components/footerComponent";
import LanguageIcon from "@mui/icons-material/Language";
import AppsIcon from "@mui/icons-material/Apps";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    unique_panellists: 500,
    views: 2000,
    visits: 1400,
    duration: 500,
  },
  {
    name: "February",
    unique_panellists: 300,
    views: 1500,
    visits: 1800,
    duration: 200,
  },
  {
    name: "March",
    unique_panellists: 700,
    views: 1000,
    visits: 2000,
    duration: 300,
  },
  {
    name: "April",
    unique_panellists: 500,
    views: 1200,
    visits: 1500,
    duration: 800,
  },
  {
    name: "May",
    unique_panellists: 100,
    views: 1700,
    visits: 500,
    duration: 200,
  },
  {
    name: "June",
    unique_panellists: 200,
    views: 800,
    visits: 900,
    duration: 1000,
  },
  {
    name: "July",
    unique_panellists: 400,
    views: 200,
    visits: 1000,
    duration: 1200,
  },
];

export default function VisualReportPage() {
  return (
    <>
      <div className="section">
        <div className="columns">
          <div className="column">
            <NavbarComponent title="Visual Reports" />
          </div>
        </div>
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li class="is-active">
              <a href="#" aria-current="page">
                Visual Report
              </a>
            </li>
          </ul>
        </nav>
        <div className="columns is-centered">
          <div className="column is-3">
            <label className="label">KPI</label>
            <div class="select is-fullwidth">
              <select>
                <option selected>Select</option>
                <option>Unique Panelists</option>
                <option>Views</option>
                <option>Visits</option>
                <option>Duration</option>
              </select>
            </div>
          </div>
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
            <p>&nbsp;</p>
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
                New Visual Report
              </button>
            </center>
          </div>
        </div>

        <br />

        <div className="columns is v-centered is-centered">
          <div className="column">
            <center>
              <LineChart
                width={1200}
                height={700}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="unique_panellists"
                  stroke="#1AAC6D"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#dd813e"
                  activeDot={{ r: 8 }}
                />
                <Line
                  type="monotone"
                  dataKey="visits"
                  stroke="#282828"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="duration" stroke="#8884d8" />
              </LineChart>
            </center>
          </div>
        </div>
      </div>
      <div className="section">
        <FooterComponent />
      </div>
    </>
  );
}
