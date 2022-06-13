import { BigNumber } from "ethers";
import React from "react";

const roundToNSignDig = (x: number | BigNumber | string, n: number) => {
    const stringX = x.toString()
        if (!stringX.includes('.')) return stringX 
        /* const full = stringX.match(/^[1-9]{6,}/)
        if (full) {
            return full[0]
        } */
        const res = stringX.match(new RegExp(`(0?\.?)*(\d\.?){1,${n}}`))
        if (res) return res[0]
        else {
            throw new Error('Rounding error')
        }
}

export const roundings = {
    to6signDig: (x: number | BigNumber | string) => {
        /* console.log(roundToNSignDig(x, 6)) */
        const stringX = x.toString()
        if (!stringX.includes('.')) return stringX /* если число не дробное - форматировать нечего */
        const full = stringX.match(/^[1-9]{6,}/) /* если цифр до зяпятой больше 6, вернуть все, что до запятой */
        if (full) {
            return full[0]
        }
        const res = stringX.match(/(0?\.?)*(\d\.?){1,6}/) /* иначе ищем первые 6 (или меньше, если всего < 6 знаков) значащих цифр */
        if (res) return res[0]
        else {
            throw new Error('Rounding error')
        }
    },
    to2afterComma: (x: number | BigNumber | string) => {
        const stringX = x.toString()
        if (!stringX.includes('.')) return stringX
        const res = stringX.match(/\d*\.\d{0,2}/)
        if (res) return res[0]
        else {
            throw new Error('Rounding error')
        }
    }

}

export const testRoundings = () => {
    console.log('start test')
    console.assert(roundings.to6signDig(123456.789) == '123456')
    console.assert(roundings.to6signDig(123.456789) == '123.456')
    console.assert(roundings.to6signDig(0.123456789) == '0.123456')
    console.assert(roundings.to6signDig(0.000123456789) == '0.000123456')
    console.assert(roundings.to6signDig(13.1003456) == "13.1003")
    console.assert(roundings.to6signDig(1) == "1")
    console.assert(roundings.to6signDig(0) == "0")
    console.assert(roundings.to6signDig(0.01) == '0.01')
    console.log('end tests')
}


export const RoundingContext = React.createContext({ roundings })