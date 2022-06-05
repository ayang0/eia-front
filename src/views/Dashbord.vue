<template>
  <div>
    <el-row :gutter="10" style="margin-bottom: 60px">
      <el-col :span="6">
        <el-card style="color: #409eff">
          <div><i class="el-icon-user-solid" /> 用户总数</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">
            100
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="color: #f56c6c">
          <div><i class="el-icon-money" /> 今日已经填用户</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">
            100
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="color: #67c23a">
          <div><i class="el-icon-bank-card" /> 与高风险接触人数</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">
            10
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="color: #e6a23c">
          <div><i class="el-icon-s-shop" /> 发热人数</div>
          <div style="padding: 10px 0; text-align: center; font-weight: bold">
            20
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div id="main" style="width: 600px; height: 450px"></div>
      </el-col>

      <el-col :span="12">
        <div id="pie" style="width: 500px; height: 400px"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Home",
  data() {
    return {};
  },
  mounted() {
    // 页面元素渲染之后再触发
    var option = {
      title: {
        text: "今日健康状况统计图",
        left: "center",
      },
      xAxis: {
        name: "状况",
        type: "category",
        data: ["发热", "咳嗽", "乏力", "呕吐", "腹泻", "都没有"],
      },
      yAxis: {
        name: "人数",
        type: "value",
      },
      series: [
        {
          data: [20, 10, 10, 0, 0, 60],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };

    // 饼图

    var pieOption = {
      title: {
        text: "温度情况统计",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "温度",
          type: "pie",
          radius: "50%",
          data: [
            { value: 2, name: "36.1°C" },
            { value: 3, name: "36.8°C" },
            { value: 4, name: "35.1°C" },
            { value: 5, name: "37.0°C" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    myChart.setOption(option);

    var pieDom = document.getElementById("pie");
    var pieChart = echarts.init(pieDom);
    pieChart.setOption(pieOption);

    this.request.get("/echarts/members").then((res) => {
      // 填空
      // option.xAxis.data = res.data.x
      // option.series[0].data = res.data
      // option.series[1].data = res.data
      // option.series[2].data = [5,6,7,8]
      // option.series[3].data = [5,6,7,8]
      // 数据准备完毕之后再set
      // myChart.setOption(option);
      // pieOption.series[0].data = [
      //   { name: "第一季度", value: res.data[0] },
      //   { name: "第二季度", value: res.data[1] },
      //   { name: "第三季度", value: res.data[2] },
      //   { name: "第四季度", value: res.data[3] },
      // ];
      // pieChart.setOption(pieOption);
    });
  },
};
</script>

<style scoped>
</style>
