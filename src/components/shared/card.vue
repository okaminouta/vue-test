<template>
  <div
    class="card w-100"
    :class="[{'cursor-pointer': isClickable}, type === 'Tasks::OnboardingTask' ? 'onboarding' : type]"
    @click="isClickable ? onCardClick(item, type) : ''"
  >
    <div
      v-if="item.loading"
      class="loader d-flex justify-content-center align-items-center"
    >
      <spinner :size="50" />
    </div>
    <div
      v-cardHeader="type"
      class="card-header bg-active"
    />
    <div class="card-body">

      <div class="card-title">
        <span>
          <div
            v-if="item.attachment"
            class="nc-icon icon-vm icon-sm nc-clip"
          />
          <img
            v-if="item.image"
            :src="item.image"
            alt="Icon"
          >
          <span v-if="!item.title && type === 'FollowUpTask'">Follow Up</span>
          <span>{{ item.title }}</span>

        </span>
        <div
          v-if="onActionsButtonClick"
          class="cursor-pointer"
          @click="onActionsButtonClick(item, type)"
        >
          <span class="nc-icon icon-md nc-ellipsis-v" />
        </div>
      </div>
      <p class="card-text grow-1">
        {{ item.instructions }}
      </p>
      <div class="d-flex justify-content-between align-items-center task-card-footer">

        <div v-if="item.driver_applicant">
          <creds
            :photo="item.driver_applicant.profile_photo_path"
            :f-name="item.driver_applicant.first_name"
            :l-name="item.driver_applicant.last_name"
          />
        </div>

        <div
          v-if="type === 'report'"
          class="overflow-ellipsis"
        >
          <span class="text-muted">Last viewed:</span> {{ lastViewed }}
          <creds
            v-if="item.viewer"
            class="pl-1"
            :photo="item.viewer.profile_photo_path"
            :f-name="item.viewer.first_name"
            :l-name="item.viewer.last_name"
            size="small"
          />
        </div>

        <div
          v-if="item.due_datetime && item.status !== 'completed'"
          :class="passDue ? 'color-grey' : 'color-accent-3'"
          class="pull-right"
        >
          <span> {{ item.due_datetime | moment('calendar', null, {
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            nextWeek: 'dddd',
            lastDay: '[Yesterday]',
            lastWeek: '[Last] dddd',
            sameElse: 'MM/DD/YYYY'
          }) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Creds from "./userNameAndAvatar.vue";

export default {
  name: "Card",
  directives: {
    cardHeader: {
      inserted(el, binding) {
        let color;
        switch (binding.value) {
        case "Tasks::OnboardingTask":
          color = "#69ade6";
          break;
        case "report":
          color = "white";
          break;
        default:
          color = "#4db78a";
        }
        el.style.backgroundColor = color;
      },
    },
  },
  components: {
    Creds,
  },
  props: {
    item: { type: Object, required: true },
    type: { type: String, required: true },
    isClickable: { type: Boolean, default: false },
    onActionsButtonClick: { type: Function, default: null },
    onCardClick: { type: Function, default: () => {} },
  },
  data() {
    return {};
  },
  computed: {
    passDue() {
      return this.$moment() < this.$moment(this.item.due_datetime);
    },
    lastViewed() {
      return this.item.viewer ? `${this.$moment(this.item.last_viewed_at).format("MMM d, YYYY")} by` : "N/A";
    },
  },
};
</script>

<style scoped type="scss" lang="scss">
  .card {
    margin: 16px 0;
    .card-body {
      background: white;
      p {
        max-height: 110px;
        overflow: hidden;
      }
    }
    &:hover {
      box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);

    }
  }

  .card.onboarding {
    min-height: 0;
    .card-body {
      background: white url(~images/BlueLogo@3x.png) no-repeat -35px -10px;
    }
  }

  .loader {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(210, 215, 219, 0.2);
    z-index: 10;
  }
</style>
