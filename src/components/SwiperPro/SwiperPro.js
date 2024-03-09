import './index.less';

import { Swiper } from "antd-mobile";
import React, { forwardRef, Fragment, useEffect, useState } from "react"
import { attachPropertiesToComponent } from "./convert-component";
import { arrFn } from './func'

const SwiperProItem = ({ children, onClick = () => { } }) => {
    return <div className="swiperPro_item" onClick={onClick}>{children}</div>
}

const SwiperPro = forwardRef((props, ref) => {
    const {
        mode = 'normal',
        children,
        cols = 5,
        rows = 2,
        gap = 10,
        // space = 10,
        // listFlex = 0,
        // listDirection = 0
    } = props;
    const perNum = cols * rows;
    const [isIndicator, setIsIndicator] = useState(false);

    useEffect(() => {
        if (mode === 'table') {
            setIsIndicator(Array.isArray(children) && children.length > perNum)
        } else {
            setIsIndicator(mode === 'normal' && Array.isArray(children) && children.length > 1)
        }
    }, [mode])

    const renderContainer = () => {
        if (!Array.isArray(children)) return children
        const normalContainer = children?.map((item, index) => {
            return <Swiper.Item key={index}>
                {item}
            </Swiper.Item>
        })
        switch (mode) {
            case 'normal': return normalContainer;
            case 'table':
                return arrFn.chunkArray(children, perNum).map((item, index) => (
                    <Swiper.Item key={index}>
                        <div
                            className="swiperPro_item_table"
                            style={{
                                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                                gridTemplateRows: `repeat(${Array.isArray(children) && children.length > cols && rows}, 1fr)`,
                                gap
                            }}
                        >
                            {item?.map((ite, idx) => {
                                return <Fragment key={idx}>{ite}</Fragment>
                            })}
                        </div>
                    </Swiper.Item>
                ));
            case 'list':

                return children?.map((item, index) => {
                    return <Swiper.Item key={index}>
                        {item}
                    </Swiper.Item>
                });
            default: return normalContainer;
        }
    }

    return <>
        <Swiper
            allowTouchMove={props?.allowTouchMove ?? isIndicator}
            {...props}
            ref={ref}
            className={`swiperPro ${props?.className ?? ''}`}
            indicatorProps={{
                className: `swiperPro_indicator ${isIndicator ? 'flex' : 'none'} ${props?.indicatorProps?.className ?? ''}`,
                ...(props?.indicatorProps ?? {})
            }}
        >
            {renderContainer()}
        </Swiper>
    </>
})

export default attachPropertiesToComponent(SwiperPro, { Item: SwiperProItem })