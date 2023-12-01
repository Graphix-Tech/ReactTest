import * as React from "react";
import './Dashboard.css'
import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import { useSort } from "@table-library/react-table-library/sort";
import { Row,Col } from "react-bootstrap";
import { Doughnut } from 'react-chartjs-2';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import BackupTableIcon from '@mui/icons-material/BackupTable';

const Dashboard = () => {
  // Include the data directly in this file
  const data = {
    nodes: [
      { id: 1, Campaigns: 'Cosmetics', Clicks:712, Cost:'USD 4272', Conversions:8, Revenue:'USD 16,568'},
      { id: 2, Campaigns: 'Serums', Clicks:'3,961', Cost:'USD 27,331', Conversions:115, Revenue:'USD 362,526'},
      { id: 3, Campaigns: 'Facewash', Clicks:'9462', Cost:'USD 76,831', Conversions:123, Revenue:'USD 266,800'},
      { id: 4, Campaigns: 'Shampoos', Clicks:439, Cost:'USD 2,151', Conversions:5, Revenue:'USD 11,029'},
      { id: 5, Campaigns: 'Conditioners', Clicks:'1,680', Cost:'USD 3,864', Conversions:49, Revenue:'USD 175,245'},
      { id: 6, Campaigns: 'Facewash 2', Clicks:'4,978', Cost:'USD 29,370', Conversions:189, Revenue:'USD 623,106'},
      { id: 7, Campaigns: 'Total', Clicks:'26,510', Cost:'USD 1,43,819', Conversions:489, Revenue:'USD 15,73,563'},
    ],
  };

  const theme = useTheme(getTheme());

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortFns: {
        CAMPAIGNS: (array) => array.sort((a, b) => a.Campaigns.localeCompare(b.Campaigns)),
        CLICKS: (array) => array.sort((a, b) => a.Clicks - b.Clicks),
        COST: (array) => array.sort((a, b) => parseFloat(a.Cost.split(' ')[1]) - parseFloat(b.Cost.split(' ')[1])),
        CONVERSIONS: (array) => array.sort((a, b) => a.Conversions - b.Conversions),
        REVENUE: (array) => array.sort((a, b) => parseFloat(a.Revenue.split(' ')[1]) - parseFloat(b.Revenue.split(' ')[1])),
      },
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }

  const COLUMNS = [
      {
        label: "Campaigns",
        renderCell: (item) => item.Campaigns,
        sort: { sortKey: "CAMPAIGNS" },
      },
      {
        label: "Clicks",
        renderCell: (item) => item.Clicks,
        sort: { sortKey: "CLICKS" },
      },
      {
        label: "Cost",
        renderCell: (item) => item.Cost,
        sort: { sortKey: "COST" },
      },
      {
        label: "Conversions",
        renderCell: (item) => item.Conversions,
        sort: { sortKey: "CONVERSIONS" },
      },
      {
        label: "Revenue",
        renderCell: (item) => item.Revenue,
        sort: { sortKey: "REVENUE" },
      }
  ];
   //DaoughnutChart Data
   const chartData = {
    labels: ['Male', 'Female', 'Unknown'],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ['#FFA500', '#0000FF', '#000000'],
      },
    ],
  };
  // Doughnut chart options
  const chartOptions = {
    cutoutPercentage: 80,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
     <section>
     <Row className="py-4">
    <Col md={6}>
    <table border={1}>
    <tr>
      <td>
      <h5>Ad Insights</h5>
      <hr/>
      </td>
    </tr>
    <tr>
         <td> <CompactTable columns={COLUMNS} data={data} theme={theme} sort={sort} />
         </td>
    </tr>
    </table>
      </Col>

      {/*Pie chart and tables */}
      <Col md={6} className="ChartAndTable">
      <div className="ad-insights-container">
      <div className="ad-insights-header">
        <h5>Ad Insights</h5>
        <div className="dropdown">
          <select>
            <option value="clicks">Clicks</option>
          </select>
        </div>
      </div>
      
      <div className="ad-insights-content">
        <div className="chart-container">
          <div className="doughnutChart">
            <Doughnut data={chartData} options={chartOptions} />
          </div>
          <div className="chart-data-info">
            {/* Display Doughnut chart data here */}
            <p>40% Male</p>
            <p>35% Female</p>
            <p>25% Unknown</p>
          </div>
        </div>

        {/* Icons at the bottom of the table */}
        <div className="bottom-icons">
          <span><DonutLargeIcon/></span>
          <span><BackupTableIcon/></span>
        </div>
      </div>
    </div>
      </Col>
    </Row>
    </section>
      
    </>
  );
};

export default Dashboard;
