<template>
    <div>
        <h1 style="text-align: center;font-size: large; margin: 20px">预警信息</h1>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-cell-group inset>
                <van-cell style="margin-top: 20px" v-for="item in list" :key="item.id">
                    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }" />
                    <template slot="default">
                        <div>
                            <div style="display: flex; justify-content:space-between;">
                                <p style="font-size: small;">发布人: {{ item.user }}</p>
                                <p style="font-size: small; margin-left: 20px">发布时间: {{ item.time }}</p>
                            </div>
                            <h2 style="text-align: center; margin: 10px;">{{ item.name }}</h2>
                            <mavon-editor class="md" :value="item.content" :subfield="false" :defaultOpen="'preview'"
                                :toolbarsFlag="false" :editable="false" :scrollStyle="true" :ishljs="true" />
                            <!-- <div v-html="item.content" ></div> -->
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
            loading: false,
            finished: false,
            list: [],
            pageSize: 5,
            pageNum: 1,
        };
    },
    methods: {
        onLoad() {
            this.request.get("/warn-info/page", {
                params: {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
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

.v-note-wrapper {
    min-height: 100px !important;
}
</style>