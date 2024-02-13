export function maybeShowApiKeyBanner(key, action = `enter it at the top of
<code>main.js</code>`) {
  if (key === 'TODO') {
    let banner = document.createElement('div');
    banner.className = 'api-key-banner';
    banner.innerHTML = `
      To get started with Gemini,
      <a href="https://makersuite.google.com/app/apikey" target="_blank">
      get an API key</a> (Ctrl+Click) and ${action}`;
    document.body.prepend(banner);
  }
}