<script lang="ts">
  import { Footer, FooterCopyright, Card } from 'flowbite-svelte';
  import { t } from '../../../locales/i18n';
</script>

<Card size="xl" class="sm:p-0 w-screen max-w-none bg-slate-950 mt-2">
  <Footer class="dark:bg-slate-950" footerType="logo">
    <FooterCopyright
      href="https://github.com/afgalvan"
      by="Andres Galvan."
      copyrightMessage={$t('footer.copyright')}
    />
  </Footer>
</Card>
