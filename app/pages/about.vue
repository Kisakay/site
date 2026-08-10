<script setup lang="ts">
useSeoMeta({
  title: 'About — QxChat',
  description: 'Learn more about QxChat, the private self-hosted messaging platform.',
  ogType: 'website'
})
</script>

<template>
  <section class="page-hero container">
    <p class="eyebrow">About</p>
    <h1>A messaging platform you can trust.</h1>
    <p class="lead">
      QxChat is built on the belief that communication tools should be transparent,
      self-hosted, and free from centralized control.
    </p>
  </section>

  <section class="about-body container">
    <div class="prose">
      <h2>Why QxChat exists</h2>
      <p>
        You've seen what happened to Session. And let's not even start on Telegram.
      </p>
      <p>
        Session shut down. Telegram turned into a privacy sieve — defaults that leak metadata,
        encryption that's opt-in at best, and a business model that keeps drifting further from
        its original promises. Every platform that sold you anonymity and encryption is either
        gone or compromised.
      </p>
      <p>
        Nothing reliable has emerged. Nothing genuinely interesting has been born.
      </p>
      <p>
        <strong>So we built it.</strong>
      </p>
      <p>
        QxChat is no-logs by design. End-to-end encryption is handled entirely client-side —
        not on some server you have to trust, not behind a toggle you have to find. It's on by
        default, it's verifiable, and it's not going anywhere.
      </p>
      <p>
        And because we're fully open source, there's no room for hidden backdoors or vague
        promises. You can read the code, audit it, fork it, run it. That's the kind of
        transparency no closed platform will ever give you.
      </p>

      <h2>How it works</h2>
      <p>
        QxChat is built around a simple but powerful idea: <strong>you host the server, you own the keys.</strong>
      </p>
      <p>
        Every room you create generates its own encryption key, derived and verified entirely on your device.
        Messages are encrypted before they leave your client and decrypted only when they reach the recipient.
        The server sees nothing but ciphertext — it relays, it doesn't read.
      </p>
      <p>
        Voice and video calls run through your own TURN server, so media streams never touch infrastructure
        you don't control. Profiles, room memberships, message history — all of it lives on your machine
        and your server, nowhere else.
      </p>
      <p>
        No analytics. No telemetry. No cloud dependencies. Just a WebSocket connection between you and
        a server you trust — because it's yours.
      </p>

      <h2>The technology</h2>
      <p>
        QxChat is built on <strong>lqxp</strong>, an open Vue-based framework designed for real-time
        communication. The stack is straightforward and battle-tested:
      </p>
      <p>
        <strong>Vue 3</strong> powers the entire frontend — web, desktop, and mobile share the same
        codebase. <strong>Tauri</strong> wraps it into lightweight native apps for Windows, macOS, and
        Linux, with no Electron bloat. <strong>WebRTC</strong> handles voice, video, and screen sharing
        with peer-to-peer efficiency. The backend runs on <strong>Rust</strong>, keeping the server
        fast, safe, and absurdly light on resources.
      </p>
      <p>
        Every component is self-hostable. The API, the WebSocket layer, the TURN server — you pick
        where they run. There's no vendor lock-in, no proprietary service you can't replace.
      </p>

      <h2>Open source, always</h2>
      <p>
        QxChat is not "open core" with a premium tier hiding features behind a paywall. It's not
        "source available" with a license that restricts what you can actually do. It's fully open
        source — the entire stack, from the client to the server, under a license that gives you
        real freedom.
      </p>
      <p>
        This matters because trust isn't built on marketing pages. It's built on code you can
        inspect. Every security claim we make is verifiable by anyone with a text editor and
        the willingness to look. No NDAs, no sealed binaries, no "just trust us."
      </p>
      <p>
        Open source also means resilience. If we disappear tomorrow, the community can fork the
        project and keep going. Your conversations don't die with a company. That's the point.
      </p>

      <h2>Join the community</h2>
      <p>
        QxChat isn't just software — it's a bet on a different way to build communication tools.
        One where privacy isn't a feature checkbox, self-hosting isn't an afterthought, and the
        people using the product are the ones in control.
      </p>
      <p>
        Whether you're setting up a server for your team, contributing code, or just looking for
        a messenger that respects you — there's a place here. The project is young, the
        community is growing, and the direction is set by the people who show up.
      </p>
      <p>
        <strong>You don't need permission to join. You just need to care.</strong>
      </p>

      <div class="about-cta">
        <NuxtLink to="/download" class="btn btn--primary">Download QxChat</NuxtLink>
        <a href="https://github.com/lqxp/app" target="_blank" rel="noreferrer" class="btn btn--secondary">View on GitHub</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-hero {
  padding: 56px 0 40px;
}

.page-hero h1 {
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 14px;
  max-width: 700px;
}

.about-body {
  padding-bottom: 72px;
}

.prose {
  max-width: 720px;
}

.prose h2 {
  font-size: 1.45rem;
  margin-top: 52px;
  margin-bottom: 16px;
  color: var(--ink);
}

.prose h2:first-child {
  margin-top: 8px;
}

.prose p {
  color: var(--slate);
  font-size: 1.02rem;
  line-height: 1.75;
  margin-bottom: 18px;
}

.prose p strong {
  color: var(--ink);
}

.about-cta {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 48px;
}
</style>
