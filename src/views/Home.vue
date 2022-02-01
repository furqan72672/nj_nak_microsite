<template>
  <div class="my-16">
    <Header :company="company" :rating="rating"/>
    <EarnedReviews :company="company" :rating="rating"/>
    <LeaveReview :popup="leaveReviewPopup" :id="id" :company="company"/>
    <Reviews :company="company"/>
    <GetConnected :company="company"/>
    <BusinessOwner />
    <CheckIn :popup="checkInPopup" />
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
import {CompanyService} from "../services/companyService";
import {reactive} from "vue";

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
  async setup(){
    const service=new CompanyService()
    const persons=await service.getPersons();
    const _company=await service.getCompany(persons[0]._id)
    const company=reactive(_company[0])
    // console.log(company)
    const rating=reactive(await service.getRating(company._id))
    console.log(rating)
    return {company,rating}
  },
};
</script>
