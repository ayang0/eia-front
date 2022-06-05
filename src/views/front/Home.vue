<template>
    <div class="home">
        <Header />
        <Covid19Info :covid19Info="covid19Info" />
        <CaseNum :caseNumData="caseNumData" />
        <Map />
        <MySwiper />
        <SpringTravel />
    </div>
</template>

<script>
import api from "../../api";
import Header from "../../components/front/Header";
import Covid19Info from "../../components/front/Covid19Info";
import CaseNum from "../../components/front/CaseNum";
import Map from "../../components/front/Map"
import MySwiper from "../../components/front/MySwiper";
import SpringTravel from "../../components/front/SpringTravel"

export default {
    name: "FrontHome",
    data() {
        return {
            // 疫情信息:covid19Info
            covid19Info: {
                note1: "",
                note2: "",
                note3: "",
                remark1: "",
                remark2: "",
                remark3: "",
            },
            caseNumData: {
                modifyTime: "", // 更新时间
                currentConfirmedCount: "", // 现存确诊人数
                confirmedCount: "", // 累计确诊人数
                suspectedCount: "", // 累计境外输入人数
                curedCount: "", // 累计治愈人数
                deadCount: "", // 	累计死亡人数
                seriousCount: "", // 现存无症状人数
                suspectedIncr: "", // 新增境外输入人数
                currentConfirmedIncr: "", // 相比昨天现存确诊人数
                confirmedIncr: "", // 相比昨天累计确诊人数
                curedIncr: "", // 相比昨天新增治愈人数
                deadIncr: "", // 相比昨天新增死亡人数
                seriousIncr: "", //相比昨天现存无症状人数
            },
        };
    },
    components: {
        Header,
        Covid19Info,
        CaseNum,
        Map,
        SpringTravel,
        MySwiper,
    },
    mounted() {
        api.getNcov({
            key: "62e34ad34025d5d5127135efa58d4ca8",
        })
            .then((res) => {
                if (res.status === 200) {
                    let desc = res.data.newslist[0].desc;
                    // 疫情信息
                    this.covid19Info.note1 = desc.note1;
                    this.covid19Info.note2 = desc.note2;
                    this.covid19Info.note3 = desc.note3;
                    this.covid19Info.remark1 = desc.remark1;
                    this.covid19Info.remark2 = desc.remark2;
                    this.covid19Info.remark3 = desc.remark3;
                    // 疫情病例
                    this.caseNumData.modifyTime = desc.modifyTime;
                    this.caseNumData.currentConfirmedCount =
                        desc.currentConfirmedCount;
                    this.caseNumData.confirmedCount = desc.confirmedCount;
                    this.caseNumData.suspectedCount = desc.suspectedCount;
                    this.caseNumData.curedCount = desc.curedCount;
                    this.caseNumData.deadCount = desc.deadCount;
                    this.caseNumData.seriousCount = desc.seriousCount;
                    this.caseNumData.suspectedIncr = desc.suspectedIncr;
                    this.caseNumData.currentConfirmedIncr =
                        desc.currentConfirmedIncr;
                    this.caseNumData.confirmedIncr = desc.confirmedIncr;
                    this.caseNumData.curedIncr = desc.curedIncr;
                    this.caseNumData.deadIncr = desc.deadIncr;
                    this.caseNumData.seriousIncr = desc.seriousIncr;
                }
            })
            .catch((error) => {});
    },
};
</script>
