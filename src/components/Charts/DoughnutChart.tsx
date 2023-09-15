import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

  type DoughnutChartParams = {
    backgroundColor?: string;
    title?: string;
    labels: string[];
    percentages: number[];
    colors?: string[];
    innerText?: string;
    criteria?: string;
  };

const DoughnutChart: FC<DoughnutChartParams> = ({
  labels,
  percentages,
  colors = ['yellow', 'purple', 'pink', 'green'],
  title = '',
  innerText = '',
  criteria = ''
}: DoughnutChartParams) => {
  const data = {
    labels,
    datasets: [
      {
        data: percentages,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const plugins = [{
    id: '1',
    beforeDraw: function(chart: any) {
     const width = chart.width,
         height = chart.height,
         ctx = chart.ctx;
         ctx.restore();
         const fontSize = (height / 280).toFixed(2);
         ctx.font = fontSize + "em sans-serif";
         ctx.textBaseline = "top";
         const text = innerText,
         textX = Math.round((width - ctx.measureText(text).width) / 2),
         textY = height / 2;
         ctx.fillText(text, textX, textY);
         ctx.save();
    } 
  }];

  return (
    <Container
      className='shadow-sm p-3 mb-5 bg-white rounded w-100 h-100'
    >
      <h6>{title}</h6>
      <h4>{criteria}</h4>
          <Doughnut 
            data={data} 
            style={{maxHeight: '100%', width: 'width:100% !important'}}
            options={{
              responsive: true,
              maintainAspectRatio: true,
            }}
            plugins={plugins}
          />
    </Container>
  );
};

export default DoughnutChart;
