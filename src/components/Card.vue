<template>

    <div class="card w-100" style="width: 18rem;">
        <img class="card-img-top" :src="item.image" alt="Card image cap">
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the
                card's content.</p>
        </div>
    </div>
    <!--&lt;!&ndash;<div @click="isClickable ? onCardClick(item, type) : ''"&ndash;&gt;-->
    <!--&lt;!&ndash;class="card w-100 d-flex"&ndash;&gt;-->
    <!--&lt;!&ndash;:class="[{'cursor-pointer': isClickable}, type === 'Tasks::OnboardingTask' ? 'onboarding' : type]"&ndash;&gt;-->
    <!--&lt;!&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;_task_card.html.slim&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="loader d-flex justify-content-center align-items-center" v-if="item.loading">&ndash;&gt;-->
    <!--&lt;!&ndash;<spinner :size="50"></spinner>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="card-header bg-active" v-cardHeader="type"></div>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="card-body">&ndash;&gt;-->

    <!--&lt;!&ndash;<div class="card-title">&ndash;&gt;-->
    <!--&lt;!&ndash;<span>&ndash;&gt;-->
    <!--&lt;!&ndash;<div v-if="item.attachment" class="nc-icon icon-vm icon-sm nc-clip"></div>&ndash;&gt;-->
    <!--&lt;!&ndash;<img v-if="item.image" :src="item.image" alt="Icon"/>&ndash;&gt;-->
    <!--&lt;!&ndash;<span v-if="!item.title && type === 'FollowUpTask'">Follow Up</span>&ndash;&gt;-->
    <!--&lt;!&ndash;<span>{{item.title}}</span>&ndash;&gt;-->

    <!--&lt;!&ndash;</span>&ndash;&gt;-->
    <!--&lt;!&ndash;<div v-if="onActionsButtonClick" @click="onActionsButtonClick(item, type)" class="cursor-pointer">&ndash;&gt;-->
    <!--&lt;!&ndash;<span class="nc-icon icon-md nc-ellipsis-v"></span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;<p class="card-text grow-1">&ndash;&gt;-->
    <!--&lt;!&ndash;{{item.instructions}}&ndash;&gt;-->
    <!--&lt;!&ndash;</p>&ndash;&gt;-->
    <!--&lt;!&ndash;<div class="d-flex justify-content-between align-items-center task-card-footer">&ndash;&gt;-->

    <!--&lt;!&ndash;<div v-if="item.driver_applicant">&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;<creds&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;:photo="item.driver_applicant.profile_photo_path"&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;:fName="item.driver_applicant.first_name"&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;:lName="item.driver_applicant.last_name"&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;&gt;</creds>&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->

    <!--&lt;!&ndash;<div v-if="type === 'report'" class="overflow-ellipsis">&ndash;&gt;-->
    <!--&lt;!&ndash;<span class="text-muted">Last viewed:</span> {{lastViewed}}&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;<creds v-if="item.viewer"&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;class="pl-1"&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;:photo="item.viewer.profile_photo_path"&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;:fName="item.viewer.first_name"&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;:lName="item.viewer.last_name"&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;size="small"&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;&lt;!&ndash;&gt;</creds>&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->

    <!--&lt;!&ndash;<div v-if="item.due_datetime && item.status !== 'completed'"&ndash;&gt;-->
    <!--&lt;!&ndash;:class="passDue ? 'color-grey' : 'color-accent-3'"&ndash;&gt;-->
    <!--&lt;!&ndash;class="pull-right"&ndash;&gt;-->
    <!--&lt;!&ndash;&gt;&ndash;&gt;-->
    <!--&lt;!&ndash;<span> {{ item.due_datetime | moment('calendar', null, {&ndash;&gt;-->
    <!--&lt;!&ndash;sameDay: '[Today]',&ndash;&gt;-->
    <!--&lt;!&ndash;nextDay: '[Tomorrow]',&ndash;&gt;-->
    <!--&lt;!&ndash;nextWeek: 'dddd',&ndash;&gt;-->
    <!--&lt;!&ndash;lastDay: '[Yesterday]',&ndash;&gt;-->
    <!--&lt;!&ndash;lastWeek: '[Last] dddd',&ndash;&gt;-->
    <!--&lt;!&ndash;sameElse: 'MM/DD/YYYY'&ndash;&gt;-->
    <!--&lt;!&ndash;})}}</span>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--</div>-->
</template>

<script>
    // import Creds from './userNameAndAvatar.vue'
    export default {
        name: 'card',
        props: {
            item: {type: Object}
        },
        data() {
            return {};
        },
        computed: {
            passDue() {
                return this.$moment() < this.$moment(this.item.due_datetime)
            },
            lastViewed() {
                return this.item.viewer ? `${this.$moment(this.item.last_viewed_at).format("MMM d, YYYY")} by` : 'N/A';
            }
        },
        directives: {
            cardHeader: {
                inserted(el, binding, vnode) {
                    let color = '#4db78a';
                    switch (binding.value) {
                        case  'Tasks::OnboardingTask':
                            color = '#69ade6';
                            break;
                        case  'report':
                            color = 'white';
                            break;
                    }
                    el.style.backgroundColor = color;
                }
            }
        },
        components: {
            // Creds,
        }
    };
</script>

<style scoped type="scss" lang="scss">
    .card {
        height: 100%;
        opacity: .85;
        transition: all .2s cubic-bezier(.57,.39,.43,.95),
        height .3s cubic-bezier(0, .93, .91, 1),
        opacity .3s cubic-bezier(0, .93, .91, 1);
        z-index: 1;
        img {
            overflow: hidden;
            height: auto;
            max-width: 500px;
        }
        &:hover {
            transform: scale(1.01);
            height: 150%;
            opacity: 1;
            /*transition: height 2s ease-in;*/
            z-index: 2;
            -webkit-box-shadow: 0px 0px 40px 0px rgba(133, 133, 133, 1);
            -moz-box-shadow: 0px 0px 40px 0px rgba(133, 133, 133, 1);
            box-shadow: 0px 0px 40px 0px rgba(133, 133, 133, 1);
            transition: all .2s cubic-bezier(.57,.39,.43,.95), z-index .3s cubic-bezier(0, .93, .91, 1),
            height .3s cubic-bezier(0, .93, .91, 1);
        }
        /*height: 300px;*/
        /*margin: 16px 0;*/
        /*.card-body {*/
        /*background: white;*/
        /*p {*/
        /*max-height: 110px;*/
        /*overflow: hidden;*/
        /*}*/
        /*}*/
        /*&:hover {*/
        /*box-shadow: 0 2px 14px 0 rgba(0, 0, 0, 0.05);*/
        /*}*/
        /*}*/
        /*.card.onboarding {*/
        /*min-height: 0;*/
        /*.card-body {*/
        /*!*background: white url(~images/BlueLogo@3x.png) no-repeat -35px -10px;-->*!*/
        /*}*/
    }

    .loader {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(210, 215, 219, 0.2);
        z-index: 10;
    }
</style>