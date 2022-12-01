<script lang="ts">
  /* Components */
  import H2 from "@/components/H2.svelte";
  import H3 from "@/components/H3.svelte";
  import Button from "@/components/Button.svelte";
  /* Const */
	import { CONTACT } from '@/const/sections/contact';

  /* Methods */
  // TODO: :GA
  const onClick = () => {}
</script>

<section id="contact" class="contact">
  <div class="contactTitleMain">
    <H3>{CONTACT.TITLE_SUB}</H3>
    <H2>{CONTACT.TITLE_MAIN}</H2>
  </div>
  <p class="contactDescription">{CONTACT.DESCRIPTION}</p>
  <p class="buttonLabel">{CONTACT.BUTTON_LABEL}</p>
  <div class="contactButton">
    <Button onClick={onClick} href={CONTACT.FORM_URL} >
      <span class="contactButtonText">{CONTACT.BUTTON_TEXT}</span>
    </Button>
  </div>
  <img src="icons/presentation.svg" alt="presentation" class="iconPresentation" />
  <img src="icons/contact.svg" alt="contact" class="iconContact" />
</section>

<style>
  .contact {
    width: 100%;
    padding: 100px 0 120px;
    text-align: center;
    background-color: rgba(241, 241, 241, 0.5);
    position: relative;
  }

  .contactTitleMain {
    line-height: 1.5;
  }

  .contactDescription {
    margin-top: 32px;
    font-size: 20px;
    line-height: 1.5;
    white-space: pre-wrap;
  }

  .contactButton {
    margin-top: 10px;
  }

  .contactButtonText{
    font-size: 20px;
  }

  .buttonLabel {
    margin-top: 44px;
    font-size: 20px;
  }

  .iconPresentation {
    position: absolute;
    height: 160px;
    top: 80px;
    left: 120px;
    z-index: -1;
  }

  .iconContact {
    position: absolute;
    width: 160px;
    bottom: 80px;
    right: 120px;
    z-index: -1;
  }

  @media screen and (max-width: 600px) {
    .contact {
      padding: 40px 20px;
    }

    .contactDescription {
      margin-top: 24px;
      font-size: 14px;
      text-align: left;
      white-space: normal;
    }

    .iconPresentation {
      height: 80px;
      top: 20px;
      left: 0;
    }

    .iconContact {
      height: 80px;
      top: 20px;
      right: 0;
    }

    .contactButtonText{
      font-size: 16px;
    }

    .buttonLabel {
      margin-top: 36px;
      font-size: 14px;
    }
  }
</style>