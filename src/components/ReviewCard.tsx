import { FC } from "react";
import Icon from "./Icon";
import { Card } from "react-bootstrap";

interface ReviewCardProps {
    id: string;
   name: string;
   rating: number;
   review: string;
   backgroundColor: string;
}

const ReviewCard: FC<ReviewCardProps> = ({ id, name, rating, review, backgroundColor }) => {
    return (
        <Card style={{...styles.card, backgroundColor}} className="d-flex">
            <h2 style={{fontSize: '9px', margin: 0, padding: '0px 0px 5px 0px'}}>{id}</h2>
            <h2 style={{fontSize: '11px', margin: 0,  padding: '0px 0px 5px 0px'}}>{name}</h2>
            <p style={{fontSize: '9px', margin: 0}}>{review}</p>
        </Card>
    );
}

const styles = {
    card: {
        padding: '15px',
        margin: 0,
        width: '285px',
        borderWidth: 0,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25",

    },
    title: {
        color: '#8898AA',
        margin: 0,
    }
}

export default ReviewCard;