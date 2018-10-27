<template>
  <router-link
    :to="{ name: 'sms_campaigns.details', params: { id: props.rowData.id }}"
    class="font-weight-bold text-overflow-elipsis animate"
  > {{ props.rowData.name }}
  </router-link>
</template>

<script>

export default {
  props: {
    props: { type: Object, default: () => ({}) },
  },
};
</script>
