import { CSSProperties, FC } from "react";
import Image from 'next/image'

type IconParams = {
    url: string;
    width?: number;
    height?: number;
    style?: CSSProperties;
};

const Icon: FC<IconParams> = ({url, width, height, style}: IconParams) => {
    return (
        <Image style={style} src={url} alt="" width={width ?? 20} height={height ?? 20} />
    );
};

export default Icon;
