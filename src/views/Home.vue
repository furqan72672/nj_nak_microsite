<template>
  <div class="my-16">
    <Header/>
    <EarnedReviews/>
    <LeaveReview/>
    <Reviews/>
    <GetConnected/>
    <BusinessOwner/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import EarnedReviews from '../components/EarnedReviews';
import LeaveReview from '../components/LeaveReview';
import Reviews from '../components/Reviews';
import GetConnected from '../components/GetConnected';
import BusinessOwner from '../components/BusinessOwner';

export default {
  name: 'Home',

  components: {
    Header,
    EarnedReviews,
    LeaveReview,
    Reviews,
    GetConnected,
    BusinessOwner,
  },
};
</script>
