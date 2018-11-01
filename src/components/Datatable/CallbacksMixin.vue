<script>

export default {
  methods: {
    status(cell) {
      return `<p class="w-75 status-slot status-slot-${cell.class} text-center">${cell.value}</p> `;
    },
    time(value) {
      return this.$moment(value).format("MMM Do, YYYY");
    },
    percent(val) {
      let { value } = val;

      if (!isNaN(parseFloat(value)) && isFinite(value)) value = `${Math.round(value)}%`;

      return `<span class="${val.color}-font">${value}</span>`;
    },
    dash(val) {
      return val || "-";
    },
    booleanPositive(val) {
      return val ? "<span class=\"green-font\">Yes</span>" : "<span>-</span>";
    },
    booleanNegative(val) {
      return val ? "<span class=\"red-font\">Yes</span>" : "<span>-</span>";
    },
    highlightVal(val) {
      return val > 0 ? `<span class="green-font">${val}</span>` : `<span class="red-font">${val}</span>`;
    },
    phone(phone) {
      return `(${phone.substr(0, 3)}) ${phone.substr(3, 3)}-${phone.substr(6, 4)}`;
    },
    desc(val) {
      return `<p class="description">${val}</p>`;
    },
  },
};
</script>

<style type="scss" lang="scss">
  /*@import "~main.scss";*/

  .status-slot {
    border-radius: 100px;
    margin: 0;
    color: white;
    font-weight: 600;
    padding: 2px;
    font-size: 13px;
  }

  .status-slot-green {
    background: #00b58b;
  }
  .status-slot-red {
    background: #e66662;
  }
</style>
