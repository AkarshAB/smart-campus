import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../../Components/Header/Header.jsx';
import PropTypes from 'prop-types';
import './Home.css'


function Home() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header />

      <Box sx={{ width: '100%', marginTop: '10px'  }} className="container-fluid px-4 py-2 ">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="All Students" />
            <Tab label="Attendance View" />
          </Tabs>
          <button className='btn add-btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Students</button>
          {/* <!-- Modal --> */}
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h1 className="modal-title fs-4" id="staticBackdropLabel">ADD STUDENTS</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex flex-column gap-3">
                  
                  {/* input */}
                  <input type="text" placeholder='First Name' className="form-control" />
                  <input type="text" placeholder='Middle Name' className="form-control" />
                  <input type="text" placeholder='Last Name' className="form-control" />
                  <input type="text" placeholder='Phone Number' className="form-control" />
                  <input type="text" placeholder='Email' className="form-control" />
                  <input type="text" placeholder='Place' className="form-control" />
                  <input type="text" placeholder='Admission Number' className="form-control" />
                  <input type="text" placeholder='Blood Group' className="form-control" />
                  <input type="text" placeholder='Department' className="form-control" />
                  <input type="text" placeholder='Course' className="form-control" />
                  <input type="text" placeholder='Batch' className="form-control" />
                  <input type="text" placeholder='Start Year' className="form-control" />
                  <input type="text" placeholder='End Year' className="form-control" />
                  <input type="file" placeholder='Image' className="form-control" />

                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn add-btn">ADD</button>
                </div>
              </div>
            </div>
          </div>
        </Box>
        <CustomTabPanel value={value} index={0}>
          Item One
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
      </Box>
    </>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node.isRequired, // Define children prop as a node type and it's required
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default Home;
