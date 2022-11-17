<template>
  <div>
    <h1 class="font-semibold">Impressum</h1>

    <h2 class="font-semibold">Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
    <p>Dimitri Pfaffenrodt<br />
      Spitzwegring 11<br />
      35396 Gießen</p>

    <h2 class="font-semibold">Kontakt</h2>
    <p>
      Telefon: <phone-link-button :show-icon="false" class=""></phone-link-button><br />
      E-Mail: <mail-link-button :show-icon="false" class=""></mail-link-button><br />
    </p>

    <h2 class="font-semibold">Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
    <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

    <p>Quelle: <a href="https://www.e-recht24.de">eRecht24</a></p>
  </div>
</template>


<script>
import PhoneLinkButton from "./PhoneLinkButton.vue";
import MailLinkButton from "./MailLinkButton.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    MailLinkButton,
    PhoneLinkButton,
  }
});
</script>
