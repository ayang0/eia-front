<template>
    <div>
        <div id="city"></div>
    </div>
</template>

<script>
import api from "../../api";
export default {
    props: {
        city: {
            type: String,
            default: "",
        },
    },
    mounted() {
        var citys = [];
        api.getNocvCityBySina({}).then((res) => {
            console.log(res.data.data.list)
            if (res.status === 200) {
                for (var i = 0; i < res.data.data.list.length; i++) {
                    console.log("city", res.data.data.list[i].name)
                    if (res.data.data.list[i].name === this.city) {
                        for (var j = 0;j < res.data.data.list[i].city.length;j++) {
                            var temp = {
                                name: res.data.data.list[i].city[j].name+"市",
                                value: res.data.data.list[i].city[j].econNum,
                            };
                            citys.push(temp);
                        }
                    }
                }
            }
            this.$charts.provinceMap("city", this.city, citys);
        });
    },
};
</script>

<style scoped>
#city {
    width: 375px;
    height: 500px;
}
</style>