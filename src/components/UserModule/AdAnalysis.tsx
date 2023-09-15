import { FC } from "react";
import DoughnutChart from "../Charts/DoughnutChart";

const UserAdAnalysis: FC = () => {
    const greyCardClass = "rounded shadow-sm d-flex flex-column justify-content-center align-items-center mb-2";
    return (
        <div className="rounded shadow-sm p-3 bg-light">
            <h6>ANALYSIS</h6>
            <div className="d-flex">
                <div style={{marginRight: '16px'}}>
                    <div 
                        className={greyCardClass} 
                        style={{width: '98px', backgroundColor: '#F1F1F1;', padding: '21px'}}
                    >
                        <div style={{fontSize: '10px'}}>TOTAL ADS</div>
                        <div style={{fontSize: '20px', color: '#243465'}}>32</div>
                    </div>
                    <div className={greyCardClass} style={{width: '98px', backgroundColor: '#F1F1F1;', padding: '21px', marginTop: '20px'}}>
                        <div style={{fontSize: '10px'}}>INVESTMENT</div>
                        <div style={{fontSize: '20px'}}>325K</div>
                    </div>
                    <div className={greyCardClass} style={{width: '98px', backgroundColor: '#F1F1F1;', padding: '21px', marginTop: '20px'}}>
                        <div style={{fontSize: '10px'}}>PLATFORMS</div>
                        <div style={{fontSize: '20px', color: '#243465'}}>4</div>
                    </div>
                </div>
                <DoughnutChart 
                    labels={['18-25', '25-30', '30-40', '40+']}
                    percentages={[20, 40, 20, 20,]}
                    title="PLATFORM / INVESTMENT"
                    innerText="325KINR"
                />
                <DoughnutChart
                    labels={['a', 'b', 'c', 'd']}
                    percentages={[20, 40, 20, 20]}
                    title="PLATFORM / VIEWS"
                    innerText="3256"
                />
            </div>
        </div>
    );
};

export default UserAdAnalysis;
