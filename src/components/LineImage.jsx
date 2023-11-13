import React, { useContext, useEffect, useRef } from 'react';
import { drawLineChart } from '../utils';
import GlobalContext from '../context/MainContext';

const LineImage = () => {
  const { forecastInfo } = useContext(GlobalContext);
  const temperatures =
    forecastInfo &&
    forecastInfo.forecast &&
    forecastInfo.forecast.forecastday[0] &&
    forecastInfo.forecast.forecastday[0].hour.slice(0, 7).map((forecast) => forecast.temp_c);
  const canvas = useRef(null);

  useEffect(() => {
    if (canvas.current && temperatures) {
      const ctx = canvas.current.getContext('2d');
      drawLineChart(canvas.current, ctx, temperatures);
    }
  }, [temperatures]);

  return <canvas ref={canvas} width="400" height="75" />;
};

export default LineImage;
