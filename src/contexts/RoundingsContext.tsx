import { BigNumber } from "ethers";
import React, { PropsWithChildren } from "react";

const formatSigndig = (n: string, signdig = 6) => {
    // trim leading zeroes
    n = n.replace(/^(0+)/, '')

    let [integer, fractional] = n.split('.')

    // ensure zero before decimal point
    if (!integer)
        integer = "0"

    // for ints ignore rounding
    if (!fractional)
        return integer

    let remainder = signdig - integer.length

    // ignore zero char before point by increasing remainder
    if (integer == "0")
        remainder += 1

    if (remainder <= 0)
        return integer

    let [, zeroes = "", digs = ""] = fractional.match(/^(0*)(\d*)$/) || ["", ""]

    let signDigs = digs.substring(0, remainder)
    if (!signDigs)
        return integer

    return `${integer}.${zeroes}${signDigs}`
}

const toNAfterComma = (x: string, n: number) => {

    x = x.replace(/^(0+)/, '')

    let [integer, fractional] = x.split('.')

    if (!integer)
        integer = '0'

    if (!fractional) return `${integer}`

    fractional = fractional.substring(0, n)

    return `${integer}.${fractional}`

}

export const roundings = {
    to6signDig: (x: number | BigNumber | string) => formatSigndig(x.toString(), 6),
    to2afterComma: (x: number | BigNumber | string) => toNAfterComma(x.toString(), 2)
} 

export const RoundingContext = React.createContext(roundings)

export const RoundingContextProvider: React.FC<PropsWithChildren<{}>> = props => (
    <RoundingContext.Provider value={roundings}>
        {props.children}
    </RoundingContext.Provider>
)

export const testRoundToNAfterComma = () => {
    console.log('start tests')
    console.assert(toNAfterComma('12.1234', 2) === '12.12')
    console.assert(toNAfterComma('1.348', 2) === '1.34')
    console.assert(toNAfterComma('1.008', 2) === '1.00')
    console.assert(toNAfterComma('1.123456', 5) === '1.12345')
    console.assert(toNAfterComma('1.123456789', 8) === '1.12345678')
    console.assert(toNAfterComma('1', 2) === '1')
    console.assert(toNAfterComma('0', 10) === '0')
    console.assert(toNAfterComma('0.00000', 3) === '0.000')
    console.log('end tests')
}

export const testRoundToSignDig = () => {
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
