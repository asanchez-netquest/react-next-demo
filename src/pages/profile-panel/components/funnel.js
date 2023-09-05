"use client";

import ComputerIcon from "@mui/icons-material/Computer";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const data = [
  {
    name: "Landed",
    landed: 50,
    started_installation: 10,
    installed: 40,
  },
];

export default function FunnelPage() {
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
              Search
            </button>
          </center>
        </div>
      </div>
      <hr />
      <h2>How did the panelists convert to an install?</h2>
      <p>
        Install Success Rate: <strong>36.8%</strong>
      </p>
      <br />
      <hr />
      <br />

      {/* GENERAL */}

      <div className="columns is-vcentered is-centered">
        <div className="column">
          <BarChart
            width={250}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Landed" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="landed" stackId="a" fill="#6f8320" />
            <Bar
              dataKey="started_installation"
              stackId="a"
              fill="transparent"
            />
            <Bar dataKey="installed" stackId="a" fill="transparent" />
          </BarChart>
        </div>
        <div className="column">
          <span class="tag is-dark is-large">
            10%
            <ArrowForwardIosIcon />
          </span>
        </div>
        <div className="column">
          <BarChart
            width={250}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Started Installation" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="landed" stackId="a" fill="#6f8320" />
            <Bar dataKey="started_installation" stackId="a" fill="#90aa29" />
            <Bar dataKey="installed" stackId="a" fill="transparent" />
          </BarChart>
        </div>
        <div className="column">
          <span class="tag is-dark is-large">
            30%
            <ArrowForwardIosIcon />
          </span>
        </div>
        <div className="column">
          <BarChart
            width={250}
            height={400}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="a" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="landed" stackId="a" fill="#6f8320" />
            <Bar dataKey="started_installation" stackId="a" fill="#90aa29" />
            <Bar dataKey="installed" stackId="a" fill="#afcd37" />
          </BarChart>
        </div>
      </div>
    </>
  );
}
