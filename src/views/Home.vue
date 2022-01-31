<template>
  <div class="my-16">
    <Header/>
    <EarnedReviews/>
    <LeaveReview :popup="leaveReviewPopup" :id="id"/>
    <Reviews/>
    <GetConnected/>
    <BusinessOwner/>
    <CheckIn :popup="checkInPopup"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import EarnedReviews from '../components/EarnedReviews';
import LeaveReview from '../components/LeaveReview';
import Reviews from '../components/Reviews';
import GetConnected from '../components/GetConnected';
import BusinessOwner from '../components/BusinessOwner';
import CheckIn from '../components/CheckIn';
// import {ref} from "vue";
// import router from "../router";

export default {
  name: 'Home',
  props:{
    leaveReviewPopup:{
      type:Boolean,
      default:false
    },
    checkInPopup:{
      type:Boolean,
      default:false
    },
    companyId:{
      type:String,
    },
    id:{
      type:String,
      default:""
    }
  },

  components: {
    Header,
    EarnedReviews,
    LeaveReview,
    Reviews,
    GetConnected,
    BusinessOwner,
    CheckIn
  },

  setup(props){

    // console.log(props.id)
    // const localId=ref("");
    // if(props.id){
    //   localId.value=route.query.id
    // }
  }
};
</script>
