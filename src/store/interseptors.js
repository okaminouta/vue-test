// import VueResource from "vue-resource";
import Vue from "vue";

// Vue.use(VueResource);

Vue.http.interceptors.push(request => {
  // request.params = {...request.params, client_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone};
  // return (res) => {
    // if (!res.ok) {
    //   const defaultMessages = {
    //     0: "Something went wrong",
    //     400: "Bad Request",
    //     401: "Unauthorized",
    //     403: "Forbidden",
    //     404: "Not Found",
    //     405: "Method Not Allowed",
    //     406: "Not Acceptable",
    //     407: "Proxy Authentication Required",
    //     408: "Request Timeout",
    //     500: "Internal Server Error",
    //     501: "Not Implemented",
    //     502: "Bad Gateway",
    //     503: "Service Unavailable",
    //     504: "Gateway Timeout",
    //     505: "HTTP Version Not Supported",
    //   };
    //   new FlashNotification().error(`${res.status} ${res.message || defaultMessages[res.status] || defaultMessages[0]}`);
    // }
  //   return res;
  // };
});

// export const TasksResource = Vue.resource("/frontend/tasks{/id}", {}, {
//   edit: { method: "PATCH", url: "/frontend/tasks{/id}" },
//   editSubTask: { method: "PATCH", url: "/frontend/tasks/{/id}/switch_subtask_state/{/subTaskId}" },
//   complete: { method: "PATCH", url: "/frontend/tasks/{/id}/complete" },
// });
// export const ReportResource = Vue.resource("/frontend/reports", {}, {
//   getStructure: { method: "GET", url: "/frontend/reports/{name}/settings{/id}" },
//   getSummary: { method: "GET", url: "/frontend/reports/{name}/total{/id}" },
// });
// export const ProgressBarResource = Vue.resource("/frontend/onboarding_setup_progress");
// export const WelcomeDialogResource = Vue.resource("/frontend/welcome_dialog");
// export const NotificationsResource = Vue.resource("/frontend/notifications{/id}", {}, {
//   readAll: { method: "DELETE", url: "/frontend/notifications/destroy_all" },
// });
// export const smsCampaignsResource = Vue.resource("/frontend/sms_campaigns{/id}", {}, {
//   sendSms: { method: "POST", url: "/frontend/sms_campaigns{/id}/send_messages" },
//   communications: { method: "GET", url: "/frontend/sms_campaigns{/id}/communications" },
//   completeSubscriber: { method: "DELETE", url: "/frontend/sms_campaigns{/id}/subscribers{/subId}" },
// });
