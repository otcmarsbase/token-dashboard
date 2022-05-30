import React, {FC, useState} from 'react';
import Input from "../Input";
import silver2 from "../../assets/silver-2.svg";
import {Button, Text} from "../atoms";
import info from '../../assets/info.png'
import {ISplitParametr} from "../organisms/VestingToSplit";
import {useMediaQuery} from "../../hooks/mediaQuery";
import {style} from "typestyle";

interface VestingSplitParametrProps {
    id: string;
    proportion: number;
    percent: number;
    handleAdd: () => void;
    handleDelete: (id: string) => () => void;
    handleEdit: (id: string, value: number, key: keyof ISplitParametr) => void;
    position: number;
    parametersLength: number;
}

const VestingSplitParametr: FC<VestingSplitParametrProps> = (
    {
        id,
        proportion,
        percent,
        handleAdd,
        position,
        parametersLength,
        handleDelete,
        handleEdit
    }) => {
    const isLast = (parametersLength - 1) === position;
    const notTheFirstAndLast = position !== 0 && !isLast;

    const isMobile = useMediaQuery('(max-width: 375px)');
    const isTablet = useMediaQuery('(max-width: 768px)')

    return (
        <div className={container}>
            <div className={body(isMobile)}>
                <Input
                    type={'number'}
                    onChange={event => handleEdit(id, parseFloat(event.target.value), 'proportion')}
                    value={proportion}
                    showStartIcon
                    startIcon={<img src={silver2} alt=""/>}
                    color={'whiteStroke'}
                    showUpLabel
                    upLabel={<Text size={'_14'}>Proportion</Text>}
                    showDownLabel
                    downLabel={
                        <>
                            <Text size={'_12'}>Fee: 14,000 MBase (1%)</Text>
                            <Text colors={'gray'} size={'_12'}>~10,000 $ </Text>
                        </>
                    }
                    showTokenName
                    tokenName={<Text colors={'red'} size={'_14'}>MBase</Text>}
                />
                <div style={{display: 'flex', alignItems: 'flex-end', width: isMobile ? '100%' : 'unset'}}>
                    <Input
                        type={'number'}
                        onChange={event => handleEdit(id, parseFloat(event.target.value), 'percent')}
                        value={percent}
                        color={'whiteStroke'}
                        showUpLabel
                        upLabel={
                            <Text
                                withIconRight
                                iconRight={<img height={'14px'} src={info} alt=""/>}
                                size={'_14'}>
                                Percent
                            </Text>
                        }
                        percent={!isMobile || !isTablet}
                    />
                    {isMobile
                        ? isLast
                            ? <Button onClick={handleAdd} size={'lg'}>
                                <Text weight={'medium'}>+</Text>
                            </Button>
                            : notTheFirstAndLast && (
                            <Button onClick={handleDelete(id)} size={'lg'} colors={"dark"}>
                                <Text weight={'medium'}>-</Text>
                            </Button>
                        )
                        : <></>}
                </div>
            </div>
            {!isMobile && <>
                {notTheFirstAndLast && <Button onClick={handleDelete(id)} size={'lg'} colors={"dark"}>
                    <Text weight={'medium'}>-</Text>
                </Button>}
            </>}
            {!isMobile && <>
                {isLast && <Button onClick={handleAdd} size={'lg'}><Text weight={'medium'}>+</Text></Button>}
            </>}
        </div>
    );
};

const container = style({
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
})

const body = (isMobile: boolean) => style({
    flexDirection: isMobile ? 'column' : 'row',
    display: 'flex',
    alignItems: 'flex-start',
    width: '100%',
    gap: '12px'
})

export default VestingSplitParametr;