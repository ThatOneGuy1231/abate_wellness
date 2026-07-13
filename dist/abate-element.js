console.log('[abate-element] script executing');

class AbateElement extends HTMLElement {
  static get observedAttributes() {
    return ['abate-send'];
  }

  constructor() {
    super();
    this._queue = [];
    this._iframeReady = false;
  }

  connectedCallback() {
    console.log('[abate-element] connectedCallback, pre-queued:', this._queue.length);
    this.style.display = 'block';
    this.style.width = '100%';

    const mode = this.getAttribute('mode');
    const baseUrl = 'VERCEL_URL_HERE';

    this._iframe = document.createElement('iframe');
    this._iframe.src = baseUrl + (mode ? '?view=' + mode : '');
    this._iframe.style.cssText = 'width:100%;border:none;display:block;';
    this._iframe.height = 800;
    this.style.height = '800px';
    this.appendChild(this._iframe);

    this._onMsg = (e) => {
      if (e.source !== this._iframe.contentWindow) return;
      if (!e.data?.type) return;

      if (e.data.type === 'abate-resize') {
        const h = e.data.height + 40;
        this._iframe.height = h;
        this.style.height = h + 'px';
        return;
      }

      if (e.data.type === 'abate-ready') {
        console.log('[abate-element] iframe ready, flushing', this._queue.length, 'queued messages');
        this._flush();
        return;
      }

      this.dispatchEvent(new CustomEvent('abate', {
        detail: e.data,
        bubbles: false,
      }));
    };

    window.addEventListener('message', this._onMsg);

    // Fallback: flush queue after 3s even if abate-ready never arrives
    this._fallbackTimer = setTimeout(() => {
      if (!this._iframeReady) {
        console.log('[abate-element] fallback flush after 3s, queue:', this._queue.length);
        this._flush();
      }
    }, 3000);
  }

  _flush() {
    this._iframeReady = true;
    clearTimeout(this._fallbackTimer);
    this._queue.forEach(msg => this._iframe.contentWindow.postMessage(msg, '*'));
    this._queue = [];
  }

  disconnectedCallback() {
    clearTimeout(this._fallbackTimer);
    window.removeEventListener('message', this._onMsg);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('[abate-element] attributeChangedCallback', name, newVal?.slice(0, 60));
    if (name !== 'abate-send' || !newVal) return;
    try {
      const { _t, ...data } = JSON.parse(newVal);
      if (this._iframeReady) {
        this._iframe.contentWindow.postMessage(data, '*');
      } else {
        console.log('[abate-element] queuing message (iframe not ready yet):', data.type);
        this._queue.push(data);
      }
    } catch (e) {}
  }
}

customElements.define('abate-element', AbateElement);
