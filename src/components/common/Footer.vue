<template>
  <footer style="background-image: url('/imgs/bg-footer.jpg');">
    <div
      class="container flex sm:flex-row flex-col sm:items-start items-center sm:justify-around sm:text-start text-center">
      <div class="item">
        <strong class="title">
          {{ $t('title89') }}
        </strong>
        <div class="menu-uslugi-container">
          <div id="menu-uslugi" class="menu">
            <div v-for="item in service_items" :key="item.id" :id="item.id"
              class="menu-item menu-item-type-post_type menu-item-object-services" :class="item.id">
              <router-link class="duration-300" :to="item.url">{{ item.name }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <strong class="title">
          {{ $t('title90') }}
        </strong>
        <div class="menu-razdely-sajta-container">
          <div id="menu-razdely-sajta" class="menu">
            <div v-for="item in items" :key="item.id" :id="item.id"
              class="menu-item menu-item-type-post_type menu-item-object-page" :class="item.id">
              <router-link class="duration-300" :to="item.url">{{ item.title }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="item form-item">
        <strong class="title">
          {{ $t('title91') }}
        </strong>
        <div class="mailpoet_form_popup_overlay"></div>
        <div id="mailpoet_form_2"
          class="mailpoet_form mailpoet_form_widget mailpoet_form_position_ mailpoet_form_animation_">
          <form target="_self" method="post" action="" class="mailpoet_form mailpoet_form_form mailpoet_form_widget"
            novalidate data-delay="" data-exit-intent-enabled="" data-font-family="" data-cookie-expiration-time="">
            <input type="hidden" name="data[form_id]" value="2" />
            <input type="hidden" name="token" value="e0c3888003" />
            <input type="hidden" name="api_version" value="v1" />
            <input type="hidden" name="endpoint" value="subscribers" />
            <input type="hidden" name="mailpoet_method" value="subscribe" />
            <label class="mailpoet_hp_email_label" style="display: none !important">
              {{ $t('title92') }}
              <input type="email" name="data[email]" /></label>
            <div class="mailpoet_paragraph">
              <span class="text">
                {{ $t('title93') }}
              </span>
            </div>
            <div class="mailpoet_paragraph">
              <label for="form_first_name_2" class="mailpoet-screen-reader-text"
                data-automation-id="form_first_name_label">{{ $t('title94') }} <span class="mailpoet_required">*</span></label><input
                type="text" autocomplete="given-name" class="mailpoet_text" id="form_first_name_2"
                name="data[form_field_NDQwZDM4YTc2Yzk5X2ZpcnN0X25hbWU=]" value=""
                data-automation-id="form_first_name" :placeholder="$t('title94')"
                data-parsley-names='["\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0435 \u0438\u043c\u044f.","\u0410\u0434\u0440\u0435\u0441\u0430 \u0432 \u0438\u043c\u0435\u043d\u0430\u0445 \u043d\u0435 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f \u0432\u043c\u0435\u0441\u0442\u043e."]'
                data-parsley-required="true" data-parsley-errors-container=".mailpoet_error_first_name_"
                data-parsley-required-message="Это поле необходимо." />
            </div>
            <div class="mailpoet_paragraph">
              <label for="form_email_2" class="mailpoet-screen-reader-text" data-automation-id="form_email_label">Email
                <span class="mailpoet_required">*</span></label><input type="email" autocomplete="email"
                class="mailpoet_text" id="form_email_2" name="data[form_field_ZGRiZjM5ZWNhNTA4X2VtYWls]" title="Email"
                value="" data-automation-id="form_email" placeholder="Email *" data-parsley-required="true"
                data-parsley-minlength="6" data-parsley-maxlength="150"
                data-parsley-type-message="Значение должно быть верным адресом электронной почты."
                data-parsley-errors-container=".mailpoet_error_email_"
                data-parsley-required-message="Это поле необходимо." />
            </div>
            <div class="mailpoet_paragraph">
              <input type="submit" class="mailpoet_submit" value="Подписаться!"
                data-automation-id="subscribe-submit-button" style="border-color: transparent" /><span
                class="mailpoet_form_loading"><span class="mailpoet_bounce1"></span><span
                  class="mailpoet_bounce2"></span><span class="mailpoet_bounce3"></span></span>
            </div>
            <div class="mailpoet_message">
              <p class="mailpoet_validate_success" style="display: none">
                {{ $t('title95') }}
              </p>
              <p class="mailpoet_validate_error" style="display: none"></p>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class=" inline-block my-2 text-center" style="color: white; margin-left: 6%">
          <a class="" href="" target="_ blank" style="color: #ca313a">
            {{ $t('title96') }}
          </a>
          {{ $t('title97') }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import navData from '@/data/nav-items.js'
import serviceData from '@/data/service-items.js'
export default {
  name: 'Footer',
  created() {
    this.items = navData[this.$i18n.locale]
    this.service_items = serviceData[this.$i18n.locale]
  },
  data() {
    return {
      items: null,
      service_items: null
    }
  }
};
</script>