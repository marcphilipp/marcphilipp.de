---
layout: ../../layouts/MarkdownLayout.astro
title: Contact
lang: en
activeNav: contact
alternates:
  en: /en/contact/
  de: /de/kontakt/
---

<p class="lead">Let's talk!</p>

<img class="img-circle pull-right" src="/img/avatar.jpg" alt="Marc Philipp" width="140" height="140" />

If you're interested in [working with me](/en/services/), just send me an email — a few lines are enough.

Useful things to mention:

- what your project involves
- what kind of support you're looking for
- your rough timeline

I am happy to follow up with a meeting to discuss your project.

You'll usually hear back from me within 1-2 business days. Inquiries are welcome in English or German.

<div class="contact-actions">
  <a class="btn btn-success btn-lg email" href="mailto:&#x63;&#x6F;&#x6E;&#x74;&#x61;&#x63;&#x74;&#x40;&#x6D;&#x61;&#x72;&#x63;&#x70;&#x68;&#x69;&#x6C;&#x69;&#x70;&#x70;&#x2E;&#x64;&#x65;">Email me</a>
  <button type="button" class="copy-email" data-copied="Copied!">Copy email address</button>
</div>

<script>
  const copyButton = document.querySelector('.copy-email');
  copyButton.addEventListener('click', async () => {
    const email = document.querySelector('a.email').href.replace('mailto:', '');
    await navigator.clipboard.writeText(email);
    const label = copyButton.textContent;
    copyButton.textContent = copyButton.dataset.copied;
    setTimeout(() => (copyButton.textContent = label), 2000);
  });
</script>
