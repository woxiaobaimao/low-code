<script lang="ts" setup>
const tableData = [
  {
    name: "AM15",
    status: "正常",
  },
  {
    name: "MP10",
    status: "导航",
  },
];
</script>

<template>
  <div id="bigScreen">
    <div class="header">数字孪生系统</div>
    <div class="main">
      <div class="left">
        <div class="cityEvent">
          <div>
            <span>AGV运行状态</span>
          </div>
          <!-- <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="id" />
            <el-table-column prop="name" label="名称" />
            <el-table-column prop="status" label="状态" />
          </el-table> -->
        </div>
        <div class="cityEvent">
          <div>
            <span>AGV任务统计</span>
          </div>
          <!-- <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="id" />
            <el-table-column prop="name" label="名称" />
            <el-table-column prop="status" label="状态" />
          </el-table> -->
        </div>
      </div>
      <div class="right">
        <div class="cityEvent">
          <div>
            <span>AGV报警信息</span>
          </div>
          <!-- <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="id" />
            <el-table-column prop="name" label="名称" />
            <el-table-column prop="status" label="状态" />
          </el-table> -->
        </div>
        <div class="cityEvent">
          <div>
            <span>实时监控</span>
          </div>
          <!-- <el-table :data="tableData" style="width: 100%">
            <el-table-column type="index" label="id" />
            <el-table-column prop="name" label="名称" />
            <el-table-column prop="status" label="状态" />
          </el-table> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#bigScreen {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 100;

  left: 0;
  top: 0;
  pointer-events: none;
  display: flex;
  flex-direction: column;
}

.header {
  /* width: 1920px;
        height: 100px; */

  width: 19.2rem;
  height: 1rem;
  background-image: url("@/assets/bg/title.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  color: rgb(226, 226, 255);
  font-size: 0.4rem;
}

.main {
  flex: 1;
  width: 19.2rem;
  display: flex;
  justify-content: space-between;
}

.left {
  width: 4rem;
  /* background-color: rgb(255,255,255,0.5); */
  background-image: url(@/assets/bg/line_img.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem 0;
}

.right {
  width: 4rem;
  /* background-color: rgb(255,255,255,0.5); */
  background-image: url(@/assets/bg/line_img.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem 0;
}

.cityEvent {
  padding: 10px;
  position: relative;
  height: 300px;
  width: 3.5rem;
  margin-bottom: 0.2rem;
  background-repeat: repeat;
  pointer-events: auto;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 10px;
}

.footerBorder {
  position: absolute;
  bottom: 0;
  bottom: 0;
  width: 3.5rem;
  height: 0.4rem;
}
.footerBorder::before {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  left: 0;
  top: 0;
  border-bottom: 4px solid rgb(34, 133, 247);
  border-left: 4px solid rgb(34, 133, 247);
  content: "";
  display: block;
}

.footerBorder::after {
  width: 0.4rem;
  height: 0.4rem;
  position: absolute;
  right: 0;
  top: 0;
  border-bottom: 4px solid rgb(34, 133, 247);
  border-right: 4px solid rgb(34, 133, 247);
  content: "";
  display: block;
}

.icon {
  width: 40px;
  height: 40px;
}

.cityEvent h1 span {
  flex: 1;
}

h1 {
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.3rem 0.3rem;
  justify-content: space-between;
  font-size: 0.25rem;
}
h3 {
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0.3rem 0.3rem;
}

h1 > div {
  display: flex;
  align-items: center;
}
h1 span.time {
  font-size: 0.2rem;
  font-weight: normal;
}

.cityEvent li > p {
  color: #eee;
  padding: 0rem 0.3rem 0.3rem;
}
.list h1 {
  padding: 0.1rem 0.3rem;
}
.cityEvent.list ul {
  pointer-events: auto;
  cursor: pointer;
}

.cityEvent li.active h1 {
  color: red;
}
.cityEvent li.active p {
  color: red;
}
</style>
