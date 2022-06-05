<template>
<div>
        <h1 style="text-align: center;font-size: large; margin: 20px">历史填报记录</h1>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell-group inset>
                <van-cell style="margin-top: 20px" v-for="item in list" :key="item.id">
                    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" />
                    <template slot="default">
                        <div>
                            <div style="display: flex; justify-content:space-between;margin: 10px ">
                                <p style="font-size: small;">填报人: {{ user.nickname }}</p>
                                <p style="font-size: small; margin-left: 20px">填报时间: {{ item.createTime }}</p>
                            </div>
                            <div class="item">身体健康情况 <span class="itemp">{{ item.option1  }} </span></div>
                            <div class="item">体温 <span class="itemp">{{ item.option2 }}</span></div>
                            <div class="item">是否出现发热、干咳、乏力、呼吸困难等症状？ <span class="itemp"> {{ item.option3 }}</span></div>
                            <div class="item">是否与高风险地区的人员有过较为密切的接触？ <span class="itemp">{{ item.option4 }}</span></div>
                            <div class="item">所在地（工作、生活场所）是否出现任何与疫情相关的、值得注意的情况？ <span class="itemp">{{ item.option5 }}</span></div>
                        </div>
                    </template>
                    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" />
                </van-cell>

            </van-cell-group>
        </van-list>
    </div>
</template>

<script>

export default {
    data() {
        return {
            user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
            loading: false,
            finished: false,
            list: [],
            pageSize: 5,
            pageNum: 1,
        };
    },
    methods: {
        onLoad() {
            this.request.get("/health/page/user", {
                params: {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    userId: this.user.id,
                }
            }).then(res => {
                // console.log(res.data)
                for (var i = 0; i < res.data.records.length; i++) {
                    this.list.push(res.data.records[i])
                }
                this.loading = false
                if (res.data.current == res.data.pages) {
                    this.finished = true
                } else {
                    this.pageNum = this.pageNum + 1
                }
            })
        },

    },
};
</script>


<style>
div {
    font-size: .16rem;
}

p {
    font-size: .16rem;
}

.item {
    margin-top: 10px;
    background-color: #cfc7c7;
    border-radius:10px;
}
.itemp {
    background-color: #fa7676;
}
</style>