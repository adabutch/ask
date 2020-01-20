<template>
  <div>
    <example-header
      :logo="{
        url:          `${ logoUrl }`,
        image:        `${ logoPath }`,
        imageAlt:     `${ logoDescription }`
      }"

      :logoHeadings="{
        topHeading:   `${ logoHeading }`,
        subHeading:   `${ logoSubHeading }`,
      }"

      :application="{
        name:         `${ appName }`,
        url:          `${ appDirectory }`
      }">
    </example-header>
  </div>
</template>



<script>
import exampleHeader  from '~/components/design-system/exampleHeader'
// import {
//     mapFields }       from 'vuex-map-fields'

export default {
  components: {exampleHeader},
  data() {
    return {
      logoUrl:          '#',
      logoPath:         'city-of-bloomington-logo.svg',
      logoDescription:  '',
      logoHeading:      'Bloomington.in.gov',
      logoSubHeading:   'John Hamilton, Mayor',

      appName:          'Ask The Mayor',
      appDirectory:     '/test',
    }
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
  header {
    position: fixed;
    top: 0;
    padding: 15px 20px !important;
    border-bottom: 1px solid $color-grey;

    ::v-deep a {
      &:first-of-type {
        img {
          @media (max-width: 575px) {
            width: 35px !important;
            height: 35px !important;
            margin: 0 !important;
          }
        }
      }
    }
  }

  @media (max-width: 575px) {
    header {
      ::v-deep div {

        a > :not(nav) {
        }
      }

      ::v-deep a {

        h1, h2 {
          display: none;
        }
      }
    }
  }

  @media (min-width: 576px) and (max-width: 767px) {
    header {
      ::v-deep a {
        &:first-of-type {

          img {
            width: 35px !important;
            height: 35px !important;
            margin: 0 !important;
          }
        }

        h1, h2 {
          display: none;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {

  }
</style>