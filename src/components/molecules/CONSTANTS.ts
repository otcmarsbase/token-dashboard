import {IColors} from "./types";
import goldNftIcon from "../../assets/goldNft.svg";
import silverNftIcon from "../../assets/silverNft.svg";
import redNftIcon from "../../assets/redNft.svg";
import purpleNftIcon from "../../assets/purpleNft.svg";

export const colors: IColors = {
    yellow: {
        label: 'yellow',
        border: 'rgba(255, 214, 108, 0.5)',
        icon: goldNftIcon
    },
    silver: {
        label: 'silver',
        border: 'rgba(221, 221, 221, 0.5)',
        icon: silverNftIcon
    },
    red: {
        label: 'red',
        border: 'rgba(236, 104, 62, 0.5)',
        icon: redNftIcon
    },
    cyan: {
        label: 'cyan',
        border: 'rgba(115, 255, 247, 0.5)',
        icon: purpleNftIcon
    }
}