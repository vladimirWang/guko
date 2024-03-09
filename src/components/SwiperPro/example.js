import SwiperPro from "./SwiperPro"

const SwiperProEx = () => {
    return <>
        <SwiperPro mode='normal'>
            {
                new Array(21).fill(1).map((item, index) => (
                    <SwiperPro.Item key={`${index}`}>
                        <div style={{ width: '100%', height: 150, backgroundColor: 'skyblue' }}>测试{index + 1}</div>
                    </SwiperPro.Item>
                ))
            }
        </SwiperPro>
        <SwiperPro mode='table'>
            {
                new Array(21).fill(1).map((item, index) => (
                    <SwiperPro.Item key={`${index}`}>
                        <div style={{ width: '100%', height: 150, backgroundColor: 'skyblue' }}>测试{index + 1}</div>
                    </SwiperPro.Item>
                ))
            }
        </SwiperPro>
    </>
}

export default SwiperProEx