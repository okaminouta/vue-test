<template>
  <v-select
    ref="vSelect"
    v-model="selectValue"
    :options="selectOptions"
    :close-on-select="!multiple"
    :label="label"
    max-height="300px"
    :searchable="searchable"
    :placeholder="placeholder"
    :multiple="multiple"
    index="id"
  >
    <template
      slot="option"
      slot-scope="option"
    >
      <div class="nc-icon icon-vm icon-sm nc-check pull-right dropdown-item-icon"/>
      <span
        v-html="option.label"
      />
      <div v-if="loading">
        <spinner
          size="20"
          :line-size="4"
        />
      </div>
    </template>

    <template
      slot="selected-option"
      slot-scope="option"
    >
      <span
        v-html="option.label"
      />
    </template>
  </v-select>
</template>

<script>
export default {
  props: {
    options: { type: Array, required: true },
    selected: { type: [Array, String, Object], required: true, default: null },
    loading: { type: Boolean, required: false },
    label: { type: String, required: false, default: "label" },
    searchable: { type: Boolean, required: false, default: false },
    placeholder: { type: String, required: false, default: null },
    multiple: { type: Boolean, required: false, default: true },
  },
  data() {
    return {
      initialSelectedValue: this.multiple ? [].slice.call(this.selected) : this.selected,
    };
  },
  computed: {
    selectOptions() {
      if (this.loading) {
        return [{ label: "" }];
      }
      return this.options;
    },
    selectValue: {
      get() {
        return this.initialSelectedValue;
      },
      set(val) {
        if (!val) this.$refs.vSelect.mutableValue = this.options[0];
        this.$emit("selectedChange", val);
      },
    },
  },
  mounted() {
    if (!this.multiple && this.selected) {
      // This code resolves plugin bug with selected default value, that developer promises to fix soon
      this.initialSelectedValue = this.options[
        this.options.indexOf(this.options.find(el => this.selected.id === el.id))];
    }
  },
};
</script>

<style type="scss" lang="scss">
  /*select styles*/
  .invalid {
    .dropdown.open {
      border: none !important;
    }
  }

  .dropdown.open {
    border: 1px solid #455c70 !important;
    border-radius: 5px;
  }

  .v-select.single {
    .selected-tag {
      color: #000;
      font-weight: 100;
      left: 0;
      cursor: text;
    }
    .clear {
      display: none;
    }
  }

  .v-select {
    background: white;
    input {
      float: left;
      width: 80% !important;
      &::placeholder {
        color: #6c757d;
        font-size: 15px;
      }
    }
    .fade-enter-active {
      transition: opacity 0.0s;
    }
    .fade-leave-active {
      transition: opacity 0.0s;
    }
    .select-email {
      color: #878787;
      font-size: 10px;
    }
    .selected-tag {
      .select-email {
        display: none;
      }
    }

    .dropdown-menu {
      border-color: #e8e8e8 !important;
      overflow: auto !important;
      li {
        a {
          padding: 10px !important;
          color: black !important;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      .active {
        a {
          background: #cfe3f5 !important;
        }
        .dropdown-item-icon {
          color: #69ade6;
          display: block;
        }
      }
      .active.highlight {
        a {
          background: #cfe3f5 !important;
        }
      }

      .highlight {
        a {
          background: #f7f7f7 !important;
        }
      }
      .dropdown-item-icon {
        display: none;
      }
    }
    .dropdown-menu {
      &::-webkit-scrollbar {
        width: 5px;
      }

      &::-webkit-scrollbar-track {

      }

      &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        background-color: #969696;
      }
    }
    .dropdown-toggle {
      overflow: hidden;
      height: auto;
      min-height: 40px;
      border-color: #e8e8e8 !important;
      ul {
        margin-top: 5px;
      }
    }

  }

  .v-select .selected-tag {
    color: white;
    background: #455c70;
    border-color: white;
    border-radius: 20px;
    padding: 0 8px;
    font-weight: 600;
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .v-select .dropdown-menu {
    top: 110%;
  }

  .v-select .selected-tag .close {
    opacity: 1;
    font-size: 12px;
    position: relative;
    top: -1px;
    margin-left: 5px;
    color: inherit;
  }

  .v-select .open-indicator {
    margin-right: 20px;
  }

  .v-select.unsearchable {
    input {
      width: 1px !important;
    }
  }

  .required:not(.select) .control-wrapper:after {
    right: 10px;
  }
</style>
