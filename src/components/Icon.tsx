import { FC } from "react";
import Image from 'next/image'

type IconParams = {
    url: string;
    width?: number;
    height?: number;
};

const Icon: FC<IconParams> = ({url, width, height}: IconParams) => {
    return (
        <Image src={url} alt="" width={width ?? 20} height={height ?? 20} />
    );
};

export default Icon;
