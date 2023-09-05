"use client";
import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

import SmartphoneIcon from "@mui/icons-material/Smartphone";
import TabletMacIcon from "@mui/icons-material/TabletMac";
import ComputerIcon from "@mui/icons-material/Computer";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const data = [
  { name: "Active Desktop", value: 120 },
  { name: "Active Android - Tablet", value: 20 },
  { name: "Active Android - Smartphone", value: 20 },
  { name: "Acive iOS - Tablet", value: 50 },
  { name: "Acive iOS - Smartphone", value: 60 }
];

const COLORS = ["#0088FE", "#282828", "#FFBB28", "#FF8042", "#1AAC6D"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  //borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function OverviewPage() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div className="columns is-centered">
        <div className="column is-3">
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
            <small>* Date Range can´t be higher than 6 months</small>
          
          </div>
        </div>

       
      </div>
       
      <div className="columns is-vcentered is-centered">
        <div className="column is-3">
        <center>
        <button className="button is-primary is-rounded is-fullwidth">Search</button>
      </center>
        </div>
        </div>
      <br />
      <div className="columns">
        <div className="column">
          <div class="card">
            <header class="card-header">
              <h2>How Many Panelists Are Active?</h2>
            </header>
            <div class="card-content">
              <div class="columns">
                <div class="column">
                  <div class="content">
                    <h1> 100 - Total Panelists</h1>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="card-content">
              <div class="columns">
                <div class="column">
                  <div class="content">
                    <p className="title">
                      70% - <ComputerIcon />{" "}
                      <span className="subtitle">Only Desktop</span>
                    </p>
                  </div>
                </div>
                <div class="column">
                  <div class="content">
                    <Accordion
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                    >
                      <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <p className="title">
                          70% - <AppleIcon />{" "}
                          <span className="subtitle">Only iOS</span>
                        </p>
                      </AccordionSummary>
                      <AccordionDetails>
                        <p className="subtitle">
                          50% - <SmartphoneIcon />{" "}
                          <span className="subtitle">Smartphone</span>
                        </p>
                        <p className="subtitle">
                          50% - <TabletMacIcon />{" "}
                          <span className="subtitle">Tablet</span>
                        </p>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
                <div class="column">
                  <div class="content">
                    <Accordion
                      expanded={expanded === "panel2"}
                      onChange={handleChange("panel2")}
                    >
                      <AccordionSummary
                        aria-controls="panel2d-content"
                        id="panel2d-header"
                      >
                        <p className="title">
                          70% - <AndroidIcon />{" "}
                          <span className="subtitle">Only Android</span>
                        </p>
                      </AccordionSummary>
                      <AccordionDetails>
                        <p className="subtitle">
                          50% - <SmartphoneIcon />{" "}
                          <span className="subtitle">Smartphone</span>
                        </p>
                        <p className="subtitle">
                          50% - <TabletMacIcon />{" "}
                          <span className="subtitle">Tablet</span>
                        </p>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="content">
                    <p className="title">
                      70% - <ComputerIcon /> + <SmartphoneIcon />{" "}
                      <span className="subtitle">Desktop + Smartphone</span>
                    </p>
                  </div>
                </div>
                <div class="column">
                  <div class="content">
                    <p className="title">
                      30% - <ComputerIcon /> + <TabletMacIcon />{" "}
                      <span className="subtitle">Desktop + Tablet</span>
                    </p>
                  </div>
                </div>
                <div class="column">
                  <div class="content">
                    <p className="title">
                      30% - <ComputerIcon /> + <SmartphoneIcon /> +{" "}
                      <TabletMacIcon />{" "}
                      <span className="subtitle">
                        Desktop + Smartphone + Tablet
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          {/* Devices*/}

          <div class="card">
            <header class="card-header">
              <h2>How Many Devices Were Active?</h2>
            </header>

            <div class="card-content">
              <div class="columns is-vcentered is-centered">
                
                <div class="column">
                  <center>
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                  </center>
                </div>
                <div class="column">
                  <div class="content">
                    <p className="title">
                      120 - <ComputerIcon />{" "}
                      <span className="subtitle">Total Active Desktop</span>
                    </p>
                  </div>
                  <hr />
                  <div class="content">
                    <p className="title">
                      20 - <AndroidIcon />{" "}
                      <span className="subtitle">
                        Total Active Android Tablets{" "}
                      </span>
                    </p>
                  </div>
                  <div class="content">
                    <p className="title">
                      20 - <AndroidIcon />{" "}
                      <span className="subtitle">
                        Total Active Android Smartphone{" "}
                      </span>
                    </p>
                  </div>

                  <hr />

                  <div class="content">
                    <p className="title">
                      50 - <AppleIcon />{" "}
                      <span className="subtitle">Total Active iOS Tablets</span>
                    </p>
                  </div>
                  <div class="content">
                    <p className="title">
                      60 - <AppleIcon />{" "}
                      <span className="subtitle">
                        Total Active iOS Smartphone{" "}
                      </span>
                    </p>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

          <br />
        </div>
      </div>
    </>
  );
}
