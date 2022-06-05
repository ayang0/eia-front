<template>
    <div class="wrap">
        <div>
            <h1 style="font-size: .20rem;">健康信息上报</h1>
            <a href="">填报记录</a>
        </div>
        <!-- 最多显示一行 -->
        <van-form @submit="onSubmit">
            <div>
                <h2>1.你的姓名</h2>
                <van-field v-model="name" label="姓名" placeholder="请输入" />
            </div>
            <div>
                <h2>2.角色</h2>
                <van-field v-model="role" label="角色" placeholder="请输入" />
            </div>
            <div>
                <h2>3.今日身体健康情况</h2>
                <van-radio-group @change="changeOther" v-model="option1">
                    <van-radio name="发热（体温37.3℃及以上）">发热（体温37.3℃及以上）</van-radio>
                    <van-radio name="咳嗽">咳嗽</van-radio>
                    <van-radio name="乏力">乏力</van-radio>
                    <van-radio name="呕吐">呕吐</van-radio>
                    <van-radio name="腹泻">腹泻</van-radio>
                    <van-radio name="以上症状都没有">以上症状都没有</van-radio>
                    <van-radio name="其他">其他</van-radio>
                    <van-field v-if="other" v-model="otherText" label="其他" placeholder="请输入" />
                </van-radio-group>
            </div>
            <div>
                <h2>4.今日体温（℃）</h2>
                <van-field v-model="option2" type="number" label="体温" placeholder="请输入" />
            </div>
            <div>
                <h2>5.今日是否出现发热、干咳、乏力、呼吸困难等症状？</h2>
                <van-radio-group v-model="option3">
                    <van-radio name="是">是</van-radio>
                    <van-radio name="否">否</van-radio>
                </van-radio-group>
            </div>
            <div>
                <h2>6.今日是否与高风险地区的人员有过较为密切的接触？</h2>
                <van-radio-group v-model="option4">
                    <van-radio name="是">是</van-radio>
                    <van-radio name="否">否</van-radio>
                </van-radio-group>
            </div>
            <div>
                <h2>7.所在地（工作、生活场所）是否出现任何与疫情相关的、值得注意的情况？</h2>
                <van-radio-group v-model="option5">
                    <van-radio name="是">是</van-radio>
                    <van-radio name="否">否</van-radio>
                </van-radio-group>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
            name: "",
            role: "",

            option1: "以上症状都没有",
            option2: 36.5,
            option3: "否",
            option4: "否",
            option5: "否",

            other: false,
            otherText: "",
        }
    },
    mounted: function() {
        this.name = this.user.nickname
        this.getRoleName()
    },
    methods: {

        onSubmit() {
            const param = {
                option1: this.option1,
                option2: this.option2,
                option3: this.option3,
                option4: this.option4,
                option5: this.option5,
                otherText: this.otherText,
            }
            console.log('submit', param)
            this.request.post("/health/save/dto", param).then(res => {
                if (res.code === '200') {
                    this.$message.success("提交成功")
                } else {
                    this.$message.error("提交失败")
                }
            })
        },


        changeOther() {
            if (this.question1 == "其他") {
                this.other = true;
            } else {
                this.other = false;
            }
        },


        async getRoleName() {
            await this.request.get("/role/roleName/"+this.user.role).then(res => {
                console.log("getRoleName",res)
                this.role = res.data.name ? res.data.name : ""
            })
        }

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

.wrap {
    margin: 30px;
}
</style>