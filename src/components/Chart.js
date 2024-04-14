import React from 'react';
import './Chart.css'; // Make sure to import the provided CSS file

const Chart = () => {
  return (
    
        <div className="chart-container">
          {/* Back Lines */}
          <div className="back-lines"></div>
          {/* Vector Lines */}
          <div className="vector-line" style={{ top: '-0.51px' }}></div>
          <div className="vector-line" style={{ top: '22.9px' }}></div>
          <div className="vector-line" style={{ top: '46.31px' }}></div>
          <div className="vector-line" style={{ top: '69.72px', borderColor: '#8099FF' }}></div>
          {/* Time Labels */}
          <div className="time-label label-900cal" style={{ top: '3.05px' }}>900CAL</div>
          <div className="time-label label-12" style={{ left: '1.95px', top: '75.32px' }}>12:00</div>
          <div className="time-label label-6" style={{ left: '83.89px', top: '75.32px' }}>13:00</div>
          <div className="time-label label-12" style={{ left: '166.81px', top: '75.32px' }}>14:00</div>
          <div className="time-label label-6" style={{ left: '249.73px', top: '75.32px' }}>15:00</div>
          <div className="time-label label-6" style={{ left: '332.73px', top: '75.32px' }}>16:00</div>
          {/* Bar Rectangles */}
          {/* <div className="bar-rect rect-4480" style={{ left: '152.73px', top: '1.02px' }}>
          </div> */}
          <div className="bar-rect rect-4480" style={{ left: '152.73px', top: '1.02px' }}>
                <div className="ellipse"></div>
              </div>
              <div className="bar-rect rect-4500" style={{ left: '152.67px', top: '11.2px' }}></div>
              <div className="bar-rect" style={{ width: '2.79px', height: '30.53px', left: '156.46px', top: '40.71px', background: '#8099FF', borderRadius: '1.52671px 1.52671px 0px 0px' }}></div>
              <div className="bar-rect" style={{ width: '2.79px', height: '9.16px', left: '166.7px', top: '62.09px', background: '#8099FF', borderRadius: '1.52671px 1.52671px 0px 0px' }}></div>
          <div className="bar-rect rect-4500" style={{ left: '152.67px', top: '11.2px' }}></div>
          {/* Add more rectangles as needed */}
        </div>
  );
}

export default Chart;
