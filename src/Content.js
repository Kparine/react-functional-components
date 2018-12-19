import React from 'react'
import Chart from './Chart'
import Tablerow from './Tablerow'

const table = [{
  id: 1001,
  first_name: "Normand",
  last_name: "Pagin",
  email: "npagin0@gizmodo.com",
  ip_address: "48.216.125.9"
}, {
  id: 1002,
  first_name: "Charline",
  last_name: "Jereatt",
  email: "cjereatt1@cam.ac.uk",
  ip_address: "220.196.199.25"
}, {
  id: 1003,
  first_name: "Cheslie",
  last_name: "Ovitts",
  email: "covitts2@cbc.ca",
  ip_address: "183.143.193.134"
}, {
  id: 1004,
  first_name: "Camile",
  last_name: "Breache",
  email: "cbreache3@mozilla.com",
  ip_address: "14.174.245.135"
}, {
  id: 1005,
  first_name: "Reube",
  last_name: "Cesconi",
  email: "rcesconi4@state.tx.us",
  ip_address: "107.253.163.159"
}, {
  id: 1006,
  first_name: "Sigfrid",
  last_name: "Lednor",
  email: "slednor5@weather.com",
  ip_address: "200.121.234.171"
}, {
  id: 1007,
  first_name: "Iseabal",
  last_name: "de Clerc",
  email: "ideclerc6@tiny.cc",
  ip_address: "160.58.134.92"
}, {
  id: 1008,
  first_name: "Waite",
  last_name: "McRae",
  email: "wmcrae7@infoseek.co.jp",
  ip_address: "28.64.36.237"
}, {
  id: 1009,
  first_name: "Ameline",
  last_name: "Penkethman",
  email: "apenkethman8@studiopress.com",
  ip_address: "250.3.180.142"
}, {
  id: 1010,
  first_name: "Bessy",
  last_name: "Paddy",
  email: "bpaddy9@cnn.com",
  ip_address: "85.63.44.86"
}, {
  id: 1011,
  first_name: "Ximenez",
  last_name: "Salazar",
  email: "xsalazara@comsenz.com",
  ip_address: "222.222.203.100"
}, {
  id: 1012,
  first_name: "Blinnie",
  last_name: "Goldney",
  email: "bgoldneyb@mapy.cz",
  ip_address: "215.197.118.56"
}, {
  id: 1013,
  first_name: "Emilie",
  last_name: "Oliver",
  email: "eoliverc@walmart.com",
  ip_address: "144.170.37.199"
}, {
  id: 1014,
  first_name: "Matthias",
  last_name: "Milligan",
  email: "mmilligand@geocities.jp",
  ip_address: "219.199.163.106"
}, {
  id: 1015,
  first_name: "Quinta",
  last_name: "Klejna",
  email: "qklejnae@aboutads.info",
  ip_address: "113.146.169.35"
}]


function Content() {
  return (
    <div>
  <div className="chartjs-size-monitor" style={{position: 'absolute', left: '0px', top: '0px', right: '0px', bottom: '0px', overflow: 'hidden', pointerEvents: 'none', visibility: 'hidden', zIndex: '-1'}}>
              <div className="chartjs-size-monitor-expand" style={{position:'absolute',left:'0',top:'0',right:'0',bottom:'0',overflow:'hidden',pointerEvents:'none',visibility:'hidden', zIndex:'-1'}}>
                <div style={{position:"absolute", width:'1000000px', height:'1000000px', left:'0', top:'0'}}>
                </div>
              </div>
              <div className="chartjs-size-monitor-shrink" style={{position:'absolute',left:'0',top:'0',right:'0',bottom:'0',overflow:'hidden',pointerEvents:'none',visibility:'hidden',zIndex:'-1'}}>
                <div style={{position:'absolute',width:'200%',height:'200%',left:'0', top:'0'}}>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group mr-2">
                  <button className="btn btn-sm btn-outline-secondary">Share</button>
                  <button className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  This week
                </button>
              </div>
              </div>

            <div className="my-4 w-100 chartjs-render-monitor">
              <Chart height="570" width="1352"/>
            </div>

            <h2>Section title</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>IP Address</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    table.map(Tablerow)
                  }
                </tbody>
              </table>
            </div>
            </div>

      )
  }

export default Content