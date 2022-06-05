<template>
  <div style="color: #666;font-size: 14px;">
    <div style="padding-bottom: 20px">
      <b>欢迎你！{{ user.nickname }}</b>
    </div>
    <el-card>
      早发现、早报告、早诊断、早隔离、早治疗!
      <el-divider />
      疫情小助手助力疫情，更加科学的管理疫情数据!
    </el-card>
    <div style="height: 1px; background: #ddd; margin: 20px 0"/>

    <el-row :gutter="30">
      <el-col :span="12">
        <div style="padding: 20px 0; font-size: 20px">背景</div>
        <div>
          疫情下对疫情信息上报和管理是社区、学校管控疫情的核心环节。保障每个民众的身体健康是社区和学校、政府的责任。
          通看市面上的疫情信息管理平台，目前有政府层面的健康通，是目前生活中非常重要的一环。然而对于一个学校和社区
          甚至一个小区一个小群体而言，大多数信息统计通常是在QQ群、微信群中个人报备或者共享文档填报的方式进行信息收集，
          不仅操作不便，而且也不便于管理员进行信息统计，也不能直观的进行信息观察。而市面上的疫情信息管理系统大多是大型的，
          部署复杂、操作困难、使用成本和购买成本都比较高。为此，疫情信息上报与管理小助手为解决上述痛点而设计和开发。
        </div>
        
      </el-col>
      <el-col :span="12">
        <div style="padding: 20px 0; font-size: 20px">技术栈</div>
        <el-row>
          <el-col :span="12" style="line-height: 30px">
            <div><b>后端</b></div>
            <div>SpringBoot2</div>
            <div>Hutool</div>
            <div>Poi</div>
            <div>Lombok</div>
            <div>Mybatis/Mybatis-plus</div>
          </el-col>
          <el-col :span="12" style="line-height: 30px">
            <b>前端</b>
            <div>Vue2</div>
            <div>Vue-Router</div>
            <div>VueX</div>
            <div>ElementUI</div>
            <div>Vant</div>
            <div>Axios</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
    }
  }
}
</script>
