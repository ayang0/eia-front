<template>
    <div>
        <p class="title"><i></i>疫情地图</p>
        <Tabs :currentIndex="currentIndex" @onIndex="getIndex">
            <Tab index="1" label="国内疫情">
                <div id="chinaMap"></div>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
import api from "../../api";

export default {
    data() {
        return {
            currentIndex: "1",
        };
    },
    mounted() {
        api.getNocvCityBySina().then(res => {
            //  {name:"内蒙古",value:10,itemStyle:{ normal:{ areaColor:"#f00" } }}
            console.log(res.data.data.list)
            let allCitys = []
            for (let i = 0; i < res.data.data.list.length;i++) {
                var temp = {
                    name:res.data.data.list[i].name,
                    value:res.data.data.list[i].econNum,
                    itemStyle: {
                        normal:{
                            areaColor:this.setColor(res.data.data.list[i].econNum)
                        }
                    }
                }
                allCitys.push(temp)
            }
            this.$charts.chinaMap("chinaMap", allCitys);
        })
    },
    methods: {
        getIndex(index) {
            this.currentIndex = index;
        },
        setColor(value) {
            if (value > 1000) {
                return "#ff0000";
            } else if (value > 500) {
                return "#ff9900";
            } else if (value > 200) {
                return "#ffff00";
            } else if (value > 100) {
                return "#00ff00";
            } else {
                return "#00ffff";
            }
        },
    },
};
</script>

<style scoped>
#chinaMap {
    width: 375px;
    height: 400px;
}
#worldMap {
    width: 375px;
    height: 400px;
}
.title {
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
}
.title::before {
    content: "";
    width: 5px;
    height: 20px;
    background: #4169e2;
    margin-right: 10px;
}
</style>