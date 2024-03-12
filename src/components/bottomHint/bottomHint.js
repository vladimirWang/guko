import { Footer } from 'antd-mobile'
/**
 * 页面内容底部提示
 */
export default function BottomHint({ hint }){

    //默认为true，当为false是该组件调用无响应
    const isShow = true

    if(isShow){
        return (
            <div>
                <Footer label={hint} style={{margin:'0 auto', width:'50%'}}></Footer>
                <img 
                    style = {{margin:'0 auto'}}
                    alt = ""
                    src = {require("../../assets/DNA_smile_grey_1@2x.png")}
                />
            </div>
        );
    }
}



