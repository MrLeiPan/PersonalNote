<template>
  <div id="calendar-item">
    <div id="calendarLeft">
      <div id="calendarYMD">
        2022/3/4
      </div>
      <div id="calendarTime">
        15:12
      </div>
    </div>
    <div id="calendarRight">
      <span id="week-hint">周</span>
      <span id="weekDay">日</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calendar"
}
</script>

<style lang="less">
  #calendar-item{
    height: 100px;
    background-color: rgb(21, 114, 220);
    color: white;
    display: flex;
    #calendarLeft{
      padding: 10px 10px;
      #calendarYMD{
        font-size: 24px;
        height: 40px;
        line-height: 40px;

      }
      #calendarTime{
        font-size: 18px;
        height: 40px;
      }
    }
    #calendarRight{
      text-align: center;
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-top: 10px;
      #week-hint{
        font-size: 14px;
      }
      #weekDay{
        font-size: 28px;
      }
    }
  }
</style>