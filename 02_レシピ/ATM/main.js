Vue.createApp({
  data() {
    return {
      delete: "",
      nyuryokugaku: 0,
      zandaka: 1000,

      logs: [],
    }
  },
  methods: {
    nyukin: function () {
      const now = new Date()
      const logMoney = this.nyuryokugaku
      this.zandaka += Number(this.nyuryokugaku)
      this.nyuryokugaku = ""
      this.logs.push({
        date: now,
        type: "入金",
        money: logMoney,
      })

      console.log(Number(this.nyuryokugaku))
    },
    shukkin: function () {
      const now = new Date()
      const logMoney = this.nyuryokugaku
      this.zandaka -= Number(this.nyuryokugaku)
      this.nyuryokugaku = ""
      this.logs.push({
        date: now,
        type: "出金",
        money: logMoney,
      })
    },
  },
}).mount("#shutunyuukin")
