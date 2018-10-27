<template>
  <div
    :id="_uid"
    :class="componentClass"
  >
    <date-picker
      ref="calendar"
      v-model="dateTime"
      class="w-100"
      name="tasks_onboarding_task_due"
      :range="range"
      :clearable="clearable"
      :first-day-of-week="7"
      placeholder="..."
      :shortcuts="shortcuts"
      format="M/D/YYYY"
      :lang="lang"
    />
    <span
      v-if="error"
      class="help-block"
    >{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: "AppCalendar",
  props: {
    value: { type: [String, Array], required: false, default: null },
    range: { type: Boolean, required: false, default: false },
    required: { type: Boolean, required: false, default: false },
  },
  data() {
    return {
      after: "",
      before: "",
      mutableDateTime: this.value,
      dirty: false,
      focused: false,
      shortcuts: [
        {
          text: "previous 7 days",
          onClick: () => {
            this.dateTime = [this.$moment().subtract(7, "days"), this.$moment()];
          },
        }, {
          text: "previous 30 days",
          onClick: () => {
            this.dateTime = [this.$moment().subtract(30, "days"), this.$moment()];
          },
        },
      ],
    };
  },
  computed: {
    dateTime: {
      get() {
        return this.mutableDateTime || this.value;
      },
      set(val) {
        if (this.range) {
          const date = [new Date(val[0]), new Date(val[1])];
          this.mutableDateTime = [this.$moment(date[0]).format(), this.$moment(date[1]).format()];
//          this.$emit("dateSelected", this.mutableDateTime);
          this.$emit("input", this.mutableDateTime);
        } else {
          this.mutableDateTime = this.$moment(val).format();
//          this.$emit("dateSelected", this.mutableDateTime);
          this.$emit("input", this.mutableDateTime);
        }
      },
    },
    lang() {
      return {
        days: ["Su", "M", "T", "W", "Th", "F", "Sa"],
        months: [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December",
        ],
        pickers: ["next 7 days", "next 30 days", "previous 7 days", "previous 30 days"],
      };
    },
    clearable() {
      return this.type === "Tasks::OnboardingTask";
    },
    componentClass() {
      const classes = [];
      if (this.error) classes.push("has-error");
      return classes;
    },
    error() {
      let message = false;
      if (this.required
        && this.dirty
        && !this.focused
        && (!this.dateTime || this.dateTime.length === 0)) message = "Field is required";
      return message;
    },
  },
  mounted() {
    if (this.range) this.after = this.$moment();
    const elements = this.$refs.calendar.$el.getElementsByTagName("input");
    elements[0].addEventListener("focus", this.focusedListener);
    elements[0].addEventListener("blur", this.unFocusedListener);
  },
  methods: {
    focusedListener() {
      this.dirty = true;
      this.focused = true;
    },
    unFocusedListener() {
      this.focused = false;
    },
  },
};
</script>

<style type="scss" lang="scss">
  .mx-datepicker {
    width: 100%;
    svg {
      text {
        display: none;
      }
    }
    .mx-icon-next-year, .mx-icon-last-year {
      display: none;
    }
    .mx-icon-last-month, .mx-icon-next-month {
      padding: 0 10px;
    }
    .mx-current-month, .mx-current-year {
      text-transform: uppercase;
      font-weight: bold;
    }

    .mx-calendar-content {
      width: 266px;
    }

    .mx-panel-date th {
      color: #2d2d2d;
      font-size: 10px;
      opacity: 0.5;
    }
  }

  .mx-calendar {
    width: 290px;
    height: 310px;
    color: black;
    padding: 10px;
  }

  .mx-datepicker-range {
    .mx-datepicker-popup, .mx-range-wrapper {
      width: 580px;
    }
    .mx-current-year {
      display: inline-block;
      font-weight: 600;
    }
    .mx-shortcuts-wrapper {
    }
    text-align: center !important;
  }

  .mx-panel-date {
    width: 265px !important;
  }

  .mx-panel-date td {
    font-size: 15px;
    height: 37px;
    border-radius: 50% !important;

  }

  .mx-input {
    height: 40px;
    border-color: #e8e8e8;
    transition: all .15s ease-in-out;
    &::-ms-clear {
      display: none;
    }
    &:hover{
      border-color: #cbcbcb;
    }
    &:focus {
      border: 1px solid #455c70;
    }
  }
  .has-error {
    .mx-input {
      border-color: red;
    }
  }
</style>
