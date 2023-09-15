import { FC } from "react";
import Icon from "./Icon";
import { Card } from "react-bootstrap";

interface SummaryCardProps {
    title: string;
    count: string;
    percentage: string;
    duration: string;
    isGain: boolean;
    icon: string;
    subText?: string;
}

const SummaryCard: FC<SummaryCardProps> = ({ title, count, duration, percentage, subText, isGain, icon }) => {
    return (
        <Card style={styles.card} className="d-flex justify-content-start flex-row">
            <div style={{ marginRight: '100px' }} className="">
                <div className="d-flex flex-column justify-content-start">
                    <p style={styles.title}>{title}</p>
                    <p style={{ margin: 0, color: '#32325D' }}>{count} {subText ? <span style={{ fontSize: '12px' }}>{subText}</span> : null}</p>
                </div>
                <div style={{marginTop: '20px'}} className="d-flex align-items-center">
                    <Icon height={16} width={16} url={isGain ? "/icons/up.png" : "/icons/down.png"} />
                    <p style={{
                        color: isGain ? '#2DCE89' : '#CE2D2D',
                        margin: 0,
                    }}>{percentage}</p>
                    <p style={{
                        margin: 0, paddingLeft: 5, color: '#8898AA', fontWeight: 'lighter'
                    }}>{duration}</p>
                </div>
            </div>
            <Icon height={46} width={46} url={icon} />
        </Card>
    );
}

const styles = {
    card: {
        padding: '15px'
    },
    title: {
        color: '#8898AA',
        margin: 0,
    }
}

export default SummaryCard;